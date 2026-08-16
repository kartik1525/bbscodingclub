import { WorldShell } from '../../components/world/WorldShell';
import { events } from '../../data/events';
import { useUniverse } from '../../context/UniverseContext';

export function EventsWorld() {
  const { activeObject, openObject, closeObject } = useUniverse();
  
  const activeEvent = activeObject ? events.find(e => e.id === activeObject) : null;

  return (
    <WorldShell title="Events">
      <div className="relative min-h-full w-full overflow-hidden flex flex-col pb-24">
        
        <div className="absolute top-[10%] left-1/4 w-[150vw] h-[150vw] border-[0.5px] border-antique-gold/10 rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute top-[10%] left-1/4 w-[100vw] h-[100vw] border-[0.5px] border-antique-gold/20 rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full p-8 md:p-16 relative z-10">
          <div className="mb-24">
            <h1 className="font-garamond text-5xl md:text-7xl text-ivory mb-6 tracking-widest drop-shadow-lg">EVENTS</h1>
            <p className="font-sans text-antique-gold tracking-[0.3em] text-[10px] md:text-xs uppercase">Where ideas become experiences.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center line for desktop, left line for mobile */}
            <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 w-px bg-gradient-to-b from-antique-gold/60 via-antique-gold/20 to-transparent md:-translate-x-1/2" />
            
            <div className="flex flex-col gap-16 md:gap-24 relative">
              {events.map((event, index) => {
                const isEven = index % 2 === 0;
                return (
                <div key={event.id} className={`relative group cursor-pointer flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start md:items-center pl-12 md:pl-0`} onClick={() => openObject(event.id)}>
                  
                  {/* Timeline dot */}
                  <div className="absolute top-2 md:top-1/2 left-[8px] md:left-1/2 w-[15px] h-[15px] rounded-full border border-antique-gold bg-space-dark shadow-[0_0_15px_rgba(166,124,66,0.4)] group-hover:bg-antique-gold transition-colors duration-500 -translate-x-1/2 md:-translate-y-1/2 z-10" />
                  
                  {/* Connecting line */}
                  <div className={`absolute top-[15px] md:top-1/2 left-[15px] md:left-1/2 w-8 md:w-16 h-px bg-antique-gold/30 group-hover:w-12 md:group-hover:w-20 transition-all duration-500 md:-translate-y-1/2 ${isEven ? 'md:-translate-x-full md:origin-right' : 'md:origin-left'}`} />
                  
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-24 md:text-right' : 'md:pl-24 text-left'}`}>
                    <h3 className={`font-sans text-[10px] tracking-widest text-antique-gold/70 mb-4 flex ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      {event.month} {event.year}
                    </h3>
                    <div className="bg-space-secondary/40 backdrop-blur-md border border-antique-gold/10 p-8 hover:border-antique-gold/40 hover:bg-space-secondary/60 transition-all duration-500 relative overflow-hidden shadow-lg group-hover:shadow-[0_0_30px_rgba(166,124,66,0.15)] group-hover:-translate-y-1">
                      <div className={`absolute top-0 w-1 h-full bg-antique-gold/0 group-hover:bg-antique-gold/50 transition-colors duration-500 ${isEven ? 'right-0' : 'left-0'}`} />
                      <div className={`font-sans text-[9px] md:text-[10px] tracking-[0.2em] text-parchment/60 mb-4 flex flex-wrap gap-4 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <span>{event.date}</span>
                        <span className="hidden md:inline">•</span>
                        <span className="text-antique-gold">{event.type}</span>
                      </div>
                      <h2 className="font-garamond text-3xl md:text-4xl text-ivory mb-2 group-hover:text-antique-gold transition-colors duration-500">{event.name}</h2>
                    </div>
                  </div>
                  
                </div>
              )})}
            </div>
          </div>
        </div>

        <div className={`fixed inset-0 z-50 bg-space-dark/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${activeObject ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24 pointer-events-none'}`}>
          {activeEvent && (
            <div className="max-w-4xl w-full mx-auto p-8 md:p-16 h-full flex flex-col overflow-y-auto">
              <button 
                onClick={closeObject}
                className="self-start mb-16 group flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] text-parchment hover:text-ivory transition-colors duration-300"
              >
                <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span>
                BACK TO EVENTS
              </button>
              
              <div className="flex gap-4 items-center mb-8">
                <div className="w-16 h-px bg-antique-gold/50" />
                <span className="font-sans text-[10px] tracking-[0.3em] text-antique-gold uppercase">{activeEvent.type}</span>
              </div>
              
              <h1 className="font-garamond text-5xl md:text-7xl text-ivory mb-12 leading-tight">{activeEvent.name}</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 border-y border-antique-gold/20 py-10">
                <div>
                  <h4 className="font-sans text-[9px] tracking-[0.2em] text-parchment/50 mb-3">DATE</h4>
                  <p className="font-sans text-xs tracking-wider text-parchment">{activeEvent.date}</p>
                </div>
                <div>
                  <h4 className="font-sans text-[9px] tracking-[0.2em] text-parchment/50 mb-3">LOCATION</h4>
                  <p className="font-sans text-xs tracking-wider text-parchment">{activeEvent.location}</p>
                </div>
                <div>
                  <h4 className="font-sans text-[9px] tracking-[0.2em] text-parchment/50 mb-3">STATUS</h4>
                  <p className="font-sans text-xs tracking-wider text-antique-gold">{activeEvent.status}</p>
                </div>
              </div>

              <div className="font-sans text-sm text-parchment/80 leading-loose max-w-2xl mb-20">
                <p className="mb-6">{activeEvent.description}</p>
                <p>More details and schedule will be released soon. Prepare your teams and get ready to build something amazing.</p>
              </div>

              <button className="self-start px-10 py-5 bg-antique-gold/10 border border-antique-gold/40 hover:bg-antique-gold/20 hover:border-antique-gold hover:text-ivory transition-all duration-300 font-sans text-[10px] tracking-[0.2em] text-parchment">
                REGISTER NOW
              </button>
            </div>
          )}
        </div>

      </div>
    </WorldShell>
  );
}
