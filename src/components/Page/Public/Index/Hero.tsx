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
      <div className="container flex flex-col items-center justify-center flex-grow px-4 mx-auto text-white pt-28 md:pt-24 lg:pt-28">
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
          <p className="flex items-center gap-2 text-white">
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
          className="mb-4 text-3xl font-bold text-center sm:text-4xl md:text-6xl md:mb-6"
        >
          <span className="font-extrabold text-white">What </span>
          <span className="text-[#0A1A33] font-bold font-georgia">we </span>
          <span className="font-bold text-white">make </span>
          <span className="text-[#0A1A33] font-bold font-georgia">For You</span>
        </motion.h1>

        {/* Description with animation */}
        <motion.div
          ref={descriptionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={
            isDescriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center justify-center h-auto overflow-hidden min-h-32 sm:min-h-24 lg:min-h-12"
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
          className="px-8 py-2 text-white transition-colors border border-white rounded-full hover:bg-white hover:text-blue-900"
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
        className="container relative flex justify-center w-full mx-auto mt-8 md:mt-10"
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
              className="w-full h-full max-w-3xl p-0 mx-auto rounded-t-lg shadow-lg "
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="/stock/homeimg2.png"
              alt="Dashboard"
              className="w-full max-w-3xl p-0 mx-auto rounded-t-lg shadow-lg"
            />
          </Carousel.Slide>
        </Carousel>
      </motion.div>
    </section>
  );
};
