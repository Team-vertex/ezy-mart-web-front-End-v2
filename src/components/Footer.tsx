import { routes } from "@/constants/route";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconChevronRight,
  IconClock,
  IconLocation,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

export default function Footer() {
  const quickLinks = [
    "Home",
    "About Us",
    "Services",
    "Instruction",
    "Privacy Policy",
    "Contact us",
  ];
  const solutions = [
    "Retail POS",
    "Restaurant POS",
    "Inventory Management",
    "Mobile POS",
    "Analytics Dashboard",
  ];
  // const supportLinks = ["Help Center", "Documentation", "API Reference", "Community Forum"];

  return (
    <footer className="bg-gradient-to-b from-[#1a2c56] to-[#0e1a3a] text-white font-sans relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute w-32 h-32 bg-blue-400 rounded-full top-20 left-10 filter blur-3xl"></div>
        <div className="absolute w-40 h-40 bg-purple-400 rounded-full bottom-10 right-20 filter blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container relative z-10 px-6 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h2 className="mb-4 text-3xl font-extrabold tracking-wide text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                EZYMART.LK
              </span>
            </h2>
            <p className="mb-4 leading-relaxed text-gray-300">
              A simple, affordable, and powerful POS solution built for Sri
              Lankan businesses. Manage your sales, stock, and more with ease.
            </p>
            <blockquote className="pl-4 my-6 italic text-gray-300 border-l-4 border-blue-400">
              "Empowering local businesses with technology that works for you."
            </blockquote>
            <div className="flex gap-4 mt-6">
              {[
                { icon: IconBrandFacebook, color: "hover:bg-blue-600" },
                { icon: IconBrandWhatsapp, color: "hover:bg-green-500" },
                {
                  icon: IconBrandInstagram,
                  color: "hover:bg-gradient-to-br from-purple-500 to-pink-500",
                },
                { icon: IconBrandYoutube, color: "hover:bg-red-600" },
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className={`p-2 border border-gray-400 rounded-full transition-all duration-300 transform hover:scale-110 ${item.color} hover:border-transparent`}
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="flex items-center mb-5 text-xl font-semibold text-white">
              <span className="w-3 h-3 mr-2 bg-blue-400 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={
                      item === "Privacy Policy" ? routes.privacyPolicy : "#"
                    }
                    className="flex items-center text-gray-300 transition-all hover:text-white group"
                  >
                    <IconChevronRight
                      size={16}
                      className="mr-2 text-blue-300 transition-all opacity-0 group-hover:opacity-100"
                    />
                    <span className="transition-transform group-hover:translate-x-1">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="flex items-center mb-5 text-xl font-semibold text-white">
              <span className="w-3 h-3 mr-2 bg-purple-400 rounded-full"></span>
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutions.map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center text-gray-300 transition-all hover:text-white group"
                  >
                    <IconChevronRight
                      size={16}
                      className="mr-2 text-purple-300 transition-all opacity-0 group-hover:opacity-100"
                    />
                    <span className="transition-transform group-hover:translate-x-1">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="flex items-center mb-5 text-xl font-semibold text-white">
              <span className="w-3 h-3 mr-2 bg-green-400 rounded-full"></span>
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3 group">
                <div className="p-2 transition rounded-full bg-blue-500/20 group-hover:bg-blue-500/40">
                  <IconPhone size={18} className="text-blue-300" />
                </div>
                <div>
                  <p className="font-medium text-white">Hotline</p>
                  <p>+94 76 123 4567</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 transition rounded-full bg-purple-500/20 group-hover:bg-purple-500/40">
                  <IconMail size={18} className="text-purple-300" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p>support@ezymart.lk</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 transition rounded-full bg-green-500/20 group-hover:bg-green-500/40">
                  <IconClock size={18} className="text-green-300" />
                </div>
                <div>
                  <p className="font-medium text-white">Support Hours</p>
                  <p>9AM - 6PM (Mon-Sat)</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 transition rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/40">
                  <IconLocation size={18} className="text-yellow-300" />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p>Colombo, Sri Lanka</p>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="mb-2 text-sm font-medium text-gray-400">
                DOWNLOAD OUR APP
              </h4>
              <div className="flex items-center gap-3">
                <a href="#" className="transition-transform hover:scale-105">
                  <img
                    src="/images/Public/appstorebutton.svg"
                    alt="App Store"
                    className="h-10"
                  />
                </a>
                <a href="#" className="transition-transform hover:scale-105">
                  <img
                    src="/images/Public/googleplaybutton.svg"
                    alt="Google Play"
                    className="h-[58px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative py-6 text-center border-t border-gray-700/50">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-3 text-sm text-gray-400 md:mb-0">
              © 2025 EZYMART.LK | All Rights Reserved
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href={routes.privacyPolicy}
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Sitemap
              </a>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Managed by Vertex Cooperation PVT LTD | Registered in Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
