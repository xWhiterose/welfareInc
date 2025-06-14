import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ScrollSection from "@/components/scroll-section";
import MouseScrollIndicator from "@/components/mouse-scroll-indicator";
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



      {/* SOURIS SCROLL - Version finale garantie visible */}
      <div 
        id="scroll-mouse-container"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 99999999,
          pointerEvents: 'none'
        }}
      >
        {/* Ligne pointillée conditionnelle */}
        {scrollY > 100 && !visibleSections.has('final') && (
          <div style={{
            position: 'absolute',
            bottom: '60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '40px',
            background: 'repeating-linear-gradient(white 0, white 4px, transparent 4px, transparent 8px)',
            opacity: 0.8
          }} />
        )}
        
        {/* Icône souris toujours visible sauf final */}
        {!visibleSections.has('final') && (
          <div 
            style={{
              position: 'relative',
              width: '24px',
              height: '38px',
              border: '3px solid white',
              borderRadius: '12px',
              backgroundColor: 'rgba(0,0,0,0.5)',
              cursor: 'pointer',
              pointerEvents: 'auto',
              boxShadow: '0 0 20px rgba(255,255,255,0.7)',
              animation: 'pulse 2s infinite'
            }}
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <div style={{
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '3px',
              height: '6px',
              backgroundColor: 'white',
              borderRadius: '2px',
              animation: 'bounce 2s infinite'
            }} />
          </div>
        )}
      </div>
    </div>
  );
}
