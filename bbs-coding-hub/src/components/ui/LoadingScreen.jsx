import { useEffect, useState } from 'react';
import { useUniverse } from '../../context/UniverseContext';

export function LoadingScreen() {
  const { isLoading, setIsLoading } = useUniverse();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 20;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 600);
      }
      setProgress(Math.min(current, 100));
    }, 150);
    
    return () => clearInterval(interval);
  }, [setIsLoading]);

  if (!isLoading && progress === 100) {
      setTimeout(() => {
          document.getElementById('loading-container')?.remove();
      }, 1000);
  }

  return (
    <div 
      id="loading-container"
      className={`absolute inset-0 z-50 flex items-center justify-center bg-space-dark transition-opacity duration-1000 ease-in-out ${!isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="flex flex-col items-center">
        <h1 className="font-garamond text-xl md:text-2xl text-ivory tracking-[0.2em] mb-8">
          BBS CODING CLUB
        </h1>
        
        <div className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] text-antique-gold mb-4">
          INITIALIZING CONSTELLATION...
        </div>
        
        <div className="w-48 md:w-64 h-px bg-space-secondary relative overflow-hidden mb-4">
          <div 
            className="absolute top-0 left-0 h-full bg-antique-gold transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="font-sans text-[8px] md:text-[9px] tracking-[0.2em] text-parchment/50">
          {progress < 100 ? 'ESTABLISHING CONNECTION' : 'SYSTEM READY'}
        </div>
      </div>
    </div>
  );
}
