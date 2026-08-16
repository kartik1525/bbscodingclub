import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Point, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { StarField } from '../universe/StarField';

function Starfield({ variant, reducedMotion }) {
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
      case 'vision':
        return { color: '#5A3825', count: 2000, speed: 0.05, fade: true, depth: 70 };
      default:
        return { color: '#A67C42', count: 3000, speed: 0.2, fade: true, depth: 50 };
    }
  }, [variant]);



  return (
    <group ref={groupRef}>
      <StarField count={1500} />
      
      {/* Variant specific geometry */}
      {variant === 'events' && (
        <>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[15, 15.02, 64]} />
            <meshBasicMaterial color="#A67C42" transparent opacity={0.1} side={THREE.DoubleSide} />
          </mesh>
          <mesh rotation={[Math.PI / 2.5, Math.PI / 6, 0]}>
            <ringGeometry args={[20, 20.02, 64]} />
            <meshBasicMaterial color="#F3E9D2" transparent opacity={0.05} side={THREE.DoubleSide} />
          </mesh>
        </>
      )}
      
      {variant === 'vision' && (
        <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
          <Points limit={500}>
            <PointMaterial transparent vertexColors size={0.5} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.4} />
            {Array.from({ length: 500 }).map((_, i) => (
              <Point
                key={i}
                position={[
                  (Math.random() - 0.5) * 40,
                  (Math.random() - 0.5) * 40,
                  (Math.random() - 0.5) * 40
                ]}
                color="#5A3825"
              />
            ))}
          </Points>
        </Float>
      )}
    </group>
  );
}

export function WorldBackground({ variant = 'default' }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-space-dark">
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 60 }} 
        dpr={[1, 2]} // Optimize pixel ratio
        gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#120f0c']} /> {/* space-dark #120f0c */}
        <ambientLight intensity={0.5} />
        <Starfield variant={variant} reducedMotion={reducedMotion} />
      </Canvas>
      {/* Fallback gradient overlay for blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-dark/20 via-transparent to-space-dark/80 pointer-events-none mix-blend-multiply" />
    </div>
  );
}
