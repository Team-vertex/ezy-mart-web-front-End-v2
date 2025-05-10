import { IconArrowRight, IconCircleArrowRight } from "@tabler/icons-react";
import React from "react";

export const Contact: React.FC = () => {
  return (
    <section className="bg-[#E6EFFF] py-12 lg:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-row justify-start items-center">
            <p className="text-center text-xs lg:text-lg font-normal text-[#0A1A33]">
              HEARD
              <br />
              ENOUGH ?
            </p>
            <IconArrowRight
              className="text-[#0A1A33] mx-2"
              size={18}
              color="#0A1A33"
            />
          </div>
          <div className="flex flex-row justify-center items-center">
            <p className="text-center text-sm lg:text-4xl font-bold text-[#0A1A33]">
              CONTACT US
            </p>
          </div>
          <div className="flex flex-row justify-end items-center">
            <IconCircleArrowRight
              className="text-[#0A1A33]"
              stroke={1}
              size={"40"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
