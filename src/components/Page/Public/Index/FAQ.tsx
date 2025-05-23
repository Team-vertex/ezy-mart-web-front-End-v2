import FaqContent from "@/components/core/FaqContent";
import { FAQContent } from "@/constants/Data";
import React from "react";

export const FAQ: React.FC = () => {
  return (
    <section className="bg-white py-14 lg:py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-10">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#15366B] mb-4">
              Frequently Asked{" "}
              <span className="text-[#0A65FC] font-bold font-georgia">Questions</span>
            </h2>
          </div>
        </div>
        <FaqContent faqList={FAQContent} />
      </div>
    </section>
  );
};
