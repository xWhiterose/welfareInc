import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ScrollSection from "@/components/scroll-section";


import Footer from "@/components/footer";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      // Update scroll position
      setScrollY(window.scrollY);
      
      // Debounce scroll events for better performance
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sections = ['scroll1', 'scroll2', 'scroll3', 'final'];
        const newVisibleSections = new Set<string>();

        sections.forEach(sectionId => {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementVisible = 150;
            
            if (rect.top < window.innerHeight - elementVisible) {
              newVisibleSections.add(sectionId);
            }
          }
        });

        setVisibleSections(newVisibleSections);
      }, 16); // ~60fps
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="section-content" style={{ overflow: 'visible', position: 'relative' }}>
      {/* Homepage Section */}
      <section className="min-h-screen flex flex-col" id="homepage">
        <Navigation />
        <HeroSection />
      </section>

      {/* Scroll Sections */}
      <ScrollSection
        id="scroll1"
        text="Keep scrolling"
        isVisible={visibleSections.has('scroll1')}
      />

      <ScrollSection
        id="scroll2"
        text="Keep scrolling..."
        isVisible={visibleSections.has('scroll2')}
      />

      <ScrollSection
        id="scroll3"
        text="One last effort"
        isVisible={visibleSections.has('scroll3')}
      />

      <ScrollSection
        id="final"
        text="Here at Welfare Capital, this is what we do - we scroll, and scroll, all day, every day."
        isVisible={visibleSections.has('final')}
        isFinal={true}
      />

      {/* SOURIS FINALE - Icône souris avec ligne pointillée */}
      {!visibleSections.has('final') && (
        <>
          {/* Ligne pointillée qui apparaît au scroll */}
          {scrollY > 100 && (
            <div 
              style={{
                position: 'fixed',
                bottom: '80px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '2px',
                height: '40px',
                background: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.9) 4px, transparent 4px, transparent 8px)',
                zIndex: 999999,
                opacity: 0.8
              }}
            />
          )}
          
          {/* Icône souris - TOUJOURS visible */}
          <div 
            style={{
              position: 'fixed',
              bottom: '25px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '24px',
              height: '38px',
              border: '3px solid rgba(255,255,255,0.9)',
              borderRadius: '12px',
              backgroundColor: 'rgba(0,0,0,0.3)',
              cursor: 'pointer',
              zIndex: 999999,
              boxShadow: '0 0 15px rgba(255,255,255,0.6)',
              backdropFilter: 'blur(4px)'
            }}
            onClick={() => {
              console.log('Mouse scroll clicked!');
              window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            }}
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
                borderRadius: '2px'
              }}
            />
          </div>
        </>
      )}

    </div>
  );
}
