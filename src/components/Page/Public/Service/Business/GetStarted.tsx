import { routes } from "@/constants/route";
import { scrollToSection } from "@/utils/scrollUtils";
import { motion, useInView } from "framer-motion";
import { usePOSRequestPopup } from "@/hooks/usePOSRequestPopup";
import React, { useRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

export const GetStarted: React.FC = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const intl = useIntl();
 

   const navigate = useNavigate();
    const { openPOSRequest, POSRequestModal } = usePOSRequestPopup();

  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.3 });

  // Navigation handlers

  

  const handleGetStarted = () => {
     openPOSRequest();
  };

  // Keyboard navigation handler
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleGetStarted();
    }
  };

  const getSteps = () => [
    {
      title: intl.formatMessage({
        id: "business.getStarted.steps.request.title",
      }),
      description: intl.formatMessage({
        id: "business.getStarted.steps.request.description",
      }),
      image: "/images/Business/image1.png",
      step: "01",
    },
    {
      title: intl.formatMessage({
        id: "business.getStarted.steps.contact.title",
      }),
      description: intl.formatMessage({
        id: "business.getStarted.steps.contact.description",
      }),
      image: "/images/Business/image2.png",
      step: "02",
    },
    {
      title: intl.formatMessage({
        id: "business.getStarted.steps.setup.title",
      }),
      description: intl.formatMessage({
        id: "business.getStarted.steps.setup.description",
      }),
      image: "/images/Business/image3.png",
      step: "03",
    },
  ];

  const steps = getSteps();

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 bg-blue-100 rounded-full left-1/4 w-96 h-96 mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 bg-blue-200 rounded-full right-1/4 w-96 h-96 mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="px-4 py-2 text-sm font-semibold tracking-wide text-blue-700 uppercase bg-blue-100 rounded-full">
              <FormattedMessage id="business.getStarted.badge" />
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
            <FormattedMessage id="business.getStarted.title" />
          </h2>

          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            <FormattedMessage id="business.getStarted.subtitle" />
          </p>
        
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-3 max-w-7xl"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="relative p-8 transition-all duration-300 bg-white border border-blue-100 shadow-xl rounded-3xl hover:shadow-2xl hover:scale-105 group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-[#0A65FC] to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.step}
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center mt-4 mb-6">
                <div className="w-32 h-32 p-4 overflow-hidden transition-colors duration-300 lg:w-40 lg:h-40 rounded-2xl bg-blue-50 group-hover:bg-blue-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none bg-gradient-to-br from-transparent to-blue-50/20 rounded-3xl group-hover:opacity-100"></div>
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
          className="mt-16 text-center"
        >
          <button
            onClick={handleGetStarted}
            onKeyDown={handleKeyDown}
            className="px-12 py-4 bg-gradient-to-r from-[#0A65FC] to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Get started with our POS system"
          >
            <FormattedMessage id="business.getStarted.cta" />
          </button>
        </motion.div>
      </div>

       <POSRequestModal />
    </section>
  );
};
