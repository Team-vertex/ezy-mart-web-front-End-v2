'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    'Easy Product Search',
    'Nearest Shop Finder',
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
          className="text-3xl md:text-4xl font-bold text-center lg:text-5xl  text-white font-poppins"
        >
          Anything, Anywhere
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-center text-white text-sm md:text-lg lg:text-xl py-0 md:px-5 lg:px-8"
        >
          EzyMart makes shopping easier than ever.Search for products near you ,
          discover local shops, save time,and enjoy a smooth, stress free shopping experience all through one smart app
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 mt-4 lg:grid-cols-4  md:gap-1 lg:text-lg"
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
  <div className="flex items-center gap-1 py-2 px-2 md:px-5 rounded-lg ">
    {icon && (
      <img src={"/public/images/CoustomerService/tick-circle.svg"} alt="feature icon" className="w-5 h-5" />
    )}
    <p className="text-sm font-georgia text-center text-white md:text-xl lg:text-2xl">{text}</p>
  </div>
);

export default HeroSection;
