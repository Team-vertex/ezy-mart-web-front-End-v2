import {
  IconChevronLeft,
  IconChevronRight,
  IconPlayerPause,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface SlideImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  badge: string;
}

interface ModernCarouselProps {
  images: SlideImage[];
  autoplay?: boolean;
  autoplayDelay?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
}

export const ModernCarousel: React.FC<ModernCarouselProps> = ({
  images,
  autoplay = true,
  autoplayDelay = 4000,
  showControls = true,
  showIndicators = true,
  className = "",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying && autoplay) {
      intervalRef.current = setInterval(nextSlide, autoplayDelay);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, autoplay, autoplayDelay]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Main Carousel Container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextSlide();
              } else if (swipe > swipeConfidenceThreshold) {
                prevSlide();
              }
            }}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          >
            <div className="relative w-full h-full group">
              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={images[currentSlide].src}
                  alt={images[currentSlide].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Content Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white"
                >
                  {/* Badge */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="inline-block px-3 py-1 bg-[#0A65FC]/90 backdrop-blur-sm text-xs font-semibold rounded-full mb-3"
                  >
                    {images[currentSlide].badge}
                  </motion.span>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-xl lg:text-2xl font-bold mb-2 leading-tight"
                  >
                    {images[currentSlide].title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-sm lg:text-base text-white/90 leading-relaxed max-w-md"
                  >
                    {images[currentSlide].description}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        {showControls && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
              aria-label="Previous slide"
            >
              <IconChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform duration-200" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
              aria-label="Next slide"
            >
              <IconChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </>
        )}

        {/* Play/Pause Button */}
        {autoplay && (
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? (
              <IconPlayerPause className="w-5 h-5" />
            ) : (
              <IconPlayerPlay className="w-5 h-5" />
            )}
          </button>
        )}
      </div>

      {/* Indicators */}
      {showIndicators && (
        <div className="flex justify-center space-x-3 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 h-3 bg-[#0A65FC]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-full"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {isPlaying && autoplay && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
          <motion.div
            className="h-full bg-[#0A65FC]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: autoplayDelay / 1000,
              ease: "linear",
              repeat: Infinity,
            }}
            key={currentSlide}
          />
        </div>
      )}
    </div>
  );
};

export default ModernCarousel;
