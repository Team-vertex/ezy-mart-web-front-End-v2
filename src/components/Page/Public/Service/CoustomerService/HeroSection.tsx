import React from "react";
import { motion } from "framer-motion";

const FeatureItem = ({ text }: { text: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-2 px-3 py-2 transition-colors rounded-lg hover:bg-sky-900/20"
  >
    <div className="w-2 h-2 rounded-full bg-sky-400" />
    <p className="text-sm font-medium md:text-base">{text}</p>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center w-full max-w-6xl px-4 py-16 mx-auto md:py-24 text-sky-100">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full max-w-3xl px-4"
      >
        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Anything, Anywhere
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-sm leading-relaxed md:text-base text-sky-200/90"
        >
          EzyMart makes shopping easier than ever. Search for products near
          you, discover local shops, save time, and enjoy a smooth, stress
          free shopping experience all through one smart app.
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-col items-center w-full max-w-4xl mt-8 md:mt-12"
      >
        <div className="flex flex-wrap justify-center w-full gap-4 md:gap-8">
          <FeatureItem text="Easy Product Search"/>
          <FeatureItem text="Location Based Shop Finder" />
          <FeatureItem text="Add item to your list" />
          <FeatureItem text="Seamless Experience" />
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="px-8 py-3 mt-8 font-semibold text-white transition-colors rounded-full shadow-lg md:mt-12 bg-sky-700 hover:bg-sky-600"
        >
          See How It Works
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;