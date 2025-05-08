
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
      {/* 4K Background Video */}
      <div className="fixed inset-0 z-[-1]">
        <video
          className="absolute min-h-full min-w-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
          style={{
            filter: "brightness(0.6) blur(1px)",
          }}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-purple-liquid-abstract-motion-background-48046-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0f041b]/80 via-[#150630]/60 to-[#3b0d6b]/40 z-10"></div>
      </div>

      <div
        className={`container max-w-3xl mx-auto px-6 py-12 md:py-20 text-center transition-all duration-1000 ease-out ${
          loaded ? "opacity-100" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Avatar with enhanced glow effects */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-8 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="avatar relative w-full h-full rounded-full overflow-hidden border-2 border-purple-400/30 shadow-[0_0_40px_rgba(138,43,226,0.6)] z-20">
            <img
              src="https://media0.giphy.com/media/l0HlO4V8iCRME3i0g/200w.gif?cid=6c09b952y0g3ys1dm3fgs4uqzwuhnh3cpvxx943iioq40o70&ep=v1_gifs_search&rid=200w.gif&ct=g"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Intro Text with glass effect */}
        <div className="intro-text backdrop-blur-md bg-black/40 p-6 rounded-2xl mb-10 border border-purple-500/20 shadow-[0_0_20px_rgba(106,13,173,0.4)] max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-indigo-300 inline-block text-transparent bg-clip-text">
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

      {/* Animated particles for atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 6 + 1}px`,
              height: `${Math.random() * 6 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite, pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.1,
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
      className="relative px-8 py-4 overflow-hidden bg-gradient-to-br from-[#3a0a6a] to-[#6a0dad] rounded-lg font-bold text-white shadow-[0_4px_15px_rgba(106,13,173,0.4)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(138,43,226,0.6)] hover:-translate-y-1 group"
    >
      <span className="relative z-10">{text}</span>
      <div className="absolute inset-0 opacity-0 bg-gradient-to-r from-[#8a2be2] to-[#4a1a7a] group-hover:opacity-100 transition-opacity duration-300"></div>
    </a>
  );
};

export default Index;
