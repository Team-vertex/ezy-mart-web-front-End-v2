import { Hero } from "@/components/Page/Public/Index/Hero";
import { Service } from "@/components/Page/Public/Index/Service";

export default function Home() {
  // MARK: Render
  return (
    <div className="bg-white">
      <Hero />
      <Service />
    </div>
  );
}
