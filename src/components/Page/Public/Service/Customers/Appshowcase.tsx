import CarouselCard from "@/components/carousel/carouseCard";
import Carousel from "@/components/carousel/carousel";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AppShowcase = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-rotate useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // slower (4 seconds)

    return () => clearInterval(interval);
  }, []);

  const images = [
    "/images/CoustomerService/Frame 388 (1).svg",
    "/public/images/CoustomerService/Frame 390.svg",
    "/public/images/CoustomerService/Frame 390.svg",
  ];

  const carouselSlides = [
    <CarouselCard
      key="slide-1"
      variant="primary"
      // title="User-Friendly Interface"
      content={
        <p className="text-xs md:text-sm">
          <img
            src="/public/images/CoustomerService/Frame 388.svg"
            alt="Slide 1"
          />
        </p>
      }
      className="mx-auto w-full max-w-[280px] md:max-w-xs h-full"
    />,
    <CarouselCard
      key="slide-2"
      variant="primary"
      // title="Effortless Navigation"
      content={
        <p className="text-xs md:text-sm">
          <img
            src="/public/images/CoustomerService/Frame 390.svg"
            alt="Slide 2"
          />
        </p>
      }
      className="mx-auto w-full max-w-[280px] md:max-w-xs h-full"
    />,
    <CarouselCard
      key="slide-3"
      variant="primary"
      // title="Customizable Options"
      content={
        <p className="text-xs md:text-sm">
          <img src="/images/CoustomerService/Frame 388 (1).svg" alt="Slide 3" />
        </p>
      }
      className="mx-auto w-full max-w-[280px] md:max-w-xs h-full"
    />,
  ];

  return (
    <div className="absolute left-0 flex flex-col w-full min-h-screen md:mt-[100px] mt-[250px] lg:mt-[300px] top-4">
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-4">
        {/* Carousel with scroll animation */}
        <motion.div
          className="w-full max-w-screen-md md:h-[400px] px-2 sm:px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Carousel
            slides={carouselSlides}
            autoPlay={true}
            autoPlayInterval={2000}
            className="w-full h-full"
          />
        </motion.div>

        {/* Mobile single card with scroll animation */}
        <motion.div
          className="h-[400px] w-full px-8 pb-4 sm:px-12 py-14 lg:hidden mb-[300px] md:hidden mt-[150px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-xs h-[500px] mx-auto lg:max-w-lg overflow-hidden">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover rounded-[50px] transition-all duration-[4000ms] ease-in-out 
          ${
            index === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }`}
              />
            ))}

            {/* Manual Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute z-20 p-2 text-3xl font-bold text-white transform -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 left-2 top-1/2"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute z-20 p-2 text-3xl font-bold text-white transform -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 right-2 top-1/2"
            >
              ›
            </button>

            {/* Carousel Dots */}
            <div className="absolute z-20 flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? "bg-white scale-110" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AppShowcase;
