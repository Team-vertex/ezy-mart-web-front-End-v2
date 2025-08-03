"use client";

import { scrollToSection } from "@/utils/scrollUtils";
import { IconCheck } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const buttonRef = useRef(null);
  const isButtonInView = useInView(buttonRef, { once: true, margin: "-100px" });
  const intl = useIntl();

  // Navigation function
  const handleGetStartedClick = () => {
    // Scroll to benefits section
    scrollToSection('benefits');
  };

  const features = [
    intl.formatMessage({ id: "customers.hero.feature1" }),
    intl.formatMessage({ id: "customers.hero.feature2" }),
    intl.formatMessage({ id: "customers.hero.feature3" }),
    intl.formatMessage({ id: "customers.hero.feature4" }),
  ];

  return (
    <section
      ref={ref}
      className="relative flex-grow flex min-h-[80vh] flex-col items-center justify-center bg-gradient-to-tr from-[#0A65FC] to-blue-600 overflow-hidden"
    >
      {/* Decorative bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15
                }s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-20 container mx-auto px-4 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold tracking-wide uppercase border border-white/30">
              <FormattedMessage id="customers.hero.badge" />
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-white mb-6 leading-tight">
            <FormattedMessage
              id="customers.hero.title"
              values={{
                highlight: (chunks) => (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                    {chunks}
                  </span>
                ),
              }}
            />
          </h1>

          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            <FormattedMessage id="customers.hero.description" />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full max-w-4xl"
        >
          {features.map((text, i) => (
            <FeatureItem key={i} text={text} delay={i * 0.1} />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          ref={buttonRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={handleGetStartedClick}
          className="!z-50 mt-12 px-12 py-4 bg-white text-[#0A65FC] font-bold text-lg rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FormattedMessage id="customers.hero.cta" />
        </motion.button>
      </div>

      {/* CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export const FeatureItem = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 + delay }}
    className="flex items-center justify-center text-white gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
  >
    <IconCheck className="w-5 h-5 text-green-300 flex-shrink-0" />
    <span className="text-sm md:text-base font-medium text-center">{text}</span>
  </motion.div>
);

export default HeroSection;
