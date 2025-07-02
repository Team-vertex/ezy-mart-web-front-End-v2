import { navItems } from "@/constants/Data/navs";
import { routes } from "@/constants/route";
import {
  IconChevronDown,
  IconExternalLink,
  IconMenu2,
  IconPlayerPlay,
  IconRocket,
  IconX,
} from "@tabler/icons-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-3"
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center">
          <a href={routes.home} className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-[#0A65FC] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">EzyMart</h1>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center py-2 text-gray-700 hover:text-[#0A65FC] transition-colors duration-200 font-medium"
                    aria-expanded={activeDropdown === item.name}
                  >
                    {item.name}
                    <IconChevronDown
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown menu */}
                  <div
                    className={`absolute top-full left-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-200 origin-top ${
                      activeDropdown === item.name
                        ? "opacity-100 scale-y-100 translate-y-2"
                        : "opacity-0 scale-y-0 translate-y-0 pointer-events-none"
                    }`}
                  >
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#0A65FC] transition-colors duration-200"
                        >
                          <IconExternalLink className="w-4 h-4 mr-3 text-gray-400" />
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className="py-2 text-gray-700 hover:text-[#0A65FC] transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="px-4 py-2 text-gray-700 hover:text-[#0A65FC] transition-colors duration-200 font-medium">
            Demo
          </button>
          <button className="px-6 py-2 bg-[#0A65FC] hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-medium">
            Start Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMenuToggle}
          className="lg:hidden p-2 text-gray-700 hover:text-[#0A65FC] transition-colors duration-200"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <IconX className="w-6 h-6" />
          ) : (
            <IconMenu2 className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-0 z-40 bg-black bg-opacity-50"
          onClick={handleMenuToggle}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#0A65FC] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <div>
              <h1 className="font-bold text-gray-900">EzyMart</h1>
              <p className="text-xs text-gray-500">POS Solution</p>
            </div>
          </div>
          <button
            onClick={handleMenuToggle}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-lg"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation Items */}
        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full p-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                    >
                      {item.name}
                      <IconChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="mt-2 pl-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                          >
                            <IconExternalLink className="w-4 h-4 mr-3 text-gray-400" />
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block p-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile CTA Section */}
        <div className="p-4 border-t border-gray-100 space-y-3">
          <button className="w-full p-3 text-gray-700 border border-gray-200 rounded-lg hover:border-[#0A65FC] hover:text-[#0A65FC] transition-all duration-200 font-medium">
            <IconPlayerPlay className="w-4 h-4 mr-2 inline" />
            Watch Demo
          </button>
          <button className="w-full p-3 bg-[#0A65FC] hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-medium">
            <IconRocket className="w-4 h-4 mr-2 inline" />
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
}
