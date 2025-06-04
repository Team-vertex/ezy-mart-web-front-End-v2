import React, { useState } from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ 
  onClick, 
  className = '' 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action - could open a contact form or navigate to contact page
      console.log('Contact button clicked - implement contact functionality');
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(true)}
      className={`text-white gap-2.5 text-base font-bold bg-[#0A65FC] mt-[26px] px-[60px] py-3 rounded-[32px] max-md:px-5 transition-all duration-200 hover:bg-[#0952d9] hover:shadow-lg active:transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0A65FC] focus:ring-offset-2 ${className}`}
      type="button"
      aria-label="Contact us to learn more about EzyMart"
    >
      Lets Talk
    </button>
  );
};
