import { useEffect, useState } from "react";

export default function MouseScrollIndicator() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Masquer quand on arrive au footer
      const finalSection = document.getElementById('final');
      if (finalSection) {
        const rect = finalSection.getBoundingClientRect();
        setIsVisible(rect.top > window.innerHeight * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div 
      className="mouse-scroll-container"
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 999999,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      onClick={handleClick}
    >
      {/* Ligne pointillée qui apparaît au scroll */}
      {scrollY > 100 && (
        <div 
          className="scroll-line"
          style={{
            width: '2px',
            height: '50px',
            background: 'repeating-linear-gradient(to bottom, white 0px, white 4px, transparent 4px, transparent 8px)',
            marginBottom: '16px',
            opacity: 0.8,
            animation: 'fadeIn 0.3s ease-in'
          }}
        />
      )}
      
      {/* Icône souris */}
      <div 
        className="mouse-icon"
        style={{
          width: '28px',
          height: '45px',
          border: '3px solid white',
          borderRadius: '14px',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          position: 'relative',
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(6px)',
          animation: 'mousePulse 2s infinite ease-in-out'
        }}
      >
        {/* Molette de la souris */}
        <div 
          className="mouse-wheel"
          style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '3px',
            height: '8px',
            backgroundColor: 'white',
            borderRadius: '2px',
            animation: 'mouseWheelBounce 2s infinite ease-in-out'
          }}
        />
      </div>
      
      {/* Texte indicatif */}
      <div 
        style={{
          marginTop: '8px',
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '10px',
          fontWeight: '600',
          letterSpacing: '1px',
          animation: 'textPulse 2s infinite ease-in-out'
        }}
      >
        SCROLL
      </div>
    </div>
  );
}