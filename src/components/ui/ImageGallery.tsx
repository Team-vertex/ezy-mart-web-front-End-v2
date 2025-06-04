import React from 'react';

interface ImageGalleryProps {
  className?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ className = '' }) => {
  return (
    <section 
      className={`flex min-w-60 flex-col items-stretch w-[497px] my-auto rounded-[300px] max-md:max-w-full ${className}`}
      aria-label="Product showcase gallery"
    >
      <div className="max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[22%] max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/048e14f207294d2d81c31c8ac35554bd/767c0f9b6019d9983bed6aa758fb55eb28c2168b?placeholderIfAbsent=true"
              alt="Featured product showcase"
              className="aspect-[0.92] object-contain w-[110px] shadow-[8px_4px_10px_rgba(0,0,0,0.25)] shrink-0 max-w-full mt-[136px] rounded-[300px] max-md:mt-10"
            />
          </div>
          <div className="w-[78%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/048e14f207294d2d81c31c8ac35554bd/b7026688b5a260d1b8f305ab19d8f12d0d0c52af?placeholderIfAbsent=true"
                alt="Product category display"
                className="aspect-[1.1] object-contain w-[171px] shadow-[8px_4px_10px_rgba(0,0,0,0.25)] max-w-full rounded-[300px]"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/048e14f207294d2d81c31c8ac35554bd/8c6b21a78f4af22c1bc92f170081b2b741c0512b?placeholderIfAbsent=true"
                alt="Shopping experience preview"
                className="aspect-[1.03] object-contain w-full shadow-[8px_4px_10px_rgba(0,0,0,0.25)] mt-10 rounded-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/048e14f207294d2d81c31c8ac35554bd/d41cf452394cbb68b57ac5d41c7e6472f11182b2?placeholderIfAbsent=true"
        alt="EzyMart platform highlight"
        className="aspect-[1] object-contain w-[62px] shadow-[8px_4px_10px_rgba(0,0,0,0.25)] self-center mt-9 rounded-[300px]"
      />
    </section>
  );
};
