import { Contact } from "@/components/Page/Public/Index/Contact";
import { FAQ } from "@/components/Page/Public/Index/FAQ";
import { Hero } from "@/components/Page/Public/Index/Hero";
import { Instructions } from "@/components/Page/Public/Index/Instructions";
import { Service } from "@/components/Page/Public/Index/Service";
import { Value } from "@/components/Page/Public/Index/Value";

export default function Home(): JSX.Element {
  // MARK: Render
  return (
    <div className="bg-white">
      <Hero />
      <Service />
      <Value />
      <Instructions />
      <FAQ />
      <Contact />
    </div>
  );
}
