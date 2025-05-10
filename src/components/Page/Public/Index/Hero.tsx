import { indexHeroText } from "@/constants/Data";
import { Carousel } from "@mantine/carousel";
import { IconStars } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Hero: React.FC = () => {
  const [nowShwing, setNowShowing] = useState(indexHeroText.TextOne);
  const [isAnimating, setIsAnimating] = useState(false);

  // MARK: Ref
  const welcomeRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  // MARK: Elements
  const isWelcomeInView = useInView(welcomeRef, { once: true, amount: 0.5 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isDescriptionInView = useInView(descriptionRef, {
    once: true,
    amount: 0.5,
  });
  const isButtonInView = useInView(buttonRef, { once: true, amount: 0.5 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });

  // MARK: Lifecycle
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setNowShowing((prev) =>
          prev === indexHeroText.TextOne
            ? indexHeroText.Texttwo
            : indexHeroText.TextOne
        );
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // MARK: Render
  return (
    <section className="flex-grow flex flex-col bg-gradient-to-b from-[#15366B] to-[#2969D1] overflow-hidden">
      <div className="flex-grow container mx-auto px-4 pt-28 md:pt-24 lg:pt-28  text-white flex flex-col items-center justify-center">
        {/* Welcome message */}
        <motion.div
          ref={welcomeRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isWelcomeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5 }}
          className="bg-[#15366B] rounded-full px-6 py-2 mb-6 md:mb-10"
        >
          <p className="text-white flex items-center gap-2">
            <IconStars size={24} />
            Welcome to the Ezymart !
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6"
        >
          <span className="text-white font-extrabold">What </span>
          <span className="text-[#0A1A33] font-bold">we </span>
          <span className="text-white font-bold">make </span>
          <span className="text-[#0A1A33] font-bold">For You</span>
        </motion.h1>

        {/* Description with animation */}
        <motion.div
          ref={descriptionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={
            isDescriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.7, delay: 0.4 }}
          className="h-auto min-h-32 sm:min-h-24 lg:min-h-12 flex items-center justify-center overflow-hidden"
        >
          <p
            className={`text-center max-w-3xl mb-6 md:mb-10 px-4 transition-all duration-500 ease-in-out
                ${
                  isAnimating
                    ? "opacity-0 transform -translate-y-4"
                    : "opacity-100 transform translate-y-0"
                }`}
          >
            {nowShwing}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          ref={buttonRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border border-white hover:bg-white hover:text-blue-900 text-white py-2 px-8 rounded-full transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>

      {/* Dashboard Image */}
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="w-full mt-8 md:mt-10 relative flex justify-center container mx-auto"
      >
        <Carousel
          withIndicators
          withControls={false}
          loop
          slideGap="xl"
          slideSize="100%"
          height="auto"
          className="w-full max-w-3xl p-0"
          classNames={{
            indicator:
              "!bg-[#000] !opacity-30 !h-2 !w-2 !rounded-full !transition-transform !duration-200",
          }}
        >
          <Carousel.Slide>
            <img
              src="/stock/homeimg.jpg"
              alt="Dashboard"
              className="w-full h-full max-w-3xl mx-auto shadow-lg rounded-t-lg p-0 "
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="/stock/homeimg2.png"
              alt="Dashboard"
              className="w-full max-w-3xl mx-auto shadow-lg rounded-t-lg p-0"
            />
          </Carousel.Slide>
        </Carousel>
      </motion.div>
    </section>
  );
};
