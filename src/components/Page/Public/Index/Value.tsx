import EmblaCarousel from "@/components/emblaCarousel/EmblaCarousel";
import React from "react";

export const Value: React.FC = () => {
  const OPTIONS = { loop: true };

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
    <section className="bg-white lg:min-h-screen lg:max-h-screen py-14 lg:py-10">
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
          <div className="lg:col-span-2"></div>
        </div>
      </div>
    </section>
  );
};
