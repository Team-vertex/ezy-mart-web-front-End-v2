import { Carousel } from '@mantine/carousel';
import { Button, Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 6000 }));

  //MARK: - Render
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="container mx-auto  mt-8">
        <Carousel
          withIndicators={false}
          loop
          align="center"
          plugins={[autoplay.current]}
          withControls={false}
        >
          {/* Slide 1 */}
          <Carousel.Slide className="!w-full">
            <div className="flex flex-col md:flex-row items-center justify-between bg-[#F9F3EF] !rounded-xl p-6 md:p-12 !h-auto md:!h-[calc(100vh-8rem)] xl:!h-[calc(100vh-10rem)]">
              <div className="text-center md:text-left space-y-4">
                <h1 className="text-3xl md:text-6xl font-extrabold text-secondary">
                  Grow Your <br />
                  Businesses Today!
                </h1>
                <p className="text-black text-lg md:text-xl">
                  Unlock powerful features and unmatched benefits for small and
                  mid-sized businesses. Learn more today!
                </p>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <Button
                    variant="filled"
                    className="!rounded-full bg-primary !font-semibold text-white !hover:!bg-blue-700 !px-8 "
                    size="md"
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="!rounded-full !font-semibold !text-secondary !hover:!bg-blue-700 !px-8 !border-secondary !border-2 "
                    size="md"
                  >
                    Instructions
                  </Button>
                </div>
              </div>
              <Image
                src="/images/home/hero-1.svg"
                alt="POS System"
                className="w-full md:w-fit !object-contain !rounded-lg max-h-[200px] sm:max-h-[300px] md:max-h-[500px] transition-all duration-300"
              />
            </div>
          </Carousel.Slide>

          {/* Slide 2 */}
          <Carousel.Slide className="!w-full">
            <div className="flex flex-col md:flex-row items-center justify-between bg-[#F9F3EF] !rounded-xl p-6 md:p-12 !h-auto md:!h-[calc(100vh-8rem)] xl:!h-[calc(100vh-10rem)]">
              <div className="text-center md:text-left space-y-4">
                <h1 className="text-3xl md:text-6xl font-extrabold text-secondary">
                  Anything
                  <br /> Anywhere !
                </h1>
                <p className="text-black text-lg md:text-xl">
                  Our innovative mobile app helps you locate products anywhere
                  in Sri Lanka with ease. Check store locations, opening hours,
                  availability, prices, and even get directions—all at your
                  fingertips!
                </p>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <Button
                    variant="filled"
                    className="!rounded-full bg-primary !font-semibold text-white !hover:!bg-blue-700 !px-8 "
                    size="md"
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="!rounded-full !font-semibold !text-secondary !hover:!bg-blue-700 !px-8 !border-secondary !border-2 "
                    size="md"
                  >
                    Instructions
                  </Button>
                </div>
              </div>
              <Image
                src="/images/home/hero-2.svg"
                alt="POS System"
                className="w-full md:w-fit !object-contain !rounded-lg max-h-[200px] sm:max-h-[300px] md:max-h-[500px] transition-all duration-300"
              />
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
      {/* Our Services Section */}
      <div className="container mx-auto lg:mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 gap-4">
          <div className="flex flex-col space-y-4">
            <p className="text-xl md:text-2xl font-semibold text-secondary">
              Our Services
            </p>
            <p className="text-black text-md">
              We provide innovative mobile applications designed for general
              users, along with advanced POS systems and other essential tools
              tailored for business. Our solutions empower both individuals and
              businesses to thrive in an increasingly digital world.
            </p>
            <Button
              variant="filled"
              className="!rounded-full !bg-secondary !font-semibold text-white !hover:!bg-blue-700 !px-8 !w-[fit-content]"
              size="md"
            >
              View All Services
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:gap-12 w-full ">
            <div className="relative group overflow-hidden rounded-lg h-[270px] md:h-[350px] 2xl:h-[400px]">
              <Image
                src="/images/home/service-1.svg"
                alt="For Business Owners"
                className="w-full h-[270px] md:h-[350px] 2xl:h-[400px] !object-cover !rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-400 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-secondary text-lg font-bold text-center">
                  For Business Owners
                </p>
                <Button
                  variant="filled"
                  className="!bg-primary !text-white !rounded-full !hover:!bg-gray-700 !px-6 mt-2"
                >
                  Visit Now
                </Button>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg h-[300px] md:h-[400px] 2xl:h-[450px]">
              <Image
                src="/images/home/service-2.svg"
                alt="For Individuals"
                className="w-full h-[300px] md:h-[400px] 2xl:h-[450px] !object-cover !rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-400 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-secondary text-lg font-bold text-center">
                  For Individuals
                </p>
                <Button
                  variant="filled"
                  className="!bg-primary !text-white !rounded-full !hover:!bg-gray-700 !px-6 mt-2"
                >
                  Visit Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
