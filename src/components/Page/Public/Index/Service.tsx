import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export const Service: React.FC = () => {
  // MARK:Ref
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const logoRef = useRef(null);

  // MARK: Elements
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isParagraphInView = useInView(paragraphRef, {
    once: true,
    amount: 0.4,
  });
  const isLogoInView = useInView(logoRef, { once: true, amount: 0.5 });

  return (
    <section className="bg-[#E6EFFF] lg:min-h-screen lg:max-h-screen py-14 lg:py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        <motion.img
          ref={imageRef}
          initial={{ opacity: 0, x: -50 }}
          animate={
            isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="/images/Public/serviceSectionImage.png"
          alt="Ezymart"
          className="!object-contain !w-auto !h-auto hidden lg:block lg:col-span-1"
        />
        <div className="flex flex-col justify-center items-start lg:px-10">
          <motion.h2
            ref={headingRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl lg:text-5xl font-normal text-[#15366B] mb-4"
          >
            Service Deliver Real Results for{" "}
            <span className="text-[#0A65FC] font-extrabold">Target</span>
          </motion.h2>

          <motion.p
            ref={paragraphRef}
            initial={{ opacity: 0, y: 40 }}
            animate={
              isParagraphInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg lg:text-xl text-[#15366B]"
          >
            We provide a range of digital services through our project EzyMart,
            specifically designed to support small and mid-level business
            owners, as well as everyday customers across Sri Lanka.
            <br /> Our goal is to empower local businesses with smart,
            affordable tools that streamline operations and enhance customer
            engagement. Whether you're running a retail shop, managing stock, or
            simply looking for the best products nearby, EzyMart offers a
            convenient and reliable solution tailored to your needs.
          </motion.p>

          <motion.img
            ref={logoRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isLogoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.6 }}
            src="/images/Public/forcustomersandservices.svg"
            alt="Ezymart"
            className="!object-contain !w-56 lg:w-72 !h-auto mt-4"
          />
        </div>
      </div>
    </section>
  );
};
