import { useState } from 'react';
import believeIcon from '@assets/106754627-removebg-preview_1749869236336.png';
import xIcon from '@assets/X_logo-removebg-preview_1749869236337.png';
import dexIcon from '@assets/VbsAGp5U_400x400-removebg-preview_1749869236337.png';

interface ScrollSectionProps {
  id: string;
  text: string;
  isVisible: boolean;
  isFinal?: boolean;
}

export default function ScrollSection({ id, text, isVisible, isFinal = false }: ScrollSectionProps) {
  const [showCopied, setShowCopied] = useState(false);
  const codeValue = "h6ulh57bvurltn4zepaxpr6e6afw8wnxzvfbzfyjzrgg";

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(`CA: ${codeValue}`);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (isFinal) {
    return (
      <section 
        className="flex flex-col justify-between items-center w-full"
        id={id}
        style={{ 
          minHeight: '100vh', 
          height: '100vh',
          maxWidth: '100vw',
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}
      >
        {/* Main text centered in the middle */}
        <div className="flex-1 flex items-center justify-center w-full px-4 md:px-8">
          <h2 className={`font-semibold text-white leading-relaxed text-3xl md:text-2xl lg:text-4xl xl:text-5xl text-center transition-all duration-2000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
          }`} style={{ 
            width: '100%', 
            maxWidth: 'none',
            wordWrap: 'break-word', 
            overflowWrap: 'break-word',
            userSelect: 'none'
          }}>
            {text}
          </h2>
        </div>
        
        {/* Elegant blurred footer */}

      </section>
    );
  }

  return (
    <section 
      className="flex items-center justify-center" 
      id={id}
      style={{ 
        minHeight: '200vh',
        width: '100vw',
        padding: '0 2rem'
      }}
    >
      <h2 className={`font-bold text-white leading-relaxed text-4xl lg:text-6xl text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-16 scale-95'
      }`} style={{ width: '100%', maxWidth: 'none' }}>
        {text}
      </h2>
    </section>
  );
}
