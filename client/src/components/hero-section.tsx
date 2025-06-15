import { useEffect } from 'react';

export default function HeroSection() {
  useEffect(() => {
    // Set up marquee duplication for infinite scroll
    const marqueeContent = document.querySelector(".marquee-content");
    if (marqueeContent) {
      const children = Array.from(marqueeContent.children);
      const elementsDisplayed = getComputedStyle(document.documentElement)
        .getPropertyValue("--marquee-elements-displayed");
      
      document.documentElement.style.setProperty("--marquee-elements", children.length.toString());
      
      // Duplicate elements for seamless loop
      for(let i = 0; i < parseInt(elementsDisplayed); i++) {
        if (children[i]) {
          marqueeContent.appendChild(children[i].cloneNode(true));
        }
      }
    }
  }, []);

  const partnerLogos = [
    // Tinder logo
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="m9 3l10 18h-4L5 3zM5 3v18h4V10.5M19 21V3h-4v10.5"/>
    </svg>,
    // Instagram logo  
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/>
      <circle cx="12" cy="12" r="3"/>
      <circle cx="17.5" cy="6.5" r=".5"/>
    </svg>,
    // X/Twitter logo
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="m4 4l11.733 16H20L8.267 4zm0 16l6.768-6.768m2.46-2.46L20 4"/>
    </svg>,
    // TikTok logo
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 7.917v4.034A9.95 9.95 0 0 1 16 10v4.5a6.5 6.5 0 1 1-8-6.326V12.5a2.5 2.5 0 1 0 4 2V3h4.083A6.005 6.005 0 0 0 21 7.917"/>
    </svg>,
    // Spark logo
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.918 8.174c2.56 4.982.501 11.656-5.38 12.626C5.836 22.487.698 13.084 6.484 7.571C6.793 7.266 7.645 6.476 8 6.222c0 .528.27 3.475 1 3.167c3 0 4-4.222 3.587-7.389c2.7 1.411 4.987 3.376 6.331 6.174"/>
    </svg>,
    // LinkedIn logo
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>,
    // Discord logo
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
    </svg>,
    // GitHub logo
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
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
      
      {/* Partner Logos Marquee */}
      <div className="partner-marquee">
        <ul className="marquee-content">
          {partnerLogos.map((logo, index) => (
            <li key={index}>
              <div className="logo-container">
                {logo}
              </div>
            </li>
          ))}
        </ul>
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
