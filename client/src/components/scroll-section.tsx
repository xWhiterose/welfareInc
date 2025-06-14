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
        className="flex flex-col justify-between items-center overflow-x-hidden"
        id={id}
        style={{ minHeight: '100vh', height: '100vh' }}
      >
        {/* Main text centered in the middle */}
        <div className="flex-1 flex items-center justify-center w-full px-4">
          <div className={`text-center transition-all duration-2000 max-w-4xl ${
            isVisible ? 'opacity-100 transform translate-y-0 fade-in-up' : 'opacity-0 transform translate-y-12'
          }`}>
            <h2 className={`font-bold text-white leading-relaxed text-xl lg:text-3xl xl:text-4xl ${
              isVisible ? 'pulse-glow' : ''
            }`}>
              "{text}"
            </h2>
          </div>
        </div>
        
        {/* Compact footer at bottom */}
        <div className={`w-full transition-all duration-2000 delay-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 bg-opacity-30 backdrop-blur-sm border-t border-white border-opacity-10 py-4">
            <div className="container mx-auto px-6 text-center">
              <h3 className="text-xl font-bold text-white tracking-wide">Welfare Capital</h3>
              <p className="text-gray-300 text-xs uppercase tracking-wide mt-1">Corporate Excellence</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="flex items-center justify-center" 
      id={id}
      style={{ minHeight: '200vh' }}
    >
      <div className={`text-center transition-all duration-2000 ${
        isVisible ? 'opacity-100 transform translate-y-0 fade-in-up' : 'opacity-0 transform translate-y-12'
      }`}>
        <h2 className={`font-bold text-white leading-relaxed text-4xl lg:text-6xl ${
          isVisible ? 'slide-in-dynamic' : ''
        }`}>
          {text}
        </h2>
      </div>
    </section>
  );
}
