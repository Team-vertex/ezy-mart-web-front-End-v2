import {
  IconCloudComputing,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { FormattedMessage, useIntl } from "react-intl";

export default function DemoHero() {
  const intl = useIntl();
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
              <FormattedMessage id="demo.hero.badge" />
            </motion.div>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <FormattedMessage id="demo.hero.title" />{" "}
              <span className="text-blue-100">
                <FormattedMessage
                  id="demo.hero.title.branded"
                  defaultMessage="EzyMart"
                />
              </span>
              <span className="block">
                <FormattedMessage
                  id="demo.hero.title.pos"
                  defaultMessage="POS Live"
                />
              </span>
            </h1>

            <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
              <FormattedMessage id="demo.hero.description" />
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
                <FormattedMessage id="demo.hero.cta.primary" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0A65FC] transition-all duration-300"
              >
                <FormattedMessage id="demo.hero.cta.secondary" />
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
                titleId: "demo.hero.features.desktop.title",
                descId: "demo.hero.features.desktop.description",
              },
              {
                icon: IconDeviceMobile,
                titleId: "demo.hero.features.mobile.title",
                descId: "demo.hero.features.mobile.description",
              },
              {
                icon: IconCloudComputing,
                titleId: "demo.hero.features.cloud.title",
                descId: "demo.hero.features.cloud.description",
              },
              {
                icon: IconPlayerPlay,
                titleId: "demo.hero.features.live.title",
                descId: "demo.hero.features.live.description",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.titleId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-white mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">
                  <FormattedMessage id={feature.titleId} />
                </h3>
                <p className="text-white/80 text-sm">
                  <FormattedMessage id={feature.descId} />
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
