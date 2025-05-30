import React from "react";

export const GetStarted: React.FC = () => {
  return (
    <section className="bg-[#FFF8EB] py-14 lg:py-20">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#15366B] text-center">
          Get Started with EzyMart POS –{" "}
          <span className="text-[#0A65FC] font-bold">Fast and Easy</span>
        </h2>
        <p className="text-base lg:text-lg text-gray-700 text-center max-w-3xl mt-4">
          Getting started with EzyMart POS is fast and effortless. Whether
          you're running a grocery store or a boutique, our process is designed
          to get your business up and running in with in 2 days. No tech skills
          needed!
        </p>

        <div className="w-full mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Request System */}
          <div className="bg-blue-100 rounded-lg p-6 py-16 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
            <img
              src="/images/Business/image1.png"
              alt="Request System Icon"
              className="w-36 h-36 lg:w-56 lg:h-56 object-cover mb-8 "
            />
            <h3 className="text-xl font-semibold mb-4 text-center">
              Request System
            </h3>
            <p className="text-gray-700 text-center">
              Just submit your basic details through our EzyMart landing page
              name, contact info, business type, and location. No hassle, just a
              few clicks!
            </p>
          </div>

          {/* Card 2 - We'll Reach Out */}
          <div className="bg-blue-100 rounded-lg p-6 py-16 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
            <img
              src="/images/Business/image2.png"
              alt="Request System Icon"
              className="w-36 h-36 lg:w-56 lg:h-56 object-cover mb-8 "
            />
            <h3 className="text-xl font-semibold mb-4 text-center">
              We'll Reach Out
            </h3>
            <p className="text-gray-700 text-center">
              Our team will contact you to confirm your business details, guide
              you through the integration and training process, and help you
              prepare the needed documents.
            </p>
          </div>

          {/* Card 3 - Work with EzyMart POS */}
          <div className="bg-blue-100 rounded-lg p-6 py-16 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
            <img
              src="/images/Business/image3.png"
              alt="Request System Icon"
              className="w-36 h-36 lg:w-56 lg:h-56 object-cover mb-8 "
            />
            <h3 className="text-xl font-semibold mb-4 text-center">
              Work with EzyMart POS
            </h3>
            <p className="text-gray-700 text-center">
              Once your setup is complete, you'll receive the software and login
              plug it in, and your business is ready to manage sales, stocks,
              and more with ease.
            </p>
          </div>
        </div>

        <button className="mt-12 bg-[#0A65FC] hover:bg-[#0A65FC]/90 text-white font-semibold py-3 px-8 rounded-full transition-colors">
          Get Started Now
        </button>
      </div>
    </section>
  );
};
