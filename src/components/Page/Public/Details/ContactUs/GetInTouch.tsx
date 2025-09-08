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
      className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 lg:py-32"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 bg-blue-100 rounded-full opacity-50 top-1/4 w-96 h-96 mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute right-0 bg-blue-200 rounded-full opacity-50 bottom-1/4 w-96 h-96 mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-8 md:px-20">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
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

              <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                <FormattedMessage id="contactUs.getInTouch.title" />
              </h2>

              <p className="text-lg leading-relaxed text-gray-600 lg:text-xl">
                <FormattedMessage id="contactUs.getInTouch.subtitle" />
              </p>
            </div>
          </motion.div>

          {/* Right Section - Contact Info Grid */}
         <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="grid grid-cols-1 gap-6 sm:grid-cols-2"
>
  {contactInfo.map((item, index) => (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
      className="p-6 overflow-hidden transition-all duration-300 bg-white border border-blue-100 shadow-lg rounded-2xl hover:shadow-xl hover:border-blue-200 group hover:scale-105"  // 👈 added overflow-hidden
    >
      <div
        className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <item.icon className="text-white w-7 h-7" />
      </div>
      <h3 className="mb-3 text-lg font-bold text-gray-900">
        {item.title}
      </h3>
      <div className="space-y-1">
        {item.details.map((detail, i) => (
          <p
            key={i}
            className="max-w-full text-sm leading-relaxed text-gray-600 break-all"  // 👈 ensure long emails wrap
            title={detail}
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
