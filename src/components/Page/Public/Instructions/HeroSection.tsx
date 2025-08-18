
import { Clock, Sparkles, } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {

  const [, setTimeLeft] = useState({
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


