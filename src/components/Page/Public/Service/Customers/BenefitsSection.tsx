import { motion } from "framer-motion";

interface BenefitCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const BenefitCard = ({ imageSrc, title, description }: BenefitCardProps) => (
  <motion.div
    className="flex flex-col grow self-stretch w-full sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px] xl:max-w-[400px] mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.9 }}
  >
    <img
      src={imageSrc}
      alt={title}
      className="self-center object-contain w-24 h-24"
    />
    <div className="flex flex-col w-full text-center mt-14">
      <h3 className="text-xl font-bold md:text-2xl text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-black md:text-base">{description}</p>
    </div>
  </motion.div>
);

const BenefitsSection = () => {
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
      className="w-full px-4 py-16 bg-white md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="max-w-5xl mx-auto text-center " variants={itemVariants} >
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-slate-900">
          Make <span className="text-blue-600">Life Easier</span> with EzyMart
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-black sm:text-xl lg:text-xl">
          Shopping doesn't have to be stressful. With EzyMart, you can find what
          you need, when you need it, all while saving time, energy, and money.
        </p>
      </motion.div>

      <motion.div
        className="grid justify-center max-w-6xl grid-cols-1 gap-10 mx-auto mt-16 sm:grid-cols-2 lg:grid-cols-3"
        variants={itemVariants}
      >
        <BenefitCard
          imageSrc="/images/CoustomerService/search(1).svg"
          title="Find Nearby Stores Instantly"
          description="Quickly discover the closest stores around you with real-time location tracking—no more wandering or guessing."
        />
        <BenefitCard
          imageSrc="/images/CoustomerService/browsing.svg"
          title="Search Products with Ease"
          description="Easily search and filter products by name, brand, or category to find exactly what you need in seconds."
        />

        <div className="flex justify-center sm:col-span-2 md:col-span-2 lg:col-span-1">
          <BenefitCard
            imageSrc="/images/CoustomerService/brain.svg"
            title="Compare Options in One Place"
            description="View prices, offers, and product availability from multiple stores so you can make the smartest choice every time."
          />
        </div>


        {/* Wrap the last two cards in a flex container to center them */}
        <div className="flex flex-wrap justify-center gap-10 text-xl sm:col-span-2 lg:col-span-3">
          <BenefitCard
            imageSrc="/public/images/CoustomerService/on-time.svg"
            title="Save Time & Money"
            description="Plan your shopping efficiently with detailed store information, reducing unnecessary trips and long waits."
          />
          <BenefitCard
            imageSrc="/public/images/CoustomerService/happy-face.svg"
            title="Stress Free Shopping Experience"
            description="Say goodbye to the frustration of endless searching. EzyMart helps you shop confidently and hassle-free, anytime and anywhere."
          />
        </div>

      </motion.div>
    </motion.section>
  );
};

export default BenefitsSection;
