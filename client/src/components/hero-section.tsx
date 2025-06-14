export default function HeroSection() {
  const partnerLogos = [
    "Tinder", "Airbnb", "Cadbury", "Canon", "Spark", "Quora", "HubSpot"
  ];

  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center px-6 pb-12 -mt-8">
      <div className="mb-4">
        <div className="bg-green-500 bg-opacity-20 border border-green-400 text-green-300 mb-6 px-4 py-2 rounded-full text-sm inline-block">
          API Studio is now in beta →
        </div>
      </div>
      
      <h1 className="text-4xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight">
        The API Security Framework
      </h1>
      
      <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
        Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
      </p>
      
      {/* Partner Logos */}
      <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 opacity-60 max-w-full">
        {partnerLogos.map((logo, index) => (
          <div key={index} className="text-gray-400 font-medium text-base whitespace-nowrap">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
