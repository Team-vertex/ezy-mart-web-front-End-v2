import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconClock,
  IconLocationCheck,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a2c56] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h2 className="text-3xl font-bold mb-4">EZYMART.LK</h2>
            <p className="mb-4">
              A simple, affordable, and powerful POS solution built for Sri
              Lankan businesses. Manage your sales, stock, and more with ease.
            </p>
            <div className="border-t border-b border-gray-600 py-4 my-4">
              <p className="italic">
                " Empowering local businesses with technology that works for
                you, not against you. "
              </p>
            </div>
            {/* Social Media */}
            <div className="mt-6">
              <h3 className="text-xl mb-4">Follow Us On</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-[#1a2c56] border border-white rounded-full p-2 hover:bg-blue-800 transition duration-300"
                >
                  <IconBrandFacebook size={18} />
                </a>
                <a
                  href="#"
                  className="bg-[#1a2c56] border border-white rounded-full p-2 hover:bg-green-600 transition duration-300"
                >
                  <IconBrandWhatsapp size={18} />
                </a>
                <a
                  href="#"
                  className="bg-[#1a2c56] border border-white rounded-full p-2 hover:bg-pink-600 transition duration-300"
                >
                  <IconBrandInstagram size={18} />
                </a>
                <a
                  href="#"
                  className="bg-[#1a2c56] border border-white rounded-full p-2 hover:bg-red-600 transition duration-300"
                >
                  <IconBrandYoutube size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-6">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Instruction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-xl font-bold mb-6">Solutions</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  For Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  For Customers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Mobile Users
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h2 className="text-xl font-bold mb-6">Customer Support</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <IconPhone className="mr-3 text-xl" />
                <span>+94 76 123 4567</span>
              </li>
              <li className="flex items-center">
                <IconMail className="mr-3 text-xl" />
                <span>support@gmail.com</span>
              </li>
              <li className="flex items-center">
                <IconClock className="mr-3 text-xl" />
                <span>support Hours: 9AM - 6PM</span>
              </li>
              <li className="flex items-center">
                <IconLocationCheck className="mr-3 text-xl" />
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>

            {/* App Store Links */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="#" className="inline-block">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on App Store"
                  className="h-10"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 text-center border-t border-gray-700 text-sm">
        <p>
          Copyright © 2025 EZYMART.LK | All Rights Reserved | manage by vertex
          Cooperation PVT .LTD
        </p>
      </div>
    </footer>
  );
}
