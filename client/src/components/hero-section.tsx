import MarqueeBanner from "./marqueeBanner";

export default function HeroSection() {

  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center pb-12 relative">
      {/* Bouton supérieur droit */}
      <div className="fixed top-6 right-6 md:top-8 md:right-12 lg:right-20 z-50">
        <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:translate-y-1">
          Join Network
        </button>
      </div>
      
      <div className="mb-6">
        <div className="bg-green-500 bg-opacity-20 border border-green-400 text-green-300 mb-8 px-4 py-2 rounded-full text-sm inline-block">
          Limited beta in testing
        </div>
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
