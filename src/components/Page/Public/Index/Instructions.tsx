import {
  IconArrowRight,
  IconCheck,
  IconRocket,
  IconShoppingBag,
  IconStar,
  IconUsers,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FormattedMessage } from "react-intl";

export const Instructions: React.FC = () => {
  // MARK: Refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef(null);

  // MARK: Elements
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.3 });

  const features = [
    "home.instructions.feature1",
    "home.instructions.feature2",
    "home.instructions.feature3",
    "home.instructions.feature4",
    "home.instructions.feature5",
  ];

  const userTypes = [
    {
      icon: IconUsers,
      titleKey: "home.instructions.customers.title",
      descriptionKey: "home.instructions.customers.description",
      features: [
        "home.instructions.customers.feature1",
        "home.instructions.customers.feature2",
        "home.instructions.customers.feature3",
        "home.instructions.customers.feature4",
        "home.instructions.customers.feature5",
      ],
      gradient: "from-[#0A65FC] to-blue-700",
    },
    {
      icon: IconShoppingBag,
      titleKey: "home.instructions.business.title",
      descriptionKey: "home.instructions.business.description",
      features: [
        "home.instructions.business.feature1",
        "home.instructions.business.feature2",
        "home.instructions.business.feature3",
        "home.instructions.business.feature4",
        "home.instructions.business.feature5",
      ],
      gradient: "from-[#0A65FC] to-blue-700",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,101,252,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,101,252,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#0A65FC]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#0A65FC]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
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
            Getting Started
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            <FormattedMessage id="home.instructions.title" />
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <FormattedMessage id="home.instructions.subtitle" />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-20">
          {/* Content Section */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                <FormattedMessage id="home.instructions.secondTitle"/>,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  <FormattedMessage id="home.instructions.secondSubTitle"/>
                </span>
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                <FormattedMessage id="home.instructions.paragraph"/>
                
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isContentInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    <FormattedMessage id={feature} />
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  1 Day
                </div>
                <div className="text-sm text-gray-600">Setup Time</div>
              </div>
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-gray-900 mb-1">99%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 scale-105"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
                <img
                  src="/stock/male-female-office-workers 2.png"
                  alt="EzyMart Training Session"
                  className="w-full h-auto rounded-xl"
                />

                {/* Floating Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isContentInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <IconStar className="w-5 h-5 text-yellow-500 fill-current" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Satisfaction</p>
                      <p className="text-lg font-bold text-gray-900">4.9/5</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isContentInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconRocket className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Quick Start</p>
                      <p className="text-lg font-bold text-blue-600">Ready!</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* User Type Cards */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {userTypes.map((userType, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${userType.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <userType.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    <FormattedMessage id={userType.titleKey} />
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                <FormattedMessage id={userType.descriptionKey} />
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {userType.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconCheck className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      <FormattedMessage id={feature} />
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="group/btn flex items-center justify-center w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium">
                <FormattedMessage id="home.instructions.business.action"/>
                <IconArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              <FormattedMessage id="home.instructions.business.bottomCtaTitle"/>
              
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              <FormattedMessage id="home.instructions.business.bottomCtaSubTitle"/>
              
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Watch Tutorial
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
