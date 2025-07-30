import {
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";

const GetInTouch: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const intl = useIntl();

  const getContactInfo = () => [
    {
      icon: IconPhone,
      title: intl.formatMessage({ id: "contactUs.getInTouch.phone.title" }),
      details: [
        intl.formatMessage({ id: "contactUs.getInTouch.phone.details.0" }),
        intl.formatMessage({ id: "contactUs.getInTouch.phone.details.1" }),
      ],
      color: "from-[#0A65FC] to-blue-600",
    },
    {
      icon: IconMapPin,
      title: intl.formatMessage({ id: "contactUs.getInTouch.address.title" }),
      details: [
        intl.formatMessage({ id: "contactUs.getInTouch.address.details.0" }),
        intl.formatMessage({ id: "contactUs.getInTouch.address.details.1" }),
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: IconMail,
      title: intl.formatMessage({ id: "contactUs.getInTouch.email.title" }),
      details: [
        intl.formatMessage({ id: "contactUs.getInTouch.email.details.0" }),
      ],
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: IconClock,
      title: intl.formatMessage({ id: "contactUs.getInTouch.hours.title" }),
      details: [
        intl.formatMessage({ id: "contactUs.getInTouch.hours.details.0" }),
        intl.formatMessage({ id: "contactUs.getInTouch.hours.details.1" }),
      ],
      color: "from-blue-700 to-blue-800",
    },
  ];

  const contactInfo = getContactInfo();

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex px-4 py-2 bg-blue-100 text-[#0A65FC] rounded-full text-sm font-semibold tracking-wide uppercase"
              >
                <FormattedMessage id="contactUs.getInTouch.badge" />
              </motion.div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <FormattedMessage id="contactUs.getInTouch.title" />
              </h2>

              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                <FormattedMessage id="contactUs.getInTouch.subtitle" />
              </p>
            </div>
          </motion.div>

          {/* Right Section - Contact Info Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200 group hover:scale-105"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <div className="space-y-1">
                  {item.details.map((detail, i) => (
                    <p
                      key={i}
                      className="text-gray-600 text-sm leading-relaxed"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
