import welfareIncLogo from "@assets/Welfare Inc._1749962854795.png";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-20 backdrop-blur-sm border-t border-white border-opacity-10 py-4 z-40">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center">
          <img 
            src={welfareIncLogo} 
            alt="Welfare Inc." 
            width="120" 
            height="60" 
            className="object-contain"
          />
        </div>
        <p className="text-gray-400 text-sm mt-2">
          Here at Welfare Inc., we believe in building bridges between potential and possibility.
        </p>
      </div>
    </footer>
  );
}
