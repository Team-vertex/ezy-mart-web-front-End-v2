// import { scrollToSection } from "@/utils/scrollUtils";
// import { motion } from "framer-motion";
// import { FormattedMessage } from "react-intl";

import React,{ useState, useEffect } from 'react';
import { Clock, Sparkles,  } from 'lucide-react';

export default function HeroSection() {
  // Navigation handlers
  // const handleGetStarted = () => {
  //   // Scroll to guidance section first
  //   scrollToSection('guidance-section');
  //   // Or navigate to demo if user wants to try the system
  //   // navigate(routes.demo);
  // };

  // const handleKeyDown = (event: React.KeyboardEvent) => {
  //   if (event.key === 'Enter' || event.key === ' ') {
  //     event.preventDefault();
  //     handleGetStarted();
  //   }
  // };

  // return (
    // <section className="overflow-hidden bg-gradient-to-br from-[#0A65FC] to-blue-700 relative">
    //   {/* Decorative circles */}
    //   <div className="absolute top-0 left-0 w-64 h-64 -translate-x-32 -translate-y-32 rounded-full bg-white/10 animate-pulse"></div>
    //   <div className="absolute right-0 w-48 h-48 translate-x-24 -translate-y-12 rounded-full top-20 bg-white/10 animate-pulse animation-delay-1000"></div>
    //   <div className="absolute bottom-0 w-32 h-32 translate-y-16 rounded-full right-20 bg-white/10 animate-pulse animation-delay-2000"></div>

    //   {/* Dotted pattern */}
    //   <div className="absolute w-24 h-24 bottom-20 right-32 opacity-20">
    //     <div className="grid grid-cols-6 gap-2">
    //       {[...Array(36)].map((_, i) => (
    //         <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
    //       ))}
    //     </div>
    //   </div>

    //   <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 sm:px-8 sm:py-20 md:px-20 md:py-28 lg:px-32 lg:py-[120px]">
    //     <div className="flex w-full max-w-[800px] flex-col items-center text-center">
    //       <motion.div
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         className="px-4 py-2 mb-6 text-sm font-semibold tracking-wide text-white uppercase border rounded-full bg-white/20 backdrop-blur-sm border-white/30"
    //       >
    //         <FormattedMessage id="instructions.hero.badge" />
    //       </motion.div>

    //       <motion.h1
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, delay: 0.2 }}
    //         className="mb-6 text-3xl font-bold leading-tight text-white sm:text-5xl md:text-4xl lg:text-6xl"
    //       >
    //         <FormattedMessage id="instructions.hero.title" />
    //       </motion.h1>

    //       <motion.p
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, delay: 0.4 }}
    //         className="text-white/90 text-lg lg:text-xl font-medium leading-relaxed mb-8 max-w-[600px]"
    //       >
    //         <FormattedMessage id="instructions.hero.subtitle" />
    //       </motion.p>

    //       <motion.button
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, delay: 0.6 }}
    //         whileHover={{ scale: 1.05 }}
    //         whileTap={{ scale: 0.95 }}
    //         onClick={handleGetStarted}
    //         onKeyDown={handleKeyDown}
    //         className="text-[#0A65FC] hover:bg-blue-50 bg-white px-8 sm:px-12 md:px-[50px] py-3 sm:py-4 rounded-full font-bold text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50"
    //         aria-label="Get started with instructions"
    //       >
    //         <FormattedMessage id="instructions.hero.button" />
    //       </motion.button>
    //     </div>
    //   </div>
    // </section>
  

// coomnig soong page
 const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
 useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };
   return (
    <div className="relative min-h-screen mb-10 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute bg-purple-500 rounded-full top-20 left-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bg-blue-500 rounded-full top-40 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bg-indigo-500 rounded-full -bottom-32 left-1/2 w-72 h-72 mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Sparkles className="text-white opacity-30" size={12 + Math.random() * 8} />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Logo/Icon */}
        <div className="mb-8 transition-transform duration-300 transform hover:scale-110">
          <div className="flex items-center justify-center w-20 h-20 shadow-2xl bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl animate-pulse">
            <Clock className="text-white" size={40} />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="mb-6 text-6xl font-bold tracking-tight text-white md:text-8xl">
          <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text animate-pulse">
            Comming
          </span>
          <br />
          <span className="text-white">Soon</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mb-12 text-xl leading-relaxed text-gray-300 md:text-2xl">
          This, Page will update soon. Thank you for your patient.
        </p>

        {/* Countdown Timer */}
        {/* <div className="grid grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <div key={index} className="p-4 transition-all duration-300 transform bg-white border border-white bg-opacity-10 backdrop-blur-lg rounded-2xl md:p-6 border-opacity-20 hover:bg-opacity-20 hover:scale-105">
              <div className="mb-2 text-3xl font-bold text-white md:text-4xl">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm tracking-wide text-gray-300 uppercase md:text-base">
                {item.label}
              </div>
            </div>
          ))}
        </div> */}

        
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>
    </div>
  );
};


