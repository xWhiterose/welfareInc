import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ScrollArrow() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const finalSection = document.getElementById('final');
      if (finalSection) {
        const rect = finalSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) {
          setOpacity(0.2);
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
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 scroll-arrow cursor-pointer transition-opacity duration-300"
      style={{ opacity }}
      onClick={handleClick}
    >
      <div className="bg-white bg-opacity-20 rounded-full p-3 hover:bg-opacity-30 transition-all duration-300">
        <ChevronDown className="text-white w-6 h-6" />
      </div>
    </div>
  );
}
