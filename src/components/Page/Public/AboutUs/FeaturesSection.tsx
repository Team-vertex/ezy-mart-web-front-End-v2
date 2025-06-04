// FeaturesSection.tsx

import React from 'react';
import { Settings , Lightbulb, Headphones  } from "lucide-react";


interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ElementType; // Accepts a React component (Lucide icons)
    className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, className = "" }) => {
    return (
        <article className={`justify-center items-stretch shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] bg-white self-stretch flex min-w-60 flex-col overflow-hidden grow shrink w-[278px] my-auto px-1.5 rounded-[20px] ${className}`}>
            <div className="flex flex-col items-stretch">
                <div className="self-center flex items-center justify-center min-h-[90px] w-[100px] max-w-full bg-gray-100 rounded-lg">
                    <Icon className="w-10 h-10 text-[#0A65FC]" />
                </div>
                <div className="flex w-full flex-col mt-[31px] px-4">
                    <h3 className="text-2xl font-bold text-[#0A1A33]">
                        {title}
                    </h3>
                    <p className="text-sm font-normal leading-[21px] mt-[22px] text-[#0A1A33]">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
};

export const FeaturesSection: React.FC = () => {
    const features = [
        {
            title: "Innovative Team",
            description: "We focus on nearby stores, not big marketplaces helping you shop local and support your community.",
            icon: Lightbulb,
        },
        {
            title: "Innovative Solution",
            description: "Designed for real needs, EzyMart makes finding products and stores quick, clear, and stress free.",
            icon: Settings ,
        },
        {
            title: "We Listen to Customers",
            description: "Your voice matters. Every feature we build starts with feedback from real users so you always get a better, more thoughtful experience.",
            icon: Headphones,
        }
    ];

    return (
        <section className="self-center w-full max-w-[1074px] max-md:max-w-full mt-[100px] md:mt-[200px] lg:mt-[100px]">
            <h2 className="text-[#0a1a33] text-4xl font-bold leading-[54px] max-md:max-w-full">
                <span className="font-medium text-[48px] leading-[72px]">
                    What Makes Us
                </span>{" "}
                <span className="text-[48px] leading-[72px] text-[#0A65FC] font-poppins">
                    Different?
                </span>
            </h2>
            <div className="flex w-full items-center gap-[15px] text-[#0A1A33] text-center justify-center flex-wrap mt-[57px] max-md:max-w-full max-md:mt-10">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        className={index === 1 ? "py-[41px]" : index === 2 ? "py-[46px]" : "py-10"}
                    />
                ))}
            </div>
        </section>
    );
};
