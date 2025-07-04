import { NavLinks } from "../navigation/NavLinks";

export const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img
              src="/logo.svg"
              alt="Advertise Earn Marketplace Logo"
              className="hidden md:block h-8 w-auto"
            />

            <img
              src="/logo-mobile.svg"
              alt="Advertise Earn Marketplace Logo"
              className="md:hidden h-8 w-auto"
            />
          </div>
          <NavLinks />
        </div>
      </div>
    </header>
  );
};
