import React from "react";

const GetInTouch: React.FC = () => {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
        {/* Left Section - Text */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gray-900">Get In </span>
            <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-lg">
            Let's connect and make your experience even better. Whether you're a
            shopper or a business, we're just a message away.
          </p>
        </div>

        {/* Right Section - Contact Info */}
        <div className="lg:w-1/2 flex flex-col space-y-8 ">
          {/* Phone Numbers */}
          <div className="flex items-center">
            <div className="bg-blue-600 p-4 rounded-lg mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-800 text-lg font-medium">
                +94 71 895 9403
              </p>
              <p className="text-gray-800 text-lg font-medium mt-1">
                +94 71 895 9403
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center">
            <div className="bg-blue-600 p-4 rounded-lg mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-800 text-lg font-medium">
                Anuradhapura Road,
              </p>
              <p className="text-gray-800 text-lg font-medium mt-1">
                Eriyagama, Malwanegama
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
