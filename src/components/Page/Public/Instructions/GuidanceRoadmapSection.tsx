import {
  IconChartBar,
  IconHelp,
  IconLogin,
  IconPlayerPlay,
  IconSettings,
  IconShoppingCart,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";

export default function GuidanceRoadmapSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const intl = useIntl();

  const getGuidanceSteps = () => [
    {
      id: 1,
      title: intl.formatMessage({
        id: "instructions.roadmap.steps.login.title",
      }),
      description: intl.formatMessage({
        id: "instructions.roadmap.steps.login.description",
      }),
      icon: IconLogin,
    },
    {
      id: 2,
      title: intl.formatMessage({
        id: "instructions.roadmap.steps.sell.title",
      }),
      description: intl.formatMessage({
        id: "instructions.roadmap.steps.sell.description",
      }),
      icon: IconShoppingCart,
    },
    {
      id: 3,
      title: intl.formatMessage({
        id: "instructions.roadmap.steps.inventory.title",
      }),
      description: intl.formatMessage({
        id: "instructions.roadmap.steps.inventory.description",
      }),
      icon: IconChartBar,
    },
    {
      id: 4,
      title: intl.formatMessage({
        id: "instructions.roadmap.steps.settings.title",
      }),
      description: intl.formatMessage({
        id: "instructions.roadmap.steps.settings.description",
      }),
      icon: IconSettings,
    },
    {
      id: 5,
      title: intl.formatMessage({
        id: "instructions.roadmap.steps.support.title",
      }),
      description: intl.formatMessage({
        id: "instructions.roadmap.steps.support.description",
      }),
      icon: IconHelp,
    },
  ];

  const guidanceSteps = getGuidanceSteps();

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex px-4 py-2 bg-blue-100 text-[#0A65FC] rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
            <FormattedMessage id="instructions.roadmap.badge" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <FormattedMessage id="instructions.roadmap.title" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <FormattedMessage id="instructions.roadmap.subtitle" />
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0A65FC] via-blue-400 to-transparent hidden lg:block rounded-full"></div>

          <div className="space-y-20">
            {guidanceSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12`}
                >
                  {/* Step Number Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-[#0A65FC] to-blue-600 text-white rounded-full items-center justify-center text-xl font-bold z-10 hidden lg:flex shadow-lg">
                    <div className="flex flex-col items-center">
                      <step.icon className="w-6 h-6 mb-1" />
                      <span className="text-xs">
                        {String(step.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div
                    className={`w-full lg:w-[45%] ${
                      isLeft
                        ? "lg:text-right lg:pr-12"
                        : "lg:text-left lg:pl-12"
                    }`}
                  >
                    <div className="lg:hidden w-20 h-20 bg-gradient-to-r from-[#0A65FC] to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-lg">
                      <div className="flex flex-col items-center">
                        <step.icon className="w-6 h-6 mb-1" />
                        <span className="text-xs">
                          {String(step.id).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Video Side */}
                  <div className="w-full lg:w-[45%]">
                    <div className="relative group">
                      <div className="bg-gradient-to-br from-[#0A65FC] to-blue-700 rounded-3xl aspect-video flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 border border-white/30"
                        >
                          <IconPlayerPlay className="w-8 h-8 text-white ml-1" />
                        </motion.div>
                      </div>

                      {/* Video overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Play button glow effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0A65FC]/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              <FormattedMessage id="instructions.roadmap.cta.title" />
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              <FormattedMessage id="instructions.roadmap.cta.subtitle" />
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#0A65FC] rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              <FormattedMessage id="instructions.roadmap.cta.button" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
