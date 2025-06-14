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
        className="flex flex-col justify-center items-center min-h-screen"
        id={id}
        style={{ minHeight: '200vh' }}
      >
        {/* Main text centered */}
        <div className={`text-center transition-all duration-2000 flex-1 flex items-center justify-center ${
          isVisible ? 'opacity-100 transform translate-y-0 fade-in-up' : 'opacity-0 transform translate-y-12'
        }`}>
          <h2 className={`font-bold text-white leading-relaxed text-3xl lg:text-5xl max-w-5xl px-6 ${
            isVisible ? 'pulse-glow' : ''
          }`}>
            "{text}"
          </h2>
        </div>
        
        {/* Footer at bottom */}
        <div className={`w-full transition-all duration-2000 delay-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 bg-opacity-40 backdrop-blur-md border-t border-white border-opacity-20 py-8">
            <div className="container mx-auto px-6 text-center">
              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-3xl font-bold text-white tracking-wide">Welfare Capital</h3>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
                <p className="text-gray-300 text-sm uppercase tracking-widest">Corporate Excellence</p>
              </div>
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
