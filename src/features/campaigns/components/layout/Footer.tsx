import { NavLinks } from "../navigation/NavLinks";

export const Footer = () => {
  return (
    <footer className="bg-[#F2F4F6] border-t border-gray-200">
      <div className="border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          <div className="md:hidden flex flex-col space-y-4 pl-4">
            <a 
              href="/advertise" 
              className="font-noto-sans font-bold text-base leading-6 tracking-normal text-gray-500  hover:text-gray-700"
            >
              Advertise
            </a>
            <a 
              href="/earn" 
              className="font-noto-sans font-bold text-base leading-6 tracking-normal text-gray-500 hover:text-gray-700"
            >
              Earn
            </a>
            <a 
              href="/marketplace" 
              className="font-noto-sans font-bold text-base leading-6 tracking-normal text-gray-500 hover:text-gray-700"
            >
              Marketplace
            </a>
            <a 
              href="/stats" 
              className="font-noto-sans font-bold text-base leading-6 tracking-normal text-gray-500 hover:text-gray-700"
            >
              Stats
            </a>
          </div>
          
        
          <div className="hidden md:flex justify-center">
            <NavLinks />
          </div>
        </div>
      </div>
    
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © A-ADS 2011-{new Date().getFullYear()}
            </div>
            <div className="flex space-x-6">
              <a 
                href="/terms" 
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Terms of Service
              </a>
              <a 
                href="/privacy" 
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};