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
    <section className="container mx-auto bg-white py-12 px-4">
      <div className="relative rounded-3xl overflow-hidden shadow-lg -mt-32 sm:-mt-36 md:-mt-44 lg:-mt-40 xl:-mt-40 2xl:-mt-40 bg-[#C3D6FC]">
        <video
          ref={videoRef}
          className="w-full h-auto"
          autoPlay={false}
          loop
          muted={false}
          onClick={togglePlay}
        >
          <source
            src="https://static.vecteezy.com/system/resources/previews/036/023/758/mp4/young-asian-service-minded-barista-with-customer-in-coffee-shop-free-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play video"
          >
            <div className="bg-white/30 backdrop-blur-sm rounded-full p-4 hover:bg-white/40 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>
    </section>
  );
};
