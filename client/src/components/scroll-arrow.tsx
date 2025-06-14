import { useEffect, useState } from "react";

export default function ScrollArrow() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const finalSection = document.getElementById('final');
      if (finalSection) {
        const rect = finalSection.getBoundingClientRect();
        // Hide only when final section is fully visible
        setIsVisible(rect.top > window.innerHeight * 0.5);
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

  return (
    <div 
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer transition-all duration-300 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      }`}
      onClick={handleClick}
    >
      {/* Mouse icon with glow effect */}
      <div className="relative flex items-center justify-center">
        <div className="scroll-mouse w-6 h-9 border-2 border-white rounded-full relative bg-transparent shadow-lg">
          {/* Mouse wheel with blinking effect */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-white rounded-full animate-pulse"></div>
          {/* Outer glow */}
          <div className="absolute inset-0 border-2 border-white rounded-full animate-ping opacity-20"></div>
        </div>
        {/* Additional glow ring */}
        <div className="absolute inset-0 border border-white rounded-full scale-150 animate-pulse opacity-10"></div>
      </div>
    </div>
  );
}
