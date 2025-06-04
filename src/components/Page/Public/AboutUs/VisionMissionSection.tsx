import React from 'react';

interface VisionMissionCardProps {
  title: string;
  description: string;
  iconSrc: string;
  isVision?: boolean;
}

const VisionMissionCard: React.FC<VisionMissionCardProps> = ({
  title,
  description,
  iconSrc,
}) => {
  return (
    <article className="flex flex-col sm:flex-row items-center bg-[#E6EFFF] rounded-[200px_0_0_200px] px-6 sm:px-10 py-10 w-full sm:max-w-2xl lg:max-w-[600px] mx-auto">
      <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 sm:w-44 sm:h-44 bg-[#0A65FC] rounded-full mb-6 sm:mb-0 sm:mr-6">
        <img
          src={iconSrc}
          alt={`${title} icon`}
          className="object-contain w-16 h-auto sm:w-24"
        />
      </div>
      <div className="text-[#0A1A33] text-center sm:text-left">
        <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed sm:text-base">{description}</p>
      </div>
    </article>
  );
};

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-4 mt-16 lg:flex-row sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <VisionMissionCard
        title="Vision"
        description="Enhancing mankind lifestyles for a better future."
        iconSrc="https://cdn.builder.io/api/v1/image/assets/048e14f207294d2d81c31c8ac35554bd/c0805e13a0466f123f520ca0b50b4a4ee658a383?placeholderIfAbsent=true"
        isVision={true}
      />
      <VisionMissionCard
        title="Mission"
        description="Deliver high-quality and accessible convenience solutions."
        iconSrc="https://cdn.builder.io/api/v1/image/assets/048e14f207294d2d81c31c8ac35554bd/961967f2b8034c3d9b9047d8d059422e53dbb049?placeholderIfAbsent=true"
        isVision={false}
      />
    </section>
  );
};
