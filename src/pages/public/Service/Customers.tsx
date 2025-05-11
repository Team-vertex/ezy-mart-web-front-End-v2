import AppShowcase from "@/components/Page/Public/Service/Customers/Appshowcase";
import HeroSection from "@/components/Page/Public/Service/Customers/HeroSection";

export default function Customers(): JSX.Element {
  return (
    <div className="bg-white">
      <HeroSection />
      <AppShowcase />
      {/* {/* <div className="absolute mt-[500px]">
        <AppShowcase />
      </div> 
      <div className=" mt-[200px]">
        <WhyUseSection />
      </div>
      <HowItWorksSection />
      <BenefitsSection />
      <div></div>
      <FaqSection /> */}
    </div>
  );
}
