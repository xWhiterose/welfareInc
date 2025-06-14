import { useEffect, useState } from "react";

export default function MouseScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Masquer sur la page finale
      const finalSection = document.getElementById('final');
      if (finalSection) {
        const rect = finalSection.getBoundingClientRect();
        setIsVisible(rect.top > window.innerHeight * 0.5);
      }
      
      // Afficher la ligne après un peu de scroll
      setShowLine(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // État initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Ligne pointillée qui apparaît au scroll */}
      {showLine && (
        <div 
          className="fixed pointer-events-none"
          style={{
            bottom: '85px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '45px',
            background: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.8) 0px, rgba(255,255,255,0.8) 4px, transparent 4px, transparent 8px)',
            zIndex: 10000,
            opacity: 0.9
          }}
        />
      )}
      
      {/* Icône souris avec animations */}
      <div 
        className="fixed cursor-pointer mouse-indicator"
        style={{
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '26px',
          height: '40px',
          border: '3px solid rgba(255,255,255,0.95)',
          borderRadius: '13px',
          backgroundColor: 'rgba(0,0,0,0.25)',
          backdropFilter: 'blur(6px)',
          boxShadow: '0 0 20px rgba(255,255,255,0.4), inset 0 0 10px rgba(255,255,255,0.1)',
          zIndex: 10000,
          transition: 'all 0.3s ease'
        }}
        onClick={handleClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateX(-50%) scale(1.1)';
          e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.6), inset 0 0 15px rgba(255,255,255,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(255,255,255,0.4), inset 0 0 10px rgba(255,255,255,0.1)';
        }}
      >
        {/* Point central qui bouge */}
        <div 
          className="mouse-dot"
          style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '3px',
            height: '7px',
            backgroundColor: 'rgba(255,255,255,0.95)',
            borderRadius: '2px',
            animation: 'mouseDotBounce 2.5s ease-in-out infinite'
          }}
        />
      </div>
    </>
  );
}