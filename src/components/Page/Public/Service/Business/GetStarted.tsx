import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export const GetStarted: React.FC = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.3 });

  const steps = [
    {
      title: "Request System",
      description:
        "Just submit your basic details through our EzyMart landing page – name, contact info, business type, and location. No hassle, just a few clicks!",
      image: "/images/Business/image1.png",
      step: "01",
    },
    {
      title: "We'll Reach Out",
      description:
        "Our team will contact you to confirm your business details, guide you through the integration and training process, and help you prepare the needed documents.",
      image: "/images/Business/image2.png",
      step: "02",
    },
    {
      title: "Work with EzyMart POS",
      description:
        "Once your setup is complete, you'll receive the software and login – plug it in, and your business is ready to manage sales, stocks, and more with ease.",
      image: "/images/Business/image3.png",
      step: "03",
    },
  ];

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

      <div className="container relative z-10 mx-auto px-4">
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
              Simple Process
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get Started with EzyMart POS –{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-600">
              Fast and Easy
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting started with EzyMart POS is fast and effortless. Whether
            you're running a grocery store or a boutique, our process is
            designed to get your business up and running within 2 days. No tech
            skills needed!
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="relative bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-[#0A65FC] to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.step}
                </div>
              </div>

              {/* Image */}
              <div className="mb-6 mt-4 flex justify-center">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden bg-blue-50 p-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <button className="px-12 py-4 bg-gradient-to-r from-[#0A65FC] to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};
