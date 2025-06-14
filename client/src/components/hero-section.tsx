export default function HeroSection() {
  const partnerLogos = [
    "Tinder", "Airbnb", "Cadbury", "Canon", "Spark", "Quora", "HubSpot"
  ];

  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center px-6 pb-12">
      <div className="mb-6">
        <div className="bg-green-500 bg-opacity-20 border border-green-400 text-green-300 mb-8 px-4 py-2 rounded-full text-sm inline-block">
          Limited beta in progress →
        </div>
      </div>
      
      <h1 className="text-4xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight">
        Unified Social Experience Architecture
      </h1>
      
      <p className="text-lg text-gray-300 mb-12 max-w-2xl leading-relaxed">
        Designed to help individuals unify and manage their online presence across major platforms with clarity and consistency.
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
