import { CTA } from "@/components/Page/Public/Index/CTA";
import { FAQ } from "@/components/Page/Public/Index/FAQ";
import { Hero } from "@/components/Page/Public/Index/Hero";
import { Instructions } from "@/components/Page/Public/Index/Instructions";
import { Pricing } from "@/components/Page/Public/Index/Pricing";
import { Service } from "@/components/Page/Public/Index/Service";
import { Testimonials } from "@/components/Page/Public/Index/Testimonials";
import { Value } from "@/components/Page/Public/Index/Value";
import { UserTypeModal } from "@/components/ui/UserTypeModal";
import { useEffect, useState } from "react";

export default function Home(): JSX.Element {
  const [showUserTypeModal, setShowUserTypeModal] = useState(false);

  useEffect(() => {
    // Show modal after a short delay when component mounts
    const timer = setTimeout(() => {
      setShowUserTypeModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

      <UserTypeModal
        isOpen={showUserTypeModal}
        onClose={() => setShowUserTypeModal(false)}
      />
    </div>
  );
}
