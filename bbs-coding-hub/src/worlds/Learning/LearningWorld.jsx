import { WorldShell } from '../../components/world/WorldShell';
import { learningPaths } from '../../data/learningPaths';
import { useUniverse } from '../../context/UniverseContext';

export function LearningWorld() {
  const { activeObject, openObject, closeObject } = useUniverse();
  const activePath = activeObject ? learningPaths.find(p => p.id === activeObject) : null;

  return (
    <WorldShell title="Learning">
      <div className="relative min-h-full w-full overflow-hidden flex flex-col pb-24">
        <div className="max-w-7xl mx-auto w-full p-8 md:p-16 relative z-10">
          <div className="mb-20">
            <h1 className="font-garamond text-5xl md:text-7xl text-ivory mb-6 tracking-widest drop-shadow-lg">LEARNING</h1>
            <p className="font-sans text-antique-gold tracking-[0.3em] text-[10px] md:text-xs uppercase">Choose a path. Build your skills. Find your direction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 relative">
            {learningPaths.map((path) => (
              <div 
                key={path.id} 
                className="group relative cursor-pointer p-8 md:p-12 border border-antique-gold/15 bg-space-dark/40 hover:bg-space-secondary/60 hover:border-antique-gold/40 transition-all duration-500 overflow-hidden shadow-lg"
                onClick={() => openObject(path.id)}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-antique-gold/0 group-hover:bg-antique-gold/50 transition-colors duration-500" />
                <h2 className="font-garamond text-3xl md:text-4xl text-ivory mb-4 group-hover:text-antique-gold transition-colors duration-500">{path.name}</h2>
                <p className="font-sans text-sm text-parchment/70 mb-10 leading-relaxed">{path.description}</p>
                
                <div className="flex flex-col md:flex-row md:flex-wrap items-center md:items-center gap-2 pb-2">
                  {path.nodes.map((node, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
                      <div className="font-sans text-[9px] md:text-[10px] tracking-[0.1em] text-antique-gold/80 px-4 py-2 md:px-3 md:py-1.5 border border-antique-gold/30 rounded bg-space-dark/80 group-hover:bg-space-dark hover:scale-105 hover:border-antique-gold transition-all duration-300 cursor-pointer shadow-none hover:shadow-[0_0_10px_rgba(166,124,66,0.2)] w-full md:w-auto text-center">
                        {node}
                      </div>
                      {i < path.nodes.length - 1 && (
                        <>
                          <span className="md:hidden text-antique-gold/30 text-[12px] my-1">↓</span>
                          <span className="hidden md:inline text-antique-gold/30 text-[8px]">→</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`fixed inset-0 z-50 bg-space-dark/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center ${activeObject ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24 pointer-events-none'}`}>
          {activePath && (
            <div className="max-w-4xl w-full mx-auto p-8 pt-32 md:p-16 md:pt-40 h-full flex flex-col overflow-y-auto scrollbar-none">
              <button 
                onClick={closeObject}
                className="self-start mb-16 group flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] text-parchment hover:text-ivory transition-colors duration-300"
              >
                <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span>
                BACK TO PATHS
              </button>
              
              <h1 className="font-garamond text-5xl md:text-6xl text-ivory mb-6 leading-tight">{activePath.name}</h1>
              <p className="font-sans text-base md:text-lg text-parchment/80 mb-16 max-w-2xl">{activePath.description}</p>
              
              <div className="flex flex-col gap-12 relative">
                <div className="absolute top-0 bottom-0 left-6 w-px bg-antique-gold/20 hidden md:block" />
                
                {activePath.nodes.map((node, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start relative z-10">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-antique-gold/50 flex items-center justify-center font-garamond text-xl text-antique-gold bg-space-dark shadow-[0_0_15px_rgba(166,124,66,0.2)]">
                      {i + 1}
                    </div>
                    
                    <div className="bg-space-secondary/30 p-8 border border-antique-gold/15 flex-1 hover:border-antique-gold/40 transition-colors duration-300 w-full">
                      <h3 className="font-garamond text-2xl md:text-3xl text-ivory mb-4">{node}</h3>
                      <p className="font-sans text-sm text-parchment/70 mb-8 leading-relaxed max-w-xl">
                        Resources, challenges, and roadmaps for {node} will be unlocked here. Prepare to deep-dive into the concepts and build real projects.
                      </p>
                      <button className="group font-sans text-[9px] tracking-[0.2em] text-antique-gold hover:text-ivory transition-colors duration-300 flex items-center gap-2">
                        EXPLORE RESOURCES <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </WorldShell>
  );
}
