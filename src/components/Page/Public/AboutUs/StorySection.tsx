import { useState } from 'react';
import { ImageGallery } from '@/components/ui/ImageGallery';
import { Story } from '@/components/ui/Story';
import { toast } from 'sonner';

export function StorySection() {
  const [, setIsContactFormVisible] = useState(false);

  const handleContactClick = () => {
    // For now, show a toast notification
    // In a real app, this could open a modal, navigate to contact page, etc.
    toast.success('Contact form coming soon! We\'ll be in touch.');
    setIsContactFormVisible(true);
  };

  return (
    <main className="min-h-screen bg-transparent lg:mt-[100px]">
      {/* Hero/Story Section */}
      <section
        className="flex items-center gap-[40px_91px] flex-wrap px-4 py-8 max-w-7xl mx-auto"
        aria-label="EzyMart company story and showcase"
      >
        {/* Image Gallery */}
        <ImageGallery className="self-stretch" />

        {/* Content Section */}
        <div className="self-stretch flex min-w-60 items-center gap-[40px_55px] flex-wrap my-auto max-md:max-w-full">
          {/* Decorative Divider */}
          <div
            className="self-stretch w-0 shrink-0 h-[479px] bg-[#15366B] my-auto border-[rgba(21,54,107,1)] border-solid border-[5px]"
            role="presentation"
            aria-hidden="true"
          />

          {/* Story Content */}
          <Story
            className="self-stretch"
            onContactClick={handleContactClick}
          />
        </div>
      </section>
    </main>
  );
};

