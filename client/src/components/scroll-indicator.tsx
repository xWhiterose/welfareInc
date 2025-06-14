import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const finalSection = document.getElementById('final');
      if (finalSection) {
        const rect = finalSection.getBoundingClientRect();
        const shouldBeVisible = rect.top > window.innerHeight * 0.3;
        setIsVisible(shouldBeVisible);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
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
      className="fixed cursor-pointer"
      onClick={handleClick}
      style={{ 
        position: 'fixed', 
        bottom: '40px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Dotted line */}
      <div style={{ 
        width: '1px', 
        height: '60px',
        background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
        marginBottom: '16px',
        borderLeft: '1px dotted rgba(255, 255, 255, 0.6)'
      }}></div>
      
      {/* Mouse icon container with glow */}
      <div style={{ position: 'relative' }}>
        {/* Outer glow */}
        <div style={{
          position: 'absolute',
          top: '-4px',
          left: '-4px',
          right: '-4px',
          bottom: '-4px',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
          borderRadius: '16px',
          animation: 'pulse 2s ease-in-out infinite'
        }}></div>
        
        {/* Mouse body */}
        <div style={{
          width: '28px',
          height: '44px',
          border: '2px solid rgba(255, 255, 255, 0.9)',
          borderRadius: '14px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(8px)',
          position: 'relative'
        }}>
          {/* Mouse wheel with bounce animation */}
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '3px',
            height: '8px',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '2px',
            animation: 'bounce 2s ease-in-out infinite'
          }}></div>
        </div>
      </div>
      
      {/* Text hint */}
      <div style={{ 
        marginTop: '12px',
        color: 'rgba(255, 255, 255, 0.8)', 
        fontSize: '11px',
        fontWeight: '500',
        letterSpacing: '0.5px',
        animation: 'pulse 2s ease-in-out infinite'
      }}>
        SCROLL
      </div>
    </div>
  );
}