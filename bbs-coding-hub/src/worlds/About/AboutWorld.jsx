import { WorldShell } from '../../components/world/WorldShell';
import { useUniverse } from '../../context/UniverseContext';
import { useNavigate } from 'react-router-dom';

export function AboutWorld() {
  const { returnToUniverse } = useUniverse();
  const navigate = useNavigate();

  return (
    <WorldShell title="About">
      <div className="relative min-h-full w-full overflow-hidden flex flex-col pb-16">
        
        {/* Background decorative circles */}
        <div className="absolute top-[5%] left-1/2 w-[150vw] h-[150vw] border-[0.5px] border-antique-gold/5 rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute top-[5%] left-1/2 w-[100vw] h-[100vw] border-[0.5px] border-antique-gold/10 rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-4xl mx-auto w-full p-8 md:p-12 relative z-10 flex flex-col gap-24 md:gap-32 pt-24 md:pt-32">
           
           {/* Section 1: WHO WE ARE */}
           <section>
             <h1 className="font-garamond text-5xl md:text-7xl text-ivory mb-8 tracking-widest drop-shadow-lg">WHO WE ARE</h1>
             <p className="font-sans text-xl md:text-2xl text-antique-gold mb-6 leading-relaxed">
               BBS Coding Club is a student-driven technical community at BBS College of Engineering and Technology.
             </p>
             <p className="font-sans text-base md:text-lg text-parchment/80 leading-loose max-w-2xl">
               We bring students together around programming, technology, problem-solving and innovation. The club provides a space for students to learn beyond the classroom, experiment with technology, build projects, participate in technical events, learn from their peers, and collaborate with others.
             </p>
           </section>

           {/* Section 2: WHY WE EXIST */}
           <section>
             <h2 className="font-sans text-xs tracking-[0.3em] text-antique-gold/70 mb-4 uppercase">Why We Exist</h2>
             <h3 className="font-garamond text-3xl md:text-5xl text-ivory mb-12 leading-tight">WE BELIEVE CODING IS BEST LEARNED BY DOING.</h3>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {['LEARNING', 'BUILDING', 'EXPERIMENTING', 'COLLABORATING', 'COMPETING'].map((item) => (
                  <div key={item} className="p-4 border border-antique-gold/10 bg-space-secondary/20 backdrop-blur text-center flex items-center justify-center min-h-[100px] hover:border-antique-gold/40 hover:-translate-y-1 transition-all duration-300">
                    <span className="font-sans text-xs md:text-sm tracking-widest text-parchment/90">{item}</span>
                  </div>
                ))}
             </div>
           </section>

           {/* Section 3: OUR VISION */}
           <section>
             <h2 className="font-sans text-xs tracking-[0.3em] text-antique-gold/70 mb-4 uppercase">Our Vision</h2>
             <p className="font-garamond text-2xl md:text-4xl text-ivory mb-16 leading-relaxed max-w-3xl">
               To build a strong student-driven technical community where curiosity turns into skills, skills turn into projects, and projects turn into real-world impact.
             </p>
             <div className="flex flex-col gap-10 md:gap-12 pl-0 md:pl-12 md:border-l border-antique-gold/20">
               {[
                 { title: 'BUILD A CODING CULTURE', desc: 'Encourage consistent learning and problem-solving.' },
                 { title: 'EMPOWER STUDENTS', desc: 'Help students discover and develop their technical strengths.' },
                 { title: 'ENCOURAGE PARTICIPATION', desc: 'Encourage hackathons, competitions and technical events.' },
                 { title: 'PROMOTE COLLABORATION', desc: 'Bring students together to learn and build as teams.' },
                 { title: 'CREATE IMPACT', desc: 'Turn technical knowledge into meaningful projects and solutions.' }
               ].map(goal => (
                 <div key={goal.title} className="relative pl-6 md:pl-0">
                   <div className="absolute left-0 top-2 w-1.5 h-1.5 bg-antique-gold rounded-full md:-translate-x-[calc(3rem+4px)]" />
                   <h4 className="font-sans text-sm md:text-base tracking-widest text-antique-gold mb-2">{goal.title}</h4>
                   <p className="font-sans text-sm md:text-base text-parchment/60">{goal.desc}</p>
                 </div>
               ))}
             </div>
           </section>

           {/* Section 4: WHAT WE DO */}
           <section>
             <h2 className="font-sans text-xs tracking-[0.3em] text-antique-gold/70 mb-10 uppercase">What We Do</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 { title: 'WORKSHOPS', desc: 'Practical sessions around technologies and development.' },
                 { title: 'CODING & CP', desc: 'Problem-solving, algorithms and coding practice.' },
                 { title: 'HACKATHONS', desc: 'Team-based building and solving real-world problems.' },
                 { title: 'AI & ML', desc: 'Exploring AI, data and emerging technologies.' },
                 { title: 'TECHNICAL SESSIONS', desc: 'Talks, discussions and hands-on technical sessions.' },
                 { title: 'PEER LEARNING', desc: 'Students learning and sharing knowledge with one another.' }
               ].map(activity => (
                 <div key={activity.title} className="p-8 border border-antique-gold/10 bg-space-secondary/10 hover:bg-space-secondary/30 transition-colors group relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-antique-gold/0 to-transparent group-hover:via-antique-gold/50 transition-all duration-500" />
                   <h4 className="font-sans text-sm md:text-base tracking-widest text-ivory mb-4 group-hover:text-antique-gold transition-colors">{activity.title}</h4>
                   <p className="font-sans text-sm leading-relaxed text-parchment/60">{activity.desc}</p>
                 </div>
               ))}
             </div>
           </section>

           {/* Section 5: WHAT WE BELIEVE */}
           <section className="relative my-12">
             <h2 className="font-sans text-xs tracking-[0.3em] text-antique-gold/70 mb-16 uppercase text-center">What We Believe</h2>
             <div className="flex flex-col gap-16 md:gap-20 max-w-2xl mx-auto relative">
               
               {/* Faint constellation line down the center for desktop */}
               <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-antique-gold/30 via-antique-gold/10 to-transparent -translate-x-1/2" />

               {[
                 { title: 'LEARN BY DOING', desc: 'Knowledge becomes valuable when you apply it.' },
                 { title: 'BUILD TO UNDERSTAND', desc: 'Projects turn concepts into experience.' },
                 { title: 'COMPETE TO GROW', desc: 'Competition should push you to improve.' },
                 { title: 'COLLABORATE OPENLY', desc: 'Great ideas grow when people build together.' },
                 { title: 'SHARE WHAT YOU KNOW', desc: 'A strong community grows when knowledge flows freely.' }
               ].map((belief, idx) => (
                 <div key={belief.title} className={`relative flex flex-col md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:mr-auto text-left' : 'md:pl-12 md:ml-auto text-left md:text-right'} items-start md:items-${idx % 2 === 0 ? 'start' : 'end'}`}>
                   {/* Node dot on the center line */}
                   <div className={`hidden md:block absolute top-2 w-2 h-2 rounded-full border border-antique-gold bg-space-dark z-10 ${idx % 2 === 0 ? '-right-1' : '-left-1'}`} />
                   
                   <h4 className="font-sans text-sm md:text-base tracking-[0.2em] text-ivory mb-2">{belief.title}</h4>
                   <p className="font-sans text-sm md:text-base text-parchment/60">{belief.desc}</p>
                 </div>
               ))}
             </div>
           </section>

           {/* Section 6: WHO IS IT FOR? */}
           <section className="bg-space-secondary/20 p-8 md:p-16 border border-antique-gold/10">
             <h2 className="font-sans text-xs tracking-[0.3em] text-antique-gold/70 mb-6 uppercase">Who Is It For?</h2>
             <h3 className="font-garamond text-3xl md:text-4xl text-ivory mb-16">YOU DON'T NEED TO BE AN EXPERT TO BELONG HERE.</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
               {[
                 { title: 'BEGINNERS', desc: 'Students starting their programming journey.' },
                 { title: 'BUILDERS', desc: 'Students who want to turn ideas into projects.' },
                 { title: 'WEB DEVELOPERS', desc: 'Students interested in frontend, backend and full-stack development.' },
                 { title: 'AI & ML ENTHUSIASTS', desc: 'Students interested in artificial intelligence and data.' },
                 { title: 'COMPETITIVE PROGRAMMERS', desc: 'Students interested in algorithms and problem-solving.' },
                 { title: 'HACKATHON ENTHUSIASTS', desc: 'Students who enjoy building solutions with teams.' },
                 { title: 'TECH CURIOUS', desc: 'Anyone who simply wants to explore technology.' }
               ].map(audience => (
                 <div key={audience.title} className="flex gap-4 items-start">
                   <div className="mt-1.5 w-1.5 h-1.5 bg-antique-gold/40 rounded-full shrink-0" />
                   <div>
                     <h4 className="font-sans text-sm tracking-widest text-ivory mb-2">{audience.title}</h4>
                     <p className="font-sans text-sm text-parchment/50 leading-relaxed">{audience.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </section>

           {/* Section 7: HOW TO GET INVOLVED */}
           <section>
             <h2 className="font-sans text-xs tracking-[0.3em] text-antique-gold/70 mb-12 uppercase text-center md:text-left">How To Get Involved</h2>
             <div className="relative border-l border-antique-gold/20 ml-4 md:ml-0 md:pl-12 flex flex-col gap-12 py-4">
               {[
                 { step: '01', title: 'START LEARNING', desc: 'Explore technologies and develop your skills.' },
                 { step: '02', title: 'JOIN AN EVENT', desc: 'Take part in workshops and technical sessions.' },
                 { step: '03', title: 'MEET THE COMMUNITY', desc: 'Connect and learn with other students.' },
                 { step: '04', title: 'BUILD SOMETHING', desc: 'Turn what you learn into projects.' },
                 { step: '05', title: 'COMPETE & COLLABORATE', desc: 'Participate in hackathons and coding competitions.' },
                 { step: '06', title: 'SHARE & GROW', desc: 'Help others and contribute to the community.' }
               ].map(item => (
                 <div key={item.step} className="relative pl-8 md:pl-0 group">
                   <div className="absolute left-0 top-3 -translate-x-[calc(100%+0.5rem)] md:-translate-x-[calc(3rem+0.5px)] w-6 h-px bg-antique-gold/40 group-hover:w-8 transition-all duration-300" />
                   <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-center">
                     <span className="font-garamond text-3xl md:text-4xl text-antique-gold/40 italic">{item.step}</span>
                     <div>
                       <h4 className="font-sans text-sm md:text-base tracking-widest text-ivory">{item.title}</h4>
                       <p className="font-sans text-sm text-parchment/50 mt-1">{item.desc}</p>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </section>

           {/* Section 8: THE ROAD AHEAD */}
           <section>
             <h2 className="font-sans text-xs tracking-[0.3em] text-antique-gold/70 mb-10 uppercase text-center">The Road Ahead</h2>
             <div className="flex flex-col gap-4 max-w-2xl mx-auto">
               {[
                 { title: 'FOUNDATION', desc: 'Build a strong technical community on campus.' },
                 { title: 'PARTICIPATION', desc: 'Encourage students to participate in technical events and competitions.' },
                 { title: 'COLLABORATION', desc: 'Connect with other communities, developers and technology organizations.' },
                 { title: 'CREATION', desc: 'Help students move from learning to building real projects.' },
                 { title: 'IMPACT', desc: 'Encourage solutions that create value beyond the campus.' }
               ].map(road => (
                 <div key={road.title} className="text-center p-8 border border-antique-gold/5 bg-space-secondary/10 hover:bg-space-secondary/20 transition-colors">
                   <h4 className="font-sans text-xs md:text-sm tracking-[0.2em] text-antique-gold mb-3">{road.title}</h4>
                   <p className="font-sans text-sm text-parchment/70">{road.desc}</p>
                 </div>
               ))}
             </div>
           </section>

           {/* Section 9: COMMUNITY CONNECTION */}
           <section className="text-center py-20 border-y border-antique-gold/10 my-8">
             <h2 className="font-sans text-xs tracking-[0.3em] text-antique-gold/70 mb-6 uppercase">The People Make The Club</h2>
             <p className="font-garamond text-3xl md:text-4xl text-ivory mb-10 leading-tight max-w-xl mx-auto">Technology may bring us together, but people are what make a community.</p>
             <button 
               onClick={() => navigate('/community')}
               className="inline-block px-10 py-5 border border-antique-gold/30 text-antique-gold font-sans text-xs tracking-[0.2em] hover:bg-antique-gold/10 hover:text-ivory transition-all duration-300"
             >
               [ EXPLORE COMMUNITY ]
             </button>
           </section>

           {/* Section 10: FINAL SECTION */}
           <section className="text-center pt-10 pb-24">
             <h1 className="font-garamond text-4xl md:text-6xl text-ivory mb-8">THE UNIVERSE IS STILL EXPANDING.</h1>
             <p className="font-sans text-sm md:text-base tracking-[0.3em] text-antique-gold mb-16 uppercase">"AND THIS IS ONLY THE BEGINNING."</p>
             <div className="flex flex-col md:flex-row gap-6 justify-center">
               <button 
                 onClick={() => navigate('/events')}
                 className="px-10 py-5 bg-antique-gold/10 border border-antique-gold/40 text-ivory font-sans text-xs tracking-[0.2em] hover:bg-antique-gold/20 hover:-translate-y-1 transition-all duration-300"
               >
                 JOIN THE CLUB
               </button>
               <button 
                 onClick={returnToUniverse}
                 className="px-10 py-5 border border-antique-gold/20 text-parchment/70 font-sans text-xs tracking-[0.2em] hover:border-antique-gold/50 hover:text-ivory transition-all duration-300"
               >
                 EXPLORE THE UNIVERSE
               </button>
             </div>
           </section>
           
        </div>
      </div>
    </WorldShell>
  );
}
