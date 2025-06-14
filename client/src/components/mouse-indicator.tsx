import { useEffect, useState } from "react";

interface MouseIndicatorProps {
  onHideFinal?: boolean;
}

export default function MouseIndicator({ onHideFinal = false }: MouseIndicatorProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (onHideFinal) {
        const finalSection = document.getElementById('final');
        if (finalSection) {
          const rect = finalSection.getBoundingClientRect();
          setIsVisible(rect.top > window.innerHeight * 0.5);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onHideFinal]);

  const handleClick = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 999999 }}>
      {/* Ligne pointillée qui apparaît au scroll */}
      {scrollY > 100 && (
        <div 
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '40px',
            background: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.9) 4px, transparent 4px, transparent 8px)',
            opacity: 0.8,
            animation: 'fadeIn 0.3s ease-in-out'
          }}
        />
      )}
      
      {/* Icône souris */}
      <div 
        className="pointer-events-auto cursor-pointer"
        style={{
          position: 'absolute',
          bottom: '25px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '24px',
          height: '38px',
          border: '3px solid rgba(255,255,255,0.9)',
          borderRadius: '12px',
          backgroundColor: 'rgba(0,0,0,0.3)',
          boxShadow: '0 0 15px rgba(255,255,255,0.6)',
          backdropFilter: 'blur(4px)',
          animation: 'mousePulse 2s infinite ease-in-out'
        }}
        onClick={handleClick}
      >
        {/* Point de la souris */}
        <div 
          style={{
            position: 'absolute',
            top: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '3px',
            height: '6px',
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: '2px',
            animation: 'mouseDotBounce 2s infinite ease-in-out'
          }}
        />
      </div>
    </div>
  );
}