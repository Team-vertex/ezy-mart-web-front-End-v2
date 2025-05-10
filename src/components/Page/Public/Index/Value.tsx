import EmblaCarousel from "@/components/emblaCarousel/EmblaCarousel";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";

export const Value: React.FC = () => {
  const OPTIONS = {
    loop: true,
    speed: 10,
    draggable: true,
    autoplay: true,
    autoplayDelay: 3000,
    autoplayStopOnInteraction: false,
    skipSnaps: false,
  };

  // Image data for the carousel
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

  return (
    <section className="bg-white lg:min-h-screen lg:max-h-screen py-14 lg:py-10 flex items-center justify-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-3xl lg:text-5xl font-normal text-[#15366B] mb-4">
              Clear <span className="text-[#0A65FC]">Value</span> for our{" "}
              <span className="text-[#0A65FC]">Clients</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <EmblaCarousel
            slides={slideImages.map((_, index) => index)}
            options={OPTIONS}
            images={slideImages}
          />
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              <p className="text-lg text-[#15366B]">
                EzyMart helps small and mid-level business owners and customers
                in Sri Lanka. We make it easy to manage shops and find products
                nearby.
              </p>
              <p className="text-lg text-[#15366B]">
                Our solutions empower customers and businesses to thrive in an
                increasingly digital world.
              </p>
            </div>

            {/* VISIT NOW BUTTON */}
            <div className="flex items-center justify-start mt-8">
              <a
                href="/"
                className="flex flex-row items-center justify-center bg-[#0A65FC] text-white px-8 py-3 rounded-full shadow-md hover:bg-[#0A65FC]/80 transition duration-300"
              >
                Visit Now
                <IconArrowRight
                  className="ml-2"
                  size={20}
                  strokeWidth={1.5}
                  color="white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
