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
      title: "Call Us",
      description: "Speak with our team",
      contact: "+94 76 123 4567",
      action: "Call Now",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: IconMail,
      title: "Email Us",
      description: "Send us a message",
      contact: "hello@ezymart.lk",
      action: "Send Email",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: IconMapPin,
      title: "Visit Us",
      description: "Come meet our team",
      contact: "Colombo, Sri Lanka",
      action: "Get Directions",
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
      className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-[#0A65FC] to-blue-800 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
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
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold tracking-wide uppercase border border-blue-500/30">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Your Business?
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of Sri Lankan businesses already using EzyMart POS.
            Get started today and see the difference in just 24 hours.
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-center shadow-2xl border border-white/10">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Left side - Message */}
              <div className="lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  HEARD ENOUGH?
                </h3>
                <p className="text-blue-100 text-lg">
                  Don't wait! Start your POS journey today.
                </p>
              </div>

              {/* Center - Main CTA */}
              <div>
                <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  LET'S TALK
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <span className="flex items-center justify-center">
                      Book Demo
                      <IconRocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button className="group px-8 py-4 bg-blue-500/20 text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-blue-500/30 transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center justify-center">
                      Get Started
                      <IconArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Right side - Arrow */}
              <div className="lg:text-right">
                <div className="inline-flex p-4 bg-white/10 rounded-full">
                  <IconSend className="w-8 h-8 text-white animate-pulse" />
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
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/20">
                <div
                  className={`inline-flex p-4 ${method.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <method.icon className={`w-8 h-8 ${method.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <p className="text-blue-300 font-semibold mb-6">
                  {method.contact}
                </p>
                <button
                  className={`px-6 py-3 bg-gradient-to-r ${method.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  {method.action}
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
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="inline-flex p-3 bg-blue-500/20 rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
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
          <p className="text-gray-300 text-lg mb-6">
            Questions? Email us at{" "}
            <a
              href="mailto:hello@ezymart.lk"
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              hello@ezymart.lk
            </a>
          </p>
          <div className="flex items-center justify-center">
            <IconClock className="w-5 h-5 text-gray-400 mr-2" />
            <span className="text-gray-400">
              Support available 9AM - 6PM (Mon-Sat)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
