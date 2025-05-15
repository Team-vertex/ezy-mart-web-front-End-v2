import React from 'react';
import Carousel from '@/components/carousel/carousel';
import CarouselCard from '@/components/carousel/carouseCard';

const AppShowcase = () => {

  const carouselSlides = [
    <CarouselCard
      key="slide-1"
      variant="primary"
      title="Beautiful Design"
      content={
        <p className="text-xs md:text-sm">Experience seamless interactions with our intuitive interface.</p>
      }
      className="mx-auto w-full max-w-[280px] md:max-w-xs h-full"
    />,
    <CarouselCard
      key="slide-2"
      variant="primary"
      title="Effortless Navigation"
      content={
        <p className="text-xs md:text-sm">Swipe or click to navigate between slides.</p>
      }
      className="mx-auto w-full max-w-[280px] md:max-w-xs h-full"
    />,
    <CarouselCard
      key="slide-3"
      variant="primary"
      title="Customizable Options"
      content={
        <p className="text-xs md:text-sm">Tailor the carousel to fit your needs.</p>
      }
      className="mx-auto w-full max-w-[280px] md:max-w-xs h-full"
    />,
  ];

  return (
    <div className="absolute left-0 flex flex-col w-full min-h-screen top-4 mt-[300px] ">
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-4">
        <div className="w-full max-w-screen-md md:h-[400px] px-2 sm:px-4">
          <Carousel
            slides={carouselSlides}
            autoPlay={true}
            autoPlayInterval={2000}
            className="w-full h-full"
          />
        </div>
      </main>

      
    </div>
  );
};

export default AppShowcase;
