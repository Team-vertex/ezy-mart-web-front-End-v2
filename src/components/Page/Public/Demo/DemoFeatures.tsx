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
import { FormattedMessage} from "react-intl";
import { routes } from "@/constants/route";
import { useNavigate } from "react-router-dom";

export default function DemoFeatures() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const navigate = useNavigate();

  const handleStartFreeTrial = () => {
      navigate(routes.serviceForBusiness);
    };

  const features = [
    {
      icon: IconBarcode,
      titleId: "demo.features.barcode.title",
      descriptionId: "demo.features.barcode.description",
      color: "from-[#0A65FC] to-blue-600",
    },
    {
      icon: IconReportAnalytics,
      titleId: "demo.features.analytics.title",
      descriptionId: "demo.features.analytics.description",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: IconUsers,
      titleId: "demo.features.supplier.title",
      descriptionId: "demo.features.supplier.description",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: IconDevices,
      titleId: "demo.features.multidevice.title",
      descriptionId: "demo.features.multidevice.description",
      color: "from-blue-700 to-blue-800",
    },
    {
      icon: IconCloudComputing,
      titleId: "demo.features.cloud.title",
      descriptionId: "demo.features.cloud.description",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: IconCloudComputing,
      titleId: "demo.features.stock.title",
      descriptionId: "demo.features.stock.description",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: IconCloudComputing,
      titleId: "demo.features.expenses.title",
      descriptionId: "demo.features.expenses.description",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: IconCloudComputing,
      titleId: "demo.features.work.title",
      descriptionId: "demo.features.work.description",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: IconShield,
      titleId: "demo.features.payments.title",
      descriptionId: "demo.features.payments.description",
      color: "from-purple-600 to-blue-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-white lg:py-32"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 rounded-full top-1/4 w-96 h-96 bg-blue-50 mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute left-0 bg-blue-100 rounded-full bottom-1/4 w-96 h-96 mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-8 md:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex px-4 py-2 bg-blue-100 text-[#0A65FC] rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
            <FormattedMessage id="demo.features.badge" />
          </div>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
            <FormattedMessage
              id="demo.features.title"
              values={{
                highlight: (chunks) => (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-600">
                    {chunks}
                  </span>
                ),
              }}
            />
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            <FormattedMessage id="demo.features.subtitle" />
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleId}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-8 transition-all duration-300 transform bg-white border border-blue-100 shadow-lg rounded-3xl hover:shadow-2xl hover:border-blue-200 group-hover:scale-105">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0A65FC] transition-colors duration-300">
                  <FormattedMessage id={feature.titleId} />
                </h3>
                <p className="leading-relaxed text-gray-600">
                  <FormattedMessage id={feature.descriptionId} />
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
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-3xl p-8 lg:p-12 text-white max-w-4xl mx-auto">
            <h3 className="mb-4 text-2xl font-bold lg:text-4xl">
              <FormattedMessage id="demo.features.cta.title" />
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-blue-100 lg:text-xl">
              <FormattedMessage id="demo.features.cta.subtitle" />
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                 onClick={handleStartFreeTrial}
                className="px-8 py-4 bg-white text-[#0A65FC] rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                <FormattedMessage id="demo.features.cta.button.trial" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#0A65FC] transition-all duration-300"
              >
                <FormattedMessage id="demo.features.cta.button.demo" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
