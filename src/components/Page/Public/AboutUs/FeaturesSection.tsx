import { motion } from "framer-motion";
import { Headphones, Lightbulb, Settings } from "lucide-react";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
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
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Innovative Team",
      description:
        "We focus on nearby stores, not big marketplaces helping you shop local and support your community.",
      icon: Lightbulb,
    },
    {
      title: "Innovative Solution",
      description:
        "Designed for real needs, EzyMart makes finding products and stores quick, clear, and stress free.",
      icon: Settings,
    },
    {
      title: "We Listen to Customers",
      description:
        "Your voice matters. Every feature we build starts with feedback from real users so you always get a better, more thoughtful experience.",
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
            What Makes Us{" "}
            <span className="bg-gradient-to-r from-[#0A65FC] to-blue-600 bg-clip-text text-transparent">
              Different?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the unique approach that sets EzyMart apart in
            revolutionizing local commerce.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
