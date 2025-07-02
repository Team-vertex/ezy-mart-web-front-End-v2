import {
  IconBrandAndroid,
  IconBrandApple,
  IconBrandWindows,
  IconDeviceDesktop,
  IconDownload,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TryItYourself() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const downloadOptions = [
    {
      platform: "Windows",
      icon: IconBrandWindows,
      description: "Download for Windows 10/11",
      size: "156 MB",
      version: "v2.1.0",
      color: "from-blue-500 to-blue-600",
    },
    {
      platform: "macOS",
      icon: IconBrandApple,
      description: "Download for macOS 10.14+",
      size: "142 MB",
      version: "v2.1.0",
      color: "from-gray-600 to-gray-700",
    },
    {
      platform: "Android",
      icon: IconBrandAndroid,
      description: "Download from Play Store",
      size: "28 MB",
      version: "v2.0.5",
      color: "from-green-500 to-green-600",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Download & Install",
      description:
        "Download the EzyMart POS application for your preferred platform and complete the installation.",
    },
    {
      step: "02",
      title: "Create Account",
      description:
        "Sign up for a free trial account or log in with your existing EzyMart credentials.",
    },
    {
      step: "03",
      title: "Set Up Your Store",
      description:
        "Configure your store information, add products, and customize settings to match your business.",
    },
    {
      step: "04",
      title: "Start Selling",
      description:
        "Begin processing transactions, managing inventory, and growing your business with EzyMart POS.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-2000"></div>
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
            Get Started Today
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Try It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-600">
              Yourself
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to experience EzyMart POS firsthand? Download our application
            and start your free trial today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Download EzyMart POS
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Get the full EzyMart POS experience on your preferred device.
                Available for desktop and mobile platforms.
              </p>
            </div>

            <div className="space-y-4">
              {downloadOptions.map((option, index) => (
                <motion.div
                  key={option.platform}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          {option.platform}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {option.description}
                        </p>
                        <div className="flex space-x-4 text-xs text-gray-500 mt-1">
                          <span>{option.size}</span>
                          <span>•</span>
                          <span>{option.version}</span>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#0A65FC] text-white p-3 rounded-xl hover:bg-blue-600 transition-colors"
                    >
                      <IconDownload className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Web App Option */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center space-x-4 mb-4">
                <IconDeviceDesktop className="w-8 h-8" />
                <div>
                  <h4 className="text-lg font-bold">Web Application</h4>
                  <p className="text-blue-100">No download required</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                Try EzyMart POS directly in your browser without any
                installation.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0A65FC] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
              >
                Launch Web App
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Getting Started Steps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Getting Started
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Follow these simple steps to get your POS system up and running
                in minutes.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Support Note */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-blue-50 rounded-2xl p-6 border border-blue-100"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Need Help?
              </h4>
              <p className="text-gray-600 mb-4">
                Our support team is here to help you get started. Contact us for
                personalized assistance.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0A65FC] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors"
              >
                Contact Support
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
