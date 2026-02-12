import React, { useState } from 'react';
import LoginGate from './components/LoginGate';
import Curtain from './components/Curtain';
import MusicPlayer from './components/MusicPlayer';
import useHeartTrail from './hooks/useHeartTrail';
import useImagePreload from './hooks/useImagePreload';
import FloatingGallery from './components/FloatingGallery';
import MilestoneScene from './components/MilestoneScene';
import BonusHub from './components/BonusHub';
import {
  Camera, MapPin, Coffee, Star,
  Waves, Ghost, Landmark, Music,
  Cake, Plane, Zap, Telescope,
  Utensils, Heart, Moon, Sparkles
} from 'lucide-react';

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
  const [isAccepted, setIsAccepted] = useState(false);
  useHeartTrail();

  const milestones = [
    {
      id: "first-meet",
      title: "Our First Meet",
      date: "The Spark",
      context: "The very first time we saw each other... we weren't ready to call it a date yet, but the magic was already there. ✨",
      icon: Camera,
      color: "text-purple-400",
      bg: "bg-purple-500/20",
      image: "/images/dates/our first meet.jpeg"
    },
    {
      id: "first-beach",
      title: "Our First Beach Photo",
      date: "The Beginning",
      context: "Where the waves met our first smiles together...",
      icon: Waves,
      color: "text-blue-400",
      bg: "bg-blue-500/20",
      image: "/images/dates/our First Beach Photo.jpg"
    },
    {
      id: "beach-scam",
      title: "The Beach Scam",
      date: "A Funny Twist",
      context: "That time we got 'scammed' at the beach... a memory we'll never forget! 😂",
      icon: Ghost,
      color: "text-orange-400",
      bg: "bg-orange-500/20",
      image: "/images/dates/Beach scam.jpg"
    },
    {
      id: "first-temple",
      title: "Our First Temple Visit",
      date: "Blessed Moments",
      context: "Seeking blessings for what was just beginning...",
      icon: Landmark,
      color: "text-yellow-400",
      bg: "bg-yellow-500/20",
      image: "/images/dates/our first temple visit.jpg"
    },
    {
      id: "dakshinchitra",
      title: "DakshinaChitra Date",
      date: "Culture & Connection",
      context: "Exploring heritage and finding our own rhythm...",
      icon: Landmark,
      color: "text-emerald-400",
      bg: "bg-emerald-500/20",
      image: "/images/dates/Daskhinchitra Date.jpg"
    },
    {
      id: "first-bar",
      title: "Our First Bar Night",
      date: "Cheers to Us",
      context: "The music, the drinks, and just being with you...",
      icon: Music,
      color: "text-pink-400",
      bg: "bg-pink-500/20",
      image: "/images/dates/First Bar.jpg"
    },
    {
      id: "first-birthday",
      title: "Your First Birthday",
      date: "A Special Celebration",
      context: "Celebrating you and the joy you bring into my life...",
      icon: Cake,
      color: "text-red-400",
      bg: "bg-red-500/20",
      image: "/images/dates/Her First birthday celebration.jpg"
    },
    {
      id: "kerala-trip",
      title: "The Kerala Adventure",
      date: "God's Own Country",
      context: "Our first big trip together, lost in the greens and the backwaters...",
      icon: Plane,
      color: "text-teal-400",
      bg: "bg-teal-500/20",
      image: "/images/dates/Kerala trip photo.jpg"
    },
    {
      id: "comic-con",
      title: "Our First ComicCon",
      date: "Geeking Out",
      context: "Stepping into another world, but always holding your hand...",
      icon: Zap,
      color: "text-yellow-500",
      bg: "bg-yellow-600/20",
      image: "/images/dates/Our First ComicCon.jpg"
    },
    {
      id: "planetarium",
      title: "Planetarium Date",
      date: "Under the Stars",
      context: "Looking at the universe, but the brightest star was right next to me...",
      icon: Telescope,
      color: "text-indigo-400",
      bg: "bg-indigo-500/20",
      image: "/images/dates/Planatarium date.jpg"
    },
    {
      id: "sowcarpet",
      title: "Sowcarpet Food Crawl",
      date: "A Taste of Joy",
      context: "Navigating narrow lanes for the best food and better conversations...",
      icon: Utensils,
      color: "text-orange-500",
      bg: "bg-orange-500/20",
      image: "/images/dates/Sowcarpet date.jpg"
    },
    {
      id: "first-saree",
      title: "The First Saree",
      date: "Pure Elegance",
      context: "The moment you wore a saree for the first time... I was speechless.",
      icon: Heart,
      color: "text-rose-400",
      bg: "bg-rose-500/20",
      image: "/images/dates/she wearing saree.jpg"
    },
    {
      id: "moon-restaurant",
      title: "Moon Restaurant",
      date: "Ethereal Dining",
      context: "A dinner as beautiful and glowing as you are...",
      icon: Moon,
      color: "text-sky-300",
      bg: "bg-sky-400/20",
      image: "/images/dates/Moon Restaurant with her photo.jpg"
    },
    {
      id: "favourite-temple",
      title: "My Favourite Photo Of Us",
      date: "Peace & Prayer",
      context: "Finding quiet moments of peace in the middle of everything.",
      icon: Landmark,
      color: "text-amber-400",
      bg: "bg-amber-500/20",
      image: "/images/dates/Favourite Photo of us from the temple.jpg"
    },
    {
      id: "well-you-know",
      title: "Well, You Know...",
      date: "That One Day",
      context: "A memory that needs no words. Just us and that feeling. 😉",
      icon: Sparkles,
      color: "text-purple-400",
      bg: "bg-purple-500/20",
      image: "/images/dates/well you know what happened.jpg"
    }
  ];

  // Preload all milestone images in the background
  useImagePreload(milestones.map(m => m.image));

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
          <Scene11_TheQuestion onAccept={() => setIsAccepted(true)} />

          {/* THE CHRONICLES OF FIRSTS - Only shown after acceptance */}
          {isAccepted && milestones.map((milestone) => (
            <MilestoneScene key={milestone.id} {...milestone} />
          ))}

          {/* THE FINAL BONUS HUB - Only shown after acceptance */}
          {isAccepted && (
            <div id="bonus-hub">
              <BonusHub />
            </div>
          )}
        </main>
      )}
    </div>
  );
}

export default App;
