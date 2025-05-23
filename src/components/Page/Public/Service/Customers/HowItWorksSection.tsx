import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Input } from '@mantine/core';
import { Button } from '@mantine/core';



const images = [
  "/images/CoustomerService/Frame 388 (1).svg",
  "/public/images/CoustomerService/Frame 390.svg",
  "/public/images/CoustomerService/Frame 388 (1).svg",
];

type FormData = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
};

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
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  const handleClose = () => {
    console.log("Form closed")
    // Handle close action
  }

  return (
    <>
      <section className="relative w-full py-24 overflow-hidden md:py-64 lg:mt-[200px] ">
        {/* Background */}
        <div
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            backgroundImage: "url('/public/images/CoustomerService/Vector 6 (1).svg')",
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
                      className="text-3xl lg:text-[36px] md:text-4xl"
                      variants={itemVariants}
                    >
                      How the App Works
                    </motion.h2>
                    <motion.p
                      className="mt-4 text-white md:text-xl lg:text-[14px] "
                      variants={itemVariants}
                    >
                      Simply open the app, search for the product or shop you need, and view real-time results nearby. You can explore store details, save your favorite places, and even get directions straight from the app. EzyMart is built to make your shopping experience faster, smoother, and completely hassle-free all within a few taps.
                    </motion.p>
                  </div>

                  <motion.div
                    className="w-full mt-12 md:mt-24"
                    variants={itemVariants}
                  >
                    <h2 className="text-3xl lg:text-[36px]] md:text-4xl">
                      How to Request the App
                    </h2>
                    <p className="mt-4 text-white md:text-xl lg:text-[14px]">
                      Ready to simplify your shopping? Simply fill out a quick request form or contact us through our website, and we'll help you set up your access. Whether you're a customer looking for easy shopping or a store owner who wants to be listed, getting started with EzyMart is simple, fast, and completely stress free.
                    </p>
                  </motion.div>

                  <motion.button
                    className="self-center lg:self-start px-8 py-3 text-xl mt-12 md:mt-24 sm:text-base font-bold bg-[#0D2140] text-white mb-14 lg:text-lg rounded-full hover:bg-[#0D2140]/80 transition-colors duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={open}
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
                        className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"}`}
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
        title="Request For Mobile Application"
        size="xl"
        className="border-none bg-transparent !shadow-none"
      >
        <div className="flex items-center justify-center min-h-[70vh] md:min-h-[50vh] px-4 py-12 bg-gradient-to-br from-black via-blue-900 to-black">
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white rounded-3xl p-10 w-full max-w-5xl shadow-2xl"
          >
            <h2 className="mb-4 text-3xl font-bold text-center">
              Request For Mobile Application
            </h2>
            <p className="mb-10 text-sm text-center text-gray-300">
              Ready to simplify your shopping experience? Fill in your details, and
              we’ll help you get started with the EzyMart mobile app. Enjoy fast,
              convenient, and stress free access to nearby stores and products at your
              fingertips.
            </p>
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 font-semibold">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="+94712345678"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Email (optional)</label>
                <input
                  type="email"
                  name="email"
                  placeholder="@ email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-[53px] mt-10">
              <button
                type="button"
                onClick={close}
                className="w-full sm:w-[203px] px-6 py-2 font-semibold text-black bg-white rounded-full shadow-md hover:bg-gray-200"
              >
                Close
              </button>
              <button
                type="submit"
                className="w-full sm:w-[203px] px-6 py-2 font-semibold bg-blue-600 rounded-full shadow-md hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default HowItWorksSection;
