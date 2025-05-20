import { motion } from "framer-motion";
import { useState,useEffect } from "react";


const images = [
  "/images/CoustomerService/Frame 388 (1).svg",
  "/public/images/CoustomerService/Frame 390.svg",
  "/public/images/CoustomerService/Frame 388 (1).svg",
];
const HowItWorksSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full py-24 overflow-hidden md:py-64 lg:mt-[200px] ">
      {/* Background image - using a div with bg color as fallback */}
      <div
        className="absolute inset-0 z-0 w-full h-full "
        style={{
          backgroundImage:
            "url('/public/images/CoustomerService/Vector 6 (1).svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          className="w-full max-w-6xl mx-auto mt-12 md:mt-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex flex-col gap-8 lg:flex-row xl:gap-12 mt-[150px] sm:text-lg">
            <motion.div className="w-full lg:w-[68%]" variants={itemVariants}>
              <div className="flex flex-col text-center text-white lg:text-left">
                <div className="w-full">
                  <motion.h2
                    className="text-3xl lg:text-5xl md:text-4xl"
                    variants={itemVariants}
                  >
                    How the App Works
                  </motion.h2>
                  <motion.p
                    className="mt-4 text-white md:text-xl lg:text-2xl "
                    variants={itemVariants}
                  >
                    Simply open the app, search for the product or shop you
                    need, and view real-time results nearby. You can explore
                    store details, save your favorite places, and even get
                    directions straight from the app. EzyMart is built to make
                    your shopping experience faster, smoother, and completely
                    hassle-free all within a few taps.
                  </motion.p>
                </div>

                <motion.div
                  className="w-full mt-12 md:mt-24"
                  variants={itemVariants}
                >
                  <h2 className="text-3xl lg:text-5xl md:text-4xl">
                    How to Request the App
                  </h2>
                  <p className="mt-4 text-white md:text-xl lg:text-2xl">
                    Ready to simplify your shopping? Simply fill out a quick
                    request form or contact us through our website, and we'll
                    help you set up your access. Whether you're a customer
                    looking for easy shopping or a store owner who wants to be
                    listed, getting started with EzyMart is simple, fast, and
                    completely stress free.
                  </p>
                </motion.div>
                <motion.button
                  className="self-center lg:self-start px-8 py-3 text-xl mt-12 md:mt-24 sm:text-base font-bold bg-[#0D2140] text-white mb-14 lg:text-lg rounded-full hover:bg-[#0D2140]/80 transition-colors  duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Application
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-[32%] flex items-center justify-center"
              variants={itemVariants}
            >
              <div className="relative w-full max-w-xs mx-auto lg:max-w-lg">
                <img
                  src={images[current]}
                  alt={`Slide ${current + 1}`}
                  className="w-full h-auto transition duration-700 ease-in-out rounded-lg"
                />
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute p-2 text-white transform -translate-y-1/2 rounded-full left-2 top-1/2 bg-gray-800/70"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute p-2 text-white transform -translate-y-1/2 rounded-full right-2 top-1/2 bg-gray-800/70"
                >
                  ›
                </button>
                {/* Dots */}
                <div className="absolute flex gap-1 transform -translate-x-1/2 bottom-2 left-1/2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
                        }`}
                    ></button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
