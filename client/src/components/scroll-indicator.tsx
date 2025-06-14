interface ScrollIndicatorProps {
  isVisible?: boolean;
}

export default function ScrollIndicator({ isVisible = true }: ScrollIndicatorProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50 animate-pulse">
      {/* Dotted line */}
      <div className="w-0 h-16 border-l-2 border-dotted border-white/40 mb-4"></div>
      
      {/* Mouse icon with blinking effect */}
      <div className="relative">
        <div className="relative w-6 h-10 border-2 border-white/70 rounded-xl bg-white/5 backdrop-blur-sm">
          {/* Mouse wheel/dot */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white/70 rounded-full animate-bounce"></div>
        </div>
        
        {/* Glow effect ring */}
        <div className="absolute inset-0 rounded-xl border-2 border-green-400/30 animate-ping"></div>
      </div>
      
      {/* Text hint */}
      <div className="mt-3 text-white/60 text-xs font-medium">
        Scroll
      </div>
    </div>
  );
}