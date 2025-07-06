import {
  IconBrandAndroid,
  IconBrandApple,
  IconBrandWindows,
  IconBuilding,
  IconDeviceDesktop,
  IconDownload,
  IconMail,
  IconPhone,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function TryItYourself() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Modal state management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleDownloadRequest = (platform: string) => {
    setSelectedPlatform(platform);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Download request submitted:", {
      ...formData,
      platform: selectedPlatform,
    });

    // Show success message or redirect
    alert(
      `Thank you! We'll send you the download link for ${selectedPlatform} shortly.`
    );

    // Reset form and close modal
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    setIsModalOpen(false);
    setSelectedPlatform(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
      title: "Request Access",
      description:
        "Fill out our simple form to request access to EzyMart POS for your preferred platform.",
    },
    {
      step: "02",
      title: "Receive Download Link",
      description:
        "We'll send you a secure download link and installation instructions within 24 hours.",
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
            Ready to experience EzyMart POS firsthand? Request access to our
            application and start your free trial today.
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
                Request EzyMart POS Access
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Request access to the full EzyMart POS experience on your
                preferred device. Available for desktop and mobile platforms.
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
                  onClick={() => handleDownloadRequest(option.platform)}
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
                          <span>•</span>
                          <span>Request Access</span>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#0A65FC] text-white p-3 rounded-xl hover:bg-blue-600 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadRequest(option.platform);
                      }}
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
                  <p className="text-blue-100">Request browser access</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                Request access to EzyMart POS directly in your browser without
                any installation required.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0A65FC] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                onClick={() => handleDownloadRequest("Web Application")}
              >
                Request Access
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

      {/* Download Request Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Request Download Access
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <IconX className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    {selectedPlatform === "Windows" && (
                      <IconBrandWindows className="w-5 h-5 text-white" />
                    )}
                    {selectedPlatform === "macOS" && (
                      <IconBrandApple className="w-5 h-5 text-white" />
                    )}
                    {selectedPlatform === "Android" && (
                      <IconBrandAndroid className="w-5 h-5 text-white" />
                    )}
                    {selectedPlatform === "Web Application" && (
                      <IconDeviceDesktop className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {selectedPlatform}
                    </h4>
                    <p className="text-sm text-gray-600">
                      EzyMart POS Application
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <IconUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <IconMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name
                  </label>
                  <div className="relative">
                    <IconBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <IconPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your business needs..."
                  />
                </div>

                <div className="pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#0A65FC] text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-600 transition-colors"
                  >
                    Request Download Link
                  </motion.button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  We'll send you a download link within 24 hours. Your
                  information will be kept confidential.
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
