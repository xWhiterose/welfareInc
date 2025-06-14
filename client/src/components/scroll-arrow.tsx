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
      {/* Simple mouse icon */}
      <div className="scroll-mouse w-4 h-6 border-2 border-white rounded-full relative bg-transparent">
        {/* Mouse wheel */}
        <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-white rounded-full opacity-80"></div>
      </div>
    </div>
  );
}
