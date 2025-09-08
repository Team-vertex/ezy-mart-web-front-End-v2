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
import { FormattedMessage } from "react-intl";
import { routes } from "@/constants/route";
import { useNavigate } from "react-router-dom";

export default function DemoFeatures() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });
  const navigate = useNavigate();

  const handleStartFreeTrial = () => {
    navigate(routes.serviceForBusiness);
  };

  // ✅ Use a single "bg" field with full classes (works for gradient or solid)
  const features = [
    {
      icon: IconBarcode,
      titleId: "demo.features.barcode.title",
      descriptionId: "demo.features.barcode.description",
      bg: "bg-gradient-to-r from-[#0A65FC] to-blue-600",
    },
    {
      icon: IconReportAnalytics,
      titleId: "demo.features.analytics.title",
      descriptionId: "demo.features.analytics.description",
      bg: "bg-gradient-to-r from-blue-500 to-blue-600",
    },
    {
      icon: IconUsers,
      titleId: "demo.features.supplier.title",
      descriptionId: "demo.features.supplier.description",
      bg: "bg-blue-600",
    },
    {
      icon: IconDevices,
      titleId: "demo.features.multidevice.title",
      descriptionId: "demo.features.multidevice.description",
      bg: "bg-blue-600",
    },
    {
      icon: IconCloudComputing,
      titleId: "demo.features.cloud.title",
      descriptionId: "demo.features.cloud.description",
      bg: "bg-blue-600",
    },
    {
      icon: IconCloudComputing,
      titleId: "demo.features.stock.title",
      descriptionId: "demo.features.stock.description",
      bg: "bg-blue-600",
    },
    {
      icon: IconCloudComputing,
      titleId: "demo.features.expenses.title",
      descriptionId: "demo.features.expenses.description",
      bg: "bg-blue-600",
    },
    {
      icon: IconCloudComputing,
      titleId: "demo.features.work.title",
      descriptionId: "demo.features.work.description",
      bg: "bg-blue-600",
    },
    {
      icon: IconShield,
      titleId: "demo.features.payments.title",
      descriptionId: "demo.features.payments.description",
      bg: "bg-blue-600",
    },
  ] as const;

  return (
    <section
      ref={sectionRef}
      className="relative py-12 overflow-hidden bg-white md:py-16 lg:py-24"
    >
      {/* Background decorations (hide on mobile for clarity) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 hidden rounded-full md:block top-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-blue-50 mix-blend-multiply blur-xl opacity-70" />
        <div className="absolute left-0 hidden bg-blue-100 rounded-full md:block bottom-1/4 w-72 h-72 lg:w-96 lg:h-96 mix-blend-multiply blur-xl opacity-70" />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:mb-14 lg:mb-16"
        >
          <div className="inline-flex px-3 py-1.5 bg-blue-100 text-[#0A65FC] rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase mb-4 md:mb-6">
            <FormattedMessage id="demo.features.badge" />
          </div>
          <h2 className="mb-3 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl md:mb-6">
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
          <p className="max-w-3xl mx-auto text-base leading-relaxed text-gray-600 md:text-lg">
            <FormattedMessage id="demo.features.subtitle" />
          </p>
        </motion.div>

        {/* Features Grid (mobile 1, md 2, lg 3) */}
        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleId}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: Math.min(index * 0.08, 0.4) }}
              className="relative group"
            >
              <div className="p-6 sm:p-7 lg:p-8 bg-white border border-blue-100 rounded-2xl lg:rounded-3xl shadow-lg transition-all duration-300 transform hover:shadow-2xl hover:border-blue-200 group-hover:scale-[1.02]">
                {/* Icon */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-110`}
                >
                  <feature.icon className="text-white w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2.5 sm:mb-3.5 transition-colors group-hover:text-[#0A65FC]">
                  <FormattedMessage id={feature.titleId} />
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 break-words sm:text-base">
                  <FormattedMessage id={feature.descriptionId} />
                </p>

                {/* Hover wash */}
                <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-[#0A65FC]/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 text-center md:mt-16 lg:mt-20"
        >
          <div className="mx-auto max-w-4xl p-6 md:p-8 lg:p-12 text-white bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-2xl lg:rounded-3xl shadow-xl">
            <h3 className="mb-3 text-xl font-bold md:text-3xl lg:text-4xl md:mb-4">
              <FormattedMessage id="demo.features.cta.title" />
            </h3>
            <p className="max-w-2xl mx-auto mb-6 text-sm text-blue-100 md:text-lg md:mb-8">
              <FormattedMessage id="demo.features.cta.subtitle" />
            </p>
            <div className="flex flex-col justify-center max-w-md gap-3 mx-auto sm:flex-row sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleStartFreeTrial}
                className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white text-[#0A65FC] rounded-xl font-semibold md:font-bold text-base md:text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                <FormattedMessage id="demo.features.cta.button.trial" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white rounded-xl font-semibold md:font-bold text-base md:text-lg hover:bg-white hover:text-[#0A65FC] transition-all duration-300"
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
