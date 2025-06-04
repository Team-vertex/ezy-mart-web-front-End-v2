const roadmapItems = [
  {
    roadmapId: 1,
    title: "Platform Launch",
    year: "Q1 2025",
    description: "Official release of our core platform with basic features for local business discovery and support.",
    icon: "🚀",
    color: "bg-blue-200"
  },
  {
    roadmapId: 2,
    title: "Mobile Apps",
    year: "Q2 2025",
    description: "iOS and Android applications to make supporting local businesses even more convenient.",
    icon: "📱",
    color: "bg-blue-200"
  },
  {
    roadmapId: 3,
    title: "Community Features",
    year: "Q3 2025",
    description: "Introducing user profiles, reviews, and community engagement tools.",
    icon: "👥",
    color: "bg-blue-200"
  },
  {
    roadmapId: 4,
    title: "Premium Services",
    year: "Q4 2025",
    description: "Launch of premium features for businesses to enhance their visibility and reach.",
    icon: "💎",
    color: "bg-blue-200"
  },
  {
    roadmapId: 5,
    title: "International Expansion",
    year: "2026",
    description: "Taking our platform global to support local economies worldwide.",
    icon: "🌍",
    color: "bg-blue-200"
  },
];

export function RoadmapSection() {
  return (
    <div className="relative px-4 py-16 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Our <span className="font-bold text-blue-600">Journey</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-black">
            Follow our path as we build tools to connect communities with their local businesses
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute w-1 h-full transform -translate-x-1/2 left-1/2 bg-gradient-to-b from-blue-400 to-purple-500"></div>
          
          <div className="space-y-8">
            {roadmapItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div 
                  key={item.roadmapId}
                  className={`relative flex ${isLeft ? "justify-start" : "justify-end"}`}
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                >
                  {/* Timeline dot */}
                  <div className={`absolute top-6 w-6 h-6 rounded-full border-4 border-white ${index < 2 ? 'bg-blue-500' : 'text-blue-600'} transform -translate-x-1/2 left-1/2 z-10`}></div>
                  
                  <div className={`w-full md:w-[45%] p-6 rounded-xl shadow-lg ${item.color} transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                    <div className="flex items-start gap-6">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-white uppercase bg-blue-600 rounded-full">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                        <p className="mt-2 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Floating elements for decoration */}
          <div className="absolute top-0 left-0 w-32 h-32 -translate-x-20 -translate-y-20 bg-blue-200 rounded-full opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 text-blue-600 translate-x-20 translate-y-20 rounded-full opacity-10"></div>
        </div>
      </div>
    </div>
  );
}