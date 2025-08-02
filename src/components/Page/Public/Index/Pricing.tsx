import { routes } from "@/constants/route";
import { usePOSRequestPopup } from "@/hooks/usePOSRequestPopup.tsx";
import {
  IconBolt,
  IconCheck,
  IconDevices,
  IconRocket,
  IconStar,
  IconX,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  // MARK: Refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  // MARK: Hooks
  const navigate = useNavigate();
  const { openPOSRequest, POSRequestModal } = usePOSRequestPopup();

  // MARK: In view states
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.3 });

  // MARK: Navigation functions
  const handleContactUs = () => {
    navigate(routes.contactUs);
  };

  const handleWatchDemo = () => {
    navigate(routes.demo);
    // Scroll to demo area after navigation
    setTimeout(() => {
      const demoElement = document.getElementById('demo-area');
      if (demoElement) {
        demoElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleGetStarted = () => {
    openPOSRequest();
  };

  const plans = [
    {
      name: "Basic",
      description: "Perfect for small level business",
      icon: IconBolt,
      price: { monthly: 1799, yearly: 19800 },
      originalPrice: { monthly: 1999, yearly: 22000 },
      features: [
        "Stocks Management",
        "Employee Managment",
        "Work Online & Offline",
        "Supplier Managment",
        "Manage Expenses",
        "Sales Analysis",
        "Online Store",
        "Generate Reports",
      ],
      limitations: [
        "Web Based Admin Pannel",
        "Multi-location support",
        "web-based POS",
      ],
      popular: true,
      borderColor: "border-gray-200",
    },
    {
      name: "Pro",
      description: "Perfect for small and mid level business",
      icon: IconRocket,
      price: { monthly: 2400, yearly: 26400 },
      originalPrice: { monthly: 2500, yearly: 30000 },
      features: [
        "Web based admin panel",
        "Web based POS",
        "Stocks Management",
        "Employee Managment",
        "Work Online & Offline",
        "Supplier Managment",
        "Manage Expenses",
        "Sales Analysis",
        "Online Store",
        "Generate Reports",
        "Cloud backup",

      ],
      limitations: [
        "Multi-location support",
      ],
      popular: false,
      borderColor: "border-blue-200",
    },
    {
      name: "Comming Soon",
      description: "Perfect Multi branch business",
      icon: IconRocket,
      price: { monthly: "", yearly: "" },
      originalPrice: { monthly: "", yearly: "" },
      features: [
        "Cooming Soon"
      ],
      limitations: [
      ],
      popular: false,
      borderColor: "border-blue-200",
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
            <FormattedMessage id="home.pricing.title" />
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            <FormattedMessage id="home.pricing.subtitle" />

          </p>

          {/* Simple Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm font-medium ${!isYearly ? "text-gray-900" : "text-gray-500"
                }`}
            >
              <FormattedMessage id="home.pricing.monthly" />
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${isYearly ? "bg-blue-600" : "bg-gray-300"
                }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${isYearly ? "translate-x-6" : "translate-x-0.5"
                  }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${isYearly ? "text-gray-900" : "text-gray-500"
                }`}
            >
              <FormattedMessage id="home.pricing.yearly" />
            </span>
            {isYearly && (
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                <FormattedMessage id="home.pricing.save" />
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
          className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative bg-white rounded-2xl border-2 p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full max-w-sm mx-auto ${plan.borderColor
                } ${plan.popular ? "ring-2 ring-blue-500 ring-offset-4 shadow-lg" : "shadow-md"}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <IconStar className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Hardware Badge */}
              {/* {plan.hardwareIncluded && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <IconDevices className="w-3 h-3" />
                    Hardware
                  </span>
                </div>
              )} */}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-xl mb-6 ${plan.popular
                    ? "bg-gradient-to-br from-blue-100 to-purple-100"
                    : "bg-gray-100"
                  }`}>
                  <plan.icon className={`w-8 h-8 ${plan.popular ? "text-blue-600" : "text-gray-600"
                    }`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {plan.name}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{plan.description}</p>

                {/* Hardware Value */}
                {/* {plan.hardwareIncluded && plan.hardwareValue && (
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                      Hardware: {plan.hardwareValue}
                    </span>
                  </div>
                )} */}

                {/* Pricing */}
                <div className="mb-8">
                  {plan.name !== "Comming Soon" && (
                    <>
                      <div className="text-center mb-2">
                        <span className="text-gray-400 line-through text-lg">
                          LKR{" "}
                          {(isYearly
                            ? plan.originalPrice.yearly
                            : plan.originalPrice.monthly
                          ).toLocaleString()}
                        </span>
                      </div>
                      <div className="text-center mb-4">
                        <span className="text-4xl font-bold text-gray-900">
                          LKR{" "}
                          {(isYearly
                            ? plan.price.yearly
                            : plan.price.monthly
                          ).toLocaleString()}
                        </span>
                        <span className="text-gray-600 text-lg block mt-1">
                          /{isYearly ? "year" : "month"}
                        </span>
                      </div>
                    </>
                  )}
                  {plan.name === "Comming Soon" && (
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold text-gray-500">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  onClick={plan.name === "Comming Soon" ? undefined : handleGetStarted}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg ${plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-blue-500/25"
                      : plan.name === "Comming Soon"
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  disabled={plan.name === "Comming Soon"}
                >
                  {plan.name === "Comming Soon" ? "Coming Soon" : "Get Started"}
                </button>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-base flex items-center">
                    <IconCheck className="w-5 h-5 text-green-500 mr-2" />
                    <FormattedMessage id="home.pricing.whatInclude" />
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.slice(0, 10).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <IconCheck className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                    {plan.features.length > 10 && (
                      <li className="text-gray-500 text-sm italic ml-7">
                        +{plan.features.length - 10} more features
                      </li>
                    )}
                  </ul>
                </div>

                {plan.limitations.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-base flex items-center">
                      <IconX className="w-5 h-5 text-gray-400 mr-2" />
                      <FormattedMessage id="home.pricing.features.not.included" />
                    </h4>
                    <ul className="space-y-3">
                      {plan.limitations.slice(0, 3).map((limitation, i) => (
                        <li key={i} className="flex items-start">
                          <IconX className="w-4 h-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-500 text-sm leading-relaxed">{limitation}</span>
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
          className="mt-20"
        >
          <div className="bg-white rounded-2xl border shadow-xl p-10">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-semibold mb-6">
                Hardware Options
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                <FormattedMessage id="home.hardware.title" />
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                <FormattedMessage id="home.hardware.subtitle" />
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  name: "Receipt Printer",
                  description: "60 mm - 80 mm",
                  price: "Rs.10,000 - Rs.16,000",
                },
                {
                  name: "Barcode Scanner",
                  description: "Table or Portable",
                  price: "Rs.8,000 - Rs.12,000",
                },
                {
                  name: "Computer",
                  description: "Computer without UPS",
                  price: "Rs.30,000",
                },
                {
                  name: "Computer with UPS",
                  description: "Computer + UPS",
                  price: "LKR 45,000",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconDevices className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-purple-600 font-bold text-lg">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              {/* <p className="text-purple-700 font-medium mb-4">
                Complete Bundle: LKR 45,000 (Save LKR 10,000!)
              </p> */}
              {/* <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200">
                View Hardware Details
              </button> */}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 rounded-2xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">
              <FormattedMessage id="home.contact.title" />
            </h3>
            <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              <FormattedMessage id="home.contact.subtitle" />
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
              <button
                onClick={handleContactUs}
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FormattedMessage id="home.contact.phone.title" />
              </button>
              <button
                onClick={handleWatchDemo}
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Watch the Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* POS Request Modal */}
      <POSRequestModal />
    </section>
  );
};
