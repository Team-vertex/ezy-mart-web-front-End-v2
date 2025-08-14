import {
  IconCloudComputing,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

export default function DemoHero() {
  const handleScrollToBottom = () => {
    const startY = window.pageYOffset;
    const targetY = document.body.scrollHeight / 2;
    const distance = targetY - startY;
    const duration = 2000;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeInOut = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, startY + distance * easeInOut);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };
  return (
    <>
      {/* Hero Section */}
      <section className="overflow-hidden bg-gradient-to-br from-[#0A65FC] to-blue-700 relative">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 -translate-x-32 -translate-y-32 rounded-full bg-white/10 animate-pulse"></div>
        <div className="absolute right-0 w-48 h-48 translate-x-24 -translate-y-12 rounded-full top-20 bg-white/10 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-0 w-32 h-32 translate-y-16 rounded-full right-20 bg-white/10 animate-pulse animation-delay-2000"></div>

        {/* Dotted pattern */}
        <div className="absolute w-24 h-24 bottom-20 left-32 opacity-20">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl sm:px-8 md:px-20 lg:py-32">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
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
                className="inline-flex px-4 py-2 mb-6 text-sm font-semibold tracking-wide text-white uppercase border rounded-full bg-white/20 backdrop-blur-sm border-white/30"
              >
                <FormattedMessage id="demo.hero.badge" />
              </motion.div>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                <FormattedMessage id="demo.hero.title" />{" "}
              </h1>

              <p className="max-w-lg mb-8 text-lg leading-relaxed text-white/90 lg:text-xl">
                <FormattedMessage id="demo.hero.description" />
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <motion.button
                  onClick={handleScrollToBottom}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0A65FC] transition-all duration-300"
                >
                  <FormattedMessage id="demo.hero.cta.primary" />
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
                  className="p-6 transition-all duration-300 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20 hover:bg-white/20"
                >
                  <feature.icon className="w-8 h-8 mb-3 text-white" />
                  <h3 className="mb-2 text-lg font-bold text-white">
                    <FormattedMessage id={feature.titleId} />
                  </h3>
                  <p className="text-sm text-white/80">
                    <FormattedMessage id={feature.descId} />
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Example bottom content so we can scroll */}

    </>
  );
}
