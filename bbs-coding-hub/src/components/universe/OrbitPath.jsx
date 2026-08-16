import { Line } from '@react-three/drei';
import { useUniverse } from '../../context/UniverseContext';

export function OrbitPath({ world }) {
  const { activeWorld } = useUniverse();
  
  const isOtherFocused = activeWorld !== null && activeWorld !== world.id;
  const isFocused = activeWorld === world.id;
  
  const distance = Math.sqrt(world.position[0]**2 + world.position[2]**2);
  
  const points = [];
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    points.push([
      Math.cos(angle) * distance,
      0, // Flat on XZ plane for astronomical diagram look
      Math.sin(angle) * distance
    ]);
  }

  return (
    <Line
      points={points}
      color="#A67C42"
      lineWidth={1}
      transparent
      opacity={isFocused ? 0.3 : isOtherFocused ? 0.05 : 0.15}
    />
  );
}
