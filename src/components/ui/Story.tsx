import React from 'react';
import { ContactButton } from './ContactButton';

interface StorySectionProps {
  className?: string;
  onContactClick?: () => void;
}

export const Story: React.FC<StorySectionProps> = ({ 
  className = '',
  onContactClick 
}) => {
  return (
    <section 
      className={`flex min-w-60 flex-col items-stretch w-[484px] my-auto max-md:max-w-full ${className}`}
      aria-labelledby="story-heading"
    >
      <article className="w-full max-md:max-w-full">
        <header>
          <h1 
            id="story-heading"
            className="text-black text-4xl font-bold leading-[54px] max-md:max-w-full"
          >
            <span className='text-4xl font-bold text-black' > 
              Our
            </span>{" "}
            <span className='text-4xl font-bold text-blue-700' >
              Story
            </span>
          </h1>
        </header>
        
        <div className="w-full text-base text-black font-medium leading-6 mt-[26px] max-md:max-w-full">
          <p className="text-black max-md:max-w-full">
            EzyMart is a smart shopping platform developed by Vertex
            Cooperation (PVT) LTD, a team dedicated to creating practical,
            innovative tech solutions. Guided by our vision — Enhancing
            mankind's lifestyles for a better future — we aim to make
            everyday shopping easier, smarter, and more connected.
          </p>
          
          <p className="text-black mt-[26px] max-md:max-w-full">
            Our Project EzyMart is to bring small and mid-level businesses
            into the digital world and connect everyday customers with local
            shops through a smart, easy-to-use app. EzyMart helps users find
            nearby products quickly, making shopping more convenient,
            affordable, and efficient—whether it's groceries, electronics,
            or daily essentials.
          </p>
        </div>
      </article>
      
      <ContactButton 
        onClick={onContactClick}
        aria-label="Get in touch with the EzyMart team"
      />
    </section>
  );
};
