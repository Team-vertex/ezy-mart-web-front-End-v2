import React from "react";

export const Service: React.FC = () => {
  return (
    <section className="bg-[#E6EFFF] lg:min-h-screen lg:max-h-screen py-14 lg:py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        <img
          src="/images/Public/serviceSectionImage.png"
          alt="Ezymart"
          className="!object-contain !w-auto !h-auto hidden lg:block lg:col-span-1"
        />
        <div className="flex flex-col justify-center items-start  lg:px-10">
          <h2 className="text-3xl lg:text-5xl font-normal text-[#15366B] mb-4">
            Service Deliver Real Results for{" "}
            <span className="text-[#0A65FC] font-extrabold">Target</span>
          </h2>
          <p className="text-lg lg:text-xl text-[#15366B]">
            We provide a range of digital services through our project EzyMart,
            specifically designed to support small and mid-level business
            owners, as well as everyday customers across Sri Lanka.
            <br /> Our goal is to empower local businesses with smart,
            affordable tools that streamline operations and enhance customer
            engagement. Whether you're running a retail shop, managing stock, or
            simply looking for the best products nearby, EzyMart offers a
            convenient and reliable solution tailored to your needs.
          </p>
          <img
            src="/images/Public/forcustomersandservices.svg"
            alt="Ezymart"
            className="!object-contain !w-40 lg:w-52 !h-auto mt-4"
          />
        </div>
      </div>
    </section>
  );
};
