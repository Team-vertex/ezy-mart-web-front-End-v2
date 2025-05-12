import { FeatureItem } from "../Customers/HeroSection";

function Hero() {
  return (
    <section className="flex-grow flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-[#010916] to-[#053CDF] overflow-hidden">
      <div className="pt-20 container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-xl lg:text-6xl font-bold text-center text-white ">
          Smart POS Solutions
        </h1>
        <p className="text-xs lg:text-2xl text-center text-white mt-4">
          Smart POS Solutions Built for Sri Lankan Shops Our POS system helps
          you manage sales, stock, expenses, and more all in one place. From
          groceries to electronics, it’s the smart, affordable way to grow your
          business. Just simple tools for smarter selling.
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
}

export default Hero;
