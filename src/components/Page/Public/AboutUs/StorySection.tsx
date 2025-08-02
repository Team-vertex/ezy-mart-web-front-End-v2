import { scrollToSection } from "@/utils/scrollUtils";
import { motion } from "framer-motion";
import { CheckCircle, Target, Users, Zap } from "lucide-react";
import { FormattedMessage } from "react-intl";

export function StorySection() {
  // Navigation function
  const handleLearnMoreClick = () => {
    // Scroll to the vision/mission section
    scrollToSection('vision-mission');
  };
  const highlights = [
    {
      icon: Target,
      titleKey: "aboutUs.story.highlights.mission.title",
      descriptionKey: "aboutUs.story.highlights.mission.description",
    },
    {
      icon: Users,
      titleKey: "aboutUs.story.highlights.focus.title",
      descriptionKey: "aboutUs.story.highlights.focus.description",
    },
    {
      icon: Zap,
      titleKey: "aboutUs.story.highlights.technology.title",
      descriptionKey: "aboutUs.story.highlights.technology.description",
    },
  ];

  return (
    <section data-section="story" className="py-20 px-4 bg-gradient-to-br from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <FormattedMessage id="aboutUs.story.title" />
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <FormattedMessage id="aboutUs.story.content.0" />
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-4">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-100 hover:border-[#0A65FC]/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-xl flex items-center justify-center">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        <FormattedMessage id={highlight.titleKey} />
                      </h3>
                      <p className="text-gray-600 text-sm">
                        <FormattedMessage id={highlight.descriptionKey} />
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              onClick={handleLearnMoreClick}
              className="group bg-[#0A65FC] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FormattedMessage id="aboutUs.story.button" />
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </motion.button>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main illustration area */}
            <div className="relative bg-gradient-to-br from-[#0A65FC]/10 to-blue-600/5 rounded-3xl p-8 min-h-[500px] flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 w-full">
                {/* Feature cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Quality Assured
                  </h4>
                  <p className="text-sm text-gray-600">
                    Trusted local businesses verified for quality
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow mt-8"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Zap size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Fast & Easy
                  </h4>
                  <p className="text-sm text-gray-600">
                    Quick discovery of nearby products and services
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Users size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Community Focus
                  </h4>
                  <p className="text-sm text-gray-600">
                    Supporting local economies across Sri Lanka
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow mt-8"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Target size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Smart Solutions
                  </h4>
                  <p className="text-sm text-gray-600">
                    Technology that makes shopping smarter
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-full opacity-10"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-5"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
