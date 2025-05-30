import React from "react";

const SimplePricing: React.FC = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Simple Pricing, <span className="text-blue-500">No Surprises</span>
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700">
          We believe in fair, transparent pricing that works for small and
          medium businesses. Choose a plan that fits your budget no hidden fees,
          no long term commitments, just real value.
        </p>
      </div>
    </div>
  );
};

export default SimplePricing;
