import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useUniverse } from '../../context/UniverseContext';
import { useTheme } from '../../context/ThemeContext';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export function CelestialWorld({ world }) {
  const meshRef = useRef();
  const atmosphereRef = useRef();
  const sihGlowRef = useRef();
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

    if (world.featured && atmosphereRef.current) {
      // Extremely subtle, slow breathing shimmer
      const breath = (Math.sin(state.clock.elapsedTime * 1.2) + 1) * 0.5;
      const baseOpacity = isLight ? 0.03 : 0.06;
      const peakOpacity = isLight ? 0.06 : 0.10;
      const hoverOpacity = isLight ? 0.14 : 0.20;

      const targetOpacity = hovered && !activeWorld
        ? hoverOpacity
        : isFocused
        ? (isLight ? 0.12 : 0.18)
        : isOtherFocused
        ? (isLight ? 0.01 : 0.02)
        : baseOpacity + (peakOpacity - baseOpacity) * breath;

      atmosphereRef.current.material.opacity = THREE.MathUtils.lerp(
        atmosphereRef.current.material.opacity,
        targetOpacity,
        0.08
      );
    }

    if (world.id === 'sih' && sihGlowRef.current) {
      // Orbiting light effect
      if (!sihGlowRef.current.userData.initialized) {
        sihGlowRef.current.rotation.x = 0.4; // Tilt the orbit slightly
        sihGlowRef.current.rotation.z = 0.2;
        sihGlowRef.current.userData.initialized = true;
      }
      sihGlowRef.current.rotation.y -= delta * 1.2; // Orbit speed
      sihGlowRef.current.visible = !isOtherFocused;
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

      {/* Featured subtle atmospheric rim glow */}
      {world.featured && (
        <mesh ref={atmosphereRef}>
          <sphereGeometry args={[0.518, 32, 32]} />
          <meshBasicMaterial
            color={world.color}
            transparent
            opacity={isLight ? 0.04 : 0.07}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* Active Event Orbiting Light for SIH */}
      {world.id === 'sih' && (
        <group ref={sihGlowRef}>
          {/* Faint orbital track */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.75, 0.755, 64]} />
            <meshBasicMaterial 
              color={isLight ? "#3A2215" : "#FFD700"} 
              transparent 
              opacity={isLight ? 0.3 : 0.2} 
              side={THREE.DoubleSide} 
            />
          </mesh>
          {/* The orbiting light core */}
          <mesh position={[0.75, 0, 0]}>
            <sphereGeometry args={[0.025, 16, 16]} />
            <meshBasicMaterial
              color={isLight ? "#1A0F09" : "#FFFF00"}
            />
          </mesh>
          {/* The glow around the orbiting light */}
          <mesh position={[0.75, 0, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial
              color={isLight ? "#3A2215" : "#FFD700"}
              transparent
              opacity={0.6}
              blending={isLight ? THREE.NormalBlending : THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        </group>
      )}

      {/* Visual planet mesh */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={world.color}
          emissive={world.color}
          emissiveIntensity={
            world.featured
              ? hovered && !activeWorld
                ? (isLight ? 0.18 : 0.28)
                : isFocused
                ? (isLight ? 0.15 : 0.22)
                : (isLight ? 0.02 : 0.07)
              : hovered && !activeWorld
              ? (isLight ? 0.15 : 0.3)
              : (isLight ? 0.0 : 0.05)
          }
          roughness={isLight ? 0.85 : (world.featured ? 0.65 : 0.7)}
          metalness={isLight ? 0.1 : (world.featured ? 0.25 : 0.3)}
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
          <div className={`font-sans text-xs font-medium tracking-widest whitespace-nowrap px-3 py-1.5 backdrop-blur-md rounded border ${
            world.featured 
              ? 'text-ivory bg-space-dark/70 border-antique-gold/40' 
              : 'text-parchment bg-space-dark/60 border-antique-gold/20'
          }`}>
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
