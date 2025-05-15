import { motion } from "framer-motion";

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

  return (
    <section className="relative w-full py-24 overflow-hidden md:py-64">
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
          <div className="flex flex-col gap-8 lg:flex-row xl:gap-12">
            <motion.div className="w-full lg:w-[68%]" variants={itemVariants}>
              <div className="flex flex-col text-center text-white lg:text-left">
                <div className="w-full">
                  <motion.h2
                    className="text-xl font-bold lg:text-6xl"
                    variants={itemVariants}
                  >
                    How the App Works
                  </motion.h2>
                  <motion.p
                    className="mt-4 text-xs text-white lg:text-2xl "
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
                  <h2 className="text-xl font-bold lg:text-6xl">
                    How to Request the App
                  </h2>
                  <p className="mt-4 text-xs text-white lg:text-2xl">
                    Ready to simplify your shopping? Simply fill out a quick
                    request form or contact us through our website, and we'll
                    help you set up your access. Whether you're a customer
                    looking for easy shopping or a store owner who wants to be
                    listed, getting started with EzyMart is simple, fast, and
                    completely stress free.
                  </p>
                </motion.div>
                <motion.button
                  className="self-center lg:self-start px-8 py-3 mt-12 md:mt-24 text-sm sm:text-base font-bold text-sky-100 bg-sky-950 rounded-[50px] hover:bg-sky-900 transition-colors duration-300"
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
              <div className="relative w-full max-w-xs lg:max-w-none">
                <img
                  src="/public/images/CoustomerService/Frame 388 (1).svg"
                  alt="App illustration"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
