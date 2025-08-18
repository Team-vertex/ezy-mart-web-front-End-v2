import { Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";
import StyledButton from "./StyledButton";

interface SimpleRequestPopupProps {
  opened: boolean;
  onClose: () => void;
}

interface FormData {
  username: string;
  mobile: string;
  email: string;
}

const SimpleRequestPopup: React.FC<SimpleRequestPopupProps> = ({
  opened,
  onClose,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const form = useForm<FormData>({
    initialValues: {
      username: "",
      mobile: "",
      email: "",
    },
    validate: {
      username: (value) => (!value ? "Username is required" : null),
      mobile: (value) => (!value ? "Mobile number is required" : null),
      email: (value) =>
        !value
          ? "Email is required"
          : !/^\S+@\S+$/.test(value)
            ? "Invalid email"
            : null,
    },
  });

  const handleSubmit = async (_values: FormData) => {
    setIsSubmitting(true);
    setNotification(null);

    try {
      // Mock response – replace with actual API
      const response = { success: true };

      if (response.success) {
        setNotification({
          type: "success",
          message: "Your request has been sent successfully!",
        });

        setTimeout(() => {
          onClose();
          form.reset();
          setNotification(null);
        }, 2500);
      } else {
        throw new Error("Failed to send request.");
      }
    } catch (error: any) {
      setNotification({
        type: "error",
        message: error.message || "Failed to send request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    form.reset();
    setNotification(null);
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      centered
      size="lg"
      withCloseButton={false}
      radius="xl"
      padding="lg"
      classNames={{
        overlay: "!bg-black/50 backdrop-blur-md",
        content:
          "!bg-transparent !shadow-none !overflow-visible",
      }}
      transitionProps={{
        transition: "fade",
        duration: 300,
      }}
    >
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Background with gradient matching the design */}
        <div
          className="absolute inset-0 shadow-2xl rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, #0A1A33 0%, #0A65FC 25%, #0A1A33 50%, #0A1A33 75%, #0A1A33 100%)",
          }}
        />

        <div className="px-2 py-4">
          <h2 className="mb-6 text-2xl font-bold text-center text-white drop-shadow">
            Mobile Request Form
          </h2>

          {notification && (
            <div
              className={`mb-5 p-3 text-center rounded-lg shadow-sm animate-fadeIn ${notification.type === "success"
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-red-100 text-red-800 border border-red-300"
                }`}
            >
              {notification.message}
            </div>
          )}

          <form
            onSubmit={form.onSubmit(handleSubmit)}
            className="max-w-lg p-6 mx-auto space-y-5 shadow-lg rounded-2xl backdrop-blur-sm animate-slideUp"
          >

            <div>
              <label className="block mb-1 text-sm font-medium text-white">
                Name
              </label>
              <TextInput
                placeholder="Enter your username"
                {...form.getInputProps("username")}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-white">
                Mobile Number
              </label>
              <TextInput
                placeholder="Enter your mobile number"
                classNames={{
                  input:
                    "rounded-xl border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition shadow-sm",
                }}
                {...form.getInputProps("mobile")}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-white">
                Email
              </label>
              <TextInput
                placeholder="Enter your email"
                classNames={{
                  input:
                    "rounded-xl border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition shadow-sm",
                }}
                {...form.getInputProps("email")}
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <StyledButton
                type="button"
                onClick={handleClose}
                variant="outline"
                disabled={isSubmitting}
                className="flex-1 h-11 !bg-white !text-black lg:h-12 text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Close
              </StyledButton>

              <StyledButton
                type="submit"
                disabled={isSubmitting}
                className="flex-1 h-11 lg:h-12 text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 !bg-blue-600 hover:!bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </StyledButton>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default SimpleRequestPopup;
