import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FormattedMessage } from "react-intl";

export default function POSInterface() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <>
      <section
        ref={sectionRef}
        id="demo-area"
        className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex px-4 py-2 bg-blue-100 text-[#0A65FC] rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              Interactive POS Demo
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <FormattedMessage id="demo.posInterface.Title" />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-600">
                <FormattedMessage id="demo.posInterface.Title2" />
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <FormattedMessage id="demo.posInterface.subtitle" />
            </p>
          </motion.div>

          {/* Figma Prototype */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex justify-center items-center p-6"
          >
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width="800"
              height="450"
              src="https://embed.figma.com/proto/o3GDFWHWUDz91gKbSSayOU/EzyMart.lk-V2?page-id=2659%3A6237&node-id=2766-304&viewport=291%2C485%2C0.17&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2673%3A9&show-proto-sidebar=1&embed-host=share"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
}
