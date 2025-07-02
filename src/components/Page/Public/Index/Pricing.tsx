import {
  IconArrowRight,
  IconBolt,
  IconCheck,
  IconCrown,
  IconRocket,
  IconStar,
  IconX,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  // MARK: Refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const toggleRef = useRef(null);
  const cardsRef = useRef(null);

  // MARK: In view states
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isToggleInView = useInView(toggleRef, { once: true, amount: 0.5 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.3 });

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses",
      icon: IconBolt,
      price: { monthly: 2499, yearly: 24999 },
      originalPrice: { monthly: 3999, yearly: 39999 },
      features: [
        "Single user access",
        "Basic inventory management",
        "Sales reporting",
        "Customer management",
        "Email support",
        "Basic analytics",
      ],
      limitations: [
        "Advanced reporting",
        "Multi-location support",
        "API access",
        "Priority support",
      ],
      popular: false,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "Professional",
      description: "Most popular for growing businesses",
      icon: IconRocket,
      price: { monthly: 4999, yearly: 49999 },
      originalPrice: { monthly: 7999, yearly: 79999 },
      features: [
        "Up to 5 users",
        "Advanced inventory management",
        "Detailed reporting & analytics",
        "Customer loyalty programs",
        "Priority support",
        "Multi-payment methods",
        "Barcode scanning",
        "Tax management",
      ],
      limitations: ["Multi-location support", "API access"],
      popular: true,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
    },
    {
      name: "Enterprise",
      description: "For large businesses & chains",
      icon: IconCrown,
      price: { monthly: 9999, yearly: 99999 },
      originalPrice: { monthly: 14999, yearly: 149999 },
      features: [
        "Unlimited users",
        "Multi-location support",
        "Advanced analytics & BI",
        "Custom integrations",
        "24/7 phone support",
        "API access",
        "Custom training",
        "Dedicated account manager",
        "Custom reporting",
        "Data export tools",
      ],
      limitations: [],
      popular: false,
      color: "from-blue-700 to-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden"
      id="pricing"
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
              Transparent Pricing
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Simple, Affordable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-600">
              Pricing Plans
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your business. All plans include free
            setup, training, and 30-day money-back guarantee.
          </p>

          {/* Pricing Toggle */}
          <motion.div
            ref={toggleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isToggleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <span
              className={`text-lg font-semibold ${
                !isYearly ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isYearly ? "bg-[#0A65FC]" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  isYearly ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-lg font-semibold ${
                isYearly ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Yearly
            </span>
            {isYearly && (
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold ml-2">
                Save 20%
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className={`relative bg-white rounded-3xl shadow-xl border-2 ${
                plan.borderColor
              } hover:shadow-2xl transition-all duration-300 ${
                plan.popular
                  ? "scale-105 ring-4 ring-blue-200"
                  : "hover:scale-105"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#0A65FC] to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                    <IconStar className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div
                    className={`inline-flex p-4 ${plan.bgColor} rounded-2xl mb-6`}
                  >
                    <plan.icon className="w-8 h-8 text-[#0A65FC]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-gray-400 line-through text-lg">
                        LKR{" "}
                        {(isYearly
                          ? plan.originalPrice.yearly
                          : plan.originalPrice.monthly
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-gray-900">
                        LKR{" "}
                        {(isYearly
                          ? plan.price.yearly
                          : plan.price.monthly
                        ).toLocaleString()}
                      </span>
                      <span className="text-gray-600">
                        /{isYearly ? "year" : "month"}
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-green-600 text-sm font-semibold mt-1">
                        Save LKR{" "}
                        {(
                          plan.originalPrice.yearly - plan.price.yearly
                        ).toLocaleString()}
                        /year
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#0A65FC] to-blue-600 text-white shadow-lg hover:shadow-blue-500/25"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    <span className="flex items-center justify-center">
                      Get Started
                      <IconArrowRight className="ml-2 w-5 h-5" />
                    </span>
                  </button>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    What's included:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <IconCheck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Not included:
                      </h4>
                      <ul className="space-y-3">
                        {plan.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-start">
                            <IconX className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-500">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              We offer custom pricing for large enterprises and special
              requirements. Contact our sales team for a personalized quote.
            </p>
            <button className="px-8 py-4 bg-white text-[#0A65FC] rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact Sales Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
