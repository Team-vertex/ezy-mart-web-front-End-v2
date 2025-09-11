import { FAQ } from "@/components/Page/Public/Index/FAQ";
import { Hero } from "@/components/Page/Public/Index/Hero";
import { Instructions } from "@/components/Page/Public/Index/Instructions";
import { Pricing } from "@/components/Page/Public/Index/Pricing";
import { Service } from "@/components/Page/Public/Index/Service";
import { Value } from "@/components/Page/Public/Index/Value";
import { UserTypeModal } from "@/components/ui/UserTypeModal";
import { useEffect, useState } from "react";

export default function Home(): JSX.Element {
const [showUserTypeModal, setShowUserTypeModal] = useState(false);

useEffect(() => {

    const modelSkip=localStorage.getItem("modelSkip")??"0"
    if(modelSkip==="0")
    {
        setShowUserTypeModal(true);
        localStorage.setItem("modelSkip", '1')
    }

}, []);
  // MARK: Render
  return (
    <div className="overflow-hidden bg-white">
      <Hero />
      <Service />
      <Value />
      <Instructions />
      <Pricing />
      {/* <Testimonials /> */}
      <FAQ />
      {/* <CTA /> */}
      {/* <Contact /> */}

      <UserTypeModal
        isOpen={showUserTypeModal}
        onClose={() => setShowUserTypeModal(false)}
      />
    </div>
  );
}
