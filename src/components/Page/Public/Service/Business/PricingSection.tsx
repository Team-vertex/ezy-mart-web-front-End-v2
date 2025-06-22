import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";
import { usePOSRequestPopup } from "../../../../../hooks/usePOSRequestPopup";

const PricingSection: React.FC = () => {
  const { openPOSRequest, POSRequestModal } = usePOSRequestPopup();

  return (
    <div className="relative bg-white py-8 px-4 md:py-16 md:px-8">
      {/* Triangular background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to right bottom, #0D2C61, #1E3E74)",
          clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Popular Plan */}
          <div className="bg-white rounded-2xl p-5 shadow-category relative flex flex-col h-full overflow-hidden ">
            {/* Ribbon */}
            <div className="absolute top-0 right-0 w-[100px] h-[100px] overflow-hidden">
              <div className="absolute w-[150px] h-[30px] bg-[#4CAF50] transform rotate-45 right-[-40px] top-[20px]"></div>
              <span className="absolute top-[30px] right-[6px] text-white font-bold text-xs transform rotate-45 z-10 whitespace-nowrap">
                Popular
              </span>
            </div>

            {/* Price */}
            <div className="text-center mb-5">
              <p className="text-red-500 line-through text-base mb-1">
                LKR 2000/=
              </p>
              <p className="text-[#1A2942] font-bold text-4xl m-0">1800/=</p>
              <p className="text-[#1A2942] text-sm">monthly</p>
            </div>

            {/* Button */}
            <div className="flex justify-center mb-2">
              <button
                onClick={openPOSRequest}
                className="w-full rounded-full py-2 px-5 text-base font-bold bg-[#1976D2] text-white hover:opacity-90"
              >
                Try free
              </button>
            </div>

            <p className="text-center text-sm mb-2">1 Month Free</p>

            <div className="h-px bg-gray-200 my-5"></div>

            {/* Features */}
            <div className="flex-grow">
              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">Work both online & offline</p>
              </div>

              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">
                  Manage Inventory / Manage Employees / Sell Products
                </p>
              </div>

              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">
                  Manage Roles and permissions / Generate Report
                </p>
              </div>

              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">
                  Manage Expenses / Multiple Analysis
                </p>
              </div>

              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">Lifetime Support</p>
              </div>

              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">No hidden extra chargers</p>
              </div>

              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">Online Store</p>
              </div>

              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">Get Review from customers</p>
              </div>

              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">
                  Syncs with the cloud when connected to the internet.
                </p>
              </div>

              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">New features & security updates</p>
              </div>
            </div>
          </div>

          {/* Basic Plan */}
          <div className="bg-white rounded-2xl p-5 shadow-category relative flex flex-col h-full overflow-hidden">
            {/* Ribbon */}
            <div className="absolute top-0 right-0 w-[100px] h-[100px] overflow-hidden">
              <div className="absolute w-[150px] h-[30px] bg-[#1A2942] transform rotate-45 right-[-40px] top-[20px]"></div>
              <span className="absolute top-[30px] right-[14px] text-white font-bold text-xs transform rotate-45 z-10 whitespace-nowrap">
                Basic
              </span>
            </div>

            {/* Price */}
            <div className="text-center mb-5">
              <p className="text-red-500 line-through text-base mb-1">
                LKR 60000/=
              </p>
              <p className="text-[#1A2942] font-bold text-4xl m-0">55 000/=</p>
              <p className="text-[#1A2942] text-sm">One Time</p>
            </div>

            {/* Button */}
            <div className="flex justify-center mb-2">
              <button
                onClick={openPOSRequest}
                className="w-full rounded-full py-2 px-5 text-base font-bold border border-[#1976D2] text-[#1976D2] bg-transparent hover:bg-[rgba(25,118,210,0.04)]"
              >
                Request Now
              </button>
            </div>

            <p className="text-center text-sm mb-2">7 Day Trial</p>

            <div className="h-px bg-gray-200 my-5"></div>

            {/* Features */}
            <div className="flex-grow">
              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">
                  work offline (need to pay yearly fee if online storage
                  required)
                </p>
              </div>

              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">
                  Manage Stocks / Manage Employees / Sell Products
                </p>
              </div>

              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">
                  Manage Roles and permissions / Generate Reports
                </p>
              </div>

              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">
                  Manage Expenses / Multiple Analysis
                </p>
              </div>

              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">Lifetime Support</p>
              </div>

              <div className="flex items-start mb-3">
                <CheckCircleIcon className="text-green-600" />
                <p className="ml-2 text-sm">
                  No hidden extra chargers (need to pay yearly if cloud storage
                  required)
                </p>
              </div>

              <div className="flex items-start mb-3">
                <CancelIcon className="text-[#FF5252]" />
                <p className="ml-2 text-sm">Online Store</p>
              </div>

              <div className="flex items-start mb-3">
                <CancelIcon className="text-[#FF5252]" />
                <p className="ml-2 text-sm">Get Review from customers</p>
              </div>

              <div className="flex items-start mb-3">
                <CancelIcon className="text-[#FF5252]" />
                <p className="ml-2 text-sm">
                  Syncs with the cloud when connected to the internet.
                </p>
              </div>

              <div className="flex items-start mb-3">
                <CancelIcon className="text-[#FF5252]" />
                <p className="ml-2 text-sm">New features & security updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POS Request Modal */}
      <POSRequestModal />
    </div>
  );
};

export default PricingSection;
