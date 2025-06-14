import { useEffect, useState } from "react";

export default function PersistentMouse() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Masquer seulement sur la page finale avec le footer
      const finalSection = document.getElementById('final');
      if (finalSection) {
        const rect = finalSection.getBoundingClientRect();
        // Masquer quand on arrive vraiment au footer
        setIsVisible(rect.top > window.innerHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="clean-mouse-icon cursor-pointer"
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 99999,
        pointerEvents: 'auto'
      }}
      onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <div className="mouse-body">
        <div className="mouse-wheel"></div>
      </div>
    </div>
  );
}