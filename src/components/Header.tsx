import { navItems } from "@/constants/Data/navs";
import { routes } from "@/constants/route";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleMenuToggle = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    document.body.style.overflow = newMenuState ? "hidden" : "";
  };

  return (
    <header
      className={`fixed z-50 transition-all duration-300 w-screen ${
        isScrolled ? "bg-blue-950 shadow-lg py-3" : "bg-white py-4"
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto md:px-0 lg:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-400 transition-all duration-300 hover:scale-105">
            <a href={routes.home} className="flex items-center space-x-2">
              <div className="flex-shrink-0 w-20 h-12 overflow-hidden">
                <img
                  src={
                    isScrolled
                      ? "/images/logo-light.png"
                      : "/images/logo-dark.png"
                  }
                  alt="EzyMart Logo"
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML = `<span class="text-white bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">E</span>`;
                  }}
                />
              </div>
              <span className="hidden text-white xs:inline">EzyMart</span>
            </a>
          </h1>
        </div>

        {/* Desktop Navigation - Show from md breakpoint */}
        <nav className="hidden space-x-1 md:flex lg:space-x-4">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center px-3 py-2 rounded-md transition-colors duration-200 ${
                      isScrolled
                        ? "text-white hover:text-blue-200"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                    aria-expanded={activeDropdown === item.name}
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  <div
                    className={`absolute bg-white border border-gray-200 top-full left-0 rounded-md shadow-lg w-48 overflow-hidden transition-all duration-200 origin-top ${
                      activeDropdown === item.name
                        ? "opacity-100 scale-y-100 translate-y-0"
                        : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="py-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-blue-50"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className={`px-3 py-2 rounded-md transition-colors duration-200 flex items-center ${
                    isScrolled
                      ? "text-white hover:text-blue-200"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  <span>{item.name}</span>
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button - Show from md breakpoint */}
        <div className="items-center hidden space-x-4 md:flex">
          <button className="flex items-center px-4 py-2 space-x-1 text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 hover:shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-headset-icon lucide-headset"
            >
              <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
              <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button - Hidden on md and above */}
        <button
          onClick={handleMenuToggle}
          className="p-2 rounded-md md:hidden focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative flex flex-col justify-between w-6 h-5">
            <span
              className={`w-full h-0.5 ${
                isScrolled ? "bg-white" : "bg-blue-800"
              } rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 ${
                isScrolled ? "bg-white" : "bg-blue-800"
              } rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-full h-0.5 ${
                isScrolled ? "bg-white" : "bg-blue-800"
              } rounded-full transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation - Hidden on md and above */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <img
              src="/images/logo-dark.png"
              alt="EzyMart Logo"
              className="object-cover w-20 h-12"
            />
            <button
              onClick={handleMenuToggle}
              className="p-2 text-gray-500 rounded-full hover:bg-gray-100"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.dropdown ? (
                  <div className="mb-2">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-4 py-2 text-gray-700 transition-colors rounded-md hover:bg-blue-50"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="py-1 pl-6 mt-1 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-600 transition-colors rounded-md hover:bg-blue-50"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 transition-colors rounded-md hover:bg-blue-50"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <button className="flex items-center justify-center w-full px-6 py-2 space-x-2 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"
                />
              </svg>
              <span>Ask Help</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={handleMenuToggle}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
