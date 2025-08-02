import ModernCarousel from "@/components/carousel/ModernCarousel";
import { routes } from "@/constants/route";
import { usePOSRequestPopup } from "@/hooks/usePOSRequestPopup";
import {
  IconArrowRight,
  IconAward,
  IconCheck,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

export const Value: React.FC = () => {
  // MARK: Hooks
  const navigate = useNavigate();
  const { openPOSRequest, POSRequestModal } = usePOSRequestPopup();

  // MARK: Refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const statsRef = useRef(null);
  const carouselRef = useRef(null);

  // MARK: Elements
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });
  const isCarouselInView = useInView(carouselRef, { once: true, amount: 0.3 });

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

  // Image data for the carousel
  const slideImages = [
    {
      id: 1,
      src: "/images/Business/image1.png",
      alt: "Shop owner using EzyMart POS",
      title: "Smart POS Solutions",
      description:
        "Streamline your business operations with our intuitive POS system designed for modern retailers.",
      badge: "POS System",
    },
    {
      id: 2,
      src: "/images/Business/image2.png",
      alt: "Customer using EzyMart mobile app",
      title: "Mobile Integration",
      description:
        "Connect with customers through our powerful mobile app that enhances shopping experience.",
      badge: "Mobile App",
    },
    {
      id: 3,
      src: "/images/Business/image3.png",
      alt: "Inventory management with EzyMart",
      title: "Real-time Analytics",
      description:
        "Make data-driven decisions with comprehensive analytics and reporting tools.",
      badge: "Analytics",
    },
  ];

  const valuePropositions = [
    <FormattedMessage id="home.value.valueproposition.value1" />,
    <FormattedMessage id="home.value.valueproposition.value2" />,
    <FormattedMessage id="home.value.valueproposition.value3" />,
    <FormattedMessage id="home.value.valueproposition.value4" />,
    <FormattedMessage id="home.value.valueproposition.value5" />,
    <FormattedMessage id="home.value.valueproposition.value6" />,
    <FormattedMessage id="home.value.valueproposition.value7" />,
    <FormattedMessage id="home.value.valueproposition.value8" />,

  ];

  const stats = [
    {
      icon: IconUsers,
      value: "-",
      labelKey: "home.value.stats.customers",
      color: "blue",
    },
    {
      icon: IconTrendingUp,
      value: "-",
      labelKey: "home.value.stats.increase",
      color: "blue",
    },
    {
      icon: IconAward,
      value: "-",
      labelKey: "home.value.stats.rating",
      color: "blue",
    },
  ];

  const getStatColor = (color: string) => {
    const colorMap = {
      blue: "from-[#0A65FC] to-blue-600",
      green: "from-[#0A65FC] to-blue-600",
      purple: "from-[#0A65FC] to-blue-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_12%,rgba(10,101,252,.05)_12%,rgba(10,101,252,.05)_20%,transparent_20%,transparent_32%,rgba(10,101,252,.05)_32%,rgba(10,101,252,.05)_40%,transparent_40%)] bg-[length:60px_60px]"></div>
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
            Our Value Proposition
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            <FormattedMessage id="home.value.title" />
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <FormattedMessage id="home.value.subtitle" />
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 lg:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getStatColor(
                  stat.color
                )} rounded-2xl mb-6 shadow-lg`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                <FormattedMessage id={stat.labelKey} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Carousel Section */}
          <motion.div
            ref={carouselRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              isCarouselInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A65FC] to-blue-700 rounded-2xl blur-2xl opacity-20 scale-105"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 lg:p-6">
                <div className="h-96 lg:h-[28rem]">
                  <ModernCarousel
                    images={slideImages}
                    autoplay={true}
                    autoplayDelay={4000}
                    showControls={true}
                    showIndicators={true}
                    className="h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isCarouselInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Value Propositions */}
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                <FormattedMessage id="home.value.valueproposition.Title" />
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {valuePropositions.map((proposition, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isCarouselInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconCheck className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {proposition}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isCarouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                <FormattedMessage id="home.value.valueproposition.pragraph1" />
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <FormattedMessage id="home.value.valueproposition.pragraph2" />

              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isCarouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex items-center justify-start"
            >
              <button
                onClick={handleStartFreeTrial}
                className="group flex items-center px-8 py-4 bg-gradient-to-r from-[#0A65FC] to-blue-700 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg"
              >
                <FormattedMessage id="home.value.valueproposition.cta1" />
                <IconArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              <FormattedMessage id="home.value.bottomCta.Title" />
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              <FormattedMessage id="home.value.bottomCta.subTitle" />

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleStartFreeTrial}
                className="px-8 py-4 bg-gradient-to-r from-[#0A65FC] to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                <FormattedMessage id="home.value.bottomCta.action1" />
              </button>
              <button
                onClick={handleWatchDemo}
                className="px-8 py-4 border-2 border-[#0A65FC] text-[#0A65FC] rounded-lg font-semibold hover:bg-[#0A65FC] hover:text-white transition-all duration-300"
              >
                <FormattedMessage id="home.value.bottomCta.action2" />
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
