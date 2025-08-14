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
import { FormattedMessage } from "react-intl";
import { LanguageSwitch } from "./core/LanguageSwitch";

export default function Footer() {
  const quickLinks = [
    { key: "home", messageId: "footer.quickLinks.home", route: routes.home },
    {
      key: "aboutUs",
      messageId: "footer.quickLinks.aboutUs",
      route: routes.aboutUs,
    },
    {
      key: "services",
      messageId: "footer.quickLinks.services",
      route: routes.serviceForBusiness,
    },
    {
      key: "instructions",
      messageId: "footer.quickLinks.instructions",
      route: routes.instructions,
    },
    {
      key: "privacyPolicy",
      messageId: "footer.quickLinks.privacyPolicy",
      route: routes.privacyPolicy,
    },
    {
      key: "contactUs",
      messageId: "footer.quickLinks.contactUs",
      route: routes.contactUs,
    },
  ];


  const solutions = [
    { key: "retailPOS", messageId: "footer.solutions.retailPOS" },
    {
      key: "inventoryManagement",
      messageId: "footer.solutions.inventoryManagement",
    },
    {
      key: "analyticsDashboard",
      messageId: "footer.solutions.analyticsDashboard",
    },
    {
      key: "mobileApp",
      messageId: "footer.solutions.mobleApp",
    },
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
                <FormattedMessage id="footer.company.name" />
              </span>
            </h2>
            <p className="mb-4 leading-relaxed text-gray-300">
              <FormattedMessage id="footer.company.description" />
            </p>
            <blockquote className="pl-4 my-6 italic text-gray-300 border-l-4 border-blue-400">
              "<FormattedMessage id="footer.company.quote" />"
            </blockquote>
           <div className="flex gap-4 mt-6">
  {[
    { icon: IconBrandFacebook, color: "hover:bg-blue-600", link: "https://www.facebook.com/share/1CVyj7uWrY/?mibextid=wwXIfr" },
    { icon: IconBrandWhatsapp, color: "hover:bg-green-500", link: "https://wa.me/94718959403" },
    { icon: IconBrandInstagram, color: "hover:bg-gradient-to-br from-purple-500 to-pink-500", link: "https://www.instagram.com/YourProfile" },
    { icon: IconBrandYoutube, color: "hover:bg-red-600", link: "https://www.youtube.com/channel/YourChannel" },
  ].map((item, i) => (
    <a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
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
              <FormattedMessage id="footer.quickLinks.title" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.route}
                    className="flex items-center text-gray-300 transition-all hover:text-white group"
                  >
                    <IconChevronRight
                      size={16}
                      className="mr-2 text-blue-300 transition-all opacity-0 group-hover:opacity-100"
                    />
                    <span className="transition-transform group-hover:translate-x-1">
                      <FormattedMessage id={item.messageId} />
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
              <FormattedMessage id="footer.solutions.title" />
            </h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.key}>
                  <a
                    href="#"
                    className="flex items-center text-gray-300 transition-all hover:text-white group"
                  >
                    <IconChevronRight
                      size={16}
                      className="mr-2 text-purple-300 transition-all opacity-0 group-hover:opacity-100"
                    />
                    <span className="transition-transform group-hover:translate-x-1">
                      <FormattedMessage id={item.messageId} />
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
              <FormattedMessage id="footer.contact.title" />
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3 group">
                <div className="p-2 transition rounded-full bg-blue-500/20 group-hover:bg-blue-500/40">
                  <IconPhone size={18} className="text-blue-300" />
                </div>
                <div>
                  <p className="font-medium text-white">Hotline</p>
                  <p>
                    <FormattedMessage id="footer.contact.phone" />
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 transition rounded-full bg-purple-500/20 group-hover:bg-purple-500/40">
                  <IconMail size={18} className="text-purple-300" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p>
                    <FormattedMessage id="footer.contact.email" />
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 transition rounded-full bg-green-500/20 group-hover:bg-green-500/40">
                  <IconClock size={18} className="text-green-300" />
                </div>
                <div>
                  <p className="font-medium text-white">Support Hours</p>
                  <p>
                    <FormattedMessage id="footer.contact.hours" />
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 transition rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/40">
                  <IconLocation size={18} className="text-yellow-300" />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p>
                    <FormattedMessage id="footer.contact.address" />
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <LanguageSwitch variant="footer" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative py-6 text-center border-t border-gray-700/50">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-3 text-sm text-gray-400 md:mb-0">
              <FormattedMessage id="footer.copyright" />
            </p>
            <div className="flex gap-4">
              
              <a
                href={routes.privacyPolicy}
                className="text-sm text-gray-400 transition hover:text-white"
              >
                <FormattedMessage id="footer.quickLinks.privacyPolicy" />
              </a>
             
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            <FormattedMessage id="footer.managedBy" />
          </p>
        </div>
      </div>
    </footer>
  );
}
