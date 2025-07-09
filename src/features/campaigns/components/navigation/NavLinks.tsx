import { NavLink } from "react-router-dom";
import { useState } from "react";

export const NavLinks = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const MenuIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#00AAFF"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#00AAFF"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  const textClasses = (isActive: boolean) =>
    `font-noto-sans font-bold text-base leading-6 tracking-normal ${
      isActive
        ? "border-b-2 border-primary text-gray-900"
        : "text-gray-500 hover:text-gray-700"
    }`;

  return (
    <>
      <nav className="hidden md:flex space-x-[30px] pr-16 gap-1">
        <NavLink
          to="/advertise"
          className={({ isActive }) => textClasses(isActive)}
        >
          Advertise
        </NavLink>
        <NavLink to="/earn" className={({ isActive }) => textClasses(isActive)}>
          Earn
        </NavLink>
        <NavLink
          to="/marketplace"
          className={({ isActive }) => textClasses(isActive)}
        >
          Marketplace
        </NavLink>
        <NavLink
          to="/stats"
          className={({ isActive }) => textClasses(isActive)}
        >
          Stats
        </NavLink>
      </nav>

      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-500 hover:text-gray-700"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
            <div className="py-1 flex flex-col">
              <NavLink
                to="/advertise"
                className={({ isActive }) =>
                  `px-4 py-2 ${textClasses(isActive)}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Advertise
              </NavLink>
              <NavLink
                to="/earn"
                className={({ isActive }) =>
                  `px-4 py-2 ${textClasses(isActive)}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Earn
              </NavLink>
              <NavLink
                to="/marketplace"
                className={({ isActive }) =>
                  `px-4 py-2 ${textClasses(isActive)}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Marketplace
              </NavLink>
              <NavLink
                to="/stats"
                className={({ isActive }) =>
                  `px-4 py-2 ${textClasses(isActive)}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stats
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
