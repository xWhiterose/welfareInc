import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ScrollSection from "@/components/scroll-section";
import ScrollArrow from "@/components/scroll-arrow";
import Footer from "@/components/footer";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="section-content">
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
        text="Keep scrolling"
        isVisible={visibleSections.has('scroll2')}
      />

      <ScrollSection
        id="scroll3"
        text="Un dernier effort"
        isVisible={visibleSections.has('scroll3')}
      />

      <ScrollSection
        id="final"
        text="Voilà chez Welfare Capital c'est ce qu'on fait, on scroll, on scroll, tous les jours, toute la journée."
        isVisible={visibleSections.has('final')}
        isFinal={true}
      />

      <ScrollArrow />
    </div>
  );
}
