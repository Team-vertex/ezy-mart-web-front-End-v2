import React from "react";

export const Video: React.FC = () => {
  //MARK: Render
  return (
    <section className="container mx-auto bg-white py-12">
      <video
        className="w-full h-auto rounded-lg shadow-lg -mt-32 sm:-mt-36 md:-mt-44 lg:-mt-52 xl:-mt-54 2xl:-mt-96"
        controls
        autoPlay
        loop
        muted
      >
        <source
          src="https://static.vecteezy.com/system/resources/previews/036/023/758/mp4/young-asian-service-minded-barista-with-customer-in-coffee-shop-free-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};
