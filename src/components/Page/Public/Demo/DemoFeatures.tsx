import {
  IconBarcode,
  IconCloudComputing,
  IconDevices,
  IconReportAnalytics,
  IconShield,
  IconUsers,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function DemoFeatures() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const features = [
    {
      icon: IconBarcode,
      title: "Barcode Scanning",
      description:
        "Fast and accurate barcode scanning for quick product identification and checkout.",
      color: "from-[#0A65FC] to-blue-600",
    },
    {
      icon: IconReportAnalytics,
      title: "Real-time Analytics",
      description:
        "Get instant insights into sales, inventory, and customer data with live dashboards.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: IconUsers,
      title: "Customer Management",
      description:
        "Track customer purchases, loyalty points, and preferences for better service.",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: IconDevices,
      title: "Multi-device Support",
      description:
        "Works seamlessly across desktop, tablet, and mobile devices for flexibility.",
      color: "from-blue-700 to-blue-800",
    },
    {
      icon: IconCloudComputing,
      title: "Cloud Synchronization",
      description:
        "All your data is safely stored and synchronized across all your devices.",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: IconShield,
      title: "Secure Payments",
      description:
        "Multiple secure payment options including cash, card, and digital wallets.",
      color: "from-purple-600 to-blue-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex px-4 py-2 bg-blue-100 text-[#0A65FC] rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
            Powerful Features
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-600">
              One System
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our POS system comes packed with features designed to streamline
            your business operations and enhance customer experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-200 transform group-hover:scale-105">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0A65FC] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0A65FC]/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-3xl p-8 lg:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using EzyMart POS to
              streamline their operations and boost sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#0A65FC] rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#0A65FC] transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
