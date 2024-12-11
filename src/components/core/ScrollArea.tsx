import {
  ScrollArea as MantineScrollArea,
  ScrollAreaProps,
} from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useRef } from 'react';

interface ScrollProps extends ScrollAreaProps {
  classParent?: string;
  children: React.ReactNode;
  arrowNeeded?: boolean;
}

const ScrollArea: React.FC<ScrollProps> = ({
  children,
  classParent,
  arrowNeeded = false,
  ...props
}) => {
  const { ref, width } = useElementSize();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div ref={ref} className={`${classParent} relative`}>
      {arrowNeeded && (
        <>
          <button
            onClick={scrollLeft}
            className="absolute hidden md:flex -left-3 md:-left-5 lg:-left-12 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full  hover:bg-gray-300"
            aria-label="Scroll left"
          >
            <IconArrowLeft />
          </button>
          <button
            onClick={scrollRight}
            className="absolute hidden md:flex -right-3 md:-right-5 lg:-right-12 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-300"
            aria-label="Scroll right"
          >
            <IconArrowRight />
          </button>
        </>
      )}
      <MantineScrollArea {...props} viewportRef={scrollRef} w={width}>
        {children}
      </MantineScrollArea>
    </div>
  );
};

export default ScrollArea;
