"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

type FeatureProps = {
  icon: React.ReactNode;
  text: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center text-white gap-2">
      {icon}
      <span className="text-xs md:text-sm lg:text-base">{text}</span>
    </div>
  );
};

function Hero() {
  // MARK: Hooks
  const buttonRef = useRef(null);
  const isButtonInView = useInView(buttonRef, { once: true, margin: "-100px" });

  // MARK: Render
  return (
    <section className="relative flex-grow flex min-h-[80vh] flex-col items-center justify-center bg-gradient-to-tr from-[#0538d0] to-[#053CDF] overflow-hidden">
      {/* Decorative bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-300/20"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                Math.random() * 10 + 15
              }s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-20 container mx-auto px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center text-white">
          Smart <span className="text-black font-bold">POS Solutions</span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-center text-white mt-4 max-w-3xl">
          Smart POS Solutions Built for Sri Lankan Shops Our POS system helps
          you manage sales, stock, expenses, and more all in one place. From
          groceries to electronics, it's the smart, affordable way to grow your
          business. Just simple tools for smarter selling.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 w-full max-w-3xl">
          <Feature
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            }
            text="Easy to use."
          />
          <Feature
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            }
            text="Quick to set up."
          />
          <Feature
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            }
            text="No complex systems."
          />
          <Feature
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            }
            text="No high costs"
          />
        </div>

        {/* CTA Button */}
        <motion.button
          ref={buttonRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8, delay: 0.6 }}
          className="!z-50 mt-8 px-12 py-2 text-white transition-colors border border-white rounded-full hover:bg-white hover:text-blue-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>

      {/* CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
