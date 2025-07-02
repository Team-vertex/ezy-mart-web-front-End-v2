import { Contact } from "@/components/Page/Public/Index/Contact";
import { FAQ } from "@/components/Page/Public/Index/FAQ";
import { Pricing } from "@/components/Page/Public/Index/Pricing";
import { GetStarted } from "@/components/Page/Public/Service/Business/GetStarted";
import Hero from "@/components/Page/Public/Service/Business/Hero";
import { Video } from "@/components/Page/Public/Service/Business/Video";
import { WhyPos } from "@/components/Page/Public/Service/Business/WhyPos";

export default function Business(): JSX.Element {
  return (
    <div className="bg-white">
      <Hero />
      <Video />
      <WhyPos />
      <GetStarted />
      <Pricing />
      <FAQ />
      <Contact />
    </div>
  );
}
