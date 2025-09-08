import { routes } from "@/constants/route";
import { scrollToSection } from "@/utils/scrollUtils";
import { motion } from "framer-motion";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  // Navigation and scroll functions
  const handleOurStoryClick = () => {
    // Scroll to the story section
    scrollToSection('story');
  };

  const handleContactUsClick = () => {
    navigate(routes.contactUs);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A65FC] to-blue-700">
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-32 -translate-y-32 rounded-full bg-white/10 animate-pulse"></div>
        <div className="absolute right-0 w-48 h-48 translate-x-24 -translate-y-12 rounded-full top-20 bg-white/10 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-0 w-32 h-32 translate-y-16 rounded-full right-20 bg-white/10 animate-pulse animation-delay-2000"></div>

         <div className="absolute w-24 h-24 bottom-20 left-32 opacity-20">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>
        </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#0A65FC] to-blue-600 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-[#0A65FC] to-blue-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20 sm:px-8 lg:px-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              <FormattedMessage id="aboutUs.hero.title" />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12 text-xl leading-relaxed text-white md:text-2xl"
          >
            <FormattedMessage id="aboutUs.hero.subtitle" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={handleOurStoryClick}
              onKeyDown={(e) => e.key === 'Enter' && handleOurStoryClick()}
              className="group bg-[#0A65FC] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Our Story
              <span className="inline-block ml-2 transition-transform transform group-hover:translate-x-1">
                →
              </span>
            </button>
            <button
              onClick={handleContactUsClick}
              onKeyDown={(e) => e.key === 'Enter' && handleContactUsClick()}
              className="bg-white text-[#0A65FC] px-8 py-4 rounded-full font-semibold text-lg border-2 border-[#0A65FC] hover:bg-[#0A65FC] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#0A65FC] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#0A65FC] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};