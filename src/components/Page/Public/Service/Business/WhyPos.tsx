import React from "react";

export const WhyPos: React.FC = () => {
  //MARK: Render
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-center">
          Why EzyMart <span className="text-[#0A65FC] font-bold">POS?</span>
        </h2>
        <p className="text-base lg:text-lg text-gray-700 text-center max-w-3xl mt-4">
          Running a shop shouldn't be stressful or expensive. EzyMart POS is
          designed to make your day-to-day business easier, smoother, and
          smarter — with tools that just work.
        </p>
        <div className="w-full mt-10 lg:mt-16">
          <img
            src="/images/Business/why-ezymart-pos.svg"
            alt="Why EzyMart POS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};
