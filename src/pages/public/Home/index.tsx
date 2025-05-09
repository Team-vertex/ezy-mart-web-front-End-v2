import { Carousel } from "@mantine/carousel";
import { IconStars } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const text = {
  TextOne:
    "EzyMart make you run your business smoothly than ever before through EzyMart pos without and extra works.",
  Texttwo:
    "EzyMart makes shopping easier than ever. Search for products near you, discover local shops, save time, and enjoy a smooth, stress free shopping experience all through one smart app",
};

export default function Home() {
  const [nowShwing, setNowShowing] = useState(text.TextOne);
  const [isAnimating, setIsAnimating] = useState(false);

  // MARK: Lifecycle
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setNowShowing((prev) =>
          prev === text.TextOne ? text.Texttwo : text.TextOne
        );
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // MARK: Render
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="lg:min-h-screen max-h-screen flex-grow flex flex-col bg-gradient-to-b from-[#15366B] to-[#2969D1] overflow-hidden">
        <div className="flex-grow container mx-auto px-4 pt-28 md:pt-24 lg:pt-28  text-white flex flex-col items-center justify-center">
          {/* Welcome message */}
          <div className="bg-[#15366B] rounded-full px-6 py-2 mb-6 md:mb-10">
            <p className="text-white flex items-center gap-2">
              <IconStars size={24} />
              Welcome to the Ezymart !
            </p>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4 md:mb-6">
            <span className="text-white font-extrabold">What </span>
            <span className="text-[#0A1A33] font-bold">we </span>
            <span className="text-white font-bold">make </span>
            <span className="text-[#0A1A33] font-bold">For You</span>
          </h1>

          {/* Description with animation */}
          <div className="h-auto min-h-32 sm:min-h-24 lg:min-h-12 flex items-center justify-center overflow-hidden">
            <p
              className={`text-center max-w-3xl mb-6 md:mb-10 px-4 transition-all duration-500 ease-in-out
                ${
                  isAnimating
                    ? "opacity-0 transform -translate-y-4"
                    : "opacity-100 transform translate-y-0"
                }`}
            >
              {nowShwing}
            </p>
          </div>

          {/* CTA Button */}
          <button className="border border-white hover:bg-white hover:text-blue-900 text-white py-2 px-8 rounded-full transition-colors">
            Get Started
          </button>
        </div>
        {/* Dashboard Image */}
        <div className="w-full mt-8 md:mt-10 relative flex justify-center container mx-auto">
          <Carousel
            withIndicators
            withControls={false}
            loop
            slideGap="xl"
            slideSize="100%"
            height="auto"
            className="w-full max-w-3xl p-0"
            classNames={{
              indicator:
                "!bg-[#000] !opacity-30 !h-2 !w-2 !rounded-full !transition-transform !duration-200",
            }}
          >
            <Carousel.Slide>
              <img
                src="/stock/homeimg.jpg"
                alt="Dashboard"
                className="w-full h-full max-w-3xl mx-auto shadow-lg rounded-t-lg p-0 "
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <img
                src="/stock/homeimg2.png"
                alt="Dashboard"
                className="w-full max-w-3xl mx-auto shadow-lg rounded-t-lg p-0"
              />
            </Carousel.Slide>
          </Carousel>
        </div>
      </section>
    </div>
  );
}
