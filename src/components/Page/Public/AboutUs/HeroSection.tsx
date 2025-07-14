import { motion } from "framer-motion";
import React from "react";
import { FormattedMessage } from "react-intl";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/40 overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <FormattedMessage id="aboutUs.hero.title" />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12"
          >
            <FormattedMessage id="aboutUs.hero.subtitle" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group bg-[#0A65FC] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Our Story
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            <button className="bg-white text-[#0A65FC] px-8 py-4 rounded-full font-semibold text-lg border-2 border-[#0A65FC] hover:bg-[#0A65FC] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
