import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  const partnerLogos = [
    "Tinder", "Airbnb", "Cadbury", "Canon", "Spark", "Quora", "HubSpot"
  ];

  const handleGetStarted = () => {
    console.log("Get Started clicked");
  };

  const handleReadDocs = () => {
    console.log("Read docs clicked");
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center px-6 pb-16">
      <div className="mb-4">
        <Badge 
          variant="secondary" 
          className="bg-purple-500 bg-opacity-20 border border-purple-400 text-purple-300 mb-6 px-4 py-2"
        >
          API Studio is now in beta →
        </Badge>
      </div>
      
      <h1 className="text-4xl lg:text-6xl font-bold mb-4 max-w-4xl leading-tight">
        The API Security Framework
      </h1>
      
      <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
        Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Button 
          onClick={handleGetStarted}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold"
        >
          Get Started →
        </Button>
        <Button 
          variant="outline"
          onClick={handleReadDocs}
          className="border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-3 text-lg font-semibold"
        >
          📖 Read the docs
        </Button>
      </div>
      
      {/* Partner Logos */}
      <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 opacity-60">
        {partnerLogos.map((logo, index) => (
          <div key={index} className="text-gray-400 font-medium text-base">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
