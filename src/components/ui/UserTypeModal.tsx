import { routes } from "@/constants/route";
import {
  IconArrowRight,
  IconBuildingStore,
  IconUsers,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

interface UserTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserTypeModal: React.FC<UserTypeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();

  const handleUserTypeSelection = (userType: "customer" | "business") => {
    if (userType === "customer") {
      navigate(routes.customersService);
    } else {
      navigate(routes.serviceForBusiness);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
            >
              <IconX className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#0A65FC] to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">E</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome to EzyShop!
                </h2>
                <p className="text-gray-600">
                  Help us personalize your experience
                </p>
              </motion.div>
            </div>

            {/* User Type Options */}
            <div className="space-y-4">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => handleUserTypeSelection("customer")}
                className="w-full p-6 bg-gradient-to-r from-green-50 to-emerald-100 border-2 border-green-200 rounded-2xl hover:border-green-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-200 rounded-xl flex items-center justify-center">
                      <IconUsers className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900">
                        I'm a Customer
                      </h3>
                      <p className="text-sm text-gray-600">
                        Looking for great products and services
                      </p>
                    </div>
                  </div>
                  <IconArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => handleUserTypeSelection("business")}
                className="w-full p-6 bg-gradient-to-r from-blue-50 to-indigo-100 border-2 border-blue-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-xl flex items-center justify-center">
                      <IconBuildingStore className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900">
                        I'm a Business Owner
                      </h3>
                      <p className="text-sm text-gray-600">
                        Need POS solutions for my business
                      </p>
                    </div>
                  </div>
                  <IconArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.button>
            </div>

            {/* Skip Option */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-center"
            >
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors duration-200"
              >
                Skip for now
              </button>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute top-4 left-4 w-2 h-2 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-green-200 rounded-full opacity-60"></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-indigo-200 rounded-full opacity-60"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
