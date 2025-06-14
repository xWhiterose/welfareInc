export default function HeroSection() {
  const partnerLogos = [
    // Tinder logo
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 3l10 18h-4L5 3zM5 3v18h4V10.5M19 21V3h-4v10.5"/></svg>,
    // Instagram logo
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"/></g></svg>,
    // X/Twitter logo
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 4l11.733 16H20L8.267 4zm0 16l6.768-6.768m2.46-2.46L20 4"/></svg>,
    // TikTok logo
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 7.917v4.034A9.95 9.95 0 0 1 16 10v4.5a6.5 6.5 0 1 1-8-6.326V12.5a2.5 2.5 0 1 0 4 2V3h4.083A6.005 6.005 0 0 0 21 7.917"/></svg>,
    // Spark logo
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.918 8.174c2.56 4.982.501 11.656-5.38 12.626C5.836 22.487.698 13.084 6.484 7.571C6.793 7.266 7.645 6.476 8 6.222c0 .528.27 3.475 1 3.167c3 0 4-4.222 3.587-7.389c2.7 1.411 4.987 3.376 6.331 6.174"/></svg>
  ];

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
      
      <p className="text-lg text-gray-300 mb-12 max-w-2xl leading-relaxed">
        Designed to help individuals unify and manage their online presence across major platforms with clarity and consistency.
      </p>
      
      {/* Partner Logos */}
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-70 max-w-full">
        {partnerLogos.map((logo, index) => (
          <div 
            key={index} 
            className="text-green-300 hover:text-green-100 hover:drop-shadow-lg transition-all duration-500 transform hover:scale-125 animate-fade-in"
            style={{
              animationDelay: `${index * 0.2}s`,
              animationFillMode: 'both'
            }}
          >
            {logo}
          </div>
        ))}
      </div>
      
      {/* Clean mouse scroll icon - positioned very low */}
      <div className="mt-32 mb-8 flex justify-center">
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
