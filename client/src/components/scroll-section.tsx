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
        <div className="flex-1 flex items-center justify-center w-full px-8">
          <h2 className={`font-semibold text-white leading-relaxed text-2xl lg:text-4xl xl:text-5xl text-center transition-all duration-2000 ${
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
        <div className={`w-full transition-all duration-2000 delay-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0 animate-slide-up' : 'opacity-0 transform translate-y-full'
        }`}>
          <div className="relative bg-gradient-to-r from-black/10 via-green-900/20 to-black/10 backdrop-blur-xl border-t border-white/5 py-8">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            
            <div className="relative z-10 max-w-6xl mx-auto px-6">
              {/* Desktop Layout */}
              <div className="hidden lg:flex justify-between items-center">
                {/* Left side - Company info + links */}
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white tracking-wide mb-1">Welfare Capital</h3>
                  <p className="text-green-300/80 text-sm tracking-wide mb-3">Corporate Excellence & Innovation</p>
                  <div className="flex space-x-6 text-sm">
                    <span className="text-white/60 hover:text-white/80 transition-colors cursor-pointer">Privacy</span>
                    <span className="text-white/60 hover:text-white/80 transition-colors cursor-pointer">Terms</span>
                    <span className="text-white/60 hover:text-white/80 transition-colors cursor-pointer">Contact</span>
                  </div>
                </div>
                
                {/* Center - Code */}
                <div className="flex-1 flex justify-center">
                  <div 
                    className="relative cursor-pointer text-center group"
                    onClick={handleCopyCode}
                  >
                    <div className="text-white/80 text-lg font-mono hover:text-white transition-colors font-semibold">
                      CA: {codeValue}
                    </div>
                    {showCopied && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        Copied!
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Right side - Social icons */}
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200 cursor-pointer overflow-hidden">
                    <img src={believeIcon} alt="Believe" className="w-8 h-8 opacity-90 filter brightness-0 invert" />
                  </div>
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200 cursor-pointer overflow-hidden">
                    <img src={xIcon} alt="X" className="w-8 h-8 opacity-90 filter brightness-0 invert" />
                  </div>
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200 cursor-pointer overflow-hidden">
                    <img src={dexIcon} alt="DexScreener" className="w-8 h-8 opacity-90 filter brightness-0 invert" />
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden flex flex-col items-center space-y-4">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white tracking-wide mb-1">Welfare Capital</h3>
                  <p className="text-green-300/80 text-sm tracking-wide">Corporate Excellence & Innovation</p>
                </div>
                
                <div 
                  className="cursor-pointer text-center group"
                  onClick={handleCopyCode}
                >
                  <div className="text-white/80 text-lg font-mono hover:text-white transition-colors font-semibold">
                    CA: {codeValue}
                  </div>
                  {showCopied && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Copied!
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200 cursor-pointer overflow-hidden">
                    <img src={believeIcon} alt="Believe" className="w-8 h-8 opacity-90 filter brightness-0 invert" />
                  </div>
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200 cursor-pointer overflow-hidden">
                    <img src={xIcon} alt="X" className="w-8 h-8 opacity-90 filter brightness-0 invert" />
                  </div>
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200 cursor-pointer overflow-hidden">
                    <img src={dexIcon} alt="DexScreener" className="w-8 h-8 opacity-90 filter brightness-0 invert" />
                  </div>
                </div>
                
                <div className="flex space-x-6 text-sm">
                  <span className="text-white/60 hover:text-white/80 transition-colors cursor-pointer">Privacy</span>
                  <span className="text-white/60 hover:text-white/80 transition-colors cursor-pointer">Terms</span>
                  <span className="text-white/60 hover:text-white/80 transition-colors cursor-pointer">Contact</span>
                </div>
              </div>
            </div>
            
            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
          </div>
        </div>
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
