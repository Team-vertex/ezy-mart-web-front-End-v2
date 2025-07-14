import {
  IconArrowRight,
  IconClock,
  IconHeadset,
  IconMail,
  IconMapPin,
  IconPhone,
  IconRocket,
  IconSend,
  IconUsers,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FormattedMessage } from "react-intl";

export const Contact: React.FC = () => {
  // MARK: Refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  // MARK: In view states
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });

  const contactMethods = [
    {
      icon: IconPhone,
      titleKey: "home.contact.phone.title",
      descriptionKey: "home.contact.phone.description",
      contactKey: "home.contact.phone.number",
      actionKey: "home.contact.phone.action",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: IconMail,
      titleKey: "home.contact.email.title",
      descriptionKey: "home.contact.email.description",
      contactKey: "home.contact.email.address",
      actionKey: "home.contact.email.action",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: IconMapPin,
      titleKey: "home.contact.location.title",
      descriptionKey: "home.contact.location.description",
      contactKey: "home.contact.location.address",
      actionKey: "home.contact.location.action",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Businesses", icon: IconUsers },
    { number: "24/7", label: "Support Available", icon: IconHeadset },
    { number: "99%", label: "Uptime Guarantee", icon: IconRocket },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header Section */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase">
              <FormattedMessage id="home.contact.getInTouch" />
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <FormattedMessage id="home.contact.transformBusiness" />
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <FormattedMessage id="home.contact.joinBusinesses" />
          </p>
        </motion.div>

        {/* Main CTA Section */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 lg:p-12 text-center shadow-2xl border border-white/20">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Left side - Message */}
              <div className="lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  HEARD ENOUGH?
                </h3>
                <p className="text-gray-600 text-lg">
                  Don't wait! Start your POS journey today.
                </p>
              </div>

              {/* Center - Main CTA */}
              <div>
                <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                  LET'S TALK
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group px-8 py-4 bg-gradient-to-r from-[#0A65FC] to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center justify-center">
                      Book Demo
                      <IconRocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button className="group px-8 py-4 bg-white/60 backdrop-blur-sm text-gray-900 border-2 border-gray-200 hover:border-[#0A65FC] rounded-xl font-bold text-lg hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center justify-center">
                      Get Started
                      <IconArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Right side - Arrow */}
              <div className="lg:text-right">
                <div className="inline-flex p-4 bg-blue-100 rounded-full">
                  <IconSend className="w-8 h-8 text-[#0A65FC] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 text-center hover:bg-white/80 transition-all duration-300 border border-white/30 hover:border-blue-200 shadow-lg hover:shadow-xl">
                <div
                  className={`inline-flex p-4 ${method.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <method.icon className={`w-8 h-8 ${method.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.titleKey}
                </h3>
                <p className="text-gray-600 mb-4">{method.descriptionKey}</p>
                <p className="text-[#0A65FC] font-semibold mb-6">
                  {method.contactKey}
                </p>
                <button
                  className={`px-6 py-3 bg-gradient-to-r ${method.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  {method.actionKey}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isStatsInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl p-8 hover:bg-white/70 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="inline-flex p-3 bg-blue-100 rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-[#0A65FC]" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg mb-6">
            Questions? Email us at{" "}
            <a
              href="mailto:hello@ezymart.lk"
              className="text-[#0A65FC] hover:text-blue-800 font-semibold"
            >
              hello@ezymart.lk
            </a>
          </p>
          <div className="flex items-center justify-center">
            <IconClock className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-500">
              Support available 9AM - 6PM (Mon-Sat)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
