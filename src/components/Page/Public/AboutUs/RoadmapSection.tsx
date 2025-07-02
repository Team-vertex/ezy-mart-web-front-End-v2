import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  Clock,
  Diamond,
  Globe,
  Rocket,
  Smartphone,
  Users,
} from "lucide-react";

const roadmapItems = [
  {
    roadmapId: 1,
    title: "Platform Launch",
    year: "Q1 2025",
    month: "January",
    description:
      "Official release of our core platform with basic features for local business discovery and support.",
    icon: Rocket,
    status: "completed",
    achievements: [
      "✓ Core marketplace launched",
      "✓ 100+ local businesses onboarded",
      "✓ Mobile-responsive platform",
    ],
  },
  {
    roadmapId: 2,
    title: "Mobile Apps",
    year: "Q2 2025",
    month: "April",
    description:
      "iOS and Android applications to make supporting local businesses even more convenient.",
    icon: Smartphone,
    status: "in-progress",
    achievements: [
      "⚡ iOS app in development",
      "⚡ Android app in testing",
      "⚡ Push notifications ready",
    ],
  },
  {
    roadmapId: 3,
    title: "Community Features",
    year: "Q3 2025",
    month: "July",
    description:
      "Introducing user profiles, reviews, and community engagement tools.",
    icon: Users,
    status: "upcoming",
    achievements: [
      "📋 User profiles design",
      "📋 Review system planning",
      "📋 Community forums concept",
    ],
  },
  {
    roadmapId: 4,
    title: "Premium Services",
    year: "Q4 2025",
    month: "October",
    description:
      "Launch of premium features for businesses to enhance their visibility and reach.",
    icon: Diamond,
    status: "upcoming",
    achievements: [
      "📋 Premium tiers design",
      "📋 Analytics dashboard",
      "📋 Advanced search filters",
    ],
  },
  {
    roadmapId: 5,
    title: "International Expansion",
    year: "2026",
    month: "Q1",
    description:
      "Taking our platform global to support local economies worldwide.",
    icon: Globe,
    status: "upcoming",
    achievements: [
      "📋 Market research",
      "📋 Localization strategy",
      "📋 Partnership network",
    ],
  },
];

export function RoadmapSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Development{" "}
            <span className="bg-gradient-to-r from-[#0A65FC] to-blue-600 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track our journey as we build innovative solutions to transform
            local commerce and community connections
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0A65FC] via-blue-400 to-blue-200 hidden lg:block"></div>

          {/* Mobile Timeline Line */}
          <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-[#0A65FC] to-blue-300 lg:hidden"></div>

          <div className="space-y-16 lg:space-y-24">
            {roadmapItems.map((item, index) => {
              const IconComponent = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.roadmapId}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-row lg:gap-16`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-20">
                    <div
                      className={`w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
                        item.status === "completed"
                          ? "bg-gradient-to-r from-[#0A65FC] to-blue-600"
                          : item.status === "in-progress"
                          ? "bg-gradient-to-r from-blue-400 to-blue-500"
                          : "bg-gradient-to-r from-gray-300 to-gray-400"
                      }`}
                    >
                      <IconComponent
                        size={24}
                        className={`${
                          item.status === "completed" ||
                          item.status === "in-progress"
                            ? "text-white"
                            : "text-gray-600"
                        }`}
                      />
                    </div>

                    {/* Status Badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          item.status === "completed"
                            ? "bg-green-500"
                            : item.status === "in-progress"
                            ? "bg-yellow-500"
                            : "bg-gray-400"
                        }`}
                      >
                        {item.status === "completed" ? (
                          <CheckCircle size={14} className="text-white" />
                        ) : item.status === "in-progress" ? (
                          <Clock size={14} className="text-white" />
                        ) : (
                          <Calendar size={14} className="text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full lg:w-5/12 ml-20 lg:ml-0 ${
                      isLeft ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className={`bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 ${
                        item.status === "completed"
                          ? "border-[#0A65FC]/20 shadow-blue-100"
                          : item.status === "in-progress"
                          ? "border-blue-400/20 shadow-blue-50"
                          : "border-gray-200 shadow-gray-100"
                      } hover:shadow-2xl`}
                    >
                      {/* Date Badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                          item.status === "completed"
                            ? "bg-[#0A65FC] text-white"
                            : item.status === "in-progress"
                            ? "bg-blue-400 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        <Calendar size={16} />
                        {item.month} {item.year}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Achievements/Goals */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                          {item.status === "completed"
                            ? "Achievements"
                            : item.status === "in-progress"
                            ? "Current Progress"
                            : "Planned Features"}
                        </h4>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-600 flex items-center gap-2"
                            >
                              <span className="text-xs">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Progress Indicator */}
                      {item.status === "in-progress" && (
                        <div className="mt-4">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Progress</span>
                            <span>75%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full w-3/4"></div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden lg:block lg:w-5/12"></div>
                </motion.div>
              );
            })}
          </div>

          {/* Decorative Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-[#0A65FC]/10 to-blue-600/10 rounded-full hidden lg:block"
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-blue-600/10 rounded-full hidden lg:block"
          />
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[#0A65FC]/5 to-blue-600/5 rounded-3xl p-12 border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Want to Follow Our Progress?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay updated with our latest developments and be the first to know
              about new features and improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-[#0A65FC] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Subscribe to Updates
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
              <button className="bg-white text-[#0A65FC] px-8 py-4 rounded-full font-semibold border-2 border-[#0A65FC] hover:bg-[#0A65FC] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View Changelog
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
