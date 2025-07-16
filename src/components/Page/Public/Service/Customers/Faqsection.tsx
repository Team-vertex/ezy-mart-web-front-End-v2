import FaqContent from "@/components/core/FaqContent";
import { FAQCustomer } from "@/constants/Data";
import { IconQuestionMark, IconSparkles } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";

// FaqSection component
const FaqSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const intl = useIntl();

  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden"
    >
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating shapes */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-blue-300/40 rounded-full mix-blend-multiply filter blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>

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

      <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-5xl">
        {/* Enhanced Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
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
            className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <FormattedMessage id="customers.faq.titleStart" />{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-600">
                <FormattedMessage id="customers.faq.titleHighlight" />
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-full transform scale-x-0 animate-scale-x"></div>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
              <FormattedMessage id="customers.faq.titleEnd" />
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            <FormattedMessage id="customers.faq.subtitle" />
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
          <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/30">
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
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-[#0A65FC]/5 to-blue-600/5 rounded-2xl p-8 lg:p-12 border border-[#0A65FC]/10">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              <FormattedMessage id="customers.faq.cta.title" />
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              <FormattedMessage id="customers.faq.cta.description" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#0A65FC] to-blue-700 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <FormattedMessage id="customers.faq.cta.button1" />
                <IconQuestionMark className="inline-block w-5 h-5 ml-2 group-hover:animate-bounce" />
              </button>
              <button className="px-8 py-4 border-2 border-[#0A65FC] text-[#0A65FC] rounded-xl font-semibold hover:bg-[#0A65FC] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <FormattedMessage id="customers.faq.cta.button2" />
              </button>
            </div>
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
    </section>
  );
};

export default FaqSection;
