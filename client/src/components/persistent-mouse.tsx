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
      className="clean-mouse-icon cursor-pointer"
      style={{
        position: 'fixed',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999
      }}
      onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <div className="mouse-body">
        <div className="mouse-wheel"></div>
      </div>
    </div>
  );
}