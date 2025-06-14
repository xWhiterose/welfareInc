import { useEffect, useState } from "react";

export default function PersistentMouse() {
  const [isVisible] = useState(true); // Toujours visible

  // Souris toujours visible - pas de condition de masquage
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Masquer seulement sur la page finale avec le footer
  //     const finalSection = document.getElementById('final');
  //     if (finalSection) {
  //       const rect = finalSection.getBoundingClientRect();
  //       // Masquer quand on arrive vraiment au footer
  //       setIsVisible(rect.top > window.innerHeight * 0.8);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   handleScroll(); // Check initial state
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

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
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
        <path fill="none" stroke="rgba(255, 255, 255, 0.9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4zm6 0v4"/>
      </svg>
    </div>
  );
}