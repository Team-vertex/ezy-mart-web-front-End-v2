import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, imageSrc }) => {
  return (
    <div className="flex flex-col items-center p-10 text-center transition-transform duration-300 shadow-xl bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl h-[32rem] w-[24rem] hover:scale-105">
      <div className="w-56 h-56 mb-8 overflow-hidden bg-white rounded-full shadow-md">
        <img
          src={imageSrc}
          alt={`${name} profile`}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="mb-3 text-3xl font-bold text-gray-800">{name}</h3>
      <p className="text-xl font-medium text-gray-600">{position}</p>
    </div>
  );
};

const CarouselIndicators: React.FC<{
  count: number;
  activeIndex: number;
  onClick: (index: number) => void;
}> = ({ count, activeIndex, onClick }) => {
  return (
    <div className="flex justify-center gap-2 mt-10">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === activeIndex
              ? 'bg-blue-600 scale-110'
              : 'bg-gray-400 hover:bg-gray-500'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export function TeamSection() {
  const teamMembers = [
    {
      name: 'Bamindu Jayakodi',
      position: 'CEO EzyMart',
      imageSrc:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Thamoddya Rashmitha',
      position: 'CTO EzyMart',
      imageSrc:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Pasindu ',
      position: 'Design Lead',
      imageSrc:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Shehan Hansaka',
      position: 'Marketing Director',
      imageSrc:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Rishika Mandakini',
      position: 'Design Lead',
      imageSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Sasindu Deshan',
      position: 'Product Manager',
      imageSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
    
  ];

  const ROTATION_INTERVAL = 5000;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovered) {
      startAutoRotation();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, teamMembers.length]);

  const startAutoRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    }, ROTATION_INTERVAL);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  const getVisibleCards = () => {
    const cards = [];
    const prevIndex = (activeIndex - 1 + teamMembers.length) % teamMembers.length;
    const nextIndex = (activeIndex + 1) % teamMembers.length;

    cards.push({
      member: teamMembers[prevIndex],
      opacity: 0.4,
      scale: 0.8,
      zIndex: 1,
    });

    cards.push({
      member: teamMembers[activeIndex],
      opacity: 1,
      scale: 1,
      zIndex: 3,
    });

    cards.push({
      member: teamMembers[nextIndex],
      opacity: 0.4,
      scale: 0.8,
      zIndex: 1,
    });

    return cards;
  };

  return (
    <div className="min-h-screen px-4 py-20 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-6 text-5xl font-bold text-center text-black font-poppins">
          Meet the <span className="font-bold text-blue-600 ">Minds Behind</span> <br /> EzyMart
        </h2>

        <div
          className="relative mt-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute z-10 p-3 transition-all duration-300 -translate-y-1/2 rounded-full shadow-lg left-4 top-1/2 bg-white/90 hover:bg-white hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="text-blue-600 w-7 h-7" />
          </button>

          <button
            onClick={goToNext}
            className="absolute z-10 p-3 transition-all duration-300 -translate-y-1/2 rounded-full shadow-lg right-4 top-1/2 bg-white/90 hover:bg-white hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="text-blue-600 w-7 h-7" />
          </button>

          {/* Carousel Container */}
          <div className="flex items-center justify-center px-6 space-x-4 md:px-20 md:space-x-12">
            {getVisibleCards().map((card, index) => (
              <div
                key={`${card.member.name}-${index}`}
                className="transition-all duration-500 ease-in-out"
                style={{
                  opacity: card.opacity,
                  transform: `scale(${card.scale})`,
                  zIndex: card.zIndex,
                }}
              >
                <TeamMember
                  name={card.member.name}
                  position={card.member.position}
                  imageSrc={card.member.imageSrc}
                />
              </div>
            ))}
          </div>

          <CarouselIndicators
            count={teamMembers.length}
            activeIndex={activeIndex}
            onClick={goToIndex}
          />
        </div>
      </div>
    </div>
  );
}
