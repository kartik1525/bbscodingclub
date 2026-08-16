import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export function StarField({ count = 1500 }) {
  const groupRef = useRef();
  const { theme } = useTheme();
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Remove aggressive mobile reduction to restore density
  const activeCount = isMobile ? Math.floor(count * 0.8) : count;

  const generateStars = (tierCount, colorsArray) => {
    const positions = new Float32Array(tierCount * 3);
    const colors = new Float32Array(tierCount * 3);
    const color = new THREE.Color();

    for (let i = 0; i < tierCount; i++) {
      const r = 15 + Math.random() * 80;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      color.set(colorsArray[Math.floor(Math.random() * colorsArray.length)]);
      color.multiplyScalar(0.7 + Math.random() * 0.3); // slight variation

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
  };

  const tiers = useMemo(() => {
    const darkColors = ['#F3E9D2', '#D8C7A5', '#FFFFFF'];
    const lightColors = ['#2A1A10', '#4A2A1A', '#5A3825']; // Darker shades for better visibility
    const starColors = theme === 'light' ? lightColors : darkColors;

    return {
      faint: generateStars(Math.floor(activeCount * 0.7), starColors),
      medium: generateStars(Math.floor(activeCount * 0.25), starColors),
      accent: generateStars(Math.floor(activeCount * 0.05), starColors),
    };
  }, [activeCount, theme]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.015;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.005;
    }
  });

  const isLight = theme === 'light';

  return (
    <group ref={groupRef}>
      {/* Faint background stars */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={tiers.faint.positions.length / 3} array={tiers.faint.positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={tiers.faint.colors.length / 3} array={tiers.faint.colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={isMobile ? 0.12 : 0.10} vertexColors transparent opacity={isLight ? 0.5 : 0.6} sizeAttenuation depthWrite={false} blending={isLight ? THREE.NormalBlending : THREE.AdditiveBlending} />
      </points>

      {/* Medium stars */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={tiers.medium.positions.length / 3} array={tiers.medium.positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={tiers.medium.colors.length / 3} array={tiers.medium.colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={isMobile ? 0.18 : 0.14} vertexColors transparent opacity={isLight ? 0.7 : 0.8} sizeAttenuation depthWrite={false} blending={isLight ? THREE.NormalBlending : THREE.AdditiveBlending} />
      </points>

      {/* Accent stars */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={tiers.accent.positions.length / 3} array={tiers.accent.positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={tiers.accent.colors.length / 3} array={tiers.accent.colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={isMobile ? 0.25 : 0.20} vertexColors transparent opacity={isLight ? 1.0 : 1.0} sizeAttenuation depthWrite={false} blending={isLight ? THREE.NormalBlending : THREE.AdditiveBlending} />
      </points>
    </group>
  );
}
