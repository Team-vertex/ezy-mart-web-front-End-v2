import {
  IconArrowRight,
  IconCurrencyDollar,
  IconSparkles,
  IconUsers,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";

export const WhyPos: React.FC = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);
  const intl = useIntl();

  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  const getFeatures = () => [
    {
      icon: IconCurrencyDollar,
      badge: intl.formatMessage({
        id: "business.whyPos.features.noCost.badge",
      }),
      title: intl.formatMessage({
        id: "business.whyPos.features.noCost.title",
      }),
      subtitle: intl.formatMessage({
        id: "business.whyPos.features.noCost.subtitle",
      }),
      description: intl.formatMessage({
        id: "business.whyPos.features.noCost.description",
      }),
      gradient: "from-emerald-50 to-green-100",
      iconBg: "bg-gradient-to-br from-emerald-100 to-green-200",
      iconColor: "text-emerald-600",
      glowColor: "shadow-emerald-200",
    },
    {
      icon: IconSparkles,
      badge: intl.formatMessage({
        id: "business.whyPos.features.simplicity.badge",
      }),
      title: intl.formatMessage({
        id: "business.whyPos.features.simplicity.title",
      }),
      subtitle: intl.formatMessage({
        id: "business.whyPos.features.simplicity.subtitle",
      }),
      description: intl.formatMessage({
        id: "business.whyPos.features.simplicity.description",
      }),
      gradient: "from-purple-50 to-indigo-100",
      iconBg: "bg-gradient-to-br from-purple-100 to-indigo-200",
      iconColor: "text-purple-600",
      glowColor: "shadow-purple-200",
    },
    {
      icon: IconUsers,
      badge: intl.formatMessage({
        id: "business.whyPos.features.support.badge",
      }),
      title: intl.formatMessage({
        id: "business.whyPos.features.support.title",
      }),
      subtitle: intl.formatMessage({
        id: "business.whyPos.features.support.subtitle",
      }),
      description: intl.formatMessage({
        id: "business.whyPos.features.support.description",
      }),
      gradient: "from-orange-50 to-red-100",
      iconBg: "bg-gradient-to-br from-orange-100 to-red-200",
      iconColor: "text-orange-600",
      glowColor: "shadow-orange-200",
    },
  ];

  const features = getFeatures();

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
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
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase">
              <FormattedMessage id="business.whyPos.badge" />
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <FormattedMessage id="business.whyPos.title" />
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <FormattedMessage id="business.whyPos.subtitle" />
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className={`relative bg-gradient-to-br ${feature.gradient} p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl hover:${feature.glowColor}/50 transition-all duration-300 hover:scale-105 group overflow-hidden backdrop-blur-sm`}
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className={`inline-flex p-4 ${feature.iconBg} rounded-2xl shadow-lg ${feature.glowColor} hover:scale-110 transition-all duration-300 relative overflow-hidden group`}
                >
                  <feature.icon
                    className={`w-8 h-8 ${feature.iconColor} relative z-10 drop-shadow-sm`}
                  />
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Subtle shine effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-2xl opacity-50"></div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 font-medium mb-4">
                  {feature.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Subtle animated particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 px-8 py-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl max-w-4xl mx-auto border border-gray-100"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-3 text-sm font-semibold text-gray-600">
              <FormattedMessage id="business.whyPos.socialProof.rating" />
            </span>
          </div>
          <blockquote className="text-center">
            <p className="text-lg italic text-gray-700 mb-4">
              "<FormattedMessage id="business.whyPos.socialProof.quote" />"
            </p>
            <cite className="font-semibold text-gray-900">
              <FormattedMessage id="business.whyPos.socialProof.author" />
            </cite>
          </blockquote>
        </motion.div> */}

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-[#0A65FC] to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center">
              <FormattedMessage id="business.whyPos.cta.primary" />
              <IconArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 text-[#0A65FC] font-semibold border-2 border-blue-200 hover:border-[#0A65FC] rounded-full transition-all duration-300 hover:bg-blue-50">
              <FormattedMessage id="business.whyPos.cta.secondary" />
            </button>
          </div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            <FormattedMessage id="business.whyPos.cta.subtitle" />
          </p>
        </motion.div>
      </div>
    </section>
  );
};
