import MarqueeBanner from "./marqueeBanner";
import welfareIncLogo from "@assets/Welfare Inc._1749962854795.png";

export default function HeroSection() {

  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center pb-12 relative pt-12">
      
      {/* Logo PNG en haut */}
      <div className="mb-12 mt-8">
        <img 
          src={welfareIncLogo} 
          alt="Welfare Inc." 
          width="200" 
          height="120" 
          className="object-contain"
        />
      </div>
      
      <h1 className="text-4xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight">
        AI infrastructure for modern attention
      </h1>
      
      <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
        Built for the minds behind the scroll, powered by the tech that learns from it.
      </p>
      
      {/* Marquee Banner replacing partner logos */}
      <div className="w-full max-w-5xl mb-12">
        <MarqueeBanner />
      </div>
      
      {/* Clean mouse scroll icon - positioned at bottom */}
      <div className="mt-40 mb-4 flex justify-center">
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
