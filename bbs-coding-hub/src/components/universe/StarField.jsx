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

  // Generate static positions and both color palettes only when activeCount changes
  const starData = useMemo(() => {
    const generateTier = (tierCount) => {
      const positions = new Float32Array(tierCount * 3);
      const darkColors = new Float32Array(tierCount * 3);
      const lightColors = new Float32Array(tierCount * 3);
      
      const darkPalette = ['#F3E9D2', '#D8C7A5', '#FFFFFF'];
      const lightPalette = ['#2A1A10', '#4A2A1A', '#5A3825'];
      
      const dColor = new THREE.Color();
      const lColor = new THREE.Color();

      for (let i = 0; i < tierCount; i++) {
        // Shared random position
        const r = 15 + Math.random() * 80;
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);

        // Dark color setup
        dColor.set(darkPalette[Math.floor(Math.random() * darkPalette.length)]);
        dColor.multiplyScalar(0.7 + Math.random() * 0.3);
        darkColors[i * 3] = dColor.r;
        darkColors[i * 3 + 1] = dColor.g;
        darkColors[i * 3 + 2] = dColor.b;

        // Light color setup
        lColor.set(lightPalette[Math.floor(Math.random() * lightPalette.length)]);
        lColor.multiplyScalar(0.7 + Math.random() * 0.3);
        lightColors[i * 3] = lColor.r;
        lightColors[i * 3 + 1] = lColor.g;
        lightColors[i * 3 + 2] = lColor.b;
      }
      return { positions, darkColors, lightColors };
    };

    return {
      faint: generateTier(Math.floor(activeCount * 0.7)),
      medium: generateTier(Math.floor(activeCount * 0.25)),
      accent: generateTier(Math.floor(activeCount * 0.05)),
    };
  }, [activeCount]); // No longer depends on 'theme'

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.015;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.005;
    }
  });

  const isLight = theme === 'light';

  return (
    <group ref={groupRef} key={`starfield-${theme}`}>
      {/* Faint background stars */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={starData.faint.positions.length / 3} array={starData.faint.positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={starData.faint.darkColors.length / 3} array={isLight ? starData.faint.lightColors : starData.faint.darkColors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={isMobile ? 0.12 : 0.10} vertexColors transparent opacity={isLight ? 0.5 : 0.6} sizeAttenuation depthWrite={false} blending={isLight ? THREE.NormalBlending : THREE.AdditiveBlending} />
      </points>

      {/* Medium stars */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={starData.medium.positions.length / 3} array={starData.medium.positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={starData.medium.darkColors.length / 3} array={isLight ? starData.medium.lightColors : starData.medium.darkColors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={isMobile ? 0.18 : 0.14} vertexColors transparent opacity={isLight ? 0.7 : 0.8} sizeAttenuation depthWrite={false} blending={isLight ? THREE.NormalBlending : THREE.AdditiveBlending} />
      </points>

      {/* Accent stars */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={starData.accent.positions.length / 3} array={starData.accent.positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={starData.accent.darkColors.length / 3} array={isLight ? starData.accent.lightColors : starData.accent.darkColors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={isMobile ? 0.25 : 0.20} vertexColors transparent opacity={isLight ? 1.0 : 1.0} sizeAttenuation depthWrite={false} blending={isLight ? THREE.NormalBlending : THREE.AdditiveBlending} />
      </points>
    </group>
  );
}
