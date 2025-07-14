import React from "react";
import { FormattedMessage } from "react-intl";

const SimplePricing: React.FC = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <FormattedMessage id="business.simplePricing.title" />
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700">
          <FormattedMessage id="business.simplePricing.subtitle" />
        </p>
      </div>
    </div>
  );
};

export default SimplePricing;
