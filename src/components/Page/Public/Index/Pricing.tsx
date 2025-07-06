import {
  IconBolt,
  IconCheck,
  IconCrown,
  IconDevices,
  IconRocket,
  IconShield,
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
  const cardsRef = useRef(null);

  // MARK: In view states
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.3 });

  const plans = [
    {
      name: "Basic",
      description: "Perfect for small startups",
      icon: IconBolt,
      price: { monthly: 1999, yearly: 19999 },
      originalPrice: { monthly: 2999, yearly: 29999 },
      features: [
        "Single user access",
        "Basic inventory management",
        "Simple sales tracking",
        "Basic customer database",
        "Email support",
        "Mobile app access",
      ],
      limitations: [
        "Advanced reporting",
        "Multi-location support",
        "API access",
        "Priority support",
        "Hardware included",
      ],
      popular: false,
      borderColor: "border-gray-200",
    },
    {
      name: "Starter",
      description: "Great for small businesses",
      icon: IconRocket,
      price: { monthly: 3499, yearly: 34999 },
      originalPrice: { monthly: 4999, yearly: 49999 },
      features: [
        "Up to 3 users",
        "Complete inventory management",
        "Sales reporting & analytics",
        "Customer management",
        "Priority email support",
        "Barcode scanning",
        "Basic integrations",
        "Cloud backup",
      ],
      limitations: [
        "Multi-location support",
        "Advanced API access",
        "Hardware included",
        "24/7 phone support",
      ],
      popular: false,
      borderColor: "border-blue-200",
    },
    {
      name: "Professional",
      description: "Most popular for growing businesses",
      icon: IconShield,
      price: { monthly: 5999, yearly: 59999 },
      originalPrice: { monthly: 8499, yearly: 84999 },
      features: [
        "Up to 10 users",
        "Advanced inventory management",
        "Detailed reporting & analytics",
        "Customer loyalty programs",
        "Priority support (24/7)",
        "Multi-payment methods",
        "Advanced barcode scanning",
        "Tax management",
        "API access",
        "Multi-location support (up to 3)",
      ],
      limitations: [
        "Hardware included",
        "Unlimited locations",
        "Custom integrations",
      ],
      popular: true,
      borderColor: "border-blue-300",
    },
    {
      name: "Hardware Bundle",
      description: "Complete POS system with hardware",
      icon: IconDevices,
      price: { monthly: 8999, yearly: 89999 },
      originalPrice: { monthly: 12999, yearly: 129999 },
      features: [
        "Everything in Professional",
        "Complete POS hardware kit",
        "Tablet/Terminal included",
        "Receipt printer",
        "Barcode scanner",
        "Cash drawer",
        "Card reader",
        "Installation & setup",
        "Hardware warranty (2 years)",
        "On-site support",
      ],
      limitations: ["Custom integrations", "Unlimited locations"],
      popular: false,
      borderColor: "border-purple-200",
      hardwareIncluded: true,
      hardwareValue: "LKR 45,000",
    },
    {
      name: "Enterprise",
      description: "For large businesses & chains",
      icon: IconCrown,
      price: { monthly: 14999, yearly: 149999 },
      originalPrice: { monthly: 19999, yearly: 199999 },
      features: [
        "Unlimited users",
        "Unlimited locations",
        "Advanced analytics & BI",
        "Custom integrations",
        "24/7 phone & on-site support",
        "Full API access",
        "Custom training",
        "Dedicated account manager",
        "Custom reporting",
        "Data export tools",
        "Hardware options available",
        "White-label solutions",
      ],
      limitations: [],
      popular: false,
      borderColor: "border-amber-200",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gray-50"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium mb-4">
            Pricing Plans
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Simple, transparent pricing that grows with your business. No hidden
            fees.
          </p>

          {/* Simple Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm font-medium ${
                !isYearly ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                isYearly ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                  isYearly ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${
                isYearly ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Yearly
            </span>
            {isYearly && (
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Responsive Pricing Cards */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative bg-white rounded-lg border-2 p-6 hover:shadow-lg transition-shadow duration-200 ${
                plan.borderColor
              } ${plan.popular ? "ring-2 ring-blue-500 ring-offset-2" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <IconStar className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Hardware Badge */}
              {plan.hardwareIncluded && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <IconDevices className="w-3 h-3" />
                    Hardware
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className="inline-flex p-3 bg-gray-100 rounded-lg mb-4">
                  <plan.icon className="w-6 h-6 text-blue-600" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>

                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>

                {/* Hardware Value */}
                {plan.hardwareIncluded && plan.hardwareValue && (
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                      Hardware: {plan.hardwareValue}
                    </span>
                  </div>
                )}

                {/* Pricing */}
                <div className="mb-6">
                  <div className="text-center">
                    <span className="text-gray-400 line-through text-sm">
                      LKR{" "}
                      {(isYearly
                        ? plan.originalPrice.yearly
                        : plan.originalPrice.monthly
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-gray-900">
                      LKR{" "}
                      {(isYearly
                        ? plan.price.yearly
                        : plan.price.monthly
                      ).toLocaleString()}
                    </span>
                    <span className="text-gray-600 text-sm">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-green-600 text-xs font-medium mt-1">
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
                  className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200 ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : plan.hardwareIncluded
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.hardwareIncluded
                    ? "Get Complete System"
                    : "Get Started"}
                </button>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 text-sm">
                    What's included:
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.slice(0, 5).map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <IconCheck className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.features.length > 5 && (
                      <li className="text-gray-500 text-xs italic">
                        +{plan.features.length - 5} more features
                      </li>
                    )}
                  </ul>
                </div>

                {plan.limitations.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 text-sm">
                      Not included:
                    </h4>
                    <ul className="space-y-2">
                      {plan.limitations.slice(0, 3).map((limitation, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <IconX className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-500">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hardware Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white rounded-lg border p-8">
            <div className="text-center mb-8">
              <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded text-sm font-medium mb-4">
                Hardware Options
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Complete POS Hardware
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get everything you need with our hardware bundle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                {
                  name: "POS Terminal",
                  description: "Touch screen tablet",
                  price: "LKR 15,000",
                },
                {
                  name: "Receipt Printer",
                  description: "Thermal printer",
                  price: "LKR 8,000",
                },
                {
                  name: "Barcode Scanner",
                  description: "Wireless scanner",
                  price: "LKR 12,000",
                },
                {
                  name: "Cash Drawer",
                  description: "Heavy-duty drawer",
                  price: "LKR 10,000",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-gray-50 rounded-lg p-4 text-center"
                >
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <IconDevices className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm mb-1">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 text-xs mb-2">
                    {item.description}
                  </p>
                  <p className="text-purple-600 font-medium text-sm">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-purple-700 font-medium mb-4">
                Complete Bundle: LKR 45,000 (Save LKR 10,000!)
              </p>
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200">
                View Hardware Details
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contact our sales team for enterprise pricing and custom
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Contact Sales
              </button>
              <button className="px-6 py-2 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
