import { Line } from '@react-three/drei';
import { useUniverse } from '../../context/UniverseContext';
import { useTheme } from '../../context/ThemeContext';

export function OrbitPath({ world }) {
  const { activeWorld } = useUniverse();
  const { theme } = useTheme();
  
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

  let baseOpacity = 0.15;
  if (theme === 'light') {
    if (world.id === 'events') baseOpacity = 0.45; // Primary / Inclined
    else if (world.id === 'learning') baseOpacity = 0.35; // Secondary inner
    else if (world.id === 'hackathons') baseOpacity = 0.25; // Mid
    else baseOpacity = 0.15; // Outer
  }

  const currentOpacity = isFocused ? (theme === 'light' ? 0.7 : 0.3) : isOtherFocused ? (theme === 'light' ? 0.1 : 0.05) : baseOpacity;
  const lineColor = theme === 'light' ? (world.id === 'events' ? '#5A3825' : '#8E6534') : '#A67C42';

  return (
    <Line
      points={points}
      color={lineColor}
      lineWidth={1}
      transparent
      opacity={currentOpacity}
    />
  );
}
