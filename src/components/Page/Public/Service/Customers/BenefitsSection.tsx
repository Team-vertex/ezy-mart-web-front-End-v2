import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";

interface BenefitCardProps {
  imageSrc: string;
  title: string;
  description: string;
  index: number;
}

const BenefitCard = ({
  imageSrc,
  title,
  description,
  index,
}: BenefitCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative p-8 overflow-hidden transition-all duration-300 bg-white border border-blue-100 shadow-xl rounded-3xl hover:shadow-2xl hover:scale-105 group"
    >
      {/* Icon Container */}
      <div className="flex justify-center mb-6">
        <div className="p-4 transition-colors duration-300 bg-blue-50 rounded-2xl group-hover:bg-blue-100">
          <img
            src={imageSrc}
            alt={title}
            className="object-contain w-16 h-16"
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="mb-4 text-2xl font-bold text-gray-900">{title}</h3>
        <p className="leading-relaxed text-gray-600">{description}</p>
      </div>

      {/* Hover effect gradient */}
      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none bg-gradient-to-br from-transparent to-blue-50/20 rounded-3xl group-hover:opacity-100"></div>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const intl = useIntl();

  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.3 });

  const benefits = [
    {
      imageSrc: "/images/CoustomerService/search(1).svg",
      title: intl.formatMessage({ id: "customers.benefits.feature1.title" }),
      description: intl.formatMessage({
        id: "customers.benefits.feature1.description",
      }),
    },
    {
      imageSrc: "/images/CoustomerService/browsing.svg",
      title: intl.formatMessage({ id: "customers.benefits.feature2.title" }),
      description: intl.formatMessage({
        id: "customers.benefits.feature2.description",
      }),
    },

    {
      imageSrc: "/images/CoustomerService/on-time.svg",
      title: intl.formatMessage({ id: "customers.benefits.feature4.title" }),
      description: intl.formatMessage({
        id: "customers.benefits.feature4.description",
      }),
    },
    {
      imageSrc: "/images/CoustomerService/happy-face.svg",
      title: intl.formatMessage({ id: "customers.benefits.feature5.title" }),
      description: intl.formatMessage({
        id: "customers.benefits.feature5.description",
      }),
    },
  ];

  return (
    <section
      ref={sectionRef}
      data-section="benefits"
      className="relative py-20 overflow-hidden lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 bg-blue-100 rounded-full left-1/4 w-96 h-96 mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 bg-blue-200 rounded-full right-1/4 w-96 h-96 mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>
      

      <div className="container relative z-10 px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="px-4 py-2 text-sm font-semibold tracking-wide text-blue-700 uppercase bg-blue-100 rounded-full">
              <FormattedMessage id="customers.benefits.badge" />
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
            <FormattedMessage
              id="customers.benefits.title"
              values={{
                highlight: (chunks) => (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-600">
                    {chunks}
                  </span>
                ),
              }}
            />
          </h2>

          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            <FormattedMessage id="customers.benefits.description" />
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              imageSrc={benefit.imageSrc}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* CSS for animation delays */}
      <style>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default BenefitsSection;
