import { routes } from "@/constants/route";
import { detectPlatformAndDownload } from "@/utils/appUtils";
import { motion, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  MapPin,
  Play,
  ShoppingBag,
  Smartphone,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

const WhyUseSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const featuresRef = useRef(null);
  const imageRef = useRef(null);
  const intl = useIntl();
  const navigate = useNavigate();

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mobile app screens data
  const appScreens = [
    {
      id: 1,
      title: "Home Screen",
      description: "Browse and discover products",
      features: ["Product Search", "Categories", "Recommendations"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Shopping Cart",
      description: "Manage your selections",
      features: ["Quick Add/Remove", "Price Calculation", "Checkout"],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Order Tracking",
      description: "Track your deliveries",
      features: ["Real-time Updates", "Delivery ETA", "Contact Rider"],
      color: "from-green-500 to-teal-600"
    },
    {
      id: 4,
      title: "Profile & Settings",
      description: "Personalize your experience",
      features: ["Account Settings", "Order History", "Preferences"],
      color: "from-orange-500 to-red-600"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % appScreens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [appScreens.length]);

  // Navigation functions
  const handleTryDemoClick = () => {
    navigate(routes.demo);
  };

  const handleDownloadAppClick = () => {
    detectPlatformAndDownload();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % appScreens.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + appScreens.length) % appScreens.length);
  };

  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: intl.formatMessage({ id: "customers.whyUse.feature1.title" }),
      description: intl.formatMessage({
        id: "customers.whyUse.feature1.description",
      }),
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: intl.formatMessage({ id: "customers.whyUse.feature2.title" }),
      description: intl.formatMessage({
        id: "customers.whyUse.feature2.description",
      }),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: intl.formatMessage({ id: "customers.whyUse.feature3.title" }),
      description: intl.formatMessage({
        id: "customers.whyUse.feature3.description",
      }),
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: intl.formatMessage({ id: "customers.whyUse.feature4.title" }),
      description: intl.formatMessage({
        id: "customers.whyUse.feature4.description",
      }),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-10 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float-slow"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Enhanced Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide border border-blue-200">
              <Smartphone className="w-4 h-4" />
              <FormattedMessage id="customers.whyUse.badge" />
            </div>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <FormattedMessage id="customers.whyUse.title" />{" "}
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <FormattedMessage id="customers.whyUse.subtitle" />
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              isFeaturesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                <FormattedMessage id="customers.whyUse.features.heading" />

              </h3>
              <p className="text-gray-600 text-lg">
                <FormattedMessage id="customers.whyUse.features.description" />
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isFeaturesInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-8 pt-8 border-t border-gray-200"
            >

            </motion.div>
          </motion.div>

          {/* Mobile App Carousel */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={
              isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl p-8 shadow-2xl border border-blue-100">
              {/* Carousel Controls */}
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Mock phone frame with carousel */}
              <div className="relative mx-auto max-w-sm">
                <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-gray-900 h-8 flex items-center justify-center">
                      <div className="w-20 h-1 bg-white rounded-full"></div>
                    </div>

                    {/* Carousel content */}
                    <div className="relative h-[400px] overflow-hidden">
                      {appScreens.map((screen, index) => (
                        <motion.div
                          key={screen.id}
                          initial={{ opacity: 0, x: 300 }}
                          animate={{
                            opacity: currentSlide === index ? 1 : 0,
                            x: currentSlide === index ? 0 : currentSlide > index ? -300 : 300,
                          }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className={`absolute inset-0 bg-gradient-to-br ${screen.color} p-6 text-white`}
                        >
                          <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center">
                              <ShoppingBag className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                              {screen.title}
                            </h3>
                            <p className="text-white/90 text-sm">
                              {screen.description}
                            </p>
                          </div>

                          {/* Mock app interface for each screen */}
                          <div className="space-y-4">
                            {screen.features.map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                                className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
                              >
                                <div className="flex items-center gap-3">
                                  {featureIndex === 0 && <MapPin className="w-5 h-5" />}
                                  {featureIndex === 1 && <ShoppingBag className="w-5 h-5" />}
                                  {featureIndex === 2 && <Clock className="w-5 h-5" />}
                                  <span className="font-medium">{feature}</span>
                                  {featureIndex === 2 && (
                                    <div className="ml-auto flex items-center gap-1">
                                      <Star className="w-4 h-4 text-yellow-300 fill-current" />
                                      <span className="text-sm">4.8</span>
                                    </div>
                                  )}
                                </div>
                                {featureIndex === 0 && (
                                  <div className="mt-3 h-2 bg-white/30 rounded-full">
                                    <div className="h-2 bg-white rounded-full w-3/4"></div>
                                  </div>
                                )}
                                {featureIndex === 1 && (
                                  <div className="mt-3 grid grid-cols-3 gap-2">
                                    <div className="h-8 bg-white/30 rounded"></div>
                                    <div className="h-8 bg-white/30 rounded"></div>
                                    <div className="h-8 bg-white/30 rounded"></div>
                                  </div>
                                )}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {appScreens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                        ? "bg-blue-600 w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                      }`}
                  />
                ))}
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-indigo-500 rounded-full animate-bounce animation-delay-1000"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20"
        >
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full transform -translate-x-24 translate-y-24"></div>

            <div className="relative z-10 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  <Smartphone className="w-4 h-4" />
                  <span>Download Our App Today</span>
                </div>

                <h3 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
                  Ready to Transform Your{" "}
                  <span className="text-yellow-300">Shopping Experience?</span>
                </h3>

                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Join over 100,000+ satisfied customers who have discovered the convenience of
                  smart shopping. Download our app and get exclusive deals, faster delivery,
                  and personalized recommendations.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <button
                  onClick={handleDownloadAppClick}
                  className="group px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Download App
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </button>

                <button
                  onClick={handleTryDemoClick}
                  className="group px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    Try Demo
                  </span>
                </button>
              </motion.div>

              {/* Features highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                <div className="flex items-center justify-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-yellow-800" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">4.8/5 Rating</div>
                    <div className="text-blue-200 text-sm">50k+ Reviews</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-800" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">30 Min Delivery</div>
                    <div className="text-blue-200 text-sm">Average Time</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-purple-800" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">1M+ Products</div>
                    <div className="text-blue-200 text-sm">Available</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Secondary CTA Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    For Customers
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Shop from thousands of local stores, get items delivered in minutes,
                    and enjoy exclusive deals and rewards.
                  </p>
                  <button
                    onClick={handleDownloadAppClick}
                    className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                  >
                    Shop Now →
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.0 }}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    For Businesses
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Connect with local customers, manage your inventory,
                    and grow your business with our merchant platform.
                  </p>
                  <button
                    onClick={() => navigate('/business')}
                    className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default WhyUseSection;
