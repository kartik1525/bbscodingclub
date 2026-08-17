import { useState } from 'react';
import { WorldShell } from '../../components/world/WorldShell';
import { 
  sihInfo, 
  sihAnnouncements, 
  sihTimeline, 
  sihGuidelines 
} from '../../data/sih';
import problemStatements, { problemThemes } from '../../data/problemStatements';
import { useUniverse } from '../../context/UniverseContext';

export function SIHWorld() {
  const { activeObject, openObject, closeObject } = useUniverse();
  const [activeTab, setActiveTab] = useState('statements'); // 'statements' | 'timeline' | 'guidelines'
  const [selectedTheme, setSelectedTheme] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const activePS = activeObject ? (problemStatements.find(p => p.code === activeObject || String(p.id) === String(activeObject))) : null;

  const filteredStatements = problemStatements.filter(ps => {
    const matchesTheme = selectedTheme === 'All' || ps.theme === selectedTheme;
    const matchesSearch = searchQuery.trim() === '' || 
      ps.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ps.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ps.theme.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ps.background.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTheme && matchesSearch;
  });

  return (
    <WorldShell title="SIH">
      <div className="relative min-h-full w-full overflow-hidden flex flex-col pb-28">
        
        {/* Ambient celestial background accents */}
        <div 
          className="absolute top-[8%] left-[3%] w-[45vw] h-[45vw] border border-antique-gold/10 rounded-full pointer-events-none" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }} 
        />
        <div 
          className="absolute top-[50%] right-[3%] w-[55vw] h-[55vw] border border-antique-gold/10 rounded-full pointer-events-none" 
          style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }} 
        />

        <div className="max-w-7xl mx-auto w-full p-6 md:p-14 relative z-10 flex-1">
          
          {/* Header & Hero Section */}
          <div className="mb-14 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
              <span className="px-3 py-1 text-[9px] tracking-[0.25em] font-sans font-bold bg-[#5A7D87]/20 text-[#8BBAC7] border border-[#5A7D87]/40 rounded-sm">
                EDITION {sihInfo.edition}
              </span>
              <span className="px-3 py-1 text-[9px] tracking-[0.25em] font-sans font-bold bg-antique-gold/10 text-antique-gold border border-antique-gold/30 rounded-sm">
                {sihInfo.status}
              </span>
            </div>
            
            <h1 className="font-garamond text-4xl md:text-6xl lg:text-7xl text-ivory mb-4 tracking-widest drop-shadow-md">
              {sihInfo.title}
            </h1>
            
            <p className="font-sans text-antique-gold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-6">
              {sihInfo.subtitle} • {sihInfo.tagline}
            </p>

            <p className="font-sans text-sm md:text-base text-parchment/85 max-w-3xl leading-relaxed">
              {sihInfo.overview}
            </p>
          </div>

          {/* Key Facts / Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14 bg-space-secondary/25 backdrop-blur-md border border-antique-gold/15 p-6 md:p-8 rounded-sm">
            <div>
              <h4 className="font-sans text-[8px] md:text-[9px] tracking-[0.25em] text-parchment/50 uppercase mb-2">TEAM SIZE</h4>
              <p className="font-sans text-xs md:text-sm tracking-wider text-ivory font-medium">{sihInfo.teamSize}</p>
            </div>
            <div>
              <h4 className="font-sans text-[8px] md:text-[9px] tracking-[0.25em] text-parchment/50 uppercase mb-2">DIVERSITY RULE</h4>
              <p className="font-sans text-xs md:text-sm tracking-wider text-antique-gold font-medium">{sihInfo.diversityRule}</p>
            </div>
            <div>
              <h4 className="font-sans text-[8px] md:text-[9px] tracking-[0.25em] text-parchment/50 uppercase mb-2">ELIGIBILITY</h4>
              <p className="font-sans text-xs md:text-sm tracking-wider text-ivory">{sihInfo.eligibility}</p>
            </div>
            <div>
              <h4 className="font-sans text-[8px] md:text-[9px] tracking-[0.25em] text-parchment/50 uppercase mb-2">EVALUATION MODE</h4>
              <p className="font-sans text-xs md:text-sm tracking-wider text-ivory">{sihInfo.mode}</p>
            </div>
          </div>

          {/* Announcements & Important Notices */}
          {sihAnnouncements.length > 0 && (
            <div className="mb-14 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-antique-gold/40"></div>
                <h3 className="font-sans text-[9px] tracking-[0.3em] text-antique-gold uppercase font-medium">LATEST ANNOUNCEMENTS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sihAnnouncements.map((ann) => (
                  <div 
                    key={ann.id} 
                    className="p-5 bg-space-dark/60 border border-antique-gold/20 backdrop-blur-sm rounded-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-sans text-[8px] tracking-[0.2em] text-antique-gold/80">{ann.date}</span>
                        {ann.isImportant && (
                          <span className="w-2 h-2 rounded-full bg-[#8BBAC7] animate-pulse" title="Important notice" />
                        )}
                      </div>
                      <h4 className="font-garamond text-xl text-ivory mb-2">{ann.title}</h4>
                      <p className="font-sans text-xs text-parchment/75 leading-relaxed">{ann.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Tabs */}
          <div className="flex border-b border-antique-gold/15 mb-10 overflow-x-auto scrollbar-none gap-6 md:gap-10">
            <button
              onClick={() => setActiveTab('statements')}
              className={`pb-4 font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase transition-all duration-300 relative whitespace-nowrap ${
                activeTab === 'statements' ? 'text-ivory font-medium' : 'text-parchment/50 hover:text-parchment'
              }`}
            >
              PROBLEM STATEMENTS ({problemStatements.length})
              {activeTab === 'statements' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-antique-gold shadow-[0_0_8px_rgba(216,199,165,0.6)]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('timeline')}
              className={`pb-4 font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase transition-all duration-300 relative whitespace-nowrap ${
                activeTab === 'timeline' ? 'text-ivory font-medium' : 'text-parchment/50 hover:text-parchment'
              }`}
            >
              TIMELINE & PHASES
              {activeTab === 'timeline' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-antique-gold shadow-[0_0_8px_rgba(216,199,165,0.6)]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('guidelines')}
              className={`pb-4 font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase transition-all duration-300 relative whitespace-nowrap ${
                activeTab === 'guidelines' ? 'text-ivory font-medium' : 'text-parchment/50 hover:text-parchment'
              }`}
            >
              GUIDELINES & SUBMISSION
              {activeTab === 'guidelines' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-antique-gold shadow-[0_0_8px_rgba(216,199,165,0.6)]" />
              )}
            </button>
          </div>

          {/* TAB 1: PROBLEM STATEMENTS */}
          {activeTab === 'statements' && (
            <div className="flex flex-col gap-8">
              {/* Theme Filter & Search Controls */}
              <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
                {/* Theme Filter Pills */}
                <div className="flex flex-wrap gap-2">
                  {problemThemes.map((theme) => (
                    <button
                      key={theme}
                      onClick={() => setSelectedTheme(theme)}
                      className={`px-3 py-1.5 font-sans text-[9px] tracking-[0.15em] uppercase rounded-sm transition-all duration-300 border cursor-pointer ${
                        selectedTheme === theme
                          ? 'bg-antique-gold/20 text-antique-gold border-antique-gold/60 shadow-[0_0_10px_rgba(216,199,165,0.2)]'
                          : 'bg-space-dark/60 text-parchment/60 border-antique-gold/15 hover:border-antique-gold/30 hover:text-parchment'
                      }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>

                {/* Search Input */}
                <div className="relative min-w-[240px]">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="SEARCH PROBLEM STATEMENTS..."
                    className="w-full bg-space-dark/80 border border-antique-gold/20 focus:border-antique-gold/60 text-ivory placeholder:text-parchment/30 font-sans text-xs px-4 py-2 rounded-sm outline-none transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-parchment/50 hover:text-ivory font-sans text-xs cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Problem Statements Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredStatements.map((ps, index) => (
                  <div
                    key={ps.code || ps.id}
                    onClick={() => openObject(ps.code)}
                    className="group relative cursor-pointer border border-antique-gold/20 bg-space-dark/60 hover:bg-space-secondary/80 hover:border-antique-gold/50 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md hover:-translate-y-1.5 rounded-sm"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="p-7 md:p-8 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <span className="font-sans text-[9px] tracking-[0.2em] font-bold text-[#8BBAC7] bg-[#5A7D87]/15 border border-[#5A7D87]/30 px-2.5 py-1 rounded-sm">
                          {ps.code}
                        </span>
                        <span className="font-sans text-[8px] tracking-[0.2em] text-antique-gold/80 uppercase">
                          {ps.category}
                        </span>
                      </div>

                      <div className="mb-2">
                        <span className="font-sans text-[9px] tracking-[0.15em] text-antique-gold/70 uppercase">
                          {ps.theme}
                        </span>
                      </div>

                      <h3 className="font-garamond text-2xl md:text-3xl text-ivory mb-3 group-hover:text-antique-gold transition-colors duration-300 leading-snug">
                        {ps.title}
                      </h3>

                      <p className="font-sans text-xs text-parchment/75 leading-relaxed mb-6 line-clamp-3">
                        {ps.background}
                      </p>

                      <div className="mt-auto pt-5 border-t border-antique-gold/10 flex flex-wrap gap-2">
                        <span className="font-sans text-[9px] tracking-wider text-parchment/60 bg-space-dark/80 px-2 py-1 border border-antique-gold/10">
                          {ps.expectedOutcome.length} Expected Outcomes
                        </span>
                        <span className="font-sans text-[9px] tracking-wider text-parchment/60 bg-space-dark/80 px-2 py-1 border border-antique-gold/10">
                          {ps.constraints.length} Constraints
                        </span>
                      </div>

                      <div className="mt-6 flex items-center justify-between font-sans text-[9px] tracking-[0.2em] text-antique-gold/90 group-hover:text-antique-gold">
                        <span>EXPLORE FULL DETAILS</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredStatements.length === 0 && (
                <div className="text-center py-16 bg-space-dark/40 border border-antique-gold/15 rounded-sm">
                  <p className="font-garamond text-2xl text-ivory mb-2">No problem statements found</p>
                  <p className="font-sans text-xs text-parchment/60">Try adjusting your search query or theme filter</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: TIMELINE & PHASES */}
          {activeTab === 'timeline' && (
            <div className="relative max-w-4xl mx-auto my-6">
              <div className="absolute top-0 bottom-0 left-[18px] md:left-1/2 w-px bg-gradient-to-b from-antique-gold/60 via-antique-gold/20 to-transparent md:-translate-x-1/2" />
              
              <div className="flex flex-col gap-12 md:gap-16 relative">
                {sihTimeline.map((item, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div 
                      key={item.id} 
                      className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start md:items-center pl-14 md:pl-0`}
                    >
                      {/* Timeline step dot */}
                      <div className="absolute top-2 md:top-1/2 left-[10px] md:left-1/2 w-[18px] h-[18px] rounded-full border border-antique-gold bg-space-dark flex items-center justify-center -translate-x-1/2 md:-translate-y-1/2 z-10 shadow-[0_0_12px_rgba(216,199,165,0.4)]">
                        <span className="font-sans text-[7px] text-antique-gold font-bold">{item.step}</span>
                      </div>

                      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                        <div className={`font-sans text-[9px] tracking-[0.2em] text-antique-gold/80 mb-2 flex items-center gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                          <span>{item.date}</span>
                          <span>•</span>
                          <span className={item.status === 'ACTIVE' ? 'text-[#8BBAC7] font-bold' : 'text-parchment/60'}>
                            {item.status}
                          </span>
                        </div>
                        <div className="bg-space-secondary/30 backdrop-blur-md border border-antique-gold/15 p-6 rounded-sm shadow-md">
                          <h3 className="font-garamond text-2xl md:text-3xl text-ivory mb-2">{item.phase}</h3>
                          <p className="font-sans text-xs text-parchment/80 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: GUIDELINES & SUBMISSION ACTIONS */}
          {activeTab === 'guidelines' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Rules List */}
              <div className="lg:col-span-2 bg-space-secondary/20 border border-antique-gold/15 p-8 md:p-10 rounded-sm">
                <h3 className="font-garamond text-3xl text-ivory mb-6">Participation & Evaluation Rules</h3>
                <ul className="space-y-5">
                  {sihGuidelines.map((rule, idx) => (
                    <li key={idx} className="flex gap-4 items-start font-sans text-xs md:text-sm text-parchment/85 leading-relaxed">
                      <span className="text-antique-gold mt-0.5">✦</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action / Submission Panel */}
              <div className="flex flex-col gap-6">
                <div className="bg-space-dark/80 border border-antique-gold/30 p-8 rounded-sm flex flex-col justify-between h-full">
                  <div>
                    <h4 className="font-sans text-[9px] tracking-[0.25em] text-antique-gold uppercase mb-3">ACTION DESK</h4>
                    <h3 className="font-garamond text-2xl text-ivory mb-4">Registration & Submission</h3>
                    <p className="font-sans text-xs text-parchment/75 leading-relaxed mb-8">
                      All official links, registration portals, and submission forms for the internal round will be updated here as each phase opens.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button 
                      className="w-full py-4 px-6 bg-antique-gold/15 hover:bg-antique-gold/25 border border-antique-gold/40 hover:border-antique-gold transition-all duration-300 font-sans text-[10px] tracking-[0.2em] text-ivory flex items-center justify-between rounded-sm cursor-pointer"
                      onClick={() => alert("Registration form link will be activated upon official commencement.")}
                    >
                      <span>TEAM REGISTRATION</span>
                      <span>→</span>
                    </button>
                    <button 
                      className="w-full py-4 px-6 bg-space-secondary/40 hover:bg-space-secondary/60 border border-antique-gold/20 hover:border-antique-gold/40 transition-all duration-300 font-sans text-[10px] tracking-[0.2em] text-parchment/90 flex items-center justify-between rounded-sm cursor-pointer"
                      onClick={() => alert("PPT Idea Submission portal will open in Phase 3.")}
                    >
                      <span>IDEA / PPT SUBMISSION</span>
                      <span>↗</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Detail Modal View for Problem Statement Items */}
        <div 
          className={`fixed inset-0 z-50 bg-space-dark/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center ${
            activeObject ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-20 pointer-events-none'
          }`}
        >
          {activePS && (
            <div className="max-w-4xl w-full mx-auto p-6 pt-24 md:p-14 md:pt-32 h-full flex flex-col overflow-y-auto scrollbar-none">
              
              <button 
                onClick={closeObject}
                className="self-start mb-8 group flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] text-parchment hover:text-ivory transition-colors duration-300 cursor-pointer"
              >
                <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span>
                BACK TO SIH
              </button>

              <div className="flex flex-wrap gap-3 items-center mb-4">
                <span className="px-3 py-1 text-[9px] tracking-[0.2em] font-sans font-bold bg-[#5A7D87]/20 text-[#8BBAC7] border border-[#5A7D87]/40 rounded-sm">
                  {activePS.code}
                </span>
                <span className="px-3 py-1 text-[9px] tracking-[0.2em] font-sans font-bold bg-space-secondary/40 text-antique-gold border border-antique-gold/30 rounded-sm">
                  {activePS.category}
                </span>
                <div className="h-px bg-antique-gold/30 flex-1 max-w-[120px]" />
                <span className="font-sans text-[9px] tracking-[0.2em] text-antique-gold uppercase font-medium">
                  {activePS.theme}
                </span>
              </div>

              <h1 className="font-garamond text-3xl md:text-5xl lg:text-6xl text-ivory mb-8 leading-tight">
                {activePS.title}
              </h1>

              {/* Background */}
              {activePS.background && (
                <div className="mb-8 bg-space-secondary/20 border border-antique-gold/15 p-6 md:p-8 rounded-sm">
                  <h3 className="font-garamond text-2xl text-ivory mb-3">Background</h3>
                  <p className="font-sans text-sm md:text-base text-parchment/85 leading-relaxed whitespace-pre-line">
                    {activePS.background}
                  </p>
                </div>
              )}

              {/* Detailed Problem */}
              {activePS.detailedProblem && (
                <div className="mb-8 bg-space-secondary/20 border border-antique-gold/15 p-6 md:p-8 rounded-sm">
                  <h3 className="font-garamond text-2xl text-ivory mb-3">Detailed Problem</h3>
                  <p className="font-sans text-sm md:text-base text-parchment/85 leading-relaxed whitespace-pre-line">
                    {activePS.detailedProblem}
                  </p>
                </div>
              )}

              {/* Expected Outcome */}
              {activePS.expectedOutcome && activePS.expectedOutcome.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-garamond text-2xl text-ivory mb-4">Expected Outcome</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activePS.expectedOutcome.map((outcome, idx) => (
                      <div key={idx} className="p-4 bg-space-secondary/25 border border-antique-gold/15 rounded-sm flex items-start gap-3 font-sans text-xs text-parchment/90 leading-relaxed">
                        <span className="text-antique-gold mt-0.5 shrink-0">✦</span>
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Constraints */}
              {activePS.constraints && activePS.constraints.length > 0 && (
                <div className="mb-12">
                  <h3 className="font-garamond text-2xl text-ivory mb-4">Constraints</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activePS.constraints.map((constraint, idx) => (
                      <div key={idx} className="p-4 bg-space-secondary/25 border border-antique-gold/15 rounded-sm flex items-start gap-3 font-sans text-xs text-parchment/90 leading-relaxed">
                        <span className="text-[#8BBAC7] mt-0.5 shrink-0">❖</span>
                        <span>{constraint}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto pt-8 border-t border-antique-gold/15 flex flex-wrap gap-4 items-center justify-between">
                <div className="font-sans text-[9px] tracking-[0.2em] text-parchment/60">
                  PREPARE YOUR 6-MEMBER TEAM PROPOSAL FOR {activePS.code}
                </div>
                <button 
                  onClick={closeObject}
                  className="px-8 py-3.5 bg-antique-gold/15 hover:bg-antique-gold/25 border border-antique-gold/40 font-sans text-[10px] tracking-[0.2em] text-ivory transition-colors cursor-pointer rounded-sm"
                >
                  CLOSE DETAILS
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </WorldShell>
  );
}
