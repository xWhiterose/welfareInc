import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const codeValue = "h6ulh57bvurltn4zepaxpr6e6afw8wnxzvfbzfyjzrgg";

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(codeValue);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <nav className="flex justify-between items-center px-4 lg:px-8 py-6 max-w-full overflow-x-hidden">
      <div className="flex items-center relative">
        <div 
          className={`relative group cursor-pointer transition-all duration-300 ease-out ${
            isExpanded ? 'w-40' : 'w-8'
          } h-8 bg-green-500/40 backdrop-blur-md hover:bg-green-500/60 rounded-full flex items-center justify-center mr-3 overflow-hidden active:scale-95 active:bg-green-600/80 border border-white/10`}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          onClick={handleClick}
        >
          <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
          
          {/* Expanded text */}
          <div className={`ml-2 text-white text-xs font-medium whitespace-nowrap transition-all duration-300 ${
            isExpanded ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-2'
          }`}>
            CA: {codeValue}
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
            Click to copy: CA: {codeValue}
          </div>
        </div>
        
        {/* Copied notification */}
        {showCopied && (
          <div className="absolute left-4 top-16 bg-green-600 text-white px-3 py-1 rounded text-sm animate-pulse z-20 shadow-lg">
            Copied ✓
          </div>
        )}
      </div>
      
      <div className="hidden lg:flex space-x-6 text-sm">
        <a href="#" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">About</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Integrations</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Pricing</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Customers</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Changelog</a>
      </div>
      
      <div className="flex items-center space-x-3">
        <Button variant="ghost" className="text-sm text-gray-300 hover:text-white">
          Sign in
        </Button>
        <Button className="text-sm bg-white text-green-900 hover:bg-gray-100">
          Sign up
        </Button>
      </div>
    </nav>
  );
}
