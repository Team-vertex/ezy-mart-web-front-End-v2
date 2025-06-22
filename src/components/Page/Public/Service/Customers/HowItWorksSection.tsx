import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/CoustomerService/Frame 388 (1).svg",
  "/images/CoustomerService/Frame 390.svg",
  "/images/CoustomerService/Frame 388 (1).svg",
];

// type FormData = {
//   firstName: string;
//   lastName: string;
//   mobile: string;
//   email: string;
// };

const HowItWorksSection = () => {
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
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // slower interval (5 seconds)

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  // const handleClose = () => {
  //   console.log("Form closed")
  //   // Handle close action
  // }

  return (
    <>
      <section className="relative w-full py-24 overflow-hidden md:py-64 lg:mt-[200px] ">
        {/* Background */}
        <div
          className="absolute inset-0 z-0 w-full h-full"
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
                  <div className="w-full ">
                    <motion.h2
                      className="font-bold text-center text-xl md:text-3xl lg:text-4xl"
                      variants={itemVariants}
                    >
                      How the App Works?
                    </motion.h2>
                    <motion.p
                      className="mt-3 text-white text-xs md:text-sm lg:text-lg"
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
                    className="w-full mt-8 md:mt-10"
                    variants={itemVariants}
                  >
                    <h2 className="font-bold text-center text-xl md:text-3xl lg:text-4xl">
                      How to Download App?
                    </h2>
                    <p className="mt-3 text-white text-xs md:text-sm lg:text-lg">
                      Ready to simplify your shopping? Simply fill out a quick
                      request form or contact us through our website, and we'll
                      help you set up your access. Whether you're a customer
                      looking for easy shopping or a store owner who wants to be
                      listed, getting started with EzyMart is simple, fast, and
                      completely stress free.
                    </p>
                  </motion.div>

                  <motion.button
                    className="self-center px-6 py-3 text-sm md:text-lg lg:text-xl mt-4 md:mt-6 sm:text-base mb-6  font-bold bg-[#0D2140] text-white  rounded-full hover:bg-[#0D2140]/80 transition-colors duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={open}
                  >
                    Request App free
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                className="w-full lg:w-[32%] flex items-center justify-center"
                variants={itemVariants}
              >
                <div className="relative w-full max-w-xs mx-auto lg:max-w-lg">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current}
                      src={images[current]}
                      alt={`Slide ${current + 1}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5 }}
                      className="w-full h-auto rounded-lg"
                    />
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute p-2 text-white transform -translate-y-1/2 bg-transparent rounded-full left-2 top-1/2"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute p-2 text-white transform -translate-y-1/2 bg-transparent rounded-full right-2 top-1/2"
                  >
                    ›
                  </button>

                  {/* Dots */}
                  <div className="absolute flex gap-1 transform -translate-x-1/2 bottom-2 left-1/2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === current ? "bg-white" : "bg-gray-400"
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
      <Modal
        opened={opened}
        onClose={close}
        centered
        size="xl"
        withCloseButton={false}
        padding={0}
        radius="xl"
        classNames={{
          overlay: "!bg-black/60 backdrop-blur-sm",
          content: "!bg-transparent !shadow-none !overflow-visible",
          body: "!p-0",
        }}
        transitionProps={{
          transition: "fade",
          duration: 300,
        }}
      >
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Background with gradient matching the design */}
          <div
            className="absolute inset-0 rounded-3xl shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, #0A1A33 0%, #0A65FC 25%, #0A1A33 50%, #0A1A33 75%, #0A1A33 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 lg:p-12">
            {/* Header */}
            <div className="text-center mb-8 lg:mb-10">
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-4 leading-tight">
                Request Mobile App
              </h2>
              <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
                Fill in your details, and we'll help you get started.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
              {/* First row - First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label className="block text-white text-sm lg:text-base font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="eg: First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full h-11 lg:h-12 p-3 bg-white/15 border border-white/30 text-white placeholder:text-white/70 rounded-xl text-sm lg:text-base focus:border-white/60 focus:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-0"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm lg:text-base font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="eg: Perera"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full h-11 lg:h-12 p-3 bg-white/15 border border-white/30 text-white placeholder:text-white/70 rounded-xl text-sm lg:text-base focus:border-white/60 focus:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-0"
                    required
                  />
                </div>
              </div>

              {/* Second row - Mobile & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label className="block text-white text-sm lg:text-base font-medium mb-2">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="eg: +94 71 234 5678"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full h-11 lg:h-12 p-3 bg-white/15 border border-white/30 text-white placeholder:text-white/70 rounded-xl text-sm lg:text-base focus:border-white/60 focus:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-0"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm lg:text-base font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="eg: example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-11 lg:h-12 p-3 bg-white/15 border border-white/30 text-white placeholder:text-white/70 rounded-xl text-sm lg:text-base focus:border-white/60 focus:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-0"
                    required
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-8 lg:mt-10 pt-2">
                <button
                  type="button"
                  onClick={close}
                  className="flex-1 h-11 lg:h-12 px-6 text-sm lg:text-base font-semibold text-gray-800 bg-white rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="flex-1 h-11 lg:h-12 px-6 text-sm lg:text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HowItWorksSection;
