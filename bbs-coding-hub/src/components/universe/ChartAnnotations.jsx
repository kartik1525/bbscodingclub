import { useTheme } from '../../context/ThemeContext';
import { useState, useEffect } from 'react';

export function ChartAnnotations() {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (theme !== 'light' || isMobile) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden mix-blend-multiply opacity-50">
      
      {/* Top Left Compass marking */}
      <div className="absolute top-32 left-16 text-[#5A3825] font-sans text-[8px] tracking-[0.4em] flex flex-col items-center gap-2">
        <span>N 42°</span>
        <div className="w-px h-16 bg-[#5A3825]/30"></div>
      </div>

      {/* Large faint radial circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vw] border-[0.5px] border-[#5A3825]/10 rounded-full" />
      
      {/* Dashed outer orbit reference */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[98vw] h-[98vw] border-[0.5px] border-[#5A3825]/5 border-dashed rounded-full" />
      
      {/* Center crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vh] h-[30vh]">
        <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-[#5A3825]/10" />
        <div className="absolute top-0 left-1/2 w-[0.5px] h-full bg-[#5A3825]/10" />
      </div>

      {/* Decorative Degree markings */}
      <div className="absolute bottom-32 right-16 text-[#5A3825] font-sans text-[8px] tracking-[0.2em] text-right">
        <p className="mb-1 opacity-50">RA 04h 35m 55.2s</p>
        <p className="opacity-50">DEC +16° 30' 33"</p>
        <div className="w-8 h-px bg-[#5A3825]/30 ml-auto mt-3" />
      </div>

      {/* Left side axis */}
      <div className="absolute top-1/3 left-8 h-1/3 w-[0.5px] bg-gradient-to-b from-transparent via-[#5A3825]/20 to-transparent flex flex-col justify-between items-center py-4">
        <span className="text-[#5A3825] text-[7px] -rotate-90 block absolute -left-4 top-0 opacity-40">0°</span>
        <span className="text-[#5A3825] text-[7px] -rotate-90 block absolute -left-4 bottom-0 opacity-40">180°</span>
      </div>
    </div>
  );
}
