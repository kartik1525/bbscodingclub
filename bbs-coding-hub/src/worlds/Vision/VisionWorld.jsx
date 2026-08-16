import { useEffect, useRef } from 'react';
import { WorldShell } from '../../components/world/WorldShell';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function VisionWorld() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.vision-section');
      
      sections.forEach((section) => {
        const bg = section.querySelector('.bg-element');
        const text = section.querySelector('.text-element');
        
        gsap.fromTo(bg, 
          { opacity: 0, scale: 0.8 },
          { 
            opacity: 1, 
            scale: 1.2, 
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "center center",
              scrub: 1,
            }
          }
        );

        gsap.fromTo(text, 
          { opacity: 0, y: 100 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              toggleActions: "play reverse play reverse"
            }
          }
        );
      });
      
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const stages = [
    { title: "LEARN", text: "Master the fundamentals of computer science and modern technologies." },
    { title: "BUILD", text: "Transform ideas into functional prototypes and robust applications." },
    { title: "COMPETE", text: "Test your skills in hackathons and coding competitions." },
    { title: "COLLABORATE", text: "Work in teams, contribute to open source, and grow together." },
    { title: "IMPACT", text: "Build solutions that matter and leave a lasting mark on the world." }
  ];

  return (
    <WorldShell title="Our Vision">
      <div ref={containerRef} className="relative w-full text-center pb-24 overflow-x-hidden">
        
        <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(166,124,66,0.1)_0%,transparent_70%)] pointer-events-none" />
          <h1 className="font-garamond text-[clamp(2.5rem,12vw,6rem)] text-ivory mb-12 tracking-widest drop-shadow-2xl z-10">OUR VISION</h1>
          <p className="font-sans text-[clamp(1rem,4vw,1.875rem)] text-parchment/90 max-w-4xl leading-relaxed z-10 font-light">
            We want to build a community where students don't just learn technology.
            <br/><br/>
            They <span className="text-antique-gold font-medium italic">build</span> with it.
          </p>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
            <div className="w-px h-24 bg-gradient-to-b from-antique-gold to-transparent" />
          </div>
        </div>

        {stages.map((stage, i) => (
          <div key={i} className="vision-section min-h-[80vh] flex items-center justify-center p-8 relative">
            <div className="bg-element absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none">
              <div className="w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-antique-gold/5 blur-[120px]" />
            </div>
            
            <div className="text-element flex flex-col items-center z-10 opacity-0 translate-y-24">
              <h2 className="font-garamond text-[clamp(2rem,10vw,6rem)] text-antique-gold mb-8 tracking-[0.2em]">{stage.title}</h2>
              <p className="font-sans text-[clamp(1rem,4vw,1.5rem)] text-parchment/80 max-w-2xl leading-relaxed">{stage.text}</p>
            </div>
          </div>
        ))}

        <div className="vision-section min-h-screen flex flex-col items-center justify-center p-8 relative">
          <div className="bg-element absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none">
             <div className="w-[100vw] h-[100vw] rounded-full bg-ivory/5 blur-[150px]" />
          </div>
          <div className="text-element z-10 text-center opacity-0 flex flex-col items-center">
             <div className="w-px h-32 bg-gradient-to-b from-transparent to-antique-gold mx-auto mb-16" />
             <h2 className="font-garamond text-[clamp(2rem,8vw,4.5rem)] text-ivory tracking-[0.15em] leading-[1.3]">
               THE NEXT CHAPTER<br/>IS OURS TO WRITE.
             </h2>
             <div className="w-px h-32 bg-gradient-to-t from-transparent to-antique-gold mx-auto mt-16" />
          </div>
        </div>
        
      </div>
    </WorldShell>
  );
}
