import FaqContent from "@/components/core/FaqContent";
import { FAQContent } from "@/constants/Data";
import { routes } from "@/constants/route";
import { usePOSRequestPopup } from "@/hooks/usePOSRequestPopup.tsx";
import { IconHelp, IconQuestionMark } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

export const FAQ: React.FC = () => {
  // MARK: Refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const faqRef = useRef(null);

  // MARK: Hooks
  const navigate = useNavigate();
  const { openPOSRequest, POSRequestModal } = usePOSRequestPopup();

  // MARK: In view states
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isSubtitleInView = useInView(subtitleRef, { once: true, amount: 0.5 });
  const isFaqInView = useInView(faqRef, { once: true, amount: 0.3 });

  // MARK: Navigation functions
  const handleContactUs = () => {
    navigate(routes.contactUs);
  };

  const handleScheduleDemo = () => {
    openPOSRequest();
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="bg-blue-100 p-3 rounded-2xl mr-4">
              <IconQuestionMark className="w-8 h-8 text-blue-600" />
            </div>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase">
              Have Questions?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <FormattedMessage id="home.faq.title" />
          </motion.h2>

          <motion.p
            ref={subtitleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isSubtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            <FormattedMessage id="home.faq.subtitle" />
          </motion.p>
        </div>

        {/* FAQ Grid */}
        <motion.div
          ref={faqRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* FAQ Component with enhanced styling */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 lg:p-12">
            <FaqContent faqList={FAQContent} />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <IconHelp className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold"><FormattedMessage id="home.havemorequestions.title" /></h3>
            </div>
            <p className="text-blue-100 mb-6 text-lg">
              <FormattedMessage id="home.havemorequestions.subtitle" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactUs}
                className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FormattedMessage id="home.havemorequestions.contact" />
              </button>
              <button
                onClick={handleScheduleDemo}
                className="px-8 py-3 bg-blue-500/20 text-white border border-blue-400 rounded-xl font-semibold hover:bg-blue-500/30 transition-all duration-300 transform hover:scale-105"
              >
                <FormattedMessage id="home.havemorequestions.scheduleDemo" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* POS Request Modal */}
      <POSRequestModal />
    </section>
  );
};
