interface ScrollIndicatorProps {
  isVisible?: boolean;
}

export default function ScrollIndicator({ isVisible = true }: ScrollIndicatorProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
      {/* Dotted line */}
      <div className="w-px h-16 border-l-2 border-dotted border-white/30 mb-4"></div>
      
      {/* Mouse icon with blinking effect */}
      <div className="animate-pulse">
        <div className="relative w-6 h-10 border-2 border-white/60 rounded-full bg-white/10 backdrop-blur-sm">
          {/* Mouse wheel/dot */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-green-400/20 animate-ping"></div>
        </div>
      </div>
      
      {/* Text hint */}
      <div className="mt-2 text-white/50 text-xs animate-pulse">
        Scroll
      </div>
    </div>
  );
}