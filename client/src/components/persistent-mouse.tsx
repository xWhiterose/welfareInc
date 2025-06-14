import { useEffect, useState } from "react";

export default function PersistentMouse() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Masquer seulement quand on atteint le footer final
      const finalSection = document.getElementById('final');
      if (finalSection) {
        const rect = finalSection.getBoundingClientRect();
        // Masquer quand on arrive vers la fin
        setIsVisible(rect.top > window.innerHeight * 0.3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="mouse-scroll-icon cursor-pointer"
      style={{
        position: 'fixed',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999
      }}
      onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="28" 
        height="28" 
        viewBox="0 0 24 24"
        style={{
          color: '#ffffff',
          filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))'
        }}
      >
        <path 
          fill="rgba(255, 255, 255, 0.9)" 
          stroke="none"
          d="M6 7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4zm6 0v4"
        />
      </svg>
    </div>
  );
}