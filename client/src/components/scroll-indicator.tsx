import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const finalSection = document.getElementById('final');
      if (finalSection) {
        const rect = finalSection.getBoundingClientRect();
        // Masquer quand on arrive au footer
        setIsVisible(rect.top > window.innerHeight * 0.5);
      }
      
      // Afficher la ligne quand on scroll
      setShowLine(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Ligne pointillée qui apparaît au scroll */}
      {showLine && (
        <div 
          style={{
            position: 'fixed',
            bottom: '70px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '60px',
            backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 50%, transparent 50%)',
            backgroundSize: '2px 6px',
            backgroundRepeat: 'repeat-y',
            zIndex: 10000,
            opacity: 0.8
          }}
        />
      )}
      
      {/* Icône souris plus petite */}
      <div 
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '20px',
          height: '32px',
          border: '2px solid rgba(255,255,255,0.9)',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          cursor: 'pointer',
          zIndex: 10000,
          animation: 'pulse 2s infinite',
          backdropFilter: 'blur(4px)'
        }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        {/* Point de la souris */}
        <div 
          style={{
            position: 'absolute',
            top: '6px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '6px',
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: '1px',
            animation: 'bounce 2s infinite'
          }}
        />
      </div>
    </>
  );
}