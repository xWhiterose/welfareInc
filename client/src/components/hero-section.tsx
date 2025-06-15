import MarqueeBanner from "./marqueeBanner";
import welfareIncLogo from "@assets/Welfare Inc_1749965212950.png";

export default function HeroSection() {

  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center pb-12 relative pt-8 -mt-4 md:mt-10">
      {/* Logo Welfare Inc */}
      <div className="mb-8">
        <img 
          src={welfareIncLogo} 
          alt="Welfare Inc" 
          className="w-96 md:w-[500px] lg:w-[600px] h-auto object-contain"
        />
      </div>
      
      <h1 className="text-4xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight mt-8 md:mt-0">
        AI infrastructure for modern attention
      </h1>
      
      <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
        Built for the minds behind the scroll, powered by the tech that learns from it.
      </p>
      
      {/* Marquee Banner replacing partner logos */}
      <div className="w-full max-w-5xl mb-8">
        <MarqueeBanner />
      </div>
      
      {/* Clean mouse scroll icon - positioned in main container, visible on screen */}
      <div className="md:-mt-2 mb-4 flex justify-center">
        <div 
          className="clean-mouse-icon cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="mouse-body">
            <div className="mouse-wheel"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
