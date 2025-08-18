// import { routes } from "@/constants/route";
// import { detectPlatformAndDownload } from "@/utils/appUtils";
import { motion, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  MapPin,
  // Play,
  ShoppingBag,
  Smartphone,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useMobleRequestPopups } from "@/hooks/useMobleRequestPopup";
// import { useNavigate  } from "react-router-dom";

const WhyUseSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const featuresRef = useRef(null);
  const imageRef = useRef(null);
  const intl = useIntl();



  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0); 
  
    const { openMobileRequest, MobileRequestModal } = useMobleRequestPopups();


  // Mobile app screens data
  const appScreens = [
    {
      id: 1,
      title: "Product Search",
      image: "/public/images/CoustomerService/mobileScreens/Product Search.png",
    },
    {
      id: 2,
      title: "Review",
      image: "/public/images/CoustomerService/mobileScreens/Review.png",
    },
    {
      id: 3,
      title: "Shop view",
      image: "/public/images/CoustomerService/mobileScreens/Shop view.png",
    },
    {
      id: 5,
      title: "Splash",
      image: "/public/images/CoustomerService/mobileScreens/Splash.png",
    },
    {
      id: 4,
      title: "Start",
      image: "/public/images/CoustomerService/mobileScreens/Start.png",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % appScreens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [appScreens.length]);



  // Navigation functions
  // const handleTryDemoClick = () => {
  //   navigate(routes.demo);
  // };

  const handleDownloadAppClick = () => {
    openMobileRequest();
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
      className="relative py-20 overflow-hidden lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bg-blue-100 rounded-full top-20 right-1/4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-60 animate-float"></div>
        <div className="absolute bg-indigo-100 rounded-full opacity-50 bottom-20 left-1/3 w-96 h-96 mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        <div className="absolute w-48 h-48 bg-purple-100 rounded-full top-1/2 left-10 mix-blend-multiply filter blur-xl opacity-40 animate-float-slow"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        {/* Enhanced Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide text-blue-700 border border-blue-200 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100">
              <Smartphone className="w-4 h-4" />
              <FormattedMessage id="customers.whyUse.badge" />
            </div>

          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
            <FormattedMessage id="customers.whyUse.title" />{" "}
          </h2>

          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            <FormattedMessage id="customers.whyUse.subtitle" />
          </p>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
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
              <h3 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
                <FormattedMessage id="customers.whyUse.features.heading" />

              </h3>
              <p className="text-lg text-gray-600">
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
                  className="flex items-start gap-4 p-4 transition-all duration-300 border border-gray-100 rounded-2xl bg-white/60 backdrop-blur-sm hover:shadow-lg hover:border-blue-200"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white shadow-lg bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="leading-relaxed text-gray-600">
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
            <div className="relative p-8 border border-blue-100 shadow-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl">
              {/* Carousel Controls */}
              <div className="absolute z-20 flex gap-2 top-4 right-4">
                <button
                  onClick={prevSlide}
                  className="flex items-center justify-center w-10 h-10 transition-all duration-200 rounded-full shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex items-center justify-center w-10 h-10 transition-all duration-200 rounded-full shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Mock phone frame with carousel */}
              <div className="relative max-w-sm mx-auto">
                <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="flex items-center justify-center h-8 bg-gray-900">
                      <div className="w-20 h-1 bg-white rounded-full"></div>
                    </div>
                    {/* Carousel content */}
                    <div className="relative h-[600px] overflow-hidden bg-black">
                      {appScreens.map((screen, index) => (
                        <motion.div
                          key={screen.id}
                          initial={{ opacity: 0, x: 300 }}
                          animate={{
                            opacity: currentSlide === index ? 1 : 0,
                            x: currentSlide === index ? 0 : currentSlide > index ? -300 : 300,
                          }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          {screen.image && (
                            <img
                              src={screen.image}
                              alt={screen.title}
                              className="w-[100%] h-[98%] object-cover shadow-lg"
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>


                  </div>
                </div>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center gap-2 mt-6">
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
              <div className="absolute w-8 h-8 bg-blue-500 rounded-full -top-4 -left-4 animate-bounce"></div>
              <div className="absolute w-6 h-6 bg-indigo-500 rounded-full -bottom-4 -right-4 animate-bounce animation-delay-1000"></div>
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full top-1/2 -right-6 animate-ping"></div>
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
          <div className="relative p-12 overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-3xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute top-0 right-0 transform translate-x-32 -translate-y-32 rounded-full w-96 h-96 bg-white/5"></div>
            <div className="absolute bottom-0 left-0 transform -translate-x-24 translate-y-24 rounded-full w-72 h-72 bg-white/5"></div>

            <div className="relative z-10 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm">
                  <Smartphone className="w-4 h-4" />
                  <span>Download Our App Today</span>
                </div>

                <h3 className="mb-4 text-3xl font-bold leading-tight lg:text-5xl">
                  Ready to Transform Your{" "}
                  <span className="text-yellow-300">Shopping Experience?</span>
                </h3>

                <p className="max-w-3xl mx-auto mb-8 text-xl leading-relaxed text-blue-100">
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
                className="flex flex-col justify-center gap-4 mb-8 sm:flex-row"
              >
                <button
                  onClick={handleDownloadAppClick}
                  className="px-8 py-4 font-semibold text-blue-700 transition-all duration-300 transform bg-white shadow-xl group rounded-xl hover:bg-gray-50 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Request Mobile App 
                    <span className="inline-block transition-transform transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </button>

                {/* <button
                  onClick={handleTryDemoClick}
                  className="px-8 py-4 font-semibold text-white transition-all duration-300 transform border-2 border-white group rounded-xl hover:bg-white hover:text-blue-700 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    Try Demo
                  </span>
                </button> */}
              </motion.div>

              {/* Features highlight */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="grid max-w-4xl grid-cols-1 gap-6 mx-auto md:grid-cols-3"
              >
                <div className="flex items-center justify-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full">
                    <Star className="w-5 h-5 text-yellow-800" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold">4.8/5 Rating</div>
                    <div className="text-sm text-blue-200">50k+ Reviews</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-400 rounded-full">
                    <Clock className="w-5 h-5 text-green-800" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold">30 Min Delivery</div>
                    <div className="text-sm text-blue-200">Average Time</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="flex items-center justify-center w-10 h-10 bg-purple-400 rounded-full">
                    <ShoppingBag className="w-5 h-5 text-purple-800" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold">1M+ Products</div>
                    <div className="text-sm text-blue-200">Available</div>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </div>

          {/* Secondary CTA Cards */}
          {/* <div className="grid gap-6 mt-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
              className="p-8 border border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-xl">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-gray-900">
                    For Customers
                  </h4>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    Shop from thousands of local stores, get items delivered in minutes,
                    and enjoy exclusive deals and rewards.
                  </p>
                  <button
                    onClick={handleDownloadAppClick}
                    className="font-semibold text-green-600 transition-colors hover:text-green-700"
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
              className="p-8 border border-purple-100 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-xl">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-gray-900">
                    For Businesses
                  </h4>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    Connect with local customers, manage your inventory,
                    and grow your business with our merchant platform.
                  </p>
                  <button
                    onClick={() => navigate('/business')}
                    className="font-semibold text-purple-600 transition-colors hover:text-purple-700"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          </div> */}
        </motion.div>
      </div>
      <MobileRequestModal />
    </section>
  );
};

export default WhyUseSection;
