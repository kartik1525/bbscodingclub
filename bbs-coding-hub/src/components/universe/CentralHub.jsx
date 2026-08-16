import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function CentralHub() {
  const ringRef1 = useRef();
  const ringRef2 = useRef();
  const ringRef3 = useRef();

  useFrame((state, delta) => {
    if (ringRef1.current) {
      ringRef1.current.rotation.x += delta * 0.08;
      ringRef1.current.rotation.y -= delta * 0.1;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y += delta * 0.15;
      ringRef2.current.rotation.z += delta * 0.05;
    }
    if (ringRef3.current) {
      ringRef3.current.rotation.x -= delta * 0.03;
      ringRef3.current.rotation.z -= delta * 0.08;
    }
  });

  return (
    <group>
      {/* Extremely subtle center point instead of a large globe/text */}
      <mesh>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshBasicMaterial color="#A67C42" transparent opacity={0.6} />
      </mesh>
      
      {/* Existing Orbital Rings */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[1.2, 0.008, 16, 100]} />
        <meshBasicMaterial color="#A67C42" transparent opacity={0.6} />
      </mesh>
      
      <mesh ref={ringRef2}>
        <torusGeometry args={[1.5, 0.004, 16, 100]} />
        <meshBasicMaterial color="#D8C7A5" transparent opacity={0.3} />
      </mesh>

      <mesh ref={ringRef3}>
        <torusGeometry args={[1.8, 0.012, 16, 100]} />
        <meshBasicMaterial color="#A67C42" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}
