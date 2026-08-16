import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Point, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { StarField } from '../universe/StarField';
import { useTheme } from '../../context/ThemeContext';
import { ChartAnnotations } from '../universe/ChartAnnotations';

function Starfield({ variant, reducedMotion, theme }) {
  const groupRef = useRef();
  
  // Configuration based on variant
  const config = useMemo(() => {
    switch (variant) {
      case 'community':
        return { color: '#F3E9D2', count: 3000, speed: 0.2, fade: true, depth: 50 };
      case 'learning':
        return { color: '#A67C42', count: 4000, speed: 0.1, fade: true, depth: 40 };
      case 'hackathons':
        return { color: '#F3E9D2', count: 5000, speed: 0.4, fade: false, depth: 60 };
      case 'events':
        return { color: '#A67C42', count: 3500, speed: 0.3, fade: true, depth: 50 };
      case 'about':
        return { color: '#5A3825', count: 2000, speed: 0.05, fade: true, depth: 70 };
      default:
        return { color: '#A67C42', count: 3000, speed: 0.2, fade: true, depth: 50 };
    }
  }, [variant]);

  const ringColor = theme === 'light' ? '#8E6534' : '#A67C42';
  const ringColorSecondary = theme === 'light' ? '#5A4A3A' : '#F3E9D2';
  const pointColor = theme === 'light' ? '#3A2215' : '#5A3825';

  return (
    <group ref={groupRef}>
      <StarField count={1500} />
      
      {/* Variant specific geometry */}
      {variant === 'events' && (
        <>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[15, 15.02, 64]} />
            <meshBasicMaterial color={ringColor} transparent opacity={0.1} side={THREE.DoubleSide} />
          </mesh>
          <mesh rotation={[Math.PI / 2.5, Math.PI / 6, 0]}>
            <ringGeometry args={[20, 20.02, 64]} />
            <meshBasicMaterial color={ringColorSecondary} transparent opacity={0.05} side={THREE.DoubleSide} />
          </mesh>
        </>
      )}
    </group>
  );
}

export function WorldBackground({ variant = 'default' }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const bgColor = theme === 'light' ? '#F5EFEB' : '#120f0c';

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-space-dark transition-colors duration-1000">
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 60 }} 
        dpr={[1, 2]} 
        gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={[bgColor]} />
        <ambientLight intensity={theme === 'light' ? 0.8 : 0.5} />
        <Starfield variant={variant} reducedMotion={reducedMotion} theme={theme} />
      </Canvas>
      <ChartAnnotations />
      {/* Fallback gradient overlay for blending */}
      <div className={`absolute inset-0 transition-colors duration-1000 pointer-events-none ${theme === 'light' ? 'bg-gradient-to-b from-[#F5EFEB]/20 via-transparent to-[#F5EFEB]/80 mix-blend-normal' : 'bg-gradient-to-b from-[#120F0C]/20 via-transparent to-[#120F0C]/80 mix-blend-multiply'}`} />
    </div>
  );
}
