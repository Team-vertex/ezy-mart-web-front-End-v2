import React from "react";

export const WhyPos: React.FC = () => {
  //MARK: Render
  return (
    <section className="bg-white py-14 lg:py-20 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-50 rounded-full opacity-40 blur-3xl"></div>

      <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-6 relative z-10">
        {/* Enhanced Title Section */}
        <div className="inline-block mb-2 px-4 py-1 bg-blue-50 rounded-full text-blue-600 text-sm font-medium">
          Exclusively For Small Business Owners
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-center bg-clip-text">
          Why EzyMart <span className="text-[#0A65FC] font-bold">POS?</span>
        </h2>
        <p className="text-base lg:text-lg text-gray-700 text-center max-w-3xl mt-4 mb-10 lg:mb-16">
          Unlike generic solutions, EzyMart POS is{" "}
          <span className="font-semibold">specifically crafted</span> for shop
          owners who value simplicity and efficiency. Experience business
          management that's not just easier—it's{" "}
          <span className="font-semibold text-[#0A65FC]">
            uniquely tailored
          </span>
          to how you work.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 w-full">
          {/* No Initial Cost Card - Enhanced */}
          <div className="feature-card group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden transform hover:-translate-y-1 border border-transparent hover:border-blue-200">
            <div className="absolute top-3 right-3">
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                EXCLUSIVE
              </span>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-20 text-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              No Initial Cost
            </h3>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">
                Unlike competitors with high startup fees
              </span>{" "}
              - we charge nothing to begin.
            </p>
            <p className="text-gray-600">
              Start using EzyMart POS with zero cost — our revolutionary
              approach gives small businesses enterprise-level tools without the
              enterprise price tag.
            </p>
          </div>

          {/* Ease of Use Card - Enhanced */}
          <div className="feature-card group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden transform hover:-translate-y-1 border border-transparent hover:border-blue-200">
            <div className="absolute top-3 right-3">
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                STANDOUT FEATURE
              </span>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-20 text-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Unmatched Simplicity
            </h3>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">While others offer complexity</span>{" "}
              - we deliver intuitive design anyone can master in minutes.
            </p>
            <p className="text-gray-600">
              Our proprietary interface is designed specifically for retailers
              who value their time. Learn once, use forever - with virtually no
              learning curve.
            </p>
          </div>

          {/* Lifetime Support Card - Enhanced */}
          <div className="feature-card group bg-gradient-to-br from-indigo-50 to-blue-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden transform hover:-translate-y-1 border border-transparent hover:border-blue-200">
            <div className="absolute top-3 right-3">
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                INDUSTRY-LEADING
              </span>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-20 text-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Dedicated Support Team
            </h3>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">When others offer chatbots</span> -
              we give you real humans committed to your success.
            </p>
            <p className="text-gray-600">
              Our support team consists of retail experts, not just tech
              support. Get business advice alongside technical help - a service
              no other POS provider offers.
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 px-6 py-5 bg-gray-50 rounded-xl max-w-2xl mx-auto">
          <div className="flex items-center mb-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm font-medium text-gray-500">
              Trusted by 2,000+ shop owners
            </span>
          </div>
          <p className="italic text-gray-600">
            "After trying 3 different POS systems, EzyMart is the only one that
            truly understands what small retailers need. It's like it was made
            specifically for my business."
          </p>
          <p className="mt-2 font-medium">— Sarah T., Boutique Owner</p>
        </div>

        {/* Enhanced Call to action section */}
        <div className="mt-12 lg:mt-16 flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-[#0A65FC] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 flex items-center gap-2 group">
            Start Your Free Setup
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <button className="text-[#0A65FC] hover:text-blue-800 font-medium py-3 px-6 border border-blue-200 hover:border-blue-400 rounded-full transition-colors duration-300">
            Schedule a Demo
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Join the community of shop owners who've upgraded to the smarter way
          to run their business
        </p>
      </div>
    </section>
  );
};
