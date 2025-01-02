import { Carousel } from '@mantine/carousel';
import { Button, Image, Spoiler } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 6000 }));

  //MARK: - Render
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="container mx-auto mt-8">
        <Carousel
          withIndicators={false}
          loop
          align="center"
          plugins={[autoplay.current]}
          withControls={false}
        >
          {/* Slide 1 */}
          <Carousel.Slide className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between bg-[#F9F3EF] rounded-xl p-6 md:p-12 h-[calc(100vh-16rem)] sm:h-[500px]">
              <div className="text-center md:text-left space-y-4 md:flex-1">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight">
                  Grow Your <br /> Businesses Today!
                </h1>
                <p className="text-black text-base md:text-lg lg:text-xl leading-relaxed">
                  Unlock powerful features and unmatched benefits for small and
                  mid-sized businesses. Learn more today!
                </p>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <Button
                    variant="filled"
                    className="rounded-full bg-primary font-semibold text-white hover:bg-blue-700 px-8 py-2"
                    size="md"
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full font-semibold text-secondary hover:bg-blue-700 px-8 py-2 border-secondary border-2"
                    size="md"
                  >
                    Instructions
                  </Button>
                </div>
              </div>
              <Image
                src="/images/home/hero-1.svg"
                alt="POS System"
                className="md:flex-1 !object-contain rounded-lg max-h-[200px] sm:max-h-[200px] md:max-h-[250px] lg:max-h-[300px] transition-all duration-300"
              />
            </div>
          </Carousel.Slide>

          {/* Slide 2 */}
          <Carousel.Slide className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between bg-[#F9F3EF] rounded-xl p-6 md:p-12 h-[calc(100vh-16rem)] sm:h-[500px]">
              <div className="text-center md:text-left space-y-4 md:flex-1">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight">
                  Anything <br /> Anywhere!
                </h1>
                <p className="text-black text-base md:text-lg lg:text-xl leading-relaxed">
                  Our innovative mobile app helps you locate products anywhere
                  in Sri Lanka with ease. Check store locations, opening hours,
                  availability, prices, and even get directions—all at your
                  fingertips!
                </p>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <Button
                    variant="filled"
                    className="rounded-full bg-primary font-semibold text-white hover:bg-blue-700 px-8 py-2"
                    size="md"
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full font-semibold text-secondary hover:bg-blue-700 px-8 py-2 border-secondary border-2"
                    size="md"
                  >
                    Instructions
                  </Button>
                </div>
              </div>
              <Image
                src="/images/home/hero-2.svg"
                alt="POS System"
                className="md:flex-1 !object-contain rounded-lg max-h-[250px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] transition-all duration-300"
              />
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
      {/* Our Services Section */}
      <div className="container mx-auto mt-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 md:space-y-0 gap-4">
          <div className="flex flex-col space-y-4 items-center md:items-start">
            <p className="text-2xl md:text-2xl font-semibold text-secondary text-center lg:text-start">
              Our Services
            </p>
            <p className="text-black text-md text-center md:text-start">
              We provide innovative mobile applications designed for general
              users, along with advanced POS systems and other essential tools
              tailored for business. Our solutions empower both individuals and
              businesses to thrive in an increasingly digital world.
            </p>
            <Button
              variant="filled"
              className="!rounded-full !bg-secondary !font-semibold text-white !hover:!bg-blue-700 !px-8 !w-[fit-content] "
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
      {/* Business Ownsers */}
      <div className="container mx-auto mt-16">
        <div className="flex flex-col-reverse lg:flex-row gap-4 items-center">
          <div className="relative lg:w-1/2">
            <Image
              src="/images/home/business-img-1.svg"
              alt="Business Owners"
              className="w-full !object-contain !rounded-lg max-h-[300px] md:max-h-[400px] 2xl:max-h-[500px] transition-all duration-300"
            />
          </div>
          <div className="flex flex-col space-y-4 lg:w-1/2 items-center lg:items-start">
            <p className="text-2xl md:text-2xl font-semibold text-secondary">
              For Business Owners
            </p>
            <p className="text-black text-md text-center lg:text-start">
              Our POS system delivers exceptional features that go beyond the
              ordinary, all for just 2000 LKR per month less than the daily wage
              of a typical employee. With this cost-effective subscription, you
              gain access to advanced tools that streamline your business
              operations, improve efficiency, and drive growth.
              <br />
              <br />
              Experience high-performance technology at an unbeatable price.
            </p>
            <Button
              variant="filled"
              className="!rounded-full !bg-blue-100 !font-semibold !text-secondary !hover:!bg-blue-700 !px-8 !w-[fit-content] !border-secondary !border-2"
              size="md"
            >
              Discover More
            </Button>
          </div>
        </div>
      </div>
      {/* For Customers */}
      <div className="container mx-auto mt-16">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex flex-col space-y-4 md:w-1/2 items-center md:items-start">
            <p className="text-2xl md:text-2xl font-semibold text-secondary">
              For Customers
            </p>
            <p className="text-black text-md text-center md:text-start">
              Our advanced mobile application simplifies the process of
              discovering and purchasing products across Sri Lanka. With just a
              few taps, you can explore a wide range products from multiple
              stores, and make secure purchases.
              <br />
              <br />
              Enjoy a seamless shopping experience at your fingertips, wherever
              you are.
            </p>
            <Button
              variant="filled"
              className="!rounded-full !bg-blue-100 !font-semibold !text-secondary !hover:!bg-blue-700 !px-8 !w-[fit-content] !border-secondary !border-2"
              size="md"
            >
              Discover More
            </Button>
          </div>
          <div className="relative md:w-1/2">
            <Image
              src="/images/home/customer-img-1.svg"
              alt="For Customers"
              className="!w-full !object-cover !rounded-lg max-h-[300px] md:max-h-[400px] 2xl:max-h-[500px] transition-all duration-300"
            />
          </div>
        </div>
      </div>
      {/* Why Choose Us */}
      <div className="container mx-auto mt-16 ">
        <div className="bg-[url('/images/home/why-choose-us-bg.svg')] bg-cover bg-center bg-no-repeat p-8 md:p-12 !rounded-xl ">
          <p className="text-2xl md:text-2xl lg:text-3xl font-semibold text-secondary text-center">
            Why Businesses Choose Us?
          </p>
          <p className="text-black text-md text-center">
            Businesses choose our cutting-edge POS system for its ability to
            meet the unique needs of various industries. Whether you're in
            retail, food, agriculture, or electronics, our POS system provides
            seamless solutions that streamline operations, improve efficiency,
            and enhance customer experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 mt-12">
            <div className="bg-primary p-2 flex flex-col items-center justify-center !rounded-lg h-32 border-blue-200 border-2">
              <div className="bg-blue-200 p-2 !rounded-full -mt-20 flex items-center justify-center">
                <Image
                  className="w-12 h-12"
                  src="/images/home/icons/icon-1.svg"
                  alt="Icon"
                />
              </div>
              <p className="text-white text-lg text-center mt-2 font-semibold leading-5">
                24/7 <br />
                support
              </p>
            </div>
            <div className="bg-primary p-2 flex flex-col items-center justify-center !rounded-lg h-32 mt-12 sm:mt-0 lg:mt-0 border-blue-200 border-2">
              <div className="bg-blue-200 p-2 !rounded-full -mt-20 flex items-center justify-center">
                <Image
                  className="w-12 h-12"
                  src="/images/home/icons/icon-2.svg"
                  alt="Icon"
                />
              </div>
              <p className="text-white text-lg text-center mt-2 font-semibold leading-5">
                2 months <br />
                Trial Period
              </p>
            </div>
            <div className="bg-primary p-2 flex flex-col items-center justify-center !rounded-lg h-32 mt-12 sm:mt-8 lg:mt-0 border-blue-200 border-2 ">
              <div className="bg-blue-200 p-2 !rounded-full -mt-20 flex items-center justify-center">
                <Image
                  className="w-12 h-12"
                  src="/images/home/icons/icon-3.svg"
                  alt="Icon"
                />
              </div>
              <p className="text-white text-lg text-center mt-2 font-semibold leading-5">
                Maximum <br />
                Data Security
              </p>
            </div>
            <div className="bg-primary p-2 flex flex-col items-center justify-center !rounded-lg h-32 mt-12 sm:mt-8 lg:mt-0 border-blue-200 border-2">
              <div className="bg-blue-200 p-2 !rounded-full -mt-20 flex items-center justify-center">
                <Image
                  className="w-12 h-12"
                  src="/images/home/icons/icon-4.svg"
                  alt="Icon"
                />
              </div>
              <p className="text-white text-lg text-center mt-2 font-semibold leading-5">
                Free Integration <br />& Training
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Businesses We Coverd */}
      <div className="container mx-auto mt-16">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex flex-col space-y-4 md:w-1/2 items-center md:items-start">
            <p className="text-2xl md:text-2xl font-semibold text-secondary text-center md:text-start">
              Businesses We covered
            </p>
            <p className="text-black text-md text-center md:text-start">
              Our POS System Suits a Wide Range of Businesses Our cutting-edge
              POS system is perfect for businesses across various industries,
              including:
            </p>
            <Spoiler hideLabel="Read Less" showLabel="Read More">
              <ul className="list-disc list-inside text-black text-md ">
                <li>Grocery Stores</li>
                <li>Cosmetics & Beauty Products</li>
                <li>Clothing Retail</li>
                <li>Bakery and Confectioneries</li>
                <li>Hardware Stores</li>
                <li>Electronics Retail</li>
                <li>Agricultural Supplies</li>
                <li>Stationery Stores</li>
                <li>Household Goods</li>
                <li>Digital Devices & Parts (Computers, Laptops)</li>
                <li>Pharmacies</li>
                <li>Automobile Parts Retail</li>
                <li>Food and Beverage Retail</li>
                <li>Telecommunications</li>
                <li>And More...</li>
              </ul>
            </Spoiler>
            <p className="text-black text-md !mt-8 text-center md:text-start">
              No matter your business type, our POS system can streamline your
              operations and boost efficiency.
            </p>
          </div>
          <div className="relative md:w-1/2">
            <Image
              src="/images/home/business-section.svg"
              alt="For Customers"
              className="!w-full !object-fill !rounded-lg max-h-[300px] md:max-h-[400px] 2xl:max-h-[500px] transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
