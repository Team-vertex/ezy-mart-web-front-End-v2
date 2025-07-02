"use client";
import FaqContent from "@/components/core/FaqContent";
import { FAQCustomer } from "@/constants/Data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// FaqSection component
const FaqSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase">
              FAQ
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-600">
              Questions
            </span>
          </h2>
        </motion.div>

        {/* FAQ Content */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 40 }}
          animate={
            isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20"
        >
          <FaqContent faqList={FAQCustomer} />
        </motion.div>
      </div>

      {/* CSS for animation delays */}
      <style>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default FaqSection;
