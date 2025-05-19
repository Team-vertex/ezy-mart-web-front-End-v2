import React from 'react';
import Carousel from '@/components/carousel/carousel';
import CarouselCard from '@/components/carousel/carouseCard';

const AppShowcase = () => {

  const carouselSlides = [
    <CarouselCard
      key="slide-1"
      variant="primary"
      // title="User-Friendly Interface" add your title 
      content={
        <p className="text-xs md:text-sm"><img src="/public/images/CoustomerService/Frame 388.svg" alt="" /></p>
      }
      className="mx-auto w-full max-w-[280px] md:max-w-xs h-full"
    />,
    <CarouselCard
      key="slide-2"
      variant="primary"
      // title="Effortless Navigation" add your titile
      content={
      <p className="text-xs md:text-sm"><img src="/public/images/CoustomerService/Frame 390.svg" alt="" /></p>
      }
      className="mx-auto w-full max-w-[280px] md:max-w-xs h-full"
    />,
    <CarouselCard
      key="slide-3"
      variant="primary"
      // title="Customizable Options" add your tittle
      content={
        <p className="text-xs md:text-sm"><img src="/public/images/CoustomerService/Frame 388 (1).svg" alt="" /></p>
      }
      className="mx-auto w-full max-w-[280px] md:max-w-xs h-full"
    />,
  ];

  return (
    <div className="absolute left-0 flex flex-col w-full min-h-screen top-4 lg:mt-[300px] mt-[150px] md:mt-[300px]">
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-4">
        <div className="w-full max-w-screen-md md:h-[400px] px-2 sm:px-4">
          <Carousel
            slides={carouselSlides}
            autoPlay={true}
            autoPlayInterval={2000}
            className="w-full h-full"
          />
        </div>

        <div className="h-[400px] w-full px-8 pb-4 sm:px-12 py-14 lg:hidden mb-[300px] md:hidden mt-[150px]">
          <CarouselCard 
            image="/public/images/CoustomerService/Frame 388.svg"
            imagePosition="top"
            
          />
        </div>
      </main>
    </div>
  );
};

export default AppShowcase;
