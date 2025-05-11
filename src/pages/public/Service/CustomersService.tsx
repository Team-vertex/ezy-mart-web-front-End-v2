
import React from "react";
import HeroSection from "@/components/Page/Public/Service/CoustomerService/HeroSection";
import AppShowcase from "@/components/Page/Public/Service/CoustomerService/Appshowcase";
import WhyUseSection from "@/components/Page/Public/Service/CoustomerService/WhyUseSection";
import HowItWorksSection from "@/components/Page/Public/Service/CoustomerService/HowItWorksSection";
import BenefitsSection from "@/components/Page/Public/Service/CoustomerService/BenefitsSection";
import FaqSection from "@/components/Page/Public/Service/CoustomerService/Faqsection";


export default function CoustomerService(): JSX.Element {
  return (<main className="flex flex-col items-center overflow-hidden bg-white">
    <section className="flex overflow-hidden relative flex-col self-stretch px-20 pt-11 pb-80 w-full min-h-[875px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img
        src="/public/images/CoustomerService/servicemain.svg"
        alt="Background"
        className="absolute inset-0 object-cover size-full"
      />
      <HeroSection />
    </section>
    <div className="absolute mt-[500px]">
      <AppShowcase />
    </div>
    <div className=" mt-[200px]">
      <WhyUseSection />
    </div>
    <HowItWorksSection />
    <BenefitsSection />
    <div>
    </div>
    <FaqSection />
  </main>
  );
}
