import { FeaturesSection } from "@/components/Page/Public/AboutUs/FeaturesSection";
import { HeroSection } from "@/components/Page/Public/AboutUs/HeroSection";
import { RoadmapSection } from "@/components/Page/Public/AboutUs/RoadmapSection";
import { StorySection } from "@/components/Page/Public/AboutUs/StorySection";
import { TeamSection } from "@/components/Page/Public/AboutUs/TeamSection";
import { VisionMissionSection } from "@/components/Page/Public/AboutUs/VisionMissionSection";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
// import { Contact } from "@/components/Page/Public/Index/Contact";

export default function Index(): JSX.Element {
  return (
    <main className="bg-white">
      <HeroSection />
      <FeaturesSection />
      <VisionMissionSection />
      <StorySection />
      <RoadmapSection />
      <TeamSection />
      <BackToTopButton />
      {/* <Contact /> */}
    </main>
  );
}
