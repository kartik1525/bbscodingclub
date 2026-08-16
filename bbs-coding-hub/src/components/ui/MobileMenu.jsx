import { useUniverse } from '../../context/UniverseContext';
import { useTheme } from '../../context/ThemeContext';
import { worlds } from '../../data/worlds';

export function MobileMenu({ isOpen, onClose }) {
  const { focusWorld } = useUniverse();
  const { theme, toggleTheme } = useTheme();

  return (
    <div 
      className={`fixed inset-0 z-50 bg-space-dark/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 ease-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-4 text-parchment hover:text-antique-gold transition-colors"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex flex-col items-center gap-8 text-center">
        <button 
          onClick={() => {
            onClose();
          }}
          className={`font-sans text-xs tracking-[0.3em] transition-colors ${theme === 'light' ? 'text-parchment/90 font-medium hover:text-secondary-brown' : 'text-parchment/50 hover:text-antique-gold'}`}
        >
          UNIVERSE
        </button>

        {worlds.map(world => (
          <button 
            key={world.id}
            onClick={() => {
              focusWorld(world.id);
              onClose();
            }}
            className={`font-garamond text-3xl tracking-widest transition-colors ${theme === 'light' ? 'text-secondary-brown hover:text-black font-medium' : 'text-parchment hover:text-antique-gold'}`}
          >
            {world.name}
          </button>
        ))}

        <div className="w-12 h-px bg-antique-gold/20 my-4" />

        <button 
          onClick={toggleTheme}
          className={`flex items-center gap-3 font-sans text-[10px] tracking-widest transition-colors p-4 border rounded-full bg-space-dark/50 ${theme === 'light' ? 'text-secondary-brown border-secondary-brown/30 hover:border-secondary-brown' : 'text-parchment border-antique-gold/20 hover:text-antique-gold'}`}
        >
          {theme === 'dark' ? (
            <>
              <span>SWITCH TO LIGHT THEME</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            </>
          ) : (
            <>
              <span>SWITCH TO DARK THEME</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
