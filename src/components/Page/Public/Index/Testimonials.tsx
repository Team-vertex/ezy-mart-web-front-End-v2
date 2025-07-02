import {
  IconBuilding,
  IconChevronLeft,
  IconChevronRight,
  IconQuote,
  IconStar,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // MARK: Refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const testimonialsRef = useRef(null);
  const statsRef = useRef(null);

  // MARK: In view states
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.3,
  });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });

  const testimonials = [
    {
      id: 1,
      name: "Kasun Perera",
      position: "Owner",
      company: "Perera Electronics",
      location: "Colombo",
      image: "/stock/test.png",
      rating: 5,
      testimonial:
        "EzyMart has completely transformed how we manage our electronics store. The inventory tracking is fantastic, and our sales have increased by 40% since implementation. The support team is always helpful!",
      businessType: "Electronics Store",
      yearsUsing: "2+ years",
    },
    {
      id: 2,
      name: "Saman Silva",
      position: "Manager",
      company: "Silva Supermarket",
      location: "Kandy",
      image: "/stock/test.png",
      rating: 5,
      testimonial:
        "We switched from manual billing to EzyMart 18 months ago. The difference is incredible! Faster checkout, better inventory control, and detailed reports help us make smart business decisions.",
      businessType: "Supermarket",
      yearsUsing: "1.5+ years",
    },
    {
      id: 3,
      name: "Priya Fernando",
      position: "Owner",
      company: "Fernando Fashion",
      location: "Galle",
      image: "/stock/test.png",
      rating: 5,
      testimonial:
        "As a fashion boutique, we needed something that could handle different sizes, colors, and seasonal inventory. EzyMart does it all! Customer loyalty features have also boosted repeat sales.",
      businessType: "Fashion Boutique",
      yearsUsing: "3+ years",
    },
    {
      id: 4,
      name: "Ajith Wickramasinghe",
      position: "Owner",
      company: "Wickrama Hardware",
      location: "Matara",
      image: "/stock/test.png",
      rating: 5,
      testimonial:
        "The barcode scanning feature saves us hours every day. Stock management is so much easier now, and the sales reports help us understand which products are moving fast.",
      businessType: "Hardware Store",
      yearsUsing: "2+ years",
    },
    {
      id: 5,
      name: "Nimal Rathnayake",
      position: "Manager",
      company: "Green Leaf Pharmacy",
      location: "Negombo",
      image: "/stock/test.png",
      rating: 5,
      testimonial:
        "For a pharmacy, accuracy is everything. EzyMart's batch tracking and expiry date management features ensure we never sell expired medicines. It's been a game-changer for our business.",
      businessType: "Pharmacy",
      yearsUsing: "1+ year",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Happy Businesses",
      icon: IconBuilding,
      description: "Across Sri Lanka",
    },
    {
      number: "98%",
      label: "Customer Satisfaction",
      icon: IconUsers,
      description: "Based on reviews",
    },
    {
      number: "45%",
      label: "Average Sales Increase",
      icon: IconTrendingUp,
      description: "Within 6 months",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <IconStar
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/50 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="px-4 py-2 bg-[#0A65FC]/10 text-[#0A65FC] rounded-full text-sm font-semibold tracking-wide uppercase border border-[#0A65FC]/30">
              Customer Stories
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Loved by Businesses{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-600">
              Across Sri Lanka
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how EzyMart POS has helped hundreds of Sri Lankan businesses
            streamline operations and boost their sales.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#0A65FC]/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="inline-flex p-4 bg-[#0A65FC]/10 rounded-2xl mb-6">
                  <stat.icon className="w-8 h-8 text-[#0A65FC]" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-[#0A65FC] mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          ref={testimonialsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={
            isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Testimonial Content */}
                      <div>
                        <div className="flex items-center mb-6">
                          <IconQuote className="w-12 h-12 text-[#0A65FC] mr-4" />
                          <div className="flex">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>

                        <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8">
                          "{testimonial.testimonial}"
                        </blockquote>

                        <div className="flex items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover mr-6 border-2 border-[#0A65FC]/20"
                          />
                          <div>
                            <div className="text-xl font-bold text-gray-900">
                              {testimonial.name}
                            </div>
                            <div className="text-[#0A65FC]">
                              {testimonial.position}, {testimonial.company}
                            </div>
                            <div className="text-gray-600 text-sm">
                              {testimonial.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Business Info */}
                      <div className="space-y-6">
                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            Business Details
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Type:</span>
                              <span className="text-[#0A65FC] font-semibold">
                                {testimonial.businessType}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                Using EzyMart:
                              </span>
                              <span className="text-green-600 font-semibold">
                                {testimonial.yearsUsing}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Location:</span>
                              <span className="text-[#0A65FC] font-semibold">
                                {testimonial.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <button className="px-6 py-3 bg-gradient-to-r from-[#0A65FC] to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                            Read Full Case Study
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-12">
              <button
                onClick={prevSlide}
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full border border-gray-200 hover:border-[#0A65FC] transition-all duration-300"
              >
                <IconChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              {/* Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-[#0A65FC] w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full border border-gray-200 hover:border-[#0A65FC] transition-all duration-300"
              >
                <IconChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Join These Success Stories
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              Ready to transform your business like these amazing entrepreneurs?
              Start your journey with EzyMart today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#0A65FC] rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-blue-500/20 text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-blue-500/30 transition-all duration-300 transform hover:scale-105">
                View All Stories
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
