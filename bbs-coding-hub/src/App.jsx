import { UniverseProvider } from './context/UniverseContext';
import { ThemeProvider } from './context/ThemeContext';
import { Universe } from './components/universe/Universe';
import { UniverseHUD } from './components/ui/UniverseHUD';
import { WorldPanel } from './components/ui/WorldPanel';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { Routes, Route } from 'react-router-dom';
import { useUniverse } from './context/UniverseContext';

// Import all worlds
import { EventsWorld } from './worlds/Events/EventsWorld';
import { LearningWorld } from './worlds/Learning/LearningWorld';
import { CommunityWorld } from './worlds/Community/CommunityWorld';
import { HackathonsWorld } from './worlds/Hackathons/HackathonsWorld';
import { AboutWorld } from './worlds/About/AboutWorld';

const WorldLayer = () => {
  const { isWorldOpen } = useUniverse();
  
  return (
    <div 
      className={`absolute inset-0 z-30 pointer-events-none transition-opacity duration-1000 ease-in-out ${isWorldOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`w-full h-full ${isWorldOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <Routes>
          <Route path="/events/*" element={<EventsWorld />} />
          <Route path="/learning/*" element={<LearningWorld />} />
          <Route path="/community/*" element={<CommunityWorld />} />
          <Route path="/hackathons/*" element={<HackathonsWorld />} />
          <Route path="/about/*" element={<AboutWorld />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <UniverseProvider>
        <main className="relative w-full h-screen overflow-hidden bg-space-dark text-parchment selection:bg-antique-gold/30 selection:text-ivory transition-colors duration-1000">
          <LoadingScreen />
          <Universe />
          <UniverseHUD />
          <WorldPanel />
          <WorldLayer />
        </main>
      </UniverseProvider>
    </ThemeProvider>
  );
}

export default App;
