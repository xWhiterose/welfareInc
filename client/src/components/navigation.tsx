import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-4 lg:px-8 py-6 max-w-full overflow-x-hidden">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
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
