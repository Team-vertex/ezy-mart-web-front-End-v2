import { motion } from "framer-motion";

interface BenefitCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const BenefitCard = ({ imageSrc, title, description }: BenefitCardProps) => (
  <motion.div
    className="flex flex-col grow shrink self-stretch my-auto min-w-60 w-[266px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.9 }}
  >
    <img
      src={imageSrc}
      alt={title}
      className="object-contain self-center aspect-[1.01] w-[98px]"
    />
    <div className="flex flex-col mt-3.5 w-full">
      <h3 className="text-2xl font-bold leading-9 text-slate-900">{title}</h3>
      <p className="self-center mt-2.5 text-sm leading-5 text-black">
        {description}
      </p>
    </div>
  </motion.div>
);

const BenefitsSection = () => {
  // Animation variants for the section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col mt-48 w-full text-center max-w-[1228px] sm:mt-10 sm:max-w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col w-full sm:max-w-full"
        variants={itemVariants}
      >
        <h2 className="text-xl font-bold lg:text-6xl text-slate-900">
          Make <span style={{ color: "rgba(10,101,252,1)" }}>Life Easier</span> with EzyMart
        </h2>
        <p className="self-center mt-6 leading-5 text-xs lg:text-2xl text-black w-[717px] sm:max-w-full">
          Shopping doesn't have to be stressful. With EzyMart, you can find what
          you need, when you need it, all while saving time, energy, and money.
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col self-center w-full mt-20 sm:mt-10 sm:max-w-full"
        variants={itemVariants}
      >
        <div className="flex flex-wrap items-center w-full gap-10 sm:max-w-full">
          <BenefitCard
            imageSrc="/public/images/CoustomerService/search(1).svg"
            title="Find Nearby Stores Instantly"
            description="Quickly discover the closest stores around you with real-time location tracking no more wandering or guessing."
          />
          <BenefitCard
            imageSrc="/public/images/CoustomerService/browsing.svg"
            title="Search Products with Ease"
            description="Easily search and filter products by name, brand, or category to find exactly what you need in seconds."
          />
          <BenefitCard
            imageSrc="/public/images/CoustomerService/brain.svg"
            title="Compare Options in One Place"
            description="View prices, offers, and product availability from multiple stores so you can make the smartest choice every time."
          />
        </div>
        <div className="flex flex-wrap items-start self-center gap-10 mt-14 sm:mt-10 sm:max-w-full">
          <motion.div
            className="flex flex-col min-w-60 w-[332px] sm:w-[280px] md:w-[320px] lg:w-[350px] xl:w-[400px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/public/images/CoustomerService/on-time.svg"
              alt="Save Time & Money"
              className="object-contain self-center aspect-[1.01] w-[98px]"
            />
            <div className="flex flex-col w-full mt-4">
              <h3 className="text-2xl font-bold text-slate-900">Save Time & Money</h3>
              <p className="self-center mt-2.5 text-sm leading-5 text-black">
                Plan your shopping efficiently with detailed store information, reducing unnecessary trips and long waits.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col min-w-60 w-[332px] sm:w-[280px] md:w-[320px] lg:w-[350px] xl:w-[400px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/public/images/CoustomerService/happy-face.svg"
              alt="Stress Free Shopping Experience"
              className="object-contain self-center aspect-square w-[97px]"
            />
            <div className="flex flex-col w-full mt-4">
              <h3 className="text-2xl font-bold leading-9 text-slate-900">Stress Free Shopping Experience</h3>
              <p className="self-center mt-2.5 text-sm leading-5 text-black">
                Say goodbye to the frustration of endless searching. EzyMart helps you shop confidently and hassle-free, anytime and anywhere.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default BenefitsSection;
