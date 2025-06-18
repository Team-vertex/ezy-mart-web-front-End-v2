export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#4A90E2] to-[#2C5AA0] relative">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute top-20 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-24 -translate-y-12"></div>
      <div className="absolute bottom-0 right-20 w-32 h-32 bg-white/10 rounded-full translate-y-16"></div>

      {/* Dotted pattern */}
      <div className="absolute bottom-20 right-32 w-24 h-24 opacity-20">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 sm:px-8 sm:py-20 md:px-20 md:py-28 lg:px-32 lg:py-[120px]">
        <div className="flex w-full max-w-[800px] flex-col items-center text-center">
          <h1 className="text-white text-3xl sm:text-5xl md:text-4xl lg:text-6xl font-bold mb-6">
            Instructions <span className="text-gray-800">To Use</span>{" "}
            <span className="text-gray-800">POS</span>
          </h1>
          <p className="text-white/90 text-lg font-medium leading-7 mb-8 max-w-[600px]">
            Run your store effortlessly with EzyMart POS — no extra work, just
            smart solutions. And don't worry, we've always got your back with
            reliable support whenever you need it.
          </p>
          <button className="text-[#2C5AA0] hover:bg-gray-100 bg-white px-8 sm:px-12 md:px-[50px] py-3 sm:py-3.5 rounded-[32px] font-semibold text-base transition-colors">
            Let's Start
          </button>
        </div>
      </div>
    </section>
  );
}
