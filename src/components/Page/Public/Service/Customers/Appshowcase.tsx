import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '@/components/carousel/carousel';
import CarouselCard from '@/components/carousel/carouseCard';
import EmblaCarousel from "@/components/emblaCarousel/EmblaCarousel";

const AppShowcase = () => {

    const OPTIONS = {
    loop: true,
    speed: 10,
    draggable: true,
    autoplay: true,
    autoplayDelay: 3000,
    autoplayStopOnInteraction: false,
    skipSnaps: false,
  };



 const slideImages = [
    {
      id: 1,
      src: "/stock/test.png",
      alt: "Shop owner using EzyMart",
    },
    {
      id: 2,
      src: "/stock/test.png",
      alt: "Customer using EzyMart mobile app",
    },
    {
      id: 3,
      src: "/stock/test.png",
      alt: "Inventory management with EzyMart",
    },
  ];



  const carouselSlides = [
    <CarouselCard
      key="slide-1"
      variant="primary"
      // title="User-Friendly Interface"
      content={
        <p className="text-xs md:text-sm">
          <img src="/public/images/CoustomerService/Frame 388.svg" alt="Slide 1" />
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
          <img src="/public/images/CoustomerService/Frame 390.svg" alt="Slide 2" />
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
          <img src="/public/images/CoustomerService/Frame 388 (1).svg" alt="Slide 3" />
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
          transition={{ duration: 0.8, ease: 'easeOut' }}
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
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <EmblaCarousel
                slides={slideImages.map((_, index) => index)}
                options={OPTIONS}
                images={slideImages}
              />
        </motion.div>

      </main>
    </div>
  );
};

export default AppShowcase;
