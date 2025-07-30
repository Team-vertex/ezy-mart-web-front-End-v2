import DemoFeatures from "@/components/Page/Public/Demo/DemoFeatures";
import DemoHero from "@/components/Page/Public/Demo/DemoHero";
import POSInterface from "@/components/Page/Public/Demo/POSInterface";
// import TryItYourself from "@/components/Page/Public/Demo/TryItYourself";
// import { Contact } from "@/components/Page/Public/Index/Contact";

function Demo() {
  return (
    <div className="bg-white">
      <DemoHero />
      <POSInterface />
      <DemoFeatures />
      {/* <TryItYourself /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default Demo;
