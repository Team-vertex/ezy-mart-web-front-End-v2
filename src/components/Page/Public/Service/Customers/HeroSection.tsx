'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    'Easy Product Search',
    'Location Based Shop Finder',
    'Add item to your list',
    'Seamless Experience',
  ];

  return (
    <section
      ref={ref}
      className="flex-grow flex flex-col items-center justify-center bg-gradient-to-tr from-[#010916] to-[#053CDF]"
    >
      <div className="container flex flex-col items-center justify-center w-full lg:h-[875px] mx-auto pt-36 pb-36 lg:pb-48">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-white lg:text-[64px]"
        >
          Anything, Anywhere
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-center text-white md:text-lg lg:text-[16px] "
        >
          EzyMart makes shopping easier than ever. Search for products near you,
          discover local shops, save time, and enjoy a smooth, stress free
          shopping experience all through one smart app
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 mt-4 lg:grid-cols-4 md:gap-8 lg:text-2xl"
        >
          {features.map((text, i) => (
            <FeatureItem key={i} text={text} icon="/assets/check-icon.png" />
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#15366B] text-white font-semibold text-sm lg:text-[18px] px-4 py-2 rounded-full mt-8 hover:bg-[#15366B]/80 transition-colors lg:mb-[200px]"
        >
          See How It Works
        </motion.button>
      </div>
    </section>
  );
};

export const FeatureItem = ({
  text,
  icon='',
}: {
  text: string;
  icon?: string;
}) => (
  <div className="flex items-center gap-2 py-2 rounded-lg ">
    {icon && (
      <img src={"/public/images/CoustomerService/tick-circle.svg"} alt="feature icon" className="w-5 h-5" />
    )}
    <p className="text-xs font-medium text-center text-white md:text-base">{text}</p>
  </div>
);

export default HeroSection;
