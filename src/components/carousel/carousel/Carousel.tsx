import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselProps } from './types';

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showDots = true,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayTimeoutRef = useRef<number | null>(null);

  const mouseStartX = useRef(0);
  const mouseEndX = useRef(0);
  const isDragging = useRef(false);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [totalSlides, isAnimating]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [totalSlides, isAnimating]);

  const goToSlide = useCallback((index: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;
    if (Math.abs(touchDiff) > 50) {
      touchDiff > 0 ? nextSlide() : prevSlide();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      mouseEndX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    const diff = mouseStartX.current - mouseEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    if (autoPlay) {
      setIsAutoPlaying(true);
    }
  };

  const setupAutoPlay = useCallback(() => {
    if (isAutoPlaying) {
      autoPlayTimeoutRef.current = window.setTimeout(() => {
        nextSlide();
      }, autoPlayInterval);
    }
  }, [isAutoPlaying, autoPlayInterval, nextSlide]);

  const handleMouseEnter = () => {
    if (autoPlay) {
      setIsAutoPlaying(false);
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
        autoPlayTimeoutRef.current = null;
      }
    }
  };

  useEffect(() => {
    setupAutoPlay();
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying, setupAutoPlay]);

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      // onMouseLeave={handleMouseLeave}
      style={{ cursor: isDragging.current ? 'grabbing' : 'grab' }}
    >
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-out ${
              index === currentIndex
                ? 'opacity-100 scale-100 z-20'
                : index === (currentIndex + 1) % totalSlides
                ? 'opacity-60 scale-90 translate-x-[30%] z-10'
                : index === (currentIndex - 1 + totalSlides) % totalSlides
                ? 'opacity-60 scale-90 -translate-x-[30%] z-10'
                : 'opacity-0 scale-75 z-0'
            }`}
          >
            {slide}
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button
            onClick={prevSlide}
            className="absolute hidden left-1 md:left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 md:p-1.5 shadow-md z-30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-3 h-3 md:h-4 md:w-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute hidden right-1 md:right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 md:p-1.5 shadow-md z-30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Next slide"
          >
            <ChevronRight className="w-3 h-3 md:h-4 md:w-4" />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute z-30 hidden gap-2 transform -translate-x-1/2 md:flex bottom-2 left-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
