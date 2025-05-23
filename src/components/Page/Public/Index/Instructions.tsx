import React from "react";

export const Instructions: React.FC = () => {
  return (
    <section className="bg-[#E6EFFF] py-14 lg:py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#15366B] mb-4">
              Best{" "}
              <span className="text-[#0A65FC] font-georgia">Instructions</span>
            </h2>
            <p className="text-lg text-[#15366B]">
              EzyMart helps small and mid-level business owners and customers in
              Sri Lanka. We make it easy to manage shops and find products
              nearby. <br />
              Don't worry about technical knowledge — we guide you through
              everything, and the system is designed to be simple and easy to
              use.
            </p>
          </div>
        </div>

        <div className="grid items-center justify-center grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col h-auto lg:col-span-2 p-4 bg-white border border-[#0A1A33] rounded-xl">
            <img
              src="/stock/male-female-office-workers 2.png"
              alt="Vertex Cooperation"
              className="object-cover w-full h-full rounded-lg max-h-80"
            />
            <div className="grid items-center justify-between grid-cols-1 mt-4 lg:grid-cols-8">
              <h2 className="text-xl font-normal text-black lg:col-span-4 lg:text-2xl">
                Understand Need,Clear Instruction.
              </h2>
              <div className="lg:col-span-1" />
              <p className="lg:col-span-3 text-[#737373] text-sm lg:text-base">
                we guide you through everything, and the system is designed to
                be simple and easy to use.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 px-4 py-24 bg-white max-h-none rounded-xl">
            <div className="flex flex-row items-center justify-start gap-4 p-2 pl-8 border border-black rounded-lg">
              <img
                src="/vectors/vector1.svg"
                alt="Vertex Cooperation"
                className="object-cover w-12 h-12 rounded-lg"
              />
              <p className="text-xl text-black lg:text-2xl">For Customers</p>
            </div>
            <div className="flex flex-row items-center justify-start gap-4 p-2 pl-8 border border-black rounded-lg">
              <img
                src="/vectors/vector2.svg"
                alt="Vertex Cooperation"
                className="object-cover w-12 h-12 rounded-lg"
              />
              <p className="text-xl text-black lg:text-2xl">For Business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
