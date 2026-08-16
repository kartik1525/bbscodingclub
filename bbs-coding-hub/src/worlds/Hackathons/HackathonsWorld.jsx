import { WorldShell } from '../../components/world/WorldShell';
import { hackathons } from '../../data/hackathons';
import { useUniverse } from '../../context/UniverseContext';

export function HackathonsWorld() {
  const { activeObject, openObject, closeObject } = useUniverse();
  const activeHackathon = activeObject ? hackathons.find(h => h.id === activeObject) : null;

  return (
    <WorldShell title="Hackathons">
      <div className="relative min-h-full w-full overflow-hidden flex flex-col pb-24">
        
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] border-[2px] border-antique-gold/10 rounded-full pointer-events-none" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }} />
        <div className="absolute top-[60%] right-[5%] w-[50vw] h-[50vw] border-[1px] border-antique-gold/15 rounded-full pointer-events-none" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }} />

        <div className="max-w-7xl mx-auto w-full p-8 md:p-16 relative z-10 flex-1">
          <div className="mb-20 text-center md:text-left">
            <h1 className="font-garamond text-5xl md:text-7xl text-ivory mb-6 tracking-widest drop-shadow-lg">HACKATHONS</h1>
            <p className="font-sans text-antique-gold tracking-[0.3em] text-[10px] md:text-xs uppercase">Build. Compete. Solve real problems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {hackathons.map((hackathon, index) => (
              <div 
                key={hackathon.id} 
                className="group relative cursor-pointer border border-antique-gold/20 bg-space-dark/60 hover:bg-space-secondary/80 hover:border-antique-gold/50 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md animate-float hover:-translate-y-2 z-10"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => openObject(hackathon.id)}
              >
                <div className={`absolute top-0 right-0 px-4 py-2 text-[9px] tracking-[0.2em] font-bold ${hackathon.status === 'UPCOMING' ? 'bg-antique-gold/20 text-antique-gold' : 'bg-space-secondary/50 text-parchment/50'}`}>
                  {hackathon.status}
                </div>

                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <div className="font-sans text-[10px] tracking-[0.3em] text-parchment/50 mb-4">{hackathon.date}</div>
                  <h2 className="font-garamond text-3xl md:text-4xl text-ivory mb-3 group-hover:text-antique-gold transition-colors duration-500 leading-tight">{hackathon.name}</h2>
                  <div className="font-sans text-xs tracking-widest text-antique-gold/80 mb-10">{hackathon.theme}</div>
                  
                  <div className="mt-auto grid grid-cols-2 gap-6 border-t border-antique-gold/10 pt-8">
                    <div>
                      <div className="text-[8px] tracking-widest text-parchment/40 mb-2">TEAM</div>
                      <div className="text-[10px] tracking-wider text-ivory/80">{hackathon.teamSize}</div>
                    </div>
                    <div>
                      <div className="text-[8px] tracking-widest text-parchment/40 mb-2">ELIGIBILITY</div>
                      <div className="text-[10px] tracking-wider text-ivory/80">{hackathon.eligibility}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`fixed inset-0 z-50 bg-space-dark/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center ${activeObject ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24 pointer-events-none'}`}>
          {activeHackathon && (
            <div className="max-w-4xl w-full mx-auto p-8 md:p-16 h-full flex flex-col overflow-y-auto">
              <button 
                onClick={closeObject}
                className="self-start mb-12 group flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] text-parchment hover:text-ivory transition-colors duration-300"
              >
                <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span>
                BACK TO HACKATHONS
              </button>
              
              <div className="flex gap-4 items-center mb-6">
                <div className={`px-4 py-1.5 text-[9px] tracking-[0.2em] font-bold border ${activeHackathon.status === 'UPCOMING' ? 'border-antique-gold/50 text-antique-gold bg-antique-gold/10' : 'border-parchment/20 text-parchment/50 bg-space-secondary/30'}`}>
                  {activeHackathon.status}
                </div>
                <div className="h-px bg-antique-gold/30 flex-1 max-w-[100px]" />
              </div>
              
              <h1 className="font-garamond text-5xl md:text-7xl text-ivory mb-4 leading-tight">{activeHackathon.name}</h1>
              <h3 className="font-sans text-sm md:text-base tracking-[0.3em] text-antique-gold mb-12">{activeHackathon.theme}</h3>
              
              <div className="bg-space-secondary/20 border border-antique-gold/15 p-8 mb-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h4 className="font-sans text-[9px] tracking-[0.2em] text-parchment/50 mb-2">DATE</h4>
                  <p className="font-sans text-xs tracking-wider text-ivory">{activeHackathon.date}</p>
                </div>
                <div>
                  <h4 className="font-sans text-[9px] tracking-[0.2em] text-parchment/50 mb-2">TEAM SIZE</h4>
                  <p className="font-sans text-xs tracking-wider text-ivory">{activeHackathon.teamSize}</p>
                </div>
                <div className="col-span-2">
                  <h4 className="font-sans text-[9px] tracking-[0.2em] text-parchment/50 mb-2">ELIGIBILITY</h4>
                  <p className="font-sans text-xs tracking-wider text-ivory">{activeHackathon.eligibility}</p>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="font-garamond text-3xl text-ivory mb-6">Overview</h2>
                <p className="font-sans text-sm md:text-base text-parchment/80 leading-relaxed">
                  {activeHackathon.description}
                </p>
              </div>

              {activeHackathon.rules && activeHackathon.rules.length > 0 && (
                <div className="mb-16">
                  <h2 className="font-garamond text-3xl text-ivory mb-8">Rules & Guidelines</h2>
                  <ul className="space-y-6">
                    {activeHackathon.rules.map((rule, idx) => (
                      <li key={idx} className="flex gap-4 items-start font-sans text-sm text-parchment/80">
                        <span className="text-antique-gold mt-0.5">✦</span>
                        <span className="leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeHackathon.status === 'UPCOMING' && (
                <div className="mt-4 mb-20 border-t border-antique-gold/20 pt-12">
                  <button className="px-12 py-5 bg-antique-gold/10 border border-antique-gold/40 hover:bg-antique-gold/20 hover:border-antique-gold hover:text-ivory transition-all duration-300 font-sans text-[10px] tracking-[0.2em] text-ivory flex items-center justify-center w-full md:w-auto min-w-[250px]">
                    REGISTER TEAM
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </WorldShell>
  );
}
