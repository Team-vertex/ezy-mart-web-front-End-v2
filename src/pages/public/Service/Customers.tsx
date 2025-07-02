import { Contact } from "@/components/Page/Public/Index/Contact";
import { Pricing } from "@/components/Page/Public/Index/Pricing";
import BenefitsSection from "@/components/Page/Public/Service/Customers/BenefitsSection";
import FaqSection from "@/components/Page/Public/Service/Customers/Faqsection";
import HeroSection from "@/components/Page/Public/Service/Customers/HeroSection";
import WhyUseSection from "@/components/Page/Public/Service/Customers/WhyUseSection";

export default function Customers(): JSX.Element {
  return (
    <div className="bg-white">
      <HeroSection />
      <WhyUseSection />
      <BenefitsSection />
      <Pricing />
      <FaqSection />
      <Contact />
    </div>
  );
}
