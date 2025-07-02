import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import React, { useState } from "react";

export const Video: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-white py-20 px-4 -mt-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-[#0A65FC] rounded-full text-sm font-semibold mb-4">
            See It In Action
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Watch How EzyMart POS{" "}
            <span className="bg-gradient-to-r from-[#0A65FC] to-blue-600 bg-clip-text text-transparent">
              Transforms
            </span>{" "}
            Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See real Sri Lankan business owners share how EzyMart POS helped
            them streamline operations and boost sales.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-blue-100 group"
        >
          <div className="aspect-video relative">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay={false}
              loop
              muted={false}
              onClick={togglePlay}
              poster="/images/video-thumbnail.jpg"
            >
              <source
                src="https://static.vecteezy.com/system/resources/previews/036/023/758/mp4/young-asian-service-minded-barista-with-customer-in-coffee-shop-free-video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause Overlay */}
            <div
              className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <motion.button
                onClick={togglePlay}
                className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl"
                aria-label={isPlaying ? "Pause video" : "Play video"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? (
                  <Pause size={32} className="text-[#0A65FC]" />
                ) : (
                  <Play size={32} className="text-[#0A65FC] ml-1" />
                )}
              </motion.button>
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Real Business Owner Success Story
                    </h3>
                    <p className="text-white/80 text-sm">
                      Watch how Sarah transformed her grocery store with EzyMart
                      POS
                    </p>
                  </div>
                  <div className="text-white/80 text-sm">2:30</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Play size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Live Demo
            </h3>
            <p className="text-gray-600">
              See the actual system in action with real-world scenarios
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-[#0A65FC] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4v16M17 4v16M9 9h6m-6 4h6m-6 4h6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Customer Stories
            </h3>
            <p className="text-gray-600">
              Hear directly from business owners who've transformed their
              operations
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Quick Setup
            </h3>
            <p className="text-gray-600">
              Learn how easy it is to get started in just a few minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
