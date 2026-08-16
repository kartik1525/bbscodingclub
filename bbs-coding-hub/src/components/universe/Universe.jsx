import { Canvas } from '@react-three/fiber';
import { StarField } from './StarField';
import { CentralHub } from './CentralHub';
import { CelestialWorld } from './CelestialWorld';
import { OrbitPath } from './OrbitPath';
import { UniverseCamera } from './UniverseCamera';
import { worlds } from '../../data/worlds';
import { useUniverse } from '../../context/UniverseContext';

export function Universe() {
  return (
    <div className="absolute inset-0 bg-space-dark z-0">
      <Canvas 
        camera={{ position: [0, 4, 12], fov: 45 }}
        dpr={[1, 2]} 
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={['#120F0C']} />
        
        <ambientLight intensity={0.15} />
        <directionalLight position={[5, 10, 5]} intensity={0.6} color="#F3E9D2" />
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
      
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(18,15,12,0.9)]" />
    </div>
  );
}
