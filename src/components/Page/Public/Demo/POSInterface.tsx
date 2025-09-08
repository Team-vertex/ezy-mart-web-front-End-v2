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
        className="relative py-12 overflow-hidden md:py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50"
      >
        {/* Background decorations (hidden on mobile for clarity) */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 hidden bg-blue-100 rounded-full opacity-50 md:block top-1/4 w-96 h-96 mix-blend-multiply blur-xl animate-pulse"></div>
          <div className="absolute right-0 hidden bg-blue-200 rounded-full opacity-50 md:block bottom-1/4 w-96 h-96 mix-blend-multiply blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-center md:mb-12"
          >
            <div className="inline-flex px-3 py-1.5 bg-blue-100 text-[#0A65FC] rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase mb-4 md:mb-6">
              Interactive POS Demo
            </div>
            <h2 className="mb-3 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              <FormattedMessage id="demo.posInterface.Title" />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-600">
                <FormattedMessage id="demo.posInterface.Title2" />
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-base leading-relaxed text-gray-600 md:text-lg">
              <FormattedMessage id="demo.posInterface.subtitle" />
            </p>

            {/* Credentials card (mobile-friendly) */}
            <div className="max-w-xl mx-auto mt-5 md:mt-6">
              <div className="p-4 text-left border border-blue-100 shadow md:p-5 bg-white/90 rounded-xl">
                <p className="text-sm leading-relaxed text-gray-700 break-words md:text-base">
                  <span className="font-semibold">Website:</span>{" "}
                  <a
                    href="https://posdemo.vertexcooperation.lk/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0A65FC] underline break-all"
                  >
                    www.posdemo.vertexcooperation.lk
                  </a>
                  <br />
                  <span className="font-semibold">Email:</span>{" "}
                  <span className="break-all select-all">
                    contact.vertexcooperation@gmail.com
                  </span>
                  <br />
                  <span className="font-semibold">Password:</span>{" "}
                  <span className="select-all">123456</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Responsive Iframe Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              w-full mx-auto
              p-0 sm:p-4
              bg-white border border-blue-100 shadow-2xl rounded-2xl sm:rounded-3xl
              overflow-hidden
              max-w-[1000px]
            "
          >
            {/* Height scales with viewport for mobile; larger fixed cap on desktop */}
            <div className="w-full h-[65vh] sm:h-[70vh] lg:h-[720px]">
              <iframe
                src="https://posdemo.vertexcooperation.lk/"
                className="w-full h-full border-0"
                title="POS Demo"
                loading="lazy"
                allow="fullscreen; clipboard-read; clipboard-write"
              />
            </div>
          </motion.div>

          {/* Optional helper link for very small devices */}
          <div className="mt-4 text-center">
            <a
              href="https://posdemo.vertexcooperation.lk/"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm text-[#0A65FC] underline underline-offset-4"
            >
              Open in a new tab (best on mobile)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
