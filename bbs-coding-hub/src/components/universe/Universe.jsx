import { Canvas } from '@react-three/fiber';
import { useState, useEffect } from 'react';
import { StarField } from './StarField';
import { CentralHub } from './CentralHub';
import { CelestialWorld } from './CelestialWorld';
import { OrbitPath } from './OrbitPath';
import { UniverseCamera } from './UniverseCamera';
import { ChartAnnotations } from './ChartAnnotations';
import { worlds } from '../../data/worlds';
import { useTheme } from '../../context/ThemeContext';

export function Universe() {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const bgColor = theme === 'light' ? '#F5EFEB' : '#120F0C';

  return (
    <div className="absolute inset-0 bg-space-dark z-0 transition-colors duration-1000">
      <Canvas 
        camera={{ position: [0, 4, 12], fov: isMobile ? 70 : 45 }}
        dpr={[1, 2]} 
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={[bgColor]} />
        
        <ambientLight intensity={theme === 'light' ? 0.4 : 0.15} />
        <directionalLight position={[5, 10, 5]} intensity={0.6} color={theme === 'light' ? "#ffffff" : "#F3E9D2"} />
        <directionalLight position={[-5, -5, -5]} intensity={0.2} color="#A67C42" />

        <UniverseCamera />
        <StarField count={1500} />
        <CentralHub />
        
        {worlds.map(world => (
          <group key={world.id}>
            <OrbitPath world={world} />
            <CelestialWorld world={world} />
          </group>
        ))}
      </Canvas>
      
      <ChartAnnotations />
      <div className={`absolute inset-0 pointer-events-none transition-shadow duration-1000 ${theme === 'light' ? 'shadow-[inset_0_0_150px_rgba(245,239,235,1)]' : 'shadow-[inset_0_0_200px_rgba(18,15,12,0.9)]'}`} />
    </div>
  );
}
