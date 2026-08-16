import { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const UniverseContext = createContext();

export const useUniverse = () => useContext(UniverseContext);

export const UniverseProvider = ({ children }) => {
  const [activeWorld, setActiveWorld] = useState(null);
  const [previousWorld, setPreviousWorld] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  
  const [isWorldOpen, setIsWorldOpen] = useState(false);
  const [activeObject, setActiveObject] = useState(null);

  const interactionLocked = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    // Basic route sync
    if (path === '/' && isWorldOpen) {
      setIsWorldOpen(false);
      setTimeout(() => {
          returnToUniverse();
      }, 1000);
    }
  }, [location.pathname]);

  const lockInteraction = () => { interactionLocked.current = true; };
  const unlockInteraction = () => { interactionLocked.current = false; };

  const focusWorld = useCallback((worldId) => {
    if (interactionLocked.current || worldId === activeWorld) return;
    
    lockInteraction();
    setIsTransitioning(true);
    setPreviousWorld(activeWorld);
    setActiveWorld(worldId);
    
    setTimeout(() => {
      setIsPanelOpen(true);
    }, 800);
    
    setTimeout(() => {
      setIsTransitioning(false);
      unlockInteraction();
    }, 1500);
  }, [activeWorld]);

  const returnToUniverse = useCallback(() => {
    if (interactionLocked.current || !activeWorld) return;
    
    lockInteraction();
    setIsTransitioning(true);
    setIsPanelOpen(false);
    
    setTimeout(() => {
      setPreviousWorld(activeWorld);
      setActiveWorld(null);
      setIsTransitioning(false);
      unlockInteraction();
    }, 1500);
  }, [activeWorld]);

  const enterWorld = useCallback((worldId) => {
    if (interactionLocked.current) return;
    
    lockInteraction();
    setIsPanelOpen(false); 
    setIsWorldOpen(true);
    navigate(`/${worldId}`);
    
    setTimeout(() => {
      unlockInteraction();
    }, 1000);
  }, [navigate]);

  const exitWorld = useCallback(() => {
    if (interactionLocked.current) return;
    
    lockInteraction();
    setIsWorldOpen(false);
    
    setTimeout(() => {
      unlockInteraction();
      navigate('/');
      returnToUniverse();
    }, 1000);
  }, [navigate, returnToUniverse]);

  const openObject = useCallback((objectId) => {
    setActiveObject(objectId);
  }, []);

  const closeObject = useCallback(() => {
    setActiveObject(null);
  }, []);

  const value = {
    activeWorld,
    previousWorld,
    isTransitioning,
    isLoading,
    setIsLoading,
    isPanelOpen,
    isWorldOpen,
    activeObject,
    focusWorld,
    returnToUniverse,
    enterWorld,
    exitWorld,
    openObject,
    closeObject,
    lockInteraction,
    unlockInteraction,
    interactionLocked: interactionLocked.current
  };

  return (
    <UniverseContext.Provider value={value}>
      {children}
    </UniverseContext.Provider>
  );
};
