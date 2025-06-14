interface ScrollSectionProps {
  id: string;
  text: string;
  isVisible: boolean;
  isFinal?: boolean;
}

export default function ScrollSection({ id, text, isVisible, isFinal = false }: ScrollSectionProps) {
  return (
    <section 
      className={`flex ${isFinal ? 'flex-col' : ''} items-center justify-center`}
      id={id}
      style={{ minHeight: '200vh' }}
    >
      <div className={`text-center transition-all duration-1500 ${
        isVisible ? 'opacity-100 transform translate-y-0 fade-in-up' : 'opacity-0 transform translate-y-12'
      } ${isFinal ? 'max-w-5xl px-6 flex-1 flex items-center justify-center' : ''}`}>
        <h2 className={`font-bold text-white leading-relaxed ${
          isFinal ? 'text-3xl lg:text-5xl text-glow' : 'text-4xl lg:text-6xl slide-in-left'
        } ${isVisible ? 'animation-delay-300' : ''}`}>
          {isFinal ? `"${text}"` : text}
        </h2>
      </div>
      
      {isFinal && (
        <div className={`w-full py-8 transition-all duration-1500 delay-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <div className="text-center">
            <div className="bg-black bg-opacity-30 backdrop-blur-sm border-t border-white border-opacity-10 py-6 rounded-lg mx-6">
              <h3 className="text-2xl font-bold text-white">Welfare Capital</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
