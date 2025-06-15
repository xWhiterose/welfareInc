import welfareIncLogo from "@assets/Welfare Inc_1749965212950.png";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-20 backdrop-blur-sm border-t border-white border-opacity-10 py-4 z-40 w-full">
      <div className="container mx-auto px-6 text-center w-full">
        <img 
          src={welfareIncLogo} 
          alt="Welfare Inc" 
          className="w-32 md:w-40 h-auto object-contain mx-auto"
        />
      </div>
    </footer>
  );
}
