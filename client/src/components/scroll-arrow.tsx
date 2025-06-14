import { useEffect, useState } from "react";

export default function ScrollArrow() {
  const [isVisible, setIsVisible] = useState(true);
  const [transform, setTransform] = useState('translateY(0)');

  useEffect(() => {
    const handleScroll = () => {
      const finalSection = document.getElementById('final');
      if (finalSection) {
        const rect = finalSection.getBoundingClientRect();
        const isAtFinal = rect.top < window.innerHeight * 0.7;
        
        if (isAtFinal && isVisible) {
          // Slide up and hide
          setTransform('translateY(-100px)');
          setTimeout(() => setIsVisible(false), 300);
        } else if (!isAtFinal && !isVisible) {
          // Show and slide down from top
          setIsVisible(true);
          setTransform('translateY(-100px)');
          setTimeout(() => setTransform('translateY(0)'), 50);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer transition-transform duration-300 ease-out"
      style={{ transform: `translateX(-50%) ${transform}` }}
      onClick={handleClick}
    >
      {/* Mouse icon with glow effect */}
      <div className="relative">
        <div className="scroll-mouse w-6 h-9 border-2 border-white rounded-full relative bg-transparent shadow-lg">
          {/* Mouse wheel with blinking effect */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-white rounded-full opacity-80 animate-pulse"></div>
          {/* Outer glow */}
          <div className="absolute inset-0 border-2 border-white rounded-full animate-ping opacity-20"></div>
        </div>
        {/* Additional glow ring */}
        <div className="absolute inset-0 border border-white rounded-full scale-150 animate-pulse opacity-10"></div>
      </div>
    </div>
  );
}
