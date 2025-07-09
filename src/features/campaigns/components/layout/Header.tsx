import { NavLinks } from "../navigation/NavLinks";

export const Header = () => {
  return (
     <header className="bg-white h-[76px] md:h-[90px] shadow-lg pt-3 max-w-[1150px] mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img
              src="/logo.svg"
              alt="Advertise Earn Marketplace Logo"
              className="hidden md:block h-12 w-auto pl-12"
            />

            <img
              src="/logo-mobile.svg"
              alt="Advertise Earn Marketplace Logo"
              className="md:hidden h-11 w-auto"
            />
          </div>
          <NavLinks />
        </div>
      </div>
    </header>
  );
};
