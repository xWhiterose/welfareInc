interface ScrollSectionProps {
  id: string;
  text: string;
  isVisible: boolean;
  isFinal?: boolean;
}

export default function ScrollSection({ id, text, isVisible, isFinal = false }: ScrollSectionProps) {
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
        <div className="flex-1 flex items-center justify-center w-full px-4 box-border">
          <div className={`text-center transition-all duration-2000 w-full max-w-4xl ${
            isVisible ? 'opacity-100 transform translate-y-0 fade-in-up' : 'opacity-0 transform translate-y-12'
          }`}>
            <h2 className={`font-semibold text-white leading-relaxed text-2xl lg:text-4xl xl:text-5xl transition-transform duration-300 hover:scale-105 w-full ${
              isVisible ? '' : ''
            }`}
            style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
              {text}
            </h2>
          </div>
        </div>
        
        {/* Elegant blurred footer */}
        <div className={`w-full transition-all duration-2000 delay-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <div className="relative bg-gradient-to-r from-black/10 via-green-900/20 to-black/10 backdrop-blur-xl border-t border-white/5 py-8">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            
            <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
              {/* Left side - Company info */}
              <div className="text-center lg:text-left mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold text-white tracking-wide mb-1">Welfare Capital</h3>
                <p className="text-green-300/80 text-sm tracking-wide">Corporate Excellence & Innovation</p>
              </div>
              
              {/* Right side - Subtle links */}
              <div className="flex space-x-6 text-sm">
                <span className="text-white/60 hover:text-white/80 transition-colors cursor-pointer">Privacy</span>
                <span className="text-white/60 hover:text-white/80 transition-colors cursor-pointer">Terms</span>
                <span className="text-white/60 hover:text-white/80 transition-colors cursor-pointer">Contact</span>
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
      className="flex items-center justify-center w-full px-4 box-border" 
      id={id}
      style={{ 
        minHeight: '200vh',
        width: '100%',
        maxWidth: '100vw'
      }}
    >
      <div className={`text-center transition-all duration-2000 w-full max-w-7xl ${
        isVisible ? 'opacity-100 transform translate-y-0 fade-in-up' : 'opacity-0 transform translate-y-12'
      }`}>
        <h2 className={`font-bold text-white leading-relaxed text-4xl lg:text-6xl w-full ${
          isVisible ? 'slide-in-dynamic' : ''
        }`}>
          {text}
        </h2>
      </div>
    </section>
  );
}
