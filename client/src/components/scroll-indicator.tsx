import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const finalSection = document.getElementById('final');
      if (finalSection) {
        const rect = finalSection.getBoundingClientRect();
        setIsVisible(rect.top > window.innerHeight * 0.3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50 cursor-pointer"
      onClick={handleClick}
    >
      {/* Dotted line */}
      <div className="w-0 h-16 border-l-2 border-dotted border-white/50 mb-4"></div>
      
      {/* Mouse icon with blinking effect */}
      <div className="relative animate-pulse">
        <div className="relative w-6 h-10 border-2 border-white/80 rounded-xl bg-white/10 backdrop-blur-sm">
          {/* Mouse wheel/dot */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white/80 rounded-full animate-bounce"></div>
        </div>
        
        {/* Glow effect ring */}
        <div className="absolute inset-0 rounded-xl border-2 border-green-400/40 animate-ping"></div>
      </div>
      
      {/* Text hint */}
      <div className="mt-2 text-white/70 text-xs font-medium animate-pulse">
        Scroll
      </div>
    </div>
  );
}