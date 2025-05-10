import React from "react";

export const Instructions: React.FC = () => {
  return (
    <section className="bg-[#E6EFFF] py-14 lg:py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#15366B] mb-4">
              Best{" "}
              <span className="text-[#0A65FC] font-bold">Instructions</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center">
          <div className="flex flex-col h-auto lg:col-span-2 p-4 bg-white border border-[#0A1A33] rounded-xl">
            <img
              src="/stock/male-female-office-workers 2.png"
              alt="Vertex Cooperation"
              className="w-full h-full max-h-80 object-cover rounded-lg"
            />
            <div className="grid grid-cols-1 lg:grid-cols-8 items-center mt-4 justify-between">
              <h2 className="lg:col-span-4 text-black font-normal text-xl lg:text-2xl">
                Understand Need,Clear Instruction.
              </h2>
              <div className="lg:col-span-1" />
              <p className="lg:col-span-3 text-[#737373] text-sm lg:text-base">
                we guide you through everything, and the system is designed to
                be simple and easy to use.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-white max-h-none rounded-xl py-24 px-4 gap-10">
            <div className="flex flex-row gap-4 p-2 items-center justify-start pl-8 border border-black rounded-lg">
              <img
                src="/vectors/vector1.svg"
                alt="Vertex Cooperation"
                className="w-12 h-12 object-cover rounded-lg"
              />
              <p className="text-black text-xl lg:text-2xl">For Customers</p>
            </div>
            <div className="flex flex-row gap-4 p-2 items-center justify-start pl-8 border border-black rounded-lg">
              <img
                src="/vectors/vector2.svg"
                alt="Vertex Cooperation"
                className="w-12 h-12 object-cover rounded-lg"
              />
              <p className="text-black text-xl lg:text-2xl">For Business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
