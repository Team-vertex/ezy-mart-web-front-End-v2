import { openAppDownload } from "@/utils/appUtils";
import { motion } from "framer-motion";
import React from "react";

interface AppDownloadButtonsProps {
    variant?: 'horizontal' | 'vertical';
    showDirectDownload?: boolean;
    className?: string;
}

export const AppDownloadButtons: React.FC<AppDownloadButtonsProps> = ({
    variant = 'horizontal',
    showDirectDownload = true,
    className = ''
}) => {
    const buttonClass = variant === 'vertical' ? 'flex flex-col gap-4' : 'flex flex-row gap-4 flex-wrap justify-center';

    return (
        <div className={`${buttonClass} ${className}`}>
            {/* Google Play Store */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openAppDownload('android')}
                className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
                <div className="text-2xl">📱</div>
                <div className="text-left">
                    <div className="text-xs text-gray-300">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                </div>
            </motion.button>

            {/* Apple App Store */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openAppDownload('ios')}
                className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
                <div className="text-2xl">🍎</div>
                <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                </div>
            </motion.button>

            {/* Direct Download / Demo */}
            {showDirectDownload && (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openAppDownload('demo')}
                    className="flex items-center gap-3 px-6 py-3 bg-[#0A65FC] text-white rounded-xl hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    <div className="text-2xl">🌐</div>
                    <div className="text-left">
                        <div className="text-xs text-blue-100">Try Online</div>
                        <div className="text-lg font-semibold">Web Demo</div>
                    </div>
                </motion.button>
            )}
        </div>
    );
};
