import React, { ReactNode } from 'react';

interface CarouselCardProps {
  title?: string;
  content?: ReactNode;
  image?: string;
  className?: string;
  imagePosition?: 'top' | 'bottom' | 'background';
  variant?: 'primary' | 'secondary' | 'accent';
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  content,
  image = '',
  className = '',
  imagePosition = 'top',
  variant = 'primary',
}) => {
  const variantStyles = {
    primary: 'bg-white/95 backdrop-blur-sm',
    secondary: 'bg-blue-50/95 backdrop-blur-sm',
    accent: 'bg-blue-100/95 backdrop-blur-sm',
  };

  const renderContent = () => (
    <div className="flex flex-col h-full p-3 md:p-4">
      {title && (
        <h3 className="text-base md:text-lg font-semibold mb-1.5 md:mb-2 text-gray-800">
          {title}
        </h3>
      )}
      {content && <div className="text-gray-700">{content}</div>}
    </div>
  );

  const renderImage = () =>
    image && (
      <div className="h-24 overflow-hidden md:h-32">
        <img
          src={image}
          alt={title || 'Card image'}
          className="object-cover w-full h-full"
        />
      </div>
    );

  if (imagePosition === 'background' && image) {
    return (
      <div
        className={`
          rounded-xl overflow-hidden h-full relative 
          shadow-md md:shadow-none 
          w-full max-w-xs mx-auto 
          ${className}
        `}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60">
          <div className="relative z-10 flex flex-col justify-end h-full p-3 md:p-4">
            {title && (
              <h3 className="text-base md:text-lg font-semibold mb-1.5 md:mb-2 text-white">
                {title}
              </h3>
            )}
            {content && <div className="text-white/90">{content}</div>}
          </div>
        </div>
      </div>

    );
  }

  return (
    <div
      className={`
        rounded-xl overflow-hidden h-full flex flex-col 
        shadow-md md:shadow-none 
        w-full max-w-xs mx-auto 
        ${variantStyles[variant]} 
        ${className}
      `}
    >
      {imagePosition === 'top' && renderImage()}
      {renderContent()}
      {imagePosition === 'bottom' && renderImage()}
    </div>
  );
};

export default CarouselCard;
