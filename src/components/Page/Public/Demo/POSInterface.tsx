import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FormattedMessage } from "react-intl";

export default function POSInterface() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  // const iframeWidth = 800;
  // const iframeHeight = 550;

  // Content original size (oya Figma proto viewport size eka anuwa adjust karanna)
  // const contentWidth = 1920;  
  // example original content width
  // const contentHeight = 1080; 
  // example original content height

  // Calculate scale factor so content fits in iframe container
  // const scaleX = iframeWidth / contentWidth;
  // const scaleY = iframeHeight / contentHeight;
  // const scale = Math.min(scaleX, scaleY);

  return (
    <>
      <section
        ref={sectionRef}
        id="demo-area"
        className="relative py-20 overflow-hidden lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 bg-blue-100 rounded-full opacity-50 top-1/4 w-96 h-96 mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute right-0 bg-blue-200 rounded-full opacity-50 bottom-1/4 w-96 h-96 mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-8 md:px-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <div className="inline-flex px-4 py-2 bg-blue-100 text-[#0A65FC] rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              Interactive POS Demo
            </div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
              <FormattedMessage id="demo.posInterface.Title" />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-600">
                <FormattedMessage id="demo.posInterface.Title2" />
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
              <FormattedMessage id="demo.posInterface.subtitle" />
            </p>

            <p className="max-w-3xl  mx-auto text-xl leading-relaxed ">
              Website: www.posdemo.vertexcooperation.lk/ <br/>
              Email: contact.vertexcooperation@gmail.com <br/>
              password: 123456
            </p>
          </motion.div>

          {/* Figma Prototype */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center w-[1200px] h-[800px] p-6 overflow-hidden bg-white border border-blue-100 shadow-2xl rounded-3xl"
          >
            
              <iframe
                src="https://posdemo.vertexcooperation.lk/"
                className="w-full h-full border-0"
              ></iframe>
            
          </motion.div>
        </div>
      </section>
    </>
  );
}
