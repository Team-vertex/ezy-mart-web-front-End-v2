"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import FaqContent from "@/components/core/FaqContent";
import { FAQCustomer } from "@/constants/Data";
import { Contact } from "@/components/Page/Public/Index/Contact";


// FAQ item interface
interface FaqItemProps {
  question: string;
  answer?: string;
  isOpen?: boolean;
  onClick: () => void;
  index: number;
}

// FaqItem component
const FaqItem = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: FaqItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut",
    }}
    className={`cursor-pointer bg-sky-100 rounded-2xl shadow-lg transition-all duration-300 ${isOpen ? "border-2 border-[#0A65FC]" : ""
      }`}
    onClick={onClick}
  >
    {isOpen ? (
      <div className="flex flex-col items-start px-6 py-6 sm:px-10 md:px-12 lg:px-14 sm:py-8 md:py-10 lg:py-11">
        <h3 className="text-xl font-semibold text-black sm:text-2xl">{question}</h3>
        <p className="mt-5 text-base leading-7 sm:text-lg text-neutral-500">
          {answer ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </p>
      </div>
    ) : (
      <h3 className="px-6 py-6 text-xl font-semibold text-black sm:text-2xl sm:px-10 md:px-12 lg:px-14 sm:py-8 md:py-10 lg:py-14">
        {question}
      </h3>
    )}
  </motion.div>
);


// FaqSection component
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "Is EzyMart mobile application Free?",
      answer:
        "Yes, EzyMart mobile application is free to download and use. There are no hidden charges.",
    },
    { question: "How it Works?", answer: "You browse, order, and we deliver to your doorstep." },
    { question: "Recommended for ?", answer: "It is ideal for busy professionals and households." },
    { question: "In which Devices can run application?", answer: "Android and iOS devices are supported." },
    { question: "Is customers data safe?", answer: "Yes, all customer data is encrypted and secure." },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
