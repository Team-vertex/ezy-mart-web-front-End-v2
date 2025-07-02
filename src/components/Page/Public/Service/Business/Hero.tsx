"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

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
      className="flex items-center justify-center text-white gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
    >
      {icon}
      <span className="text-sm md:text-base font-medium">{text}</span>
    </motion.div>
  );
};

function Hero() {
  const features = [
    { icon: <Zap size={20} />, text: "Easy to use" },
    { icon: <TrendingUp size={20} />, text: "Quick setup" },
    { icon: <Shield size={20} />, text: "No complexity" },
    { icon: <Users size={20} />, text: "Affordable pricing" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0A65FC] via-blue-600 to-blue-700 overflow-hidden flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/3 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <CheckCircle size={18} className="text-green-300" />
            <span className="text-white font-medium">
              Trusted by 2,000+ businesses across Sri Lanka
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Smart{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              POS Solutions
            </span>
            <br />
            for Sri Lankan Shops
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Transform your business with our all-in-one POS system. Manage
            sales, inventory, expenses, and customer relationships effortlessly.
            Built specifically for local businesses who value simplicity and
            efficiency.
          </motion.p>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-[#0A65FC] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#0A65FC] transition-all duration-300"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 text-blue-200 text-sm"
          >
            ✓ No setup fees • ✓ 30-day money-back guarantee • ✓ Free training
            included
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
