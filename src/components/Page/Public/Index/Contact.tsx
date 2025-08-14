// import {
//   IconArrowRight,
//   IconClock,
//   IconHeadset,
//   IconMail,
//   IconMapPin,
//   IconPhone,
//   IconRocket,
//   IconSend,
//   IconUsers,
// } from "@tabler/icons-react";
// import { motion, useInView } from "framer-motion";
// import React, { useRef } from "react";
// import { FormattedMessage, useIntl } from "react-intl";

export const Contact: React.FC = () => {
  // const intl = useIntl();
  // // MARK: Refs
  // const sectionRef = useRef(null);
  // const headingRef = useRef(null);
  // const ctaRef = useRef(null);
  // const statsRef = useRef(null);

  // // MARK: In view states
  // const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  // const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  // const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });
  // const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });

  // const contactMethods = [
  //   {
  //     icon: IconPhone,
  //     titleKey: intl.formatMessage({ id: "home.contact.phone.title" }),
  //     descriptionKey: intl.formatMessage({ id: "home.contact.phone.description" }),
  //     contactKey: intl.formatMessage({ id: "home.contact.phone.number" }),
  //     actionKey: intl.formatMessage({ id: "home.contact.phone.action" }),
  //     color: intl.formatMessage({ id: "from-blue-500 to-cyan-500" }),
  //     bgColor: "bg-blue-50",
  //     iconColor: "text-blue-600",
  //   },
  //   {
  //     icon: IconMail,
  //     titleKey: intl.formatMessage({ id: "home.contact.email.title" }),
  //     descriptionKey: intl.formatMessage({ id: "home.contact.email.description" }),
  //     contactKey: intl.formatMessage({ id: "home.contact.email.address" }),
  //     actionKey: intl.formatMessage({ id: "home.contact.email.action" }),
  //     color: intl.formatMessage({ id: "from-purple-500 to-pink-500" }),
  //     bgColor: "bg-purple-50",
  //     iconColor: "text-purple-600",
  //   },
  //   {
  //     icon: IconMapPin,
  //     titleKey: intl.formatMessage({ id: "home.contact.location.title" }),
  //     descriptionKey: intl.formatMessage({ id: "home.contact.email.title" }),
  //     contactKey: intl.formatMessage({ id: "home.contact.location.address"}),
  //     actionKey: intl.formatMessage({ id: "home.contact.location.action" }),
  //     color: intl.formatMessage({ id: "from-green-500 to-emerald-500"}),
  //     bgColor: "bg-green-50",
  //     iconColor: "text-green-600",
  //   },
  // ];

  // const stats = [
  //   { number: intl.formatMessage({ id: "home.contact.happyCustomerCount"}), label: intl.formatMessage({ id: "home.contact.happyCustomerTitle"}), icon: IconUsers },
  //   { number: intl.formatMessage({ id: "home.contact.supportPeriod"}), label: intl.formatMessage({ id: "home.contact.supportTitle"}), icon: IconHeadset },
  //   { number: intl.formatMessage({ id: "home.contact.garunteePercentage"}), label: intl.formatMessage({ id: "home.contact.guaranteeTitle"}), icon: IconRocket },
  // ];

  // return (
  //   <section
  //     ref={sectionRef}
  //     className="relative py-20 overflow-hidden lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50"
  //   >
  //     {/* Background effects */}
  //     <div className="absolute inset-0">
  //       <div className="absolute bg-blue-100 rounded-full top-1/4 left-1/4 w-96 h-96 mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
  //       <div className="absolute bg-blue-200 rounded-full bottom-1/4 right-1/4 w-96 h-96 mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
  //       <div className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-indigo-100 rounded-full opacity-50 top-1/2 left-1/2 w-96 h-96 mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
  //     </div>

  //     <div className="container relative z-10 px-4 mx-auto">
  //       {/* Header Section */}
  //       <motion.div
  //         ref={headingRef}
  //         initial={{ opacity: 0, y: 30 }}
  //         animate={
  //           isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
  //         }
  //         transition={{ duration: 0.8 }}
  //         className="mb-16 text-center lg:mb-20"
  //       >
  //         <div className="flex items-center justify-center mb-6">
  //           <span className="px-4 py-2 text-sm font-semibold tracking-wide text-blue-700 uppercase bg-blue-100 rounded-full">
  //             <FormattedMessage id="home.contact.getInTouch" />
  //           </span>
  //         </div>

  //         <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
  //           <FormattedMessage id="home.contact.transformBusiness" />
  //         </h2>

  //         <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
  //           <FormattedMessage id="home.contact.joinBusinesses" />
  //         </p>
  //       </motion.div>

  //       {/* Main CTA Section */}
  //       <motion.div
  //         ref={ctaRef}
  //         initial={{ opacity: 0, y: 40 }}
  //         animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
  //         transition={{ duration: 0.8, delay: 0.2 }}
  //         className="mb-20"
  //       >
  //         <div className="p-8 text-center border shadow-2xl bg-white/70 backdrop-blur-xl rounded-3xl lg:p-12 border-white/20">
  //           <div className="grid items-center gap-8 lg:grid-cols-3">
  //             {/* Left side - Message */}
  //             <div className="lg:text-left">
  //               <h3 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
  //                 <FormattedMessage id="home.contact.secondTitle" />
  //               </h3>
  //               <p className="text-lg text-gray-600">
  //                 <FormattedMessage id="home.contact.paragraph" />

  //               </p>
  //             </div>

  //             {/* Center - Main CTA */}
  //             <div>
  //               <h3 className="mb-6 text-3xl font-bold text-gray-900 lg:text-5xl">
  //                 <FormattedMessage id="home.contact.Title" />

  //               </h3>
  //               <div className="flex flex-col justify-center gap-4 sm:flex-row">
  //                 <button className="group px-8 py-4 bg-gradient-to-r from-[#0A65FC] to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
  //                   <span className="flex items-center justify-center">
  //                     <FormattedMessage id="home.contact.action1" />

  //                     <IconRocket className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
  //                   </span>
  //                 </button>
  //                 <button className="group px-8 py-4 bg-white/60 backdrop-blur-sm text-gray-900 border-2 border-gray-200 hover:border-[#0A65FC] rounded-xl font-bold text-lg hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
  //                   <span className="flex items-center justify-center">
  //                     <FormattedMessage id="home.contact.action2" />

  //                     <IconArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
  //                   </span>
  //                 </button>
  //               </div>
  //             </div>

  //             {/* Right side - Arrow */}
  //             <div className="lg:text-right">
  //               <div className="inline-flex p-4 bg-blue-100 rounded-full">
  //                 <IconSend className="w-8 h-8 text-[#0A65FC] animate-pulse" />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </motion.div>

  //       {/* Contact Methods */}
  //       <motion.div
  //         initial={{ opacity: 0, y: 40 }}
  //         animate={
  //           isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
  //         }
  //         transition={{ duration: 0.8, delay: 0.4 }}
  //         className="grid gap-8 mb-20 md:grid-cols-3"
  //       >
  //         {contactMethods.map((method, index) => (
  //           <motion.div
  //             key={index}
  //             initial={{ opacity: 0, y: 30 }}
  //             animate={
  //               isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
  //             }
  //             transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
  //             className="group"
  //           >
  //             <div className="p-8 text-center transition-all duration-300 border shadow-lg bg-white/60 backdrop-blur-xl rounded-2xl hover:bg-white/80 border-white/30 hover:border-blue-200 hover:shadow-xl">
  //               <div
  //                 className={`inline-flex p-4 ${method.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
  //               >
  //                 <method.icon className={`w-8 h-8 ${method.iconColor}`} />
  //               </div>
  //               <h3 className="mb-2 text-xl font-bold text-gray-900">
  //                 {method.titleKey}
  //               </h3>
  //               <p className="mb-4 text-gray-600">{method.descriptionKey}</p>
  //               <p className="text-[#0A65FC] font-semibold mb-6">
  //                 {method.contactKey}
  //               </p>
  //               <button
  //                 className={`px-6 py-3 bg-gradient-to-r ${method.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
  //               >
  //                 {method.actionKey}
  //               </button>
  //             </div>
  //           </motion.div>
  //         ))}
  //       </motion.div>

  //       {/* Stats Section */}
  //       <motion.div
  //         ref={statsRef}
  //         initial={{ opacity: 0, y: 40 }}
  //         animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
  //         transition={{ duration: 0.8, delay: 0.6 }}
  //         className="grid gap-8 md:grid-cols-3"
  //       >
  //         {stats.map((stat, index) => (
  //           <motion.div
  //             key={index}
  //             initial={{ opacity: 0, scale: 0.9 }}
  //             animate={
  //               isStatsInView
  //                 ? { opacity: 1, scale: 1 }
  //                 : { opacity: 0, scale: 0.9 }
  //             }
  //             transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
  //             className="text-center"
  //           >
  //             <div className="p-8 transition-all duration-300 border shadow-lg bg-white/50 backdrop-blur-xl border-white/30 rounded-2xl hover:bg-white/70 hover:shadow-xl">
  //               <div className="inline-flex p-3 mb-4 bg-blue-100 rounded-xl">
  //                 <stat.icon className="w-6 h-6 text-[#0A65FC]" />
  //               </div>
  //               <div className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
  //                 {stat.number}
  //               </div>
  //               <div className="font-medium text-gray-600">{stat.label}</div>
  //             </div>
  //           </motion.div>
  //         ))}
  //       </motion.div>

  //       {/* Final CTA */}
  //       <motion.div
  //         initial={{ opacity: 0, y: 30 }}
  //         animate={
  //           isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
  //         }
  //         transition={{ duration: 0.8, delay: 1 }}
  //         className="mt-16 text-center"
  //       >
  //         <p className="mb-6 text-lg text-gray-600">
  //           Questions? Email us at{" "}
  //           <a
  //             href="mailto:hello@ezymart.lk"
  //             className="text-[#0A65FC] hover:text-blue-800 font-semibold"
  //           >
  //             contact.vertexcooperation@gmail.com
  //           </a>
  //         </p>
  //         <div className="flex items-center justify-center">
  //           <IconClock className="w-5 h-5 mr-2 text-gray-500" />
  //           <span className="text-gray-500">
  //             Support available 9AM - 6PM (Mon-Sat)
  //           </span>
  //         </div>
  //       </motion.div>
  //     </div>
  //   </section>
  // );
};
