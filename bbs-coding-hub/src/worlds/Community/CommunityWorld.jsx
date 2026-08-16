import { WorldShell } from '../../components/world/WorldShell';
import { members } from '../../data/members';
import { useUniverse } from '../../context/UniverseContext';

export function CommunityWorld() {
  const { activeObject, openObject, closeObject } = useUniverse();
  
  const activeMember = activeObject ? members.find(m => m.id === activeObject) : null;

  return (
    <WorldShell title="Community">
      <div className="relative min-h-full w-full overflow-hidden flex flex-col pb-24">
        
        <div className="absolute top-[20%] right-[10%] w-[80vw] h-[80vw] border border-antique-gold/10 rounded-full pointer-events-none opacity-50" />
        <div className="absolute top-[30%] right-[20%] w-[60vw] h-[60vw] border border-antique-gold/20 rounded-full pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto w-full p-8 md:p-16 relative z-10 flex-1 flex flex-col">
          <div className="mb-20 text-center md:text-left">
            <h1 className="font-garamond text-5xl md:text-7xl text-ivory mb-6 tracking-widest drop-shadow-lg">COMMUNITY</h1>
            <p className="font-sans text-antique-gold tracking-[0.3em] text-[10px] md:text-xs uppercase">More than code. Learning together. Building together.</p>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 relative w-full">
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block" style={{ filter: 'drop-shadow(0 0 5px rgba(166,124,66,0.3))' }}>
                <path d="M 10% 50% L 30% 30% L 50% 60% L 70% 40% L 90% 50%" stroke="rgba(166, 124, 66, 0.2)" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
              </svg>

              {members.map((member, index) => (
                <div 
                  key={member.id} 
                  className={`relative group cursor-pointer flex flex-col items-center z-10 animate-float`}
                  style={{ animationDelay: `${index * 0.5}s`, transform: `translateY(${index % 2 === 0 ? '0' : '40px'})` }}
                  onClick={() => openObject(member.id)}
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-antique-gold/30 group-hover:border-antique-gold/80 transition-all duration-500 mb-6 relative shadow-lg">
                    <div className="absolute inset-0 bg-space-dark/40 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale sepia-[0.3] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700 transform group-hover:scale-110" />
                  </div>
                  
                  <h3 className="font-garamond text-xl md:text-2xl text-ivory mb-2 text-center group-hover:text-antique-gold transition-colors duration-300">{member.name}</h3>
                  <p className="font-sans text-[8px] md:text-[9px] tracking-[0.2em] text-parchment/60 text-center uppercase">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`fixed inset-0 z-50 bg-space-dark/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center ${activeObject ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          {activeMember && (
            <div className="max-w-3xl w-full p-8 md:p-16 flex flex-col items-center text-center relative overflow-y-auto max-h-screen">
              <button 
                onClick={closeObject}
                className="absolute top-8 left-8 md:top-12 md:left-12 group flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] text-parchment hover:text-ivory transition-colors duration-300"
              >
                <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span>
                BACK
              </button>
              
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-antique-gold/50 mb-8 mt-16 md:mt-0 shadow-[0_0_30px_rgba(166,124,66,0.2)]">
                <img src={activeMember.image} alt={activeMember.name} className="w-full h-full object-cover" />
              </div>
              
              <h4 className="font-sans text-[10px] tracking-[0.3em] text-antique-gold mb-4">{activeMember.role}</h4>
              <h1 className="font-garamond text-5xl md:text-6xl text-ivory mb-8">{activeMember.name}</h1>
              
              <div className="w-12 h-px bg-antique-gold/40 mb-8" />
              
              <p className="font-sans text-sm md:text-base text-parchment/80 leading-loose max-w-xl mb-12">
                {activeMember.bio}
              </p>
              
              <div className="flex gap-8">
                <a href={activeMember.github} className="font-sans text-[10px] tracking-[0.2em] text-parchment/60 hover:text-antique-gold transition-colors duration-300">GITHUB</a>
                <a href={activeMember.linkedin} className="font-sans text-[10px] tracking-[0.2em] text-parchment/60 hover:text-antique-gold transition-colors duration-300">LINKEDIN</a>
              </div>
            </div>
          )}
        </div>

      </div>
    </WorldShell>
  );
}
