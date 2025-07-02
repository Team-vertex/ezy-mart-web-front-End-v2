import {
  IconChartBar,
  IconClock,
  IconDevices,
  IconHeadset,
  IconShield,
  IconShoppingCart,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export const Service: React.FC = () => {
  // MARK: Refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const featuresRef = useRef(null);
  const imageRef = useRef(null);

  // MARK: Elements
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });

  const keyFeatures = [
    {
      icon: IconShoppingCart,
      title: "Inventory Management",
      description:
        "Real-time stock tracking, automated reorders, and comprehensive product management to keep your business running smoothly.",
      color: "blue",
    },
    {
      icon: IconChartBar,
      title: "Sales Analytics",
      description:
        "Detailed insights and reports to help you understand your business performance and make data-driven decisions.",
      color: "blue",
    },
    {
      icon: IconShield,
      title: "Secure Payments",
      description:
        "End-to-end encryption and secure payment processing to protect both you and your customers.",
      color: "blue",
    },
    {
      icon: IconHeadset,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to ensure your business never stops, with expert assistance whenever you need it.",
      color: "blue",
    },
    {
      icon: IconClock,
      title: "Quick Setup",
      description:
        "Get up and running in minutes with our intuitive setup process and comprehensive onboarding.",
      color: "blue",
    },
    {
      icon: IconDevices,
      title: "Multi-Platform",
      description:
        "Works seamlessly across all devices - desktop, tablet, and mobile for complete flexibility.",
      color: "blue",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-[#0A65FC]/10 text-[#0A65FC] group-hover:bg-[#0A65FC] group-hover:text-white",
      green:
        "bg-[#0A65FC]/10 text-[#0A65FC] group-hover:bg-[#0A65FC] group-hover:text-white",
      purple:
        "bg-[#0A65FC]/10 text-[#0A65FC] group-hover:bg-[#0A65FC] group-hover:text-white",
      orange:
        "bg-[#0A65FC]/10 text-[#0A65FC] group-hover:bg-[#0A65FC] group-hover:text-white",
      indigo:
        "bg-[#0A65FC]/10 text-[#0A65FC] group-hover:bg-[#0A65FC] group-hover:text-white",
      pink: "bg-[#0A65FC]/10 text-[#0A65FC] group-hover:bg-[#0A65FC] group-hover:text-white",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section
      ref={sectionRef}
      className="pb-16 lg:pb-24 relative overflow-hidden -mt-1 pt-20"
      style={{
        background:
          "linear-gradient(to bottom right, rgb(248 250 252), rgb(239 246 255), rgb(238 242 255))",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -top-20">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#0A65FC]/10 text-[#0A65FC] text-sm font-medium rounded-full mb-6">
            Our Services
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-700">
              Modern Business
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            EzyMart provides comprehensive POS solutions designed specifically
            for small and mid-level businesses in Sri Lanka. Our platform
            combines cutting-edge technology with user-friendly design to
            streamline your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Features Grid */}
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              isFeaturesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isFeaturesInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 transition-all duration-300 ${getColorClasses(
                      feature.color
                    )}`}
                  >
                    <feature.icon className="w-6 h-6 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Why Choose EzyMart?
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Our POS system is built specifically for the Sri Lankan market,
                understanding local business needs and providing solutions that
                are both powerful and easy to use. No technical knowledge
                required!
              </p>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={
              isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 scale-105"></div>

              {/* Main Image Container */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 lg:p-6">
                <img
                  src="/images/Public/serviceSectionImage.png"
                  alt="EzyMart POS Interface"
                  className="w-full h-auto rounded-xl"
                />

                {/* Floating Feature Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isImageInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <IconChartBar className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Monthly Growth</p>
                      <p className="text-lg font-bold text-green-600">+25%</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isImageInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconShield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Transactions</p>
                      <p className="text-lg font-bold text-blue-600">
                        100% Secure
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <img
                src="/images/Public/forcustomersandservices.svg"
                alt="For Customers and Services"
                className="mx-auto w-64 lg:w-80 h-auto opacity-80"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-[#0A65FC] to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg lg:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using EzyMart to streamline
              their operations and boost sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#0A65FC] rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0A65FC] transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
