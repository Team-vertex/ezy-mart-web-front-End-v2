import {
  IconCloudComputing,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function DemoHero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#0A65FC] to-blue-700 relative">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32 animate-pulse"></div>
      <div className="absolute top-20 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-24 -translate-y-12 animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-0 right-20 w-32 h-32 bg-white/10 rounded-full translate-y-16 animate-pulse animation-delay-2000"></div>

      {/* Dotted pattern */}
      <div className="absolute bottom-20 left-32 w-24 h-24 opacity-20">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-20 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold tracking-wide uppercase mb-6 border border-white/30"
            >
              Interactive Demo
            </motion.div>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Experience <span className="text-blue-100">EzyMart</span>
              <span className="block">POS Live</span>
            </h1>

            <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
              Try our point-of-sale system with real features. See how easy it
              is to manage your business with EzyMart's intuitive interface.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0A65FC] px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg flex items-center justify-center"
                onClick={() => {
                  document
                    .querySelector("#pos-demo")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <IconPlayerPlay className="w-5 h-5 mr-2" />
                Try Demo Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0A65FC] transition-all duration-300"
              >
                Watch Video Tour
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                icon: IconDeviceDesktop,
                title: "Desktop POS",
                desc: "Full-featured desktop interface",
              },
              {
                icon: IconDeviceMobile,
                title: "Mobile Ready",
                desc: "Works on tablets and phones",
              },
              {
                icon: IconCloudComputing,
                title: "Cloud Sync",
                desc: "Real-time data synchronization",
              },
              {
                icon: IconPlayerPlay,
                title: "Live Demo",
                desc: "Interactive hands-on experience",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-white mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
