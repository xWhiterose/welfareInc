import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-6 lg:px-12 py-6">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
      
      <div className="hidden lg:flex space-x-8 text-sm">
        <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Integrations</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Customers</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Changelog</a>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-sm text-gray-300 hover:text-white">
          Sign in
        </Button>
        <Button className="text-sm bg-white text-purple-900 hover:bg-gray-100">
          Sign up
        </Button>
      </div>
    </nav>
  );
}
