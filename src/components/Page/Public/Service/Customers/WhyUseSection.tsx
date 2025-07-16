import { motion, useInView } from "framer-motion";
import {
  Clock,
  MapPin,
  ShoppingBag,
  Smartphone,
  Star,
  Users,
} from "lucide-react";
import { useRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";

const WhyUseSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const featuresRef = useRef(null);
  const imageRef = useRef(null);
  const intl = useIntl();

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] via-blue-600 to-indigo-600">
              <FormattedMessage id="customers.whyUse.titleHighlight" />
            </span>
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
                <span className="text-blue-600 block">
                  <FormattedMessage id="customers.whyUse.features.headingHighlight" />
                </span>
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
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">
                  <FormattedMessage id="customers.whyUse.stats.users.value" />
                </span>
                <span className="text-gray-600">
                  <FormattedMessage id="customers.whyUse.stats.users.label" />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">
                  <FormattedMessage id="customers.whyUse.stats.stores.value" />
                </span>
                <span className="text-gray-600">
                  <FormattedMessage id="customers.whyUse.stats.stores.label" />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-2xl font-bold text-gray-900">
                  <FormattedMessage id="customers.whyUse.stats.rating.value" />
                </span>
                <span className="text-gray-600">
                  <FormattedMessage id="customers.whyUse.stats.rating.label" />
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* App Showcase Image */}
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
              {/* Mock phone frame */}
              <div className="relative mx-auto max-w-sm">
                <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-gray-900 h-8 flex items-center justify-center">
                      <div className="w-20 h-1 bg-white rounded-full"></div>
                    </div>

                    {/* App screenshot mockup */}
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <ShoppingBag className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold">
                          <FormattedMessage id="customers.whyUse.appShowcase.title" />
                        </h3>
                        <p className="text-blue-100 text-sm">
                          <FormattedMessage id="customers.whyUse.appShowcase.tagline" />
                        </p>
                      </div>

                      {/* Mock app interface */}
                      <div className="space-y-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <MapPin className="w-5 h-5" />
                            <span className="font-medium">
                              <FormattedMessage id="customers.whyUse.appShowcase.feature1" />
                            </span>
                          </div>
                          <div className="h-2 bg-white/30 rounded-full">
                            <div className="h-2 bg-white rounded-full w-3/4"></div>
                          </div>
                        </div>

                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <ShoppingBag className="w-5 h-5" />
                            <span className="font-medium">
                              <FormattedMessage id="customers.whyUse.appShowcase.feature2" />
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="h-8 bg-white/30 rounded"></div>
                            <div className="h-8 bg-white/30 rounded"></div>
                            <div className="h-8 bg-white/30 rounded"></div>
                          </div>
                        </div>

                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5" />
                            <span className="font-medium">
                              <FormattedMessage id="customers.whyUse.appShowcase.feature3" />
                            </span>
                            <div className="ml-auto flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-300 fill-current" />
                              <span className="text-sm">
                                <FormattedMessage id="customers.whyUse.stats.rating.value" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-indigo-500 rounded-full animate-bounce animation-delay-1000"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default WhyUseSection;
