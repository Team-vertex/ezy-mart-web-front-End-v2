import { motion } from "framer-motion";
import { Headphones, Lightbulb, Settings } from "lucide-react";
import React from "react";
import { FormattedMessage } from "react-intl";

interface FeatureCardProps {
  titleKey: string;
  descriptionKey: string;
  icon: React.ElementType;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  titleKey,
  descriptionKey,
  icon: Icon,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-[#0A65FC] to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          <FormattedMessage id={titleKey} />
        </h3>
        <p className="text-gray-600 leading-relaxed">
          <FormattedMessage id={descriptionKey} />
        </p>
      </div>
    </motion.div>
  );
};

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      titleKey: "aboutUs.features.innovative.title",
      descriptionKey: "aboutUs.features.innovative.description",
      icon: Lightbulb,
    },
    {
      titleKey: "aboutUs.features.solution.title",
      descriptionKey: "aboutUs.features.solution.description",
      icon: Settings,
    },
    {
      titleKey: "aboutUs.features.support.title",
      descriptionKey: "aboutUs.features.support.description",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <FormattedMessage id="aboutUs.features.title" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <FormattedMessage id="aboutUs.features.subtitle" />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              titleKey={feature.titleKey}
              descriptionKey={feature.descriptionKey}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
