export const GetStarted: React.FC = () => {
  //MARK: Render
  return (
    <section className="bg-white py-14 lg:py-10">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#15366B] mb-4">
          Get Started with EzyMart POS –{" "}
          <span className="text-[#0A65FC] font-bold">Fast and Easy?</span>
        </h2>
        <p className="text-lg text-[#15366B] text-center">
          Running a shop shouldn’t be stressful or expensive. EzyMart POS is
          designed to make your day-to-day business easier, smoother, and
          smarter — with tools that just work.
        </p>
        <img
          src="/images/Business/why-ezymart-pos.svg"
          alt="Why EzyMart POS"
          className="w-full h-auto mt-8 lg:mt-12 rounded-lg "
        />
      </div>
    </section>
  );
};
