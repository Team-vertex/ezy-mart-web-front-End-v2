import { Contact } from "@/components/Page/Public/Index/Contact";
import { FAQ } from "@/components/Page/Public/Index/FAQ";
import GuidanceRoadmapSection from "@/components/Page/Public/Instructions/GuidanceRoadmapSection";
import GuidanceSection from "@/components/Page/Public/Instructions/GuidanceSection";
import HeroSection from "@/components/Page/Public/Instructions/HeroSection";

function Instructions() {
  return (
    <div className="bg-white">
      <HeroSection />
      <GuidanceSection />
      <GuidanceRoadmapSection />
      <FAQ />
      <Contact />
    </div>
  );
}

export default Instructions;
