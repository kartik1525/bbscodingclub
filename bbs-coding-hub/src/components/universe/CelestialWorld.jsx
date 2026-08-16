import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useUniverse } from '../../context/UniverseContext';
import { useTheme } from '../../context/ThemeContext';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export function CelestialWorld({ world }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { focusWorld, activeWorld, interactionLocked } = useUniverse();
  const { theme } = useTheme();

  const isFocused = activeWorld === world.id;
  const isOtherFocused = activeWorld !== null && !isFocused;
  const isLight = theme === 'light';

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      
      const targetScale = hovered && !activeWorld && !interactionLocked ? world.scale * 1.05 : world.scale;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const handleClick = (e) => {
    e.stopPropagation();
    focusWorld(world.id);
  };

  const handlePointerOver = (e) => {
    e.stopPropagation();
    if (!interactionLocked && !activeWorld) {
      setHovered(true);
      document.body.style.cursor = 'pointer';
    }
  };

  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'auto';
  };

  return (
    <group position={world.position}>
      {/* Invisible expanded hit area for mobile */}
      <mesh
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      {/* Visual planet mesh */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={world.color}
          emissive={world.color}
          emissiveIntensity={hovered && !activeWorld ? (isLight ? 0.15 : 0.3) : (isLight ? 0.0 : 0.05)}
          roughness={isLight ? 0.85 : 0.7}
          metalness={isLight ? 0.1 : 0.3}
          transparent
          opacity={isOtherFocused ? 0.15 : 1}
        />
      </mesh>
      
      <Html 
        center 
        position={[0, -0.9, 0]} 
        className="pointer-events-none transition-opacity duration-500 z-10"
        style={{ 
          opacity: (hovered && !activeWorld && !interactionLocked) || isFocused ? 1 : 0 
        }}
      >
        <div className="flex flex-col items-center select-none drop-shadow-md">
          <div className="font-sans text-xs font-medium tracking-widest text-parchment whitespace-nowrap px-3 py-1.5 bg-space-dark/60 backdrop-blur-md border border-antique-gold/20 rounded">
            {world.name}
          </div>
          <div 
            className="font-garamond text-base text-ivory mt-3 whitespace-nowrap opacity-90 transition-opacity duration-300"
            style={{ opacity: hovered && !activeWorld ? 1 : 0 }}
          >
            {world.description}
          </div>
        </div>
      </Html>
    </group>
  );
}
