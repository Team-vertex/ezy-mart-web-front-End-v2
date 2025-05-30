"use client";
import FaqContent from "@/components/core/FaqContent";
import { FAQCustomer } from "@/constants/Data";
import { motion } from "framer-motion";
import { useState } from "react";

// FaqSection component
const FaqSection = () => {
  const [_openIndex, _setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full px-4 mx-auto mb-20  sm:px-6 lg:px-8 mt-10 md:mt-10 lg:mt-10 xl:mt-10 max-w-7xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-bold text-center text-xl md:text-3xl lg:text-4xl text-slate-900"
      >
        Frequently Asked{" "}
        <span className="text-[#0A65FC] font-georgia">Questions</span>
      </motion.h2>

      <div className="w-full mt-4 md:mt-6 space-y-1 text-xs md:text-sm lg:text-lg">
        <FaqContent faqList={FAQCustomer} />
      </div>
    </section>
  );
};

export default FaqSection;
