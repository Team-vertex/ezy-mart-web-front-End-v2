const HeroSection = () => {
  //MARK: Render
  return (
    <section className="flex-grow flex flex-col items-center justify-center bg-gradient-to-tr from-[#010916] to-[#053CDF] ">
      <div className="container mx-auto flex flex-col items-center  pt-36 pb-36 lg:pb-48 justify-center">
        <h1 className="text-xl lg:text-6xl font-bold text-center text-white ">
          Anything, Anywhere
        </h1>
        <p className="text-xs lg:text-2xl text-center text-white mt-4">
          EzyMart makes shopping easier than ever. Search for products near you,
          discover local shops, save time, and enjoy a smooth, stress free
          shopping experience all through one smart app
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-8 mt-4">
          <FeatureItem text="Easy Product Search" />
          <FeatureItem text="Location Based Shop Finder" />
          <FeatureItem text="Add item to your list" />
          <FeatureItem text="Seamless Experience" />
        </div>

        <button className="bg-[#15366B] text-white font-semibold  text-sm  lg:text-lg px-4 py-2 rounded-full mt-8 hover:bg-[#15366B]/80 transition-colors">
          See How It Works
        </button>
      </div>
    </section>
  );
};

//MARK: Components
export const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 py-2 transition-colors rounded-lg hover:bg-sky-900/20">
    <div className="w-2 h-2 rounded-full bg-sky-400" />
    <p className="text-xs font-medium md:text-base text-white">{text}</p>
  </div>
);

export default HeroSection;
