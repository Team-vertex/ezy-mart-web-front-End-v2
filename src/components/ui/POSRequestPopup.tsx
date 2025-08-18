import emailService from "@/service/email/email.service";
import { Modal, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";
import StyledButton from "./StyledButton";

interface POSRequestPopupProps {
  opened: boolean;
  onClose: () => void;
}

interface FormData {
  Name: string;
  mobile: string;
  email: string;
  city: string;
  message: string;
}

const POSRequestPopup: React.FC<POSRequestPopupProps> = ({
  opened,
  onClose,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const form = useForm<FormData>({
    initialValues: {
      Name: "",
      mobile: "",
      email: "",
      city: "",
      message: "",
    },
    validate: {
      Name: (value) => (!value ? "First name is required" : null),

      mobile: (value) => (!value ? "Mobile number is required" : null),
      email: (value) =>
        value && !/^\S+@\S+$/.test(value) ? "Invalid email" : null,

      city: (value) => (!value ? "City is required" : null),

      message: (value) =>
        (!value || value.length < 10) ? "Message must be at least 10 characters" : null,
    },
  });

  const handleSubmit = async (values: FormData) => {
    setIsSubmitting(true);
    setNotification(null);

    try {
      // Send email using the dedicated POS request email service
      const response = await emailService.sendPOSRequestEmail(values);

      if (response.success) {
        setNotification({
          type: 'success',
          message: 'Your POS request has been sent successfully! We will contact you soon.',
        });

        // Close modal after a delay
        setTimeout(() => {
          onClose();
          form.reset();
          setNotification(null);
        }, 3000);
      } else {
        throw new Error(response.message);
      }
    } catch (error: any) {
      console.error("Email sending error:", error);
      setNotification({
        type: 'error',
        message: error.message || 'Failed to send request. Please try again.',
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
      size="xl"
      withCloseButton={false}
      padding={0}
      radius="xl"
      classNames={{
        overlay: "!bg-black/60 backdrop-blur-sm",
        content: "!bg-transparent !shadow-none !overflow-visible",
        body: "!p-0",
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

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 lg:p-12">
          {/* Header */}
          <div className="mb-8 text-center lg:mb-10">
            <h2 className="mb-3 text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl xl:text-4xl lg:mb-4">
              Request Your EzyMart POS Now
            </h2>
            <p className="max-w-2xl mx-auto text-xs leading-relaxed text-white/90 sm:text-sm lg:text-base">
              Ready to get started? Send us your details and we'll help you set
              up EzyMart POS for your business fast, easy, and stress free.
            </p>

            {/* Notification */}
            {notification && (
              <div className={`mt-4 p-3 rounded-lg ${notification.type === 'success'
                ? 'bg-green-500/20 text-green-100 border border-green-400/30'
                : 'bg-red-500/20 text-red-100 border border-red-400/30'
                }`}>
                {notification.message}
              </div>
            )}
          </div>

          {/* Form */}
          <form
            onSubmit={form.onSubmit(handleSubmit)}
            className="space-y-5 lg:space-y-6"
          >
            {/* First row - First Name & Last Name */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-white lg:text-base">
                  Name
                </label>
                <TextInput
                  placeholder="Enter your first name"
                  {...form.getInputProps("firstName")}
                  classNames={{
                    input:
                      "!bg-white/15 !border-white/30 !text-white placeholder:!text-white/70 !rounded-xl h-11 lg:h-12 text-sm lg:text-base focus:!border-white/60 focus:!bg-white/20 transition-all duration-200",
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white lg:text-base">
                  Mobile
                </label>
                <TextInput
                  placeholder="Enter your mobile number"
                  {...form.getInputProps("mobile")}
                  classNames={{
                    input:
                      "!bg-white/15 !border-white/30 !text-white placeholder:!text-white/70 !rounded-xl h-11 lg:h-12 text-sm lg:text-base focus:!border-white/60 focus:!bg-white/20 transition-all duration-200",
                  }}
                />
              </div>
              {/* <div>
                <label className="block mb-2 text-sm font-medium text-white lg:text-base">
                  Last Name
                </label>
                <TextInput
                  placeholder="Enter your last name"
                  {...form.getInputProps("lastName")}
                  classNames={{
                    input:
                      "!bg-white/15 !border-white/30 !text-white placeholder:!text-white/70 !rounded-xl h-11 lg:h-12 text-sm lg:text-base focus:!border-white/60 focus:!bg-white/20 transition-all duration-200",
                  }}
                />
              </div> */}
            </div>

            {/* Second row - Mobile & Personal Email */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
              
              <div>
                <label className="block mb-2 text-sm font-medium text-white lg:text-base">
                  Personal Email (optional)
                </label>
                <TextInput
                  placeholder="your.personal@email.com"
                  {...form.getInputProps("email")}
                  classNames={{
                    input:
                      "!bg-white/15 !border-white/30 !text-white placeholder:!text-white/70 !rounded-xl h-11 lg:h-12 text-sm lg:text-base focus:!border-white/60 focus:!bg-white/20 transition-all duration-200",
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white lg:text-base">
                  City
                </label>
                <TextInput
                  placeholder="Your city"
                  {...form.getInputProps("city")}
                  classNames={{
                    input:
                      "!bg-white/15 !border-white/30 !text-white placeholder:!text-white/70 !rounded-xl h-11 lg:h-12 text-sm lg:text-base focus:!border-white/60 focus:!bg-white/20 transition-all duration-200",
                  }}
                />
              </div>
            </div>

            {/* Third row - Business Name & Contact Email */}
            {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-white lg:text-base">
                  Business Name *
                </label>
                <TextInput
                  placeholder="Your business name"
                  {...form.getInputProps("businessName")}
                  classNames={{
                    input:
                      "!bg-white/15 !border-white/30 !text-white placeholder:!text-white/70 !rounded-xl h-11 lg:h-12 text-sm lg:text-base focus:!border-white/60 focus:!bg-white/20 transition-all duration-200",
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white lg:text-base">
                  Business Contact Email *
                </label>
                <TextInput
                  placeholder="business@email.com"
                  {...form.getInputProps("contactEmail")}
                  classNames={{
                    input:
                      "!bg-white/15 !border-white/30 !text-white placeholder:!text-white/70 !rounded-xl h-11 lg:h-12 text-sm lg:text-base focus:!border-white/60 focus:!bg-white/20 transition-all duration-200",
                  }}
                />
              </div>
            </div> */}

            {/* Fourth row - District & City */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
              {/* <div>
                <label className="block mb-2 text-sm font-medium text-white lg:text-base">
                  District
                </label>
                <TextInput
                  placeholder="Your district"
                  {...form.getInputProps("district")}
                  classNames={{
                    input:
                      "!bg-white/15 !border-white/30 !text-white placeholder:!text-white/70 !rounded-xl h-11 lg:h-12 text-sm lg:text-base focus:!border-white/60 focus:!bg-white/20 transition-all duration-200",
                  }}
                />
              </div> */}
              
            </div>

            {/* Fifth row - Message */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white lg:text-base">
                Message *
              </label>
              <Textarea
                placeholder="Tell us about your business needs, expected number of transactions, current POS system (if any), and any specific requirements..."
                rows={4}
                {...form.getInputProps("message")}
                classNames={{
                  input:
                    "!bg-white/15 !border-white/30 !text-white placeholder:!text-white/70 !rounded-xl text-sm lg:text-base focus:!border-white/60 focus:!bg-white/20 transition-all duration-200 resize-none",
                }}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-2 mt-8 sm:flex-row lg:gap-4 lg:mt-10">
              <StyledButton
                type="button"
                onClick={handleClose}
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="flex-1 h-11 !bg-white !text-black lg:h-12 text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Close
              </StyledButton>
              <StyledButton
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="flex-1 h-11 lg:h-12 text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 !bg-blue-600 hover:!bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </StyledButton>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default POSRequestPopup;
