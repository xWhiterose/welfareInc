interface ScrollSectionProps {
  id: string;
  text: string;
  isVisible: boolean;
  isFinal?: boolean;
}

export default function ScrollSection({ id, text, isVisible, isFinal = false }: ScrollSectionProps) {
  return (
    <section 
      className="flex items-center justify-center" 
      id={id}
      style={{ minHeight: '200vh' }}
    >
      <div className={`text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
      } ${isFinal ? 'max-w-4xl px-6' : ''}`}>
        <h2 className={`font-bold text-white leading-relaxed ${
          isFinal ? 'text-3xl lg:text-5xl' : 'text-4xl lg:text-6xl'
        }`}>
          {isFinal ? `"${text}"` : text}
        </h2>
      </div>
    </section>
  );
}
