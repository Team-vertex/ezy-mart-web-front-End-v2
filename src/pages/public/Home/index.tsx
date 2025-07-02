import { CTA } from "@/components/Page/Public/Index/CTA";
import { FAQ } from "@/components/Page/Public/Index/FAQ";
import { Hero } from "@/components/Page/Public/Index/Hero";
import { Instructions } from "@/components/Page/Public/Index/Instructions";
import { Pricing } from "@/components/Page/Public/Index/Pricing";
import { Service } from "@/components/Page/Public/Index/Service";
import { Testimonials } from "@/components/Page/Public/Index/Testimonials";
import { Value } from "@/components/Page/Public/Index/Value";

export default function Home(): JSX.Element {
  // MARK: Render
  return (
    <div className="bg-white overflow-hidden">
      <Hero />
      <Service />
      <Value />
      <Instructions />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      {/* <Contact /> */}
    </div>
  );
}
