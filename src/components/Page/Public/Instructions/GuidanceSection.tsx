export default function GuidanceSection() {
  return (
    <section className="w-full min-h-[600px] bg-[url('/images/Public/instructionsbg.svg')] bg-cover bg-center bg-no-repeat">
      {/* Content */}
      <div className="py-16 sm:py-20 md:py-24 ">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-[#4A90E2]">Guidance</span> to Start
                Learning <span className="block">Process</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  EzyMart helps small and mid-level business owners and
                  customers in Sri Lanka. We make it easy to manage shops and
                  find products nearby.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">
                    <span className="text-gray-900 font-semibold">
                      Instructions:
                    </span>{" "}
                    First, Read titles and find the video
                  </p>
                  <p className="text-gray-600">
                    that you want to watch. Then watch the video. If there any
                    issue feel free to contact us.
                  </p>
                </div>
              </div>
              <button className="bg-[#4A90E2] hover:bg-[#2C5AA0] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <img
                src="/public/images/Public/meet-our-team-concept-landing-page 1.svg"
                alt="Learning guidance illustration showing people collaborating"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
