import welfareIncLogo from "@assets/Welfare Inc_1749965212950.png";

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-40 backdrop-blur-sm border-t border-white/10 text-white py-12 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <img 
            src={welfareIncLogo} 
            alt="Welfare Inc" 
            className="w-64 md:w-80 h-auto object-contain mx-auto mb-4"
          />
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Here at Welfare Inc, this is what we do - we scroll, and scroll, all day, every day.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 Welfare Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
