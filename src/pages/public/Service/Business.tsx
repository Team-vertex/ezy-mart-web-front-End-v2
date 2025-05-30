import { Contact } from "@/components/Page/Public/Index/Contact";
import { FAQ } from "@/components/Page/Public/Index/FAQ";
import { GetStarted } from "@/components/Page/Public/Service/Business/GetStarted";
import Hero from "@/components/Page/Public/Service/Business/Hero";
import PricingSection from "@/components/Page/Public/Service/Business/PricingSection";
import SimplePricing from "@/components/Page/Public/Service/Business/SimplePricing";
import { Video } from "@/components/Page/Public/Service/Business/Video";
import { WhyPos } from "@/components/Page/Public/Service/Business/WhyPos";

export default function Business(): JSX.Element {
  return (
    <div className="bg-white">
      <Hero />
      <Video />
      <WhyPos />
      <GetStarted />
      <SimplePricing />
      <PricingSection />
      <FAQ />
      <Contact />
    </div>
  );
}
