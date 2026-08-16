import { useUniverse } from '../../context/UniverseContext';
import { WorldBackground } from './WorldBackground';

export function WorldShell({ title, children }) {
  const { exitWorld, isWorldOpen } = useUniverse();

  return (
    <div 
      className={`w-full h-full bg-space-dark/85 backdrop-blur-lg overflow-hidden flex flex-col transition-opacity duration-1000 relative ${isWorldOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      <WorldBackground variant={title.toLowerCase()} />
      
      <header className="w-full flex justify-between items-center p-6 md:px-12 md:py-8 border-b border-antique-gold/10 shrink-0 z-50 bg-space-dark/50 backdrop-blur-md relative">
        <div className="flex flex-col">
          <h1 className="font-sans text-[10px] tracking-[0.3em] text-antique-gold/70">
            <span className="hidden md:inline">BBS CODING CLUB / </span>
            <span className="text-ivory font-medium">{title.toUpperCase()}</span>
          </h1>
        </div>
        <button 
          onClick={exitWorld}
          className="group flex items-center gap-2 md:gap-3 font-sans text-[10px] tracking-[0.2em] text-parchment/70 hover:text-ivory transition-colors duration-300 cursor-pointer"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          <span className="hidden md:inline">RETURN TO UNIVERSE</span>
          <span className="md:hidden">UNIVERSE</span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto overflow-x-hidden relative z-10 w-full h-full scroll-smooth scrollbar-none">
        {children}
      </main>
    </div>
  );
}
