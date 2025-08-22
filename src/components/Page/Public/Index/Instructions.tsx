import { routes } from "@/constants/route";
// import { usePOSRequestPopup } from "@/hooks/usePOSRequestPopup";
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
import { useNavigate } from "react-router-dom";

export const Instructions: React.FC = () => {
  // MARK: Hooks
  const navigate = useNavigate();
  // const { serviceForBusiness, POSRequestModal } = usePOSRequestPopup();

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

  // MARK: Navigation Functions
  const handleStartFreeTrial = () => {
     navigate(routes.serviceForBusiness);
    // Scroll to demo area after navigation
    setTimeout(() => {
      const demoSection = document.getElementById('demo-area');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    100);
  };

  const handleWatchTutorial = () => {
    navigate(routes.customersService);
    // Scroll to demo area after navigation
    setTimeout(() => {
      const demoSection = document.getElementById('demo-area');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

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
      className="relative py-16 overflow-hidden bg-white lg:py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,101,252,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,101,252,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#0A65FC]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#0A65FC]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container relative px-6 mx-auto lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          className="mb-16 text-center lg:mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#0A65FC]/10 text-[#0A65FC] text-sm font-medium rounded-full mb-6">
            Getting Started
          </div>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-5xl">
            <FormattedMessage id="home.instructions.title" />
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 lg:text-xl">
            <FormattedMessage id="home.instructions.subtitle" />
          </p>
        </motion.div>

        <div className="grid items-center grid-cols-1 gap-12 mb-16 lg:grid-cols-2 lg:gap-20 lg:mb-20">
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
              <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                <FormattedMessage id="home.instructions.secondTitle" />,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  <FormattedMessage id="home.instructions.secondSubTitle" />
                </span>
              </h3>

              <p className="text-lg leading-relaxed text-gray-600">
                <FormattedMessage id="home.instructions.paragraph" />

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
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-green-100 rounded-full">
                    <IconCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-700">
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
              <div className="p-4 text-center border bg-white/50 backdrop-blur-sm rounded-xl border-white/20">
                <div className="mb-1 text-2xl font-bold text-gray-900">
                  1 Day
                </div>
                <div className="text-sm text-gray-600">Setup Time</div>
              </div>
              <div className="p-4 text-center border bg-white/50 backdrop-blur-sm rounded-xl border-white/20">
                <div className="mb-1 text-2xl font-bold text-gray-900">99%</div>
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
              <div className="absolute inset-0 scale-105 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative p-6 bg-white shadow-2xl rounded-2xl lg:p-8">
                <img
                  src="/stock/home/instuctions/a7f887ba-7534-4a49-b99f-89b9da8fe29c.jpg"
                  alt="EzyShop Training Session"
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
                  className="absolute p-4 bg-white border shadow-lg -top-4 -right-4 rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
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
                  className="absolute p-4 bg-white border shadow-lg -bottom-4 -left-4 rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
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
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {userTypes.map((userType, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 transition-all duration-300 bg-white border border-gray-200 shadow-lg group rounded-2xl hover:shadow-xl hover:border-blue-300"
            >
              {/* Header */}
              <div className="flex items-center mb-6 space-x-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${userType.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <userType.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                    <FormattedMessage id={userType.titleKey} />
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 leading-relaxed text-gray-600">
                <FormattedMessage id={userType.descriptionKey} />
              </p>

              {/* Features */}
              <div className="mb-6 space-y-3">
                {userType.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 bg-green-100 rounded-full">
                      <IconCheck className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      <FormattedMessage id={feature} />
                    </span>
                     
                  </div>
                 
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={index === 0 ? handleWatchTutorial : handleStartFreeTrial}
                className="flex items-center justify-center w-full px-6 py-3 font-medium text-gray-700 transition-all duration-300 bg-gray-100 rounded-lg group/btn hover:bg-blue-600 hover:text-white"
              >
                <FormattedMessage id="home.instructions.business.action" />
                <IconArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
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
          className="mt-16 text-center lg:mt-20"
        >
          <div className="p-8 bg-white border border-gray-200 shadow-xl rounded-2xl lg:p-12">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
              <FormattedMessage id="home.instructions.business.bottomCtaTitle" />

            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
              <FormattedMessage id="home.instructions.business.bottomCtaSubTitle" />

            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={handleStartFreeTrial}
                className="px-8 py-4 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg"
              >
                Start Free Trial
              </button>
              <button
                onClick={handleWatchTutorial}
                className="px-8 py-4 font-semibold text-gray-700 transition-all duration-300 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600"
              >
                Watch Tutorial
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* POS Request Modal */}
      {/* <POSRequestModal /> */}
    </section>
  );
};
