import AppShowcase from "@/components/Page/Public/Service/Customers/Appshowcase";
import HeroSection from "@/components/Page/Public/Service/Customers/HeroSection";
import HowItWorksSection from "@/components/Page/Public/Service/Customers/HowItWorksSection";
import BenefitsSection from "@/components/Page/Public/Service/Customers/BenefitsSection";
import WhyUseSection from "@/components/Page/Public/Service/Customers/WhyUseSection";
import FaqSection from "@/components/Page/Public/Service/Customers/Faqsection";
import { Contact } from "@/components/Page/Public/Index/Contact";


export default function Customers(): JSX.Element {
  return (
    <div className="bg-white">
      <HeroSection />
      <AppShowcase />
      <WhyUseSection />
      <HowItWorksSection />
      <BenefitsSection />
      <FaqSection />
      <Contact/>
    
    </div>
  );
}
