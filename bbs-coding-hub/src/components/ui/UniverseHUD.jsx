import { useUniverse } from '../../context/UniverseContext';
import { worlds } from '../../data/worlds';

export function UniverseHUD() {
  const { activeWorld, focusWorld } = useUniverse();

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 md:p-12">
      <div 
        className="flex flex-col transition-opacity duration-1000 ease-in-out" 
        style={{ opacity: activeWorld ? 0 : 1 }}
      >
        <h1 className="font-garamond text-xl md:text-2xl text-ivory tracking-[0.2em] font-medium">
          BBS CODING CLUB
        </h1>
        <p className="font-sans text-[8px] md:text-[9px] tracking-[0.3em] text-antique-gold mt-1 opacity-80">
          DIGITAL CONSTELLATION
        </p>
      </div>

      <div 
        className="flex flex-col transition-opacity duration-1000 ease-in-out" 
        style={{ opacity: activeWorld ? 0 : 1 }}
      >
        <div className="flex flex-wrap gap-4 md:gap-8 items-center">
          <span className="font-sans text-[9px] md:text-[10px] tracking-widest text-parchment/40">UNIVERSE</span>
          <div className="hidden md:block w-px h-3 bg-parchment/20"></div>
          {worlds.map(world => (
            <button 
              key={world.id}
              onClick={() => focusWorld(world.id)}
              className="pointer-events-auto font-sans text-[9px] md:text-[10px] tracking-[0.15em] text-parchment/70 hover:text-antique-gold transition-colors duration-300"
            >
              {world.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
