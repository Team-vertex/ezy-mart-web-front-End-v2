// import { scrollToSection } from "@/utils/scrollUtils";
// import {
//   IconBook,
//   IconHelp,
//   IconPlayerPlay,
//   IconUsers,
// } from "@tabler/icons-react";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { FormattedMessage, useIntl } from "react-intl";

export default function GuidanceSection() {
  // const sectionRef = useRef(null);
  // const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  // const intl = useIntl();

  // // Navigation handlers
  // const handleExploreGuides = () => {
  //   scrollToSection('roadmap-section');
  // };

  // const handleKeyDown = (event: React.KeyboardEvent) => {
  //   if (event.key === 'Enter' || event.key === ' ') {
  //     event.preventDefault();
  //     handleExploreGuides();
  //   }
  // };

  // const getFeatures = () => [
  //   {
  //     icon: IconBook,
  //     title: intl.formatMessage({
  //       id: "instructions.guidance.features.stepByStep.title",
  //     }),
  //     description: intl.formatMessage({
  //       id: "instructions.guidance.features.stepByStep.description",
  //     }),
  //   },
  //   {
  //     icon: IconPlayerPlay,
  //     title: intl.formatMessage({
  //       id: "instructions.guidance.features.videoTutorials.title",
  //     }),
  //     description: intl.formatMessage({
  //       id: "instructions.guidance.features.videoTutorials.description",
  //     }),
  //   },
  //   {
  //     icon: IconUsers,
  //     title: intl.formatMessage({
  //       id: "instructions.guidance.features.communitySupport.title",
  //     }),
  //     description: intl.formatMessage({
  //       id: "instructions.guidance.features.communitySupport.description",
  //     }),
  //   },
  //   {
  //     icon: IconHelp,
  //     title: intl.formatMessage({
  //       id: "instructions.guidance.features.helpCenter.title",
  //     }),
  //     description: intl.formatMessage({
  //       id: "instructions.guidance.features.helpCenter.description",
  //     }),
  //   },
  // ];

  // const features = getFeatures();

  // return (
  //   <section
  //     ref={sectionRef}
  //     id="guidance-section"
  //     data-section="guidance-section"
  //     className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 lg:py-32"
  //   >
  //     {/* Background decorations */}
  //     <div className="absolute inset-0 overflow-hidden">
  //       <div className="absolute left-0 bg-blue-100 rounded-full opacity-50 top-1/4 w-96 h-96 mix-blend-multiply filter blur-xl animate-pulse"></div>
  //       <div className="absolute right-0 bg-blue-200 rounded-full opacity-50 bottom-1/4 w-96 h-96 mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
  //     </div>

  //     <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-8 md:px-20">
  //       <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
  //         {/* Left Content */}
  //         <motion.div
  //           initial={{ opacity: 0, x: -50 }}
  //           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
  //           transition={{ duration: 0.8 }}
  //           className="space-y-8"
  //         >
  //           <div className="space-y-6">
  //             <motion.div
  //               initial={{ opacity: 0, y: 20 }}
  //               animate={
  //                 isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
  //               }
  //               transition={{ duration: 0.6, delay: 0.2 }}
  //               className="inline-flex px-4 py-2 bg-blue-100 text-[#0A65FC] rounded-full text-sm font-semibold tracking-wide uppercase"
  //             >
  //               <FormattedMessage id="instructions.guidance.badge" />
  //             </motion.div>

  //             <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
  //               <FormattedMessage id="instructions.guidance.title" />
  //             </h2>

  //             <div className="space-y-4">
  //               <p className="text-lg leading-relaxed text-gray-600 lg:text-xl">
  //                 <FormattedMessage id="instructions.guidance.subtitle" />
  //               </p>
  //               <div className="p-6 space-y-3 bg-white border border-blue-100 shadow-lg rounded-2xl">
  //                 <p className="font-medium text-gray-700">
  //                   <span className="font-bold text-[#0A65FC]">
  //                     <FormattedMessage id="instructions.guidance.instructions.title" />
  //                   </span>{" "}
  //                   <FormattedMessage id="instructions.guidance.instructions.content" />
  //                 </p>
  //               </div>
  //             </div>
  //           </div>

  //           <motion.button
  //             initial={{ opacity: 0, y: 20 }}
  //             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  //             transition={{ duration: 0.6, delay: 0.4 }}
  //             whileHover={{ scale: 1.05 }}
  //             whileTap={{ scale: 0.95 }}
  //             onClick={handleExploreGuides}
  //             onKeyDown={handleKeyDown}
  //             className="bg-gradient-to-r from-[#0A65FC] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-300"
  //             aria-label="Explore our step-by-step guides"
  //           >
  //             <FormattedMessage id="instructions.guidance.button" />
  //           </motion.button>
  //         </motion.div>

  //         {/* Right Content - Feature Grid */}
  //         <motion.div
  //           initial={{ opacity: 0, x: 50 }}
  //           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
  //           transition={{ duration: 0.8, delay: 0.2 }}
  //           className="grid grid-cols-1 gap-6 sm:grid-cols-2"
  //         >
  //           {features.map((feature, index) => (
  //             <motion.div
  //               key={feature.title}
  //               initial={{ opacity: 0, y: 30 }}
  //               animate={
  //                 isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
  //               }
  //               transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
  //               className="p-6 transition-all duration-300 bg-white border border-blue-100 shadow-lg rounded-2xl hover:shadow-xl hover:border-blue-200 group hover:scale-105"
  //             >
  //               <div className="w-12 h-12 bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
  //                 <feature.icon className="w-6 h-6 text-white" />
  //               </div>
  //               <h3 className="mb-2 text-lg font-bold text-gray-900">
  //                 {feature.title}
  //               </h3>
  //               <p className="text-sm leading-relaxed text-gray-600">
  //                 {feature.description}
  //               </p>
  //             </motion.div>
  //           ))}
  //         </motion.div>
  //       </div>
  //     </div>
  //   </section>
  // );
}
