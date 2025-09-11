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
  // Check if the modal has already been shown
  const alreadyShown = localStorage.getItem("userTypeModalShown");

  if (alreadyShown) {
    // If it has, set the state to false to hide the modal
    setShowUserTypeModal(true);
  } else {
    // If it hasn't, set the state to true to show the modal
    setShowUserTypeModal(false);
    // Mark the modal as shown in localStorage
    localStorage.setItem("userTypeModalShown", "true");
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
