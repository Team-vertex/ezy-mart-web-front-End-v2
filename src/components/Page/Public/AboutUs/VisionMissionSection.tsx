import { motion } from "framer-motion";
import { Eye, Lightbulb, Target, Users } from "lucide-react";
import React from "react";
import { FormattedMessage } from "react-intl";

interface VisionMissionCardProps {
  title: React.ReactNode;
  description: React.ReactNode;
  icon: React.ComponentType<any>;
  items: string[];
  isVision?: boolean;
}

const VisionMissionCard: React.FC<VisionMissionCardProps> = ({
  title,
  description,
  icon: IconComponent,
  items,
  isVision = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0A65FC]/20"
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${
          isVision
            ? "from-[#0A65FC]/5 to-blue-600/5"
            : "from-blue-500/5 to-[#0A65FC]/5"
        } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 ${
            isVision
              ? "bg-gradient-to-r from-[#0A65FC] to-blue-600"
              : "bg-gradient-to-r from-blue-500 to-[#0A65FC]"
          }`}
        >
          <IconComponent size={32} className="text-white" />
        </div>

        {/* Content */}
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 group-hover:text-[#0A65FC] transition-colors">
          {title}
        </h3>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>

        {/* Items list */}
        <ul className="space-y-4">
          {items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <div
                className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 ${
                  isVision ? "bg-[#0A65FC]" : "bg-blue-500"
                }`}
              />
              <span className="text-gray-700 leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export const VisionMissionSection: React.FC = () => {
  const visionItems = [
    "Creating innovative solutions that enhance everyday life",
    "Building sustainable technology for future generations",
    "Fostering digital transformation in local communities",
    "Empowering businesses with accessible tools",
  ];

  const missionItems = [
    "Connecting customers with trusted local businesses",
    "Providing convenient and efficient shopping experiences",
    "Supporting small and medium enterprises with digital solutions",
    "Making quality products and services accessible to everyone",
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <FormattedMessage id="aboutUs.visionMission.header.title" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <FormattedMessage id="aboutUs.visionMission.header.subtitle" />
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <VisionMissionCard
            title={
              <FormattedMessage id="aboutUs.visionMission.vision.header" />
            }
            description={
              <FormattedMessage id="aboutUs.visionMission.vision.content" />
            }
            icon={Eye}
            items={visionItems}
            isVision={true}
          />

          <VisionMissionCard
            title={
              <FormattedMessage id="aboutUs.visionMission.mission.header" />
            }
            description={
              <FormattedMessage id="aboutUs.visionMission.mission.content" />
            }
            icon={Target}
            items={missionItems}
            isVision={false}
          />
        </div>

        {/* Additional Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            <FormattedMessage id="aboutUs.visionMission.coreValues.title" />
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lightbulb size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  <FormattedMessage id="aboutUs.visionMission.innovation.title" />
                </h4>
                <p className="text-gray-600">
                  <FormattedMessage id="aboutUs.visionMission.innovation.description" />
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-[#0A65FC] rounded-xl flex items-center justify-center flex-shrink-0">
                <Users size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  <FormattedMessage id="aboutUs.visionMission.community.title" />
                </h4>
                <p className="text-gray-600">
                  <FormattedMessage id="aboutUs.visionMission.community.description" />
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
