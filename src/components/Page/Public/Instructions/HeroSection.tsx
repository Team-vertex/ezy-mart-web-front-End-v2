import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#0A65FC] to-blue-700 relative">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32 animate-pulse"></div>
      <div className="absolute top-20 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-24 -translate-y-12 animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-0 right-20 w-32 h-32 bg-white/10 rounded-full translate-y-16 animate-pulse animation-delay-2000"></div>

      {/* Dotted pattern */}
      <div className="absolute bottom-20 right-32 w-24 h-24 opacity-20">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 sm:px-8 sm:py-20 md:px-20 md:py-28 lg:px-32 lg:py-[120px]">
        <div className="flex w-full max-w-[800px] flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold tracking-wide uppercase mb-6 border border-white/30"
          >
            Step by Step Guide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-3xl sm:text-5xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Instructions <span className="text-blue-100">To Use</span>{" "}
            <span className="text-blue-100">POS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/90 text-lg lg:text-xl font-medium leading-relaxed mb-8 max-w-[600px]"
          >
            Run your store effortlessly with EzyMart POS — no extra work, just
            smart solutions. And don't worry, we've always got your back with
            reliable support whenever you need it.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#0A65FC] hover:bg-blue-50 bg-white px-8 sm:px-12 md:px-[50px] py-3 sm:py-4 rounded-full font-bold text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Start
          </motion.button>
        </div>
      </div>
    </section>
  );
}
