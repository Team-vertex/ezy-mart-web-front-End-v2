import FaqContent from "@/components/core/FaqContent";
// import { AppDownloadButtons } from "@/components/ui/AppDownloadButtons";
import { FAQCustomer } from "@/constants/Data";
// import { routes } from "@/constants/route";
import { useMobleRequestPopups } from "@/hooks/useMobleRequestPopup";
import { IconQuestionMark, IconSparkles } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FormattedMessage } from "react-intl";
// import { scrollToSection } from "@/utils/scrollUtils";

// FaqSection component
const FaqSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  ;
  const { openMobileRequest, MobileRequestModal } = useMobleRequestPopups();

  // Navigation functions
  const handleGetStartedClick = () => {
    openMobileRequest();
  };

  // const handleContactSupportClick = () => {
  //    scrollToSection('appshowcase');
  // };

  // const handleGetStartedKeyDown = (event: React.KeyboardEvent) => {
  //   if (event.key === 'Enter' || event.key === ' ') {
  //     event.preventDefault();
  //     handleContactSupportClick();
  //   }
  // };

  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      data-section="faq"
      className="relative py-20 overflow-hidden lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"
    >
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating shapes */}
        <div className="absolute rounded-full top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 mix-blend-multiply filter blur-2xl animate-float"></div>
        <div className="absolute rounded-full bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-blue-300/40 mix-blend-multiply filter blur-2xl animate-float-delayed"></div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>

        {/* Question mark decorations */}
        <div className="absolute top-32 right-20 opacity-10">
          <IconQuestionMark size={120} className="text-[#0A65FC]" />
        </div>
        <div className="absolute bottom-32 left-20 opacity-5">
          <IconQuestionMark size={80} className="text-indigo-500" />
        </div>

        {/* Geometric patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,101,252,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(10,101,252,0.03)_49%,rgba(10,101,252,0.03)_51%,transparent_52%)] bg-[length:60px_60px]"></div>
      </div>

      <div className="container relative z-10 max-w-5xl px-6 mx-auto lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8 }}
          className="mb-16 text-center lg:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isHeadingInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0A65FC]/10 to-blue-600/10 border border-[#0A65FC]/20 text-[#0A65FC] rounded-full text-sm font-semibold tracking-wide uppercase mb-8 backdrop-blur-sm"
          >
            <IconSparkles size={16} className="animate-pulse" />
            <FormattedMessage id="customers.faq.badge" />
            <IconSparkles size={16} className="animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl xl:text-7xl"
          >
            <FormattedMessage id="customers.faq.title" />{" "}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 lg:text-xl"
          >
            <FormattedMessage id="customers.faq.description" />
          </motion.p>
        </motion.div>

        {/* Enhanced FAQ Content */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Content wrapper with glass effect */}
          <div className="relative p-8 border shadow-2xl bg-white/70 backdrop-blur-xl rounded-3xl lg:p-12 border-white/30">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl"></div>

            {/* FAQ Content */}
            <div className="relative z-10">
              <FaqContent faqList={FAQCustomer} />
            </div>

          </div>

          {/* Bottom decorative element */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#0A65FC] to-transparent rounded-full"></div>
        </motion.div>

        {/* Call-to-action section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center lg:mt-20"
        >
          <div className="bg-gradient-to-r from-[#0A65FC]/5 to-blue-600/5 rounded-2xl p-8 lg:p-12 border border-[#0A65FC]/10">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
              <FormattedMessage id="customers.faq.cta.title" />
            </h3>

            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
              <FormattedMessage id="customers.faq.cta.description" />
            </p>
            <div className="flex flex-col justify-center gap-4 mb-8 sm:flex-row">
              <button
                onClick={handleGetStartedClick}
                className="group px-8 py-4 bg-gradient-to-r from-[#0A65FC] to-blue-700 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <FormattedMessage id="customers.faq.cta.button1" />
              </button>

            </div>

            {/* App Download Section */}
            {/* <div className="pt-8 border-t border-gray-200"> */}
            {/* <h4 className="mb-4 text-lg font-semibold text-gray-900">
                Request Our Mobile App
              </h4> */}
            {/* <AppDownloadButtons /> */}
            {/* </div> */}
          </div>
        </motion.div>
      </div>

      {/* Enhanced CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-3deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        
        @keyframes scale-x {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-scale-x {
          animation: scale-x 1s ease-out 1s forwards;
        }
      `}</style>
      <MobileRequestModal />
    </section>
  );
};

export default FaqSection;
