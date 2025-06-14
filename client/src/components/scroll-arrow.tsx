import { useEffect, useState } from "react";

export default function ScrollArrow() {
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
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative">
        <div className="w-6 h-9 border-2 border-white rounded-full relative bg-transparent shadow-lg">
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-white rounded-full animate-ping"></div>
          <div className="absolute inset-0 border-2 border-white rounded-full animate-pulse opacity-30"></div>
        </div>
        <div className="absolute inset-0 border border-white rounded-full scale-150 animate-pulse opacity-20"></div>
      </div>
    </div>
  );
}
