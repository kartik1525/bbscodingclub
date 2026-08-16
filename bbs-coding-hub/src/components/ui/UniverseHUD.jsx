import { useState } from 'react';
import { useUniverse } from '../../context/UniverseContext';
import { useTheme } from '../../context/ThemeContext';
import { worlds } from '../../data/worlds';
import { MobileMenu } from './MobileMenu';

export function UniverseHUD() {
  const { activeWorld, focusWorld } = useUniverse();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 md:p-12">
        <div 
          className="flex justify-between items-start transition-opacity duration-1000 ease-in-out" 
          style={{ opacity: activeWorld ? 0 : 1 }}
        >
          <div className="flex flex-col">
            <h1 className="font-garamond text-xl md:text-2xl text-ivory tracking-[0.2em] font-medium">
              BBS CODING CLUB
            </h1>
            <p className="font-sans text-[8px] md:text-[9px] tracking-[0.3em] text-antique-gold mt-1 opacity-80">
              DIGITAL CONSTELLATION
            </p>
          </div>

          {/* Desktop Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="hidden md:flex items-center justify-center p-3 text-parchment hover:text-antique-gold transition-colors pointer-events-auto border border-antique-gold/20 rounded-full bg-space-dark/50"
            title="Toggle Theme"
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Mobile Hamburger Menu */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2 pointer-events-auto"
          >
            <div className="w-6 h-[2px] bg-parchment"></div>
            <div className="w-6 h-[2px] bg-parchment"></div>
            <div className="w-4 h-[2px] bg-parchment"></div>
          </button>
        </div>

        {/* Desktop Bottom Navigation */}
        <div 
          className="hidden md:flex flex-col transition-opacity duration-1000 ease-in-out" 
          style={{ opacity: activeWorld ? 0 : 1 }}
        >
          <div className="flex flex-wrap gap-4 md:gap-8 items-center">
            <span className={`font-sans text-[9px] md:text-[10px] tracking-widest ${theme === 'light' ? 'text-parchment/80 font-medium' : 'text-parchment/40'}`}>UNIVERSE</span>
            <div className={`hidden md:block w-px h-3 ${theme === 'light' ? 'bg-parchment/40' : 'bg-parchment/20'}`}></div>
            {worlds.map(world => (
              <button 
                key={world.id}
                onClick={() => focusWorld(world.id)}
                className={`pointer-events-auto font-sans text-[9px] md:text-[10px] tracking-[0.15em] transition-colors duration-300 ${theme === 'light' ? 'text-parchment/90 hover:text-secondary-brown font-medium' : 'text-parchment/70 hover:text-antique-gold'}`}
              >
                {world.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
