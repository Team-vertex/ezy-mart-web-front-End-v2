import { LanguageSwitch } from "@/components/core/LanguageSwitch";
import { indexHeroText } from "@/constants/Data";
import { Carousel } from "@mantine/carousel";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconPlayerPlay,
  IconRocket,
  IconShield,
  IconStar,
  IconStars,
  IconTrendingUp,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";

export const Hero: React.FC = () => {
  const [nowShwing, setNowShowing] = useState(indexHeroText.TextOne);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // MARK: Ref
  const welcomeRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  // MARK: Elements
  const isWelcomeInView = useInView(welcomeRef, { once: true, amount: 0.5 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isDescriptionInView = useInView(descriptionRef, {
    once: true,
    amount: 0.5,
  });
  const isButtonInView = useInView(buttonRef, { once: true, amount: 0.5 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });

  // MARK: Lifecycle
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setNowShowing((prev) =>
          prev === indexHeroText.TextOne
            ? indexHeroText.Texttwo
            : indexHeroText.TextOne
        );
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    "home.hero.feature1",
    "home.hero.feature2",
    "home.hero.feature3",
    "home.hero.feature4",
  ];

  const stats = [
    { value: "10K+", label: "home.hero.stats.users", icon: IconTrendingUp },
    { value: "99.9%", label: "home.hero.stats.uptime", icon: IconShield },
    { value: "24/7", label: "home.hero.stats.support", icon: IconClock },
    { value: "4.9★", label: "home.hero.stats.rating", icon: IconStar },
  ];

  // MARK: Render
  return (
    <section
      className="relative min-h-screen overflow-hidden pt-20 lg:pt-28 pb-0"
      style={{
        background:
          "linear-gradient(to bottom right, rgb(248 250 252), rgb(239 246 255), rgb(238 242 255))",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-7rem)]">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Welcome Badge */}
            <motion.div
              ref={welcomeRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isWelcomeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium rounded-full border border-blue-200"
            >
              <IconStars size={16} className="mr-2 text-yellow-500" />
              Welcome to EzyMart - Trusted by 10K+ businesses!
            </motion.div>

            {/* Main heading */}
            <motion.h1
              ref={headingRef}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
            >
              <FormattedMessage
                id={
                  nowShwing === indexHeroText.TextOne
                    ? "home.hero.textOne.title"
                    : "home.hero.textTwo.title"
                }
              />
            </motion.h1>

            {/* Description with animation */}
            <motion.div
              ref={descriptionRef}
              initial={{ opacity: 0, y: 40 }}
              animate={
                isDescriptionInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center justify-start h-auto overflow-hidden min-h-20"
            >
              <p
                className={`text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl transition-all duration-500 ease-in-out ${
                  isAnimating
                    ? "opacity-0 transform -translate-y-4"
                    : "opacity-100 transform translate-y-0"
                }`}
              >
                <FormattedMessage
                  id={
                    nowShwing === indexHeroText.TextOne
                      ? "home.hero.textOne.subtitle"
                      : "home.hero.textTwo.subtitle"
                  }
                />
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isDescriptionInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <IconCheck className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    <FormattedMessage id={feature} />
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons and Language Switch */}
            <motion.div
              ref={buttonRef}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col gap-6"
            >
              {/* Language Switch */}
              <div className="flex justify-start">
                <LanguageSwitch />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconRocket className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <FormattedMessage id="home.hero.cta.primary" />
                  <IconArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <motion.button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconPlayerPlay className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <FormattedMessage id="home.hero.cta.secondary" />
                </motion.button>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6"
            >
              <p className="text-sm text-gray-500 mb-4">
                Trusted by leading businesses
              </p>
              <div className="flex items-center space-x-8 opacity-60">
                {/* Placeholder for logos */}
                <div className="w-24 h-8 bg-gray-200 rounded"></div>
                <div className="w-24 h-8 bg-gray-200 rounded"></div>
                <div className="w-24 h-8 bg-gray-200 rounded"></div>
                <div className="w-24 h-8 bg-gray-200 rounded"></div>
              </div>
            </motion.div>
          </div>

          {/* Dashboard Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={
              isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative"
          >
            {/* Main Dashboard Container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 scale-105"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 lg:p-6">
                <Carousel
                  withIndicators
                  withControls={false}
                  loop
                  slideGap="xl"
                  slideSize="100%"
                  height="auto"
                  className="w-full"
                  classNames={{
                    indicator:
                      "!bg-blue-600 !opacity-30 !h-2 !w-8 !rounded-full !transition-all !duration-300 data-[active]:!opacity-100",
                  }}
                >
                  <Carousel.Slide>
                    <img
                      src="/stock/homeimg.jpg"
                      alt="EzyMart POS Dashboard"
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <img
                      src="/stock/homeimg2.png"
                      alt="EzyMart POS Interface"
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </Carousel.Slide>
                </Carousel>

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <IconTrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Sales Today</p>
                      <p className="text-lg font-bold text-gray-900">$12,450</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={
                    isImageInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: -20 }
                  }
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconShield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Security</p>
                      <p className="text-lg font-bold text-green-600">99.9%</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <IconClock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Response Time</p>
                      <p className="text-lg font-bold text-gray-900">
                        &lt; 0.1s
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16 lg:mt-24 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                <FormattedMessage id={stat.label} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <span className="text-gray-600 text-lg">×</span>
            </button>
            <div className="aspect-video">
              <video
                src="/stock/home.mp4"
                controls
                autoPlay
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
