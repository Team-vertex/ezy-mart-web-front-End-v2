import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhyUseSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase">
              Why Choose EzyMart
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why Use EzyMart{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-600">
              App?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            EzyMart makes shopping across Sri Lanka easier than ever. Find
            nearby shops, discover products fast, and save time all with a few
            simple taps on your phone.
          </p>
        </motion.div>

        {/* App Showcase Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-2xl border border-blue-100">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/048e14f207294d2d81c31c8ac35554bd/c207cb28-42b4-449d-8734-387f8f493c1f?placeholderIfAbsent=true"
              alt="EzyMart App Features"
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* CSS for animation delays */}
      <style>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default WhyUseSection;
