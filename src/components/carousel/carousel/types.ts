import { ReactNode } from 'react';

export interface CarouselProps {
  slides: ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  showDots?: boolean;
  className?: string;
}