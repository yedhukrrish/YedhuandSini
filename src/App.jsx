import React, { useState } from 'react';
import LoginGate from './components/LoginGate';
import Curtain from './components/Curtain';
import MusicPlayer from './components/MusicPlayer';
import useHeartTrail from './hooks/useHeartTrail';
import FloatingGallery from './components/FloatingGallery';

// Import all scenes
import Scene1_OpeningCredits from './components/scenes/Scene1_OpeningCredits';
import Scene2_TheSnap from './components/scenes/Scene2_TheSnap';
import Scene3_TheRant from './components/scenes/Scene3_TheRant';
import Scene4_NewYearCall from './components/scenes/Scene4_NewYearCall';
import Scene5_Situationship from './components/scenes/Scene5_Situationship';
import Scene6_Wedding from './components/scenes/Scene6_Wedding';
import Scene7_TheProposal from './components/scenes/Scene7_TheProposal';
import Scene8_Paris from './components/scenes/Scene8_Paris';
import Scene9_Reunion from './components/scenes/Scene9_Reunion';
import Scene10_BuildUp from './components/scenes/Scene10_BuildUp';
import Scene11_TheQuestion from './components/scenes/Scene11_TheQuestion';

function App() {
  const [loginStep, setLoginStep] = useState(0); // 0: Login, 1: Curtain, 2: Story
  useHeartTrail();

  return (
    <div className="min-h-screen bg-wednesday-black font-sans text-white selection:bg-wednesday-purple-500 selection:text-white overflow-x-hidden">
      <MusicPlayer />

      {/* Step 0: Login Gate */}
      {loginStep === 0 && (
        <LoginGate onLogin={() => setLoginStep(1)} />
      )}

      {/* Step 1: Red Velvet Curtain */}
      {loginStep === 1 && (
        <Curtain onOpen={() => setLoginStep(2)} />
      )}

      {/* Step 2: The Cinematic Story */}
      {loginStep === 2 && (
        <main className="scroll-smooth relative">
          <FloatingGallery />
          <Scene1_OpeningCredits />
          <Scene2_TheSnap />
          <Scene3_TheRant />
          <Scene4_NewYearCall />
          <Scene5_Situationship />
          <Scene6_Wedding />
          <Scene7_TheProposal />
          <Scene8_Paris />
          <Scene9_Reunion />
          <Scene10_BuildUp />
          <Scene11_TheQuestion />
        </main>
      )}
    </div>
  );
}

export default App;
