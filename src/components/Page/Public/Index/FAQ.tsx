import FaqContent from "@/components/core/FaqContent";
import { FAQContent } from "@/constants/Data";
import { routes } from "@/constants/route";
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
   navigate(routes.demo);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bg-blue-100 rounded-full -top-40 -right-40 w-80 h-80 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bg-purple-100 rounded-full -bottom-40 -left-40 w-80 h-80 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-pink-100 rounded-full top-1/2 left-1/2 w-80 h-80 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="p-3 mr-4 bg-blue-100 rounded-2xl">
              <IconQuestionMark className="w-8 h-8 text-blue-600" />
            </div>
            <span className="px-4 py-2 text-sm font-semibold tracking-wide text-blue-700 uppercase bg-blue-100 rounded-full">
              Have Questions?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl"
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
            className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600"
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
          <div className="p-8 border shadow-xl bg-white/80 backdrop-blur-sm rounded-3xl border-white/20 lg:p-12">
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
          className="mt-16 text-center"
        >
          <div className="p-8 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
            <div className="flex items-center justify-center mb-4">
              <IconHelp className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold"><FormattedMessage id="home.havemorequestions.title" /></h3>
            </div>
            <p className="mb-6 text-lg text-blue-100">
              <FormattedMessage id="home.havemorequestions.subtitle" />
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={handleContactUs}
                className="px-8 py-3 font-semibold text-blue-600 transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:bg-blue-50 hover:scale-105"
              >
                <FormattedMessage id="home.havemorequestions.contact" />
              </button>
              <button
                onClick={handleScheduleDemo}
                className="px-8 py-3 font-semibold text-white transition-all duration-300 transform border border-blue-400 bg-blue-500/20 rounded-xl hover:bg-blue-500/30 hover:scale-105"
              >
                <FormattedMessage id="home.havemorequestions.scheduleDemo" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* POS Request Modal */}
     
    </section>
  );
};
