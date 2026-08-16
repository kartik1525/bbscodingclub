import { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useUniverse } from '../../context/UniverseContext';
import { worlds } from '../../data/worlds';
import gsap from 'gsap';
import * as THREE from 'three';

export function UniverseCamera() {
  const { camera } = useThree();
  const { activeWorld } = useUniverse();
  
  const defaultPos = new THREE.Vector3(0, 4, 12);
  const defaultLookAt = new THREE.Vector3(0, 0, 0);
  
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Initial camera position
    camera.position.copy(defaultPos);
  }, []);

  useEffect(() => {
    if (activeWorld) {
      const world = worlds.find(w => w.id === activeWorld);
      if (world) {
        // Position camera in front and slightly above the selected world
        const dir = new THREE.Vector3(...world.position).normalize();
        const dist = 3.5; // distance from world
        
        const targetPos = new THREE.Vector3(
          world.position[0] + dir.x * dist,
          world.position[1] + 0.5,
          world.position[2] + dir.z * dist
        );

        const targetLookAt = new THREE.Vector3(...world.position);
        
        gsap.to(camera.position, {
          x: targetPos.x,
          y: targetPos.y,
          z: targetPos.z,
          duration: 1.5,
          ease: 'power3.inOut'
        });
        
        gsap.to(currentLookAt.current, {
          x: targetLookAt.x,
          y: targetLookAt.y,
          z: targetLookAt.z,
          duration: 1.5,
          ease: 'power3.inOut'
        });
      }
    } else {
      gsap.to(camera.position, {
        x: defaultPos.x,
        y: defaultPos.y,
        z: defaultPos.z,
        duration: 1.5,
        ease: 'power3.inOut'
      });
      
      gsap.to(currentLookAt.current, {
        x: defaultLookAt.x,
        y: defaultLookAt.y,
        z: defaultLookAt.z,
        duration: 1.5,
        ease: 'power3.inOut'
      });
    }
  }, [activeWorld, camera]);

  useFrame(() => {
    camera.lookAt(currentLookAt.current);
    
    if (!activeWorld) {
      // Gentle parallax mapped to defaultPos so it doesn't drift away entirely
      const targetX = defaultPos.x + mouse.current.x * 1.5;
      const targetY = defaultPos.y + mouse.current.y * 1.5;
      
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
    }
  });

  return null;
}
