const guidanceSteps = [
  {
    id: 1,
    title: "How to login",
    description:
      "It's very simple, you just need to open the software in the desk and enter your username and password then press enter.",
  },
  {
    id: 2,
    title: "How to Sell products",
    description:
      "We focus on nearby stores, not big marketplaces helping you shop local and support your community.",
  },
  {
    id: 3,
    title: "Topic here",
    description:
      "We focus on nearby stores, not big marketplaces helping you shop local and support your community.",
  },
  {
    id: 4,
    title: "Topic here",
    description:
      "We focus on nearby stores, not big marketplaces helping you shop local and support your community.",
  },
  {
    id: 5,
    title: "Topic here",
    description:
      "We focus on nearby stores, not big marketplaces helping you shop local and support your community.",
  },
];

export default function GuidanceRoadmapSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#4A90E2]">Guidance</span> For You
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#4A90E2] via-[#4A90E2] to-transparent hidden md:block"></div>

          <div className="space-y-16">
            {guidanceSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8`}
                >
                  {/* Step Number */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 hidden md:flex">
                    {String(step.id).padStart(2, "0")}
                  </div>

                  {/* Content Side */}
                  <div
                    className={`w-full md:w-[45%] ${
                      isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                    }`}
                  >
                    <div className="md:hidden w-16 h-16 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                      {String(step.id).padStart(2, "0")}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Video Side */}
                  <div className="w-full md:w-[45%]">
                    <div className="bg-[#4A90E2] rounded-2xl aspect-video flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/30 transition-colors">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
