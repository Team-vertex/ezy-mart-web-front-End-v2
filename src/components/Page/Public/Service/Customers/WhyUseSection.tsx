import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const WhyUseSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 1, transition: { duration: 1.8 } },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUp}
      className="flex flex-col items-center px-4 w-full max-w-[1228px] mx-auto mt-[450px] md:mt-[620px] lg:mt-[300px] xl:mt-[400px] "
    >
      <div className="flex flex-col items-center w-full text-center">
        <h2 className="font-bold text-center text-xl md:text-3xl lg:text-4xl text-slate-900">
          Why Use EzyMart <span className="text-[#0A65FC] mt-11 font-georgia">App?</span>
        </h2>
        <p className="mt-4 md:mt-6 text-xs md:text-sm lg:text-lg text-center leading-5 md:leading-6 text-black max-w-[717px] w-full">
          EzyMart makes shopping across Sri Lanka easier than ever. Find nearby
          shops, discover products fast, and save time all with a few simple
          taps on your phone.
        </p>
      </div>
      <div className="w-full px-4 mt-8 md:mt-11">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/048e14f207294d2d81c31c8ac35554bd/c207cb28-42b4-449d-8734-387f8f493c1f?placeholderIfAbsent=true"
          alt="EzyMart App Features"
          className="object-contain w-full h-auto rounded-lg shadow-md"
          loading="lazy"
        />
      </div>
    </motion.section>
  );
};

export default WhyUseSection;
