import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="overflow-hidden bg-[#063C96]">
      <div className="z-10 flex flex-col overflow-hidden items-center justify-center px-4 py-16 sm:px-8 sm:py-20 md:px-20 md:py-28 lg:px-32 lg:py-[173px] lg:h-[600px]">
        <div className="flex mb-[-27px] w-full max-w-[917px] flex-col items-stretch max-md:mb-2.5">
          <header className="flex w-full flex-col items-stretch text-[#E6EFFF] text-center pb-[27px] px-2 sm:px-4">
            <h1 className="text-[#E6EFFF] text-3xl sm:text-5xl md:text-4xl lg:text-6xl font-bold self-center">
              About Us
            </h1>
            <p className="text-[#E6EFFF] text-lg font-medium leading-6 mt-4 sm:mt-[15px]">
              At EzyMart, our mission is simple to make everyday shopping easier
              for everyone. We help you find what you need, right when you need
              it, by connecting you with trusted local stores across Sri Lanka.
              It's shopping, made smarter.
            </p>
          </header>
          <button className="text-[#0A1A33] self-center hover:bg-blue-700 gap-2.5 text-sm sm:text-base font-bold bg-white px-8 sm:px-12 md:px-[70px] py-3 sm:py-3.5 rounded-[32px] transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};