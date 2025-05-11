"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface FaqItemProps {
  question: string;
  answer?: string;
  isOpen?: boolean;
  onClick: () => void;
  index: number;
}

const FaqItem = ({ question, answer, isOpen, onClick, index }: FaqItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut"
    }}
    className={`mt-5 bg-sky-100 rounded-2xl shadow-lg ${isOpen ? 'border-2 border-solid border-[#0A65FC]' : ''}`}
    onClick={onClick}
  >
    {isOpen ? (
      <div className="flex flex-col items-start px-14 py-11 max-md:px-5 max-md:max-w-full">
        <h3 className="text-xl text-black">{question}</h3>
        <p className="mt-5 text-lg leading-7 text-neutral-500 max-md:max-w-full">
          {answer || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        </p>
      </div>
    ) : (
      <h3 className="text-xl text-black px-14 py-14 max-md:px-5 max-md:max-w-full">
        {question}
      </h3>
    )}
  </motion.div>
);

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "is EzyMart mobile application Free?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    { question: "How it Works?" },
    { question: "Recommended for ?" },
    { question: "In which Devices can run application?" },
    { question: "Is customers data safe?" }
  ];

  return (
    <section className="mt-48 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-medium text-center text-slate-900 max-md:max-w-full max-md:text-4xl font-[Poppins]"
      >
        Frequently Asked{" "}
        <span style={{ fontWeight: 700, color: "rgba(10,101,252,1)" }}>
          Questions
        </span>
      </motion.h2>
      <div className="w-full mt-10 rounded-none max-md:max-w-full">
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={index === openIndex}
            onClick={() => setOpenIndex(index)}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;