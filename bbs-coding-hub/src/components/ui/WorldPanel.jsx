import { useUniverse } from '../../context/UniverseContext';
import { worlds } from '../../data/worlds';

export function WorldPanel() {
  const { activeWorld, isPanelOpen, returnToUniverse, enterWorld } = useUniverse();
  
  const world = activeWorld ? worlds.find(w => w.id === activeWorld) : null;

  return (
    <div 
      className={`absolute inset-0 pointer-events-none z-20 flex items-center justify-center md:justify-end p-6 md:p-24 transition-opacity duration-700 ease-in-out ${isPanelOpen && activeWorld ? 'opacity-100' : 'opacity-0'}`}
    >
      {world && (
        <div 
          className="pointer-events-auto w-full max-w-md bg-space-dark/80 backdrop-blur-xl border border-antique-gold/20 p-8 md:p-12 transform transition-transform duration-1000 ease-out flex flex-col" 
          style={{ transform: isPanelOpen ? 'translateX(0)' : 'translateX(40px)' }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-antique-gold/40"></div>
            <h2 className="font-sans text-[10px] tracking-[0.3em] text-antique-gold uppercase">
              WORLD INTRODUCTION
            </h2>
          </div>
          
          <h1 className="font-garamond text-4xl md:text-5xl text-ivory mb-6 tracking-wide drop-shadow-sm">
            {world.name}
          </h1>
          
          <p className="font-sans text-sm leading-relaxed text-parchment/90 mb-10">
            {world.description}
            <br/><br/>
            {world.introText || "Discover what this world has to offer and explore its constellation."}
          </p>
          
          <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-antique-gold/10">
            <button 
              onClick={() => enterWorld(world.id)}
              className="group relative flex items-center justify-between w-full p-4 bg-antique-gold/10 hover:bg-antique-gold/20 border border-antique-gold/30 hover:border-antique-gold/50 transition-all duration-300 cursor-pointer"
            >
              <span className="font-sans text-xs tracking-[0.2em] text-ivory">
                [ ENTER WORLD ]
              </span>
              <span className="font-sans text-xs text-antique-gold group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
            
            <button 
              onClick={returnToUniverse}
              className="group flex items-center justify-center gap-4 p-4 font-sans text-[10px] tracking-[0.2em] text-parchment/60 hover:text-ivory transition-colors duration-300 cursor-pointer"
            >
              <div className="w-4 h-px bg-parchment/30 group-hover:w-8 group-hover:bg-ivory transition-all duration-300"></div>
              RETURN TO UNIVERSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
