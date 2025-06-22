import { FeaturesSection } from "@/components/Page/Public/AboutUs/FeaturesSection";
import { HeroSection } from "@/components/Page/Public/AboutUs/HeroSection";
import { RoadmapSection } from "@/components/Page/Public/AboutUs/RoadmapSection";
import { StorySection } from "@/components/Page/Public/AboutUs/StorySection";
import { TeamSection } from "@/components/Page/Public/AboutUs/TeamSection";
import { VisionMissionSection } from "@/components/Page/Public/AboutUs/VisionMissionSection";
import { Contact } from "@/components/Page/Public/Index/Contact";

export default function Index(): JSX.Element {
  return (
    <main>
      <HeroSection />

      <div className="flex flex-col relative w-full pl-20 pr-9 pt-3.5 pb-[71px] max-md:max-w-full max-md:px-5 h-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/048e14f207294d2d81c31c8ac35554bd/d865bb966ab84493295bde7c76b2092a801fd1b9?placeholderIfAbsent=true"
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <img
          src="/images/Public/aboutUsOne.png"
          alt="Hero image"
          className="hidden sm:block aspect-[1.23] absolute right-4 md:right-8 lg:right-24
      -translate-y-1/2 md:w-[250px] lg:w-[375px] rounded-[20px] lg:-mt-[50px] lg:ml-[1000px] object-contain w-[375px] max-w-full "
        />
        <FeaturesSection />
        <VisionMissionSection />
        <StorySection />
        <RoadmapSection />
        <TeamSection />
      </div>
      <Contact />
    </main>
  );
}
