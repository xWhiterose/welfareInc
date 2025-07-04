import { useState } from "react";
import welfareIncLogo from "@assets/Welfarelogo.png";
import dexIcon from "@assets/DSlogo.png";
import xIcon from "@assets/Xlogo.png";
import believeIcon from "@assets/Believelogo.png";

export default function Footer() {
  const [showCopied, setShowCopied] = useState(false);
  const codeValue = "";

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeValue);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-20 backdrop-blur-sm border-t border-white border-opacity-10 py-4 z-40 w-full">
      <div className="container mx-auto px-6 md:px-6 px-2 w-full">
        {/* Version Desktop */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo à gauche */}
          <div className="flex-shrink-0">
            <img
              src={welfareIncLogo}
              alt="Welfare Inc"
              className="w-24 md:w-32 h-auto object-contain"
            />
          </div>

          {/* Code CA au centre */}
          <div className="flex-1 flex justify-center">
            <div
              className="relative cursor-pointer text-center group"
              onClick={handleCopyCode}
            >
              <div className="text-white/80 text-xs md:text-base font-mono hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 font-semibold">
                 {codeValue}
              </div>
              {showCopied && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Copied!
                </div>
              )}
            </div>
          </div>

          {/* Trois boutons à droite */}
          <div className="flex space-x-3 flex-shrink-0 p-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:shadow-lg hover:shadow-green-400/40 transition-all duration-200 cursor-pointer">
              <a
                href="https://believe.welfare.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
              >
                <img
                  src={believeIcon}
                  alt="Believe"
                  className="w-4 h-4 md:w-6 md:h-6 opacity-90 filter brightness-0 invert"
                />
              </a>
            </div>

            <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:shadow-lg hover:shadow-green-400/40 transition-all duration-200 cursor-pointer">
              <a
                href="https://twitter.com/intent/follow?screen_name=welfareinc_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
              >
                <img
                  src={xIcon}
                  alt="X"
                  className="w-4 h-4 md:w-6 md:h-6 opacity-90 filter brightness-0 invert"
                />
              </a>
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:shadow-lg hover:shadow-green-400/40 transition-all duration-200 cursor-pointer">
              <a
                href="https://dexscreener.com/solana/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
              >
                <img
                  src={dexIcon}
                  alt="DexScreener"
                  className="w-4 h-4 md:w-6 md:h-6 opacity-90 filter brightness-0 invert"
                />
              </a>
            </div>

          </div>
        </div>

        {/* Version Mobile */}
        <div className="md:hidden flex flex-col items-center space-y-4">
          {/* Logo et boutons en haut */}
          <div className="flex items-center justify-between w-full">
            {/* Logo à gauche */}
            <div>
              <img
                src={welfareIncLogo}
                alt="Welfare Inc"
                className="w-20 h-auto object-contain"
              />
            </div>

            {/* Trois boutons à droite */}
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:shadow-lg hover:shadow-green-400/40 transition-all duration-200 cursor-pointer">
                <img src={believeIcon} alt="Believe" className="w-4 h-4 opacity-90 filter brightness-0 invert" />
              </div>
              <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:shadow-lg hover:shadow-green-400/40 transition-all duration-200 cursor-pointer">
                <img src={xIcon} alt="X" className="w-4 h-4 opacity-90 filter brightness-0 invert" />
              </div>
              <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:shadow-lg hover:shadow-green-400/40 transition-all duration-200 cursor-pointer">
                <img src={dexIcon} alt="DexScreener" className="w-4 h-4 opacity-90 filter brightness-0 invert" />
              </div>
            </div>
          </div>

          {/* Code CA centré en bas */}
          <div
            className="relative cursor-pointer text-center group w-full"
            onClick={handleCopyCode}
          >
            <div className="text-white/80 text-xs font-mono hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              {codeValue}
            </div>
            {showCopied && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Copied!
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
