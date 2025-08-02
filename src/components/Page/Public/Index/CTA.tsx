import { routes } from "@/constants/route";
import { usePOSRequestPopup } from "@/hooks/usePOSRequestPopup";
import {
  IconArrowRight,
  IconBolt,
  IconClock,
  IconPlayerPlay,
  IconRocket,
  IconShield,
  IconStar,
  IconUsers,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

export const CTA: React.FC = () => {
  // MARK: Hooks
  const navigate = useNavigate();
  const { openPOSRequest, POSRequestModal } = usePOSRequestPopup();

  // MARK: Refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);
  const featuresRef = useRef(null);

  // MARK: In view states
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });

  // MARK: Navigation Functions
  const handleStartFreeTrial = () => {
    openPOSRequest();
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

  const features = [
    {
      icon: IconBolt,
      titleKey: "home.cta.feature1.title",
      descriptionKey: "home.cta.feature1.description",
    },
    {
      icon: IconShield,
      titleKey: "home.cta.feature2.title",
      descriptionKey: "home.cta.feature2.description",
    },
    {
      icon: IconUsers,
      titleKey: "home.cta.feature3.title",
      descriptionKey: "home.cta.feature3.description",
    },
    {
      icon: IconClock,
      titleKey: "home.cta.feature4.title",
      descriptionKey: "home.cta.feature4.description",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-[#0A65FC] via-blue-700 to-blue-800 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/5 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Main CTA Section */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full text-sm font-semibold tracking-wide uppercase border border-blue-500/30">
              Ready to Get Started?
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <FormattedMessage id="home.cta.title" />
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            <FormattedMessage id="home.cta.subtitle" />
          </p>

          <div className="flex items-center justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <IconStar
                key={i}
                className="w-6 h-6 text-yellow-400 fill-current"
              />
            ))}
            <span className="text-white font-semibold ml-2">
              4.9/5 from 500+ reviews
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-20"
        >
          {/* Primary CTA */}
          <button
            onClick={handleStartFreeTrial}
            className="group px-12 py-6 bg-gradient-to-r from-white to-blue-50 text-[#0A65FC] rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span className="flex items-center justify-center">
              <IconRocket className="mr-3 w-6 h-6 group-hover:animate-bounce" />
              Start Free Trial
              <IconArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="text-sm text-blue-600 mt-1 font-normal">
              No credit card required • 30-day free trial
            </div>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={handleWatchDemo}
            className="group px-12 py-6 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center justify-center">
              <IconPlayerPlay className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
              <span className="ml-3 text-sm bg-white/20 px-2 py-1 rounded-full">
                2 min
              </span>
            </span>
            <div className="text-sm text-gray-300 mt-1 font-normal">
              See EzyMart in action
            </div>
          </button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={featuresRef}
          initial={{ opacity: 0, y: 40 }}
          animate={
            isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                <div className="inline-flex p-3 bg-blue-500/20 rounded-xl mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  <FormattedMessage id={feature.titleKey} />
                </h3>
                <p className="text-gray-300 text-sm">
                  <FormattedMessage id={feature.descriptionKey} />
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Trusted by Leading Sri Lankan Businesses
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  500+
                </div>
                <div className="text-gray-300">Active Businesses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  1M+
                </div>
                <div className="text-gray-300">Transactions Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  99.9%
                </div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-300 text-sm">
                🔒 Bank-level security • 📞 Local support in Sinhala & Tamil •
                💳 All payment methods supported
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final Push */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              What are you waiting for?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Thousands of businesses have already made the switch. Your
              competitors are getting ahead – don't get left behind.
            </p>
            <p className="text-blue-300 font-semibold text-sm">
              Questions? Call us at{" "}
              <a
                href="tel:+94761234567"
                className="text-blue-400 hover:text-blue-300"
              >
                +94 76 123 4567
              </a>{" "}
              or email{" "}
              <a
                href="mailto:hello@ezymart.lk"
                className="text-blue-400 hover:text-blue-300"
              >
                hello@ezymart.lk
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* POS Request Modal */}
      <POSRequestModal />
    </section>
  );
};
