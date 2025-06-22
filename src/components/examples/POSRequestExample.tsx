import React from "react";
import { usePOSRequestPopup } from "../../hooks/usePOSRequestPopup";
import StyledButton from "../ui/StyledButton";

/**
 * Example component demonstrating how to use the POS Request Popup
 * This can be used as a reference for integrating the popup into other components
 */
const POSRequestExample: React.FC = () => {
  const { openPOSRequest, POSRequestModal } = usePOSRequestPopup();

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h3 className="text-xl font-semibold mb-4">POS Request Popup Demo</h3>

      {/* Different button styles that can trigger the popup */}
      <div className="flex flex-wrap gap-4">
        <StyledButton onClick={openPOSRequest} variant="primary" size="lg">
          Request POS - Primary
        </StyledButton>

        <StyledButton onClick={openPOSRequest} variant="outline" size="md">
          Request POS - Outline
        </StyledButton>

        <StyledButton onClick={openPOSRequest} variant="secondary" size="sm">
          Request POS - Secondary
        </StyledButton>
      </div>

      {/* Standard button with custom styling */}
      <button
        onClick={openPOSRequest}
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Custom Styled Button
      </button>

      {/* The modal component - this must be included wherever you want to use the popup */}
      <POSRequestModal />
    </div>
  );
};

export default POSRequestExample;
