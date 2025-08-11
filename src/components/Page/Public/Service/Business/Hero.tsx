"use client";
import { routes } from "@/constants/route";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

type FeatureProps = {
  icon: React.ReactNode;
  text: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center gap-3 px-4 py-2 text-white border rounded-full bg-white/10 backdrop-blur-sm border-white/20"
    >
      {icon}
      <span className="text-sm font-medium md:text-base">{text}</span>
    </motion.div>
  );
};

function Hero() {
  const intl = useIntl();
  const navigate = useNavigate();

  // Navigation functions
  const handleStartFreeTrial = () => {
    navigate(routes.serviceForBusiness);
  };

  const handleWatchDemo = () => {
    navigate(routes.demo);
    // Scroll to demo area after navigation
    setTimeout(() => {
      const demoSection = document.getElementById('demo-area');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const getFeatures = () => [
    {
      icon: <Zap size={20} />,
      text: intl.formatMessage({ id: "business.hero.features.easyToUse" }),
    },
    {
      icon: <TrendingUp size={20} />,
      text: intl.formatMessage({ id: "business.hero.features.quickSetup" }),
    },
    {
      icon: <Shield size={20} />,
      text: intl.formatMessage({ id: "business.hero.features.noComplexity" }),
    },
    {
      icon: <Users size={20} />,
      text: intl.formatMessage({
        id: "business.hero.features.affordablePricing",
      }),
    },
  ];

  const features = getFeatures();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0A65FC] via-blue-600 to-blue-700 overflow-hidden flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-64 h-64 rounded-full top-20 right-20 bg-white/5 blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute rounded-full bottom-20 left-20 w-80 h-80 bg-white/5 blur-xl"
        />
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute w-48 h-48 rounded-full top-1/2 left-1/4 bg-white/3 blur-2xl"
        />
       
      </div>

      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 mb-8 border rounded-full bg-white/10 backdrop-blur-sm border-white/20"
          >
            <CheckCircle size={18} className="text-green-300" />
            <span className="font-medium text-white">
              <FormattedMessage id="business.hero.badge" />
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            <FormattedMessage id="business.hero.title" />
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed text-blue-100 md:text-2xl"
          >
            <FormattedMessage id="business.hero.description" />
          </motion.p>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid max-w-4xl grid-cols-2 gap-4 mx-auto mb-12 lg:grid-cols-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Feature icon={feature.icon} text={feature.text} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartFreeTrial}
              className="group bg-white text-[#0A65FC] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl flex items-center gap-2"
            >
              <FormattedMessage id="business.hero.buttons.startFreeTrial" />
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
              
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWatchDemo}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#0A65FC] transition-all duration-300"
            >
              <FormattedMessage id="business.hero.buttons.watchDemo" />
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 text-sm text-blue-200"
          >
            <FormattedMessage id="business.hero.trustIndicators" />
          </motion.div>
        </div>
        
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center w-6 h-10 border-2 rounded-full border-white/50"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 mt-2 rounded-full bg-white/70"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
