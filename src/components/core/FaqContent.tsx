import { FAQItem } from "@/interface/core";
import { IconChevronDown } from "@tabler/icons-react";
import React, { useRef, useState } from "react";

interface FaqContentProps {
  faqList: FAQItem[];
}

const FaqContent: React.FC<FaqContentProps> = ({ faqList }) => {
  const [basicAccordion, setBasicAccordion] = useState<number | null>(null);

  // Reference to store accordion content heights
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Toggle the accordion by index
  const handleBasicAccordion = (index: number) => () => {
    setBasicAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div data-fc-type="accordion" className="mt-8 w-full lg:w-full">
      {faqList.map((item, idx) => (
        <div
          key={idx}
          className={`bg-[#E6EFFF] rounded-lg mt-4 py-2 w-full transition-all duration-300 ${
            basicAccordion === idx
              ? "border-[#0A65FC] border-2"
              : "border border-transparent"
          }`}
        >
          <button
            onClick={handleBasicAccordion(idx)}
            className="inline-flex p-5 items-center justify-between w-full font-semibold text-left transition hover:text-[#0A65FC]"
            data-fc-type="collapse"
            aria-expanded={basicAccordion === idx}
            aria-controls={`faq-content-${idx}`}
          >
            <span className="pr-4">{item.title}</span>
            <span
              className={`flex items-center justify-center min-w-8 min-h-8 rounded-full transition-all duration-300 ${
                basicAccordion === idx
                  ? "bg-[#0A65FC]"
                  : "bg-white border border-[#0A65FC]"
              }`}
            >
              <IconChevronDown
                className={`transition-transform duration-300 ${
                  basicAccordion === idx ? "rotate-180" : ""
                }`}
                size={18}
                stroke={2}
                color={basicAccordion === idx ? "#ffffff" : "#0A65FC"}
              />
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              basicAccordion === idx ? "max-h-96" : "max-h-0"
            }`}
            id={`faq-content-${idx}`}
            ref={(el) => (contentRefs.current[idx] = el)}
          >
            <div className="px-5 pb-5 pt-2">
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqContent;
