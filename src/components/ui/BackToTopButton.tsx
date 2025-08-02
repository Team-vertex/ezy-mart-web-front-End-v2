import { scrollToTop } from "@/utils/scrollUtils";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

export const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const handleClick = () => {
        scrollToTop();
    };

    return (
        <>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClick}
                    className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#0A65FC] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl"
                    aria-label="Back to top"
                >
                    <ArrowUp size={20} />
                </motion.button>
            )}
        </>
    );
};
