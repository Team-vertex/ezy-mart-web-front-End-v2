import { routes } from "@/constants/route";
import { usePOSRequestPopup } from "@/hooks/usePOSRequestPopup";
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
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

export const Service: React.FC = () => {
  // MARK: Hooks
  const navigate = useNavigate();
  const { POSRequestModal } = usePOSRequestPopup();

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

  // MARK: Navigation Functions
  const handleStartFreeTrial = () => {
    navigate(routes.serviceForBusiness);
    // Scroll to demo area after navigation
    setTimeout(() => {
      const demoSection = document.getElementById('demo-area');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleScheduleDemo = () => {
    navigate(routes.demo);
    // Scroll to demo area after navigation
    setTimeout(() => {
      const demoSection = document.getElementById('demo-area');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const keyFeatures = [
    {
      icon: IconShoppingCart,
      titleKey: "home.service.inventory.title",
      descriptionKey: "home.service.inventory.description",
      color: "blue",
    },
    {
      icon: IconChartBar,
      titleKey: "home.service.analytics.title",
      descriptionKey: "home.service.analytics.description",
      color: "blue",
    },
    {
      icon: IconShield,
      titleKey: "home.service.payments.title",
      descriptionKey: "home.service.payments.description",
      color: "blue",
    },
    {
      icon: IconHeadset,
      titleKey: "home.service.support.title",
      descriptionKey: "home.service.support.description",
      color: "blue",
    },
    {
      icon: IconClock,
      titleKey: "home.service.setup.title",
      descriptionKey: "home.service.setup.description",
      color: "blue",
    },
    {
      icon: IconDevices,
      titleKey: "home.service.platform.title",
      descriptionKey: "home.service.platform.description",
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
      className="relative pt-20 pb-16 -mt-1 overflow-hidden lg:pb-24"
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
        <div className="absolute bg-blue-300 rounded-full top-1/4 left-1/4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bg-blue-400 rounded-full bottom-1/4 right-1/4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
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
            Our Services
          </div>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-5xl">
            <FormattedMessage id="home.service.title" />
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 lg:text-xl">
            <FormattedMessage id="home.service.subtitle" />
          </p>
        </motion.div>

        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                  className="p-6 transition-all duration-300 bg-white border border-gray-200 shadow-sm group rounded-xl hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 transition-all duration-300 ${getColorClasses(
                      feature.color
                    )}`}
                  >
                    <feature.icon className="w-6 h-6 transition-colors duration-300" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                    <FormattedMessage id={feature.titleKey} />
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    <FormattedMessage id={feature.descriptionKey} />
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
              className="p-6 border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
            >
              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                <FormattedMessage id="home.service.why.title" />
              </h4>
              <p className="leading-relaxed text-gray-700">
                <FormattedMessage id="home.service.why.description" />
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
              <div className="absolute inset-0 scale-105 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>

              {/* Main Image Container */}
              <div className="relative p-4 bg-white shadow-2xl rounded-2xl lg:p-6">
                <img
                  src="public/stock/home/why_choose_us/5138237.jpg"
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
                  className="absolute p-4 bg-white border shadow-lg -bottom-4 -left-4 rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
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
                  className="absolute p-4 bg-white border shadow-lg -top-4 -right-4 rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
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
              {/* <img
                // src="/images/Public/forcustomersandservices.svg"
                alt="For Customers and Services"
                className="w-64 h-auto mx-auto lg:w-80 opacity-80"
              /> */}
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
          className="mt-16 text-center lg:mt-20"
        >
          <div className="bg-gradient-to-r from-[#0A65FC] to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="mb-4 text-2xl font-bold lg:text-3xl">
              <FormattedMessage id="home.service.quickAction.Title" />

            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg lg:text-xl opacity-90">
              <FormattedMessage id="home.service.quickAction.subTitle" />

            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={handleStartFreeTrial}
                className="px-8 py-4 bg-white text-[#0A65FC] rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </button>
              <button
                onClick={handleScheduleDemo}
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0A65FC] transition-all duration-300"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* POS Request Modal */}
      <POSRequestModal />
    </section>
  );
};
