import React from "react";

const Dot = ({ active = false }: { active?: boolean }) => (
  <div
    className={`flex shrink-0 self-stretch my-auto rounded-full ${active ? 'bg-zinc-300 fill-zinc-300' : 'bg-neutral-500 fill-neutral-500'} h-[11px] w-[11px]`}
  />
);

const AppShowcase = () => {
  return (
    <section className="flex z-10 flex-col mt-0 max-w-full w-[892px] max-md:mt-0">
      <div className="flex flex-wrap gap-3.5 items-end w-full max-md:max-w-full">
        <div className="flex grow shrink "> 
          <img
          src="/public/images/CoustomerService/Frame 390.svg"
          alt="Background"
          className=""
        />
        </div>
        <div className="flex grow shrink ">
             <img
          src="/public/images/CoustomerService/Frame 388.svg"
          alt="Background"
          className=""
        />
        </div>
        <div className="flex grow shrink ">
          <img
          src="/public/images/CoustomerService/Frame 390.svg"
          alt="Background"
          className=""
        />
        </div>
      </div>
      <div className="flex items-center self-center gap-1 mt-10">
        <Dot />
        <Dot />
        <Dot active />
        <Dot />
        <Dot />
      </div>
    </section>
  );
};

export default AppShowcase;
