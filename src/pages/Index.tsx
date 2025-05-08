
import { useState, useEffect } from "react";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Add a slight delay before showing content for smoother animation
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f041b]">
      {/* 4K Space Background Video */}
      <div className="fixed inset-0 z-[-1]">
        <video
          className="absolute min-h-full min-w-full object-cover opacity-90"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0f041b]/60 via-[#150630]/40 to-transparent z-10"></div>
      </div>

      <div
        className={`container max-w-3xl mx-auto px-6 py-12 md:py-20 text-center transition-all duration-1000 ease-out ${
          loaded ? "opacity-100" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Avatar with enhanced glow effects */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-8 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="avatar relative w-full h-full rounded-full overflow-hidden border-2 border-blue-400/30 shadow-[0_0_40px_rgba(66,135,245,0.6)] z-20">
            <img
              src="https://media0.giphy.com/media/l0HlO4V8iCRME3i0g/200w.gif?cid=6c09b952y0g3ys1dm3fgs4uqzwuhnh3cpvxx943iioq40o70&ep=v1_gifs_search&rid=200w.gif&ct=g"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Intro Text with glass effect */}
        <div className="intro-text backdrop-blur-md bg-black/30 p-6 rounded-2xl mb-10 border border-blue-500/20 shadow-[0_0_20px_rgba(66,135,245,0.4)] max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-indigo-300 inline-block text-transparent bg-clip-text">
            Welcome to Solabs
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Your best solution for the best atmosphere!
          </p>
        </div>

        {/* Menu with improved buttons */}
        <div className="menu flex flex-wrap justify-center gap-4 md:gap-6">
          <MenuButton href="#" text="BOT" />
          <MenuButton href="#" text="SUPPORT" />
          <MenuButton href="#" text="WORK" />
        </div>
      </div>

      {/* Animated stars for space atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

// Extracted button component for cleaner code
const MenuButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <a
      href={href}
      className="relative px-8 py-4 overflow-hidden bg-gradient-to-br from-[#1a4b8c] to-[#4169e1] rounded-lg font-bold text-white shadow-[0_4px_15px_rgba(65,105,225,0.4)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(65,105,225,0.6)] hover:-translate-y-1 group"
    >
      <span className="relative z-10">{text}</span>
      <div className="absolute inset-0 opacity-0 bg-gradient-to-r from-[#4169e1] to-[#1e3a8a] group-hover:opacity-100 transition-opacity duration-300"></div>
    </a>
  );
};

export default Index;
