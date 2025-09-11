import FaqContent from "@/components/core/FaqContent";
import { FAQContent } from "@/constants/Data";
import { routes } from "@/constants/route";
import { IconHelp, IconQuestionMark } from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

export const FAQ: React.FC = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate(routes.contactUs);
  };

  const handleScheduleDemo = () => {
    navigate(routes.demo);
  };

  return (
    <section className="relative overflow-hidden py-14 md:py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50">
      {/* Background decorations (hide on mobile to keep it clean) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute hidden bg-blue-100 rounded-full md:block -top-40 -right-40 w-80 h-80 mix-blend-multiply blur-2xl opacity-70 animate-blob" />
        <div className="absolute hidden bg-purple-100 rounded-full md:block -bottom-40 -left-40 w-80 h-80 mix-blend-multiply blur-2xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute hidden -translate-x-1/2 -translate-y-1/2 bg-pink-100 rounded-full md:block top-1/2 left-1/2 w-80 h-80 mix-blend-multiply blur-2xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container relative z-10 max-w-6xl px-4 mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center md:mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-4 md:mb-6"
          >
            <div className="p-2.5 mr-3 bg-blue-100 rounded-2xl md:p-3 md:mr-4">
              <IconQuestionMark className="w-6 h-6 text-blue-600 md:w-8 md:h-8" />
            </div>
            <span className="px-3 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-blue-700 uppercase bg-blue-100 rounded-full">
              Have Questions?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-3 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl"
          >
            <FormattedMessage id="home.faq.title" />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="max-w-2xl mx-auto text-base leading-relaxed text-gray-600 md:text-lg"
          >
            <FormattedMessage id="home.faq.subtitle" />
          </motion.p>
        </div>

        {/* FAQ Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="max-w-3xl mx-auto"
        >
         <div className="p-5 border shadow-xl md:p-8 lg:p-10 bg-white/90 backdrop-blur rounded-2xl md:rounded-3xl border-white/40">
  <FaqContent faqList={FAQContent} />
</div>

        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 text-center md:mt-16"
        >
          <div className="p-6 text-white shadow-2xl md:p-8 lg:p-10 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 rounded-2xl">
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <IconHelp className="w-6 h-6 mr-2 md:w-8 md:h-8" />
              <h3 className="text-xl font-bold md:text-2xl">
                <FormattedMessage id="home.havemorequestions.title" />
              </h3>
            </div>
            <p className="mb-6 text-sm text-blue-100 md:text-base lg:mb-8">
              <FormattedMessage id="home.havemorequestions.subtitle" />
            </p>

            {/* Buttons: full width on mobile, side-by-side on sm+ */}
            <div className="flex flex-col justify-center max-w-md gap-3 mx-auto sm:flex-row sm:gap-4">
              <button
                onClick={handleContactUs}
                className="w-full sm:w-auto px-6 py-3 font-semibold text-blue-600 transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.99]"
              >
                <FormattedMessage id="home.havemorequestions.contact" />
              </button>
              <button
                onClick={handleScheduleDemo}
                className="w-full sm:w-auto px-6 py-3 font-semibold text-white transition-all duration-300 transform border-2 border-white/80 bg-white/10 rounded-xl hover:bg-white hover:text-blue-700 hover:scale-[1.02] active:scale-[0.99]"
              >
                <FormattedMessage id="home.havemorequestions.scheduleDemo" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
