import { FAQItem } from "@/interface/core";
import { IconChevronDown, IconHelpCircle } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface FaqContentProps {
  faqList: FAQItem[];
}

const FaqContent: React.FC<FaqContentProps> = ({ faqList }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  // Toggle the accordion by index
  const handleAccordionToggle = (index: number) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {faqList.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl border transition-all duration-300 hover:shadow-lg ${
            activeAccordion === idx
              ? "border-[#0A65FC] shadow-lg shadow-blue-100/50"
              : "border-gray-200/60 hover:border-[#0A65FC]/30"
          }`}
        >
          {/* Question Button */}
          <button
            onClick={() => handleAccordionToggle(idx)}
            className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#0A65FC]/20 rounded-2xl transition-all duration-200"
            aria-expanded={activeAccordion === idx}
            aria-controls={`faq-content-${idx}`}
          >
            <div className="flex items-start gap-4 flex-1">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeAccordion === idx
                    ? "bg-[#0A65FC] text-white shadow-lg"
                    : "bg-blue-50 text-[#0A65FC] group-hover:bg-[#0A65FC] group-hover:text-white"
                }`}
              >
                <IconHelpCircle size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    activeAccordion === idx
                      ? "text-[#0A65FC]"
                      : "text-gray-900 group-hover:text-[#0A65FC]"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
            </div>

            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeAccordion === idx
                  ? "bg-[#0A65FC] text-white rotate-180"
                  : "bg-gray-100 text-gray-600 group-hover:bg-[#0A65FC] group-hover:text-white"
              }`}
            >
              <IconChevronDown
                size={16}
                className="transition-transform duration-300"
              />
            </div>
          </button>

          {/* Answer Content */}
          <AnimatePresence>
            {activeAccordion === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
                id={`faq-content-${idx}`}
              >
                <div className="px-6 pb-6">
                  <div className="ml-14 pl-4 border-l-2 border-blue-100">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-gray-600 leading-relaxed text-base"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtle gradient overlay for active state */}
          {activeAccordion === idx && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A65FC]/5 to-blue-600/5 rounded-2xl pointer-events-none" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FaqContent;
