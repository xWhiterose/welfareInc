import MarqueeBanner from "./marqueeBanner";

export default function HeroSection() {

  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center px-6 pb-12">
      <div className="mb-6">
        <div className="bg-green-500 bg-opacity-20 border border-green-400 text-green-300 mb-8 px-4 py-2 rounded-full text-sm inline-block">
          Limited beta in testing
        </div>
      </div>
      
      <h1 className="text-4xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight">
        Unified Social Experience Architecture
      </h1>
      
      <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
        Designed to help individuals unify and manage their online presence across major platforms with clarity and consistency.
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
