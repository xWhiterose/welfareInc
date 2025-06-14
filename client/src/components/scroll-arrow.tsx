import { useEffect, useState } from "react";

export default function ScrollArrow() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const finalSection = document.getElementById('final');
      if (finalSection) {
        const rect = finalSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) {
          setOpacity(0.1);
        } else {
          setOpacity(1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
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
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer transition-opacity duration-300"
      style={{ opacity }}
      onClick={handleClick}
    >
      <div className="scroll-mouse bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-20">
        {/* Mouse body */}
        <div className="w-6 h-10 border-2 border-white rounded-full relative">
          {/* Mouse wheel */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-white rounded-full opacity-70"></div>
        </div>
      </div>
    </div>
  );
}
