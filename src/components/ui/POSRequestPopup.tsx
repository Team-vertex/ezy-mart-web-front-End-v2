import { Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import StyledButton from "./StyledButton";

interface POSRequestPopupProps {
  opened: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  district: string;
  city: string;
}

const POSRequestPopup: React.FC<POSRequestPopupProps> = ({
  opened,
  onClose,
}) => {
  const form = useForm<FormData>({
    initialValues: {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      district: "",
      city: "",
    },
    validate: {
      firstName: (value) => (!value ? "First name is required" : null),
      lastName: (value) => (!value ? "Last name is required" : null),
      mobile: (value) => (!value ? "Mobile number is required" : null),
      email: (value) =>
        value && !/^\S+@\S+$/.test(value) ? "Invalid email" : null,
      district: (value) => (!value ? "District is required" : null),
      city: (value) => (!value ? "City is required" : null),
    },
  });

  const handleSubmit = (values: FormData) => {
    console.log("Form submitted:", values);
    // Handle form submission here
    onClose();
    form.reset();
  };

  const handleClose = () => {
    onClose();
    form.reset();
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
          className="absolute inset-0 rounded-3xl shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, #0A1A33 0%, #0A65FC 25%, #0A1A33 50%, #0A1A33 75%, #0A1A33 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 lg:p-12">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-4 leading-tight">
              Request Your EzyMart POS Now
            </h2>
            <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
              Ready to get started? Send us your details and we'll help you set
              up EzyMart POS for your business fast, easy, and stress free.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={form.onSubmit(handleSubmit)}
            className="space-y-5 lg:space-y-6"
          >
            {/* First row - First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label className="block text-white text-sm lg:text-base font-medium mb-2">
                  First Name
                </label>
                <TextInput
                  placeholder="Placeholder"
                  {...form.getInputProps("firstName")}
                  classNames={{
                    input:
                      "!bg-white/15 !border-white/30 !text-white placeholder:!text-white/70 !rounded-xl h-11 lg:h-12 text-sm lg:text-base focus:!border-white/60 focus:!bg-white/20 transition-all duration-200",
                  }}
                />
              </div>
              <div>
                <label className="block text-white text-sm lg:text-base font-medium mb-2">
                  Last Name
                </label>
                <TextInput
                  placeholder="Placeholder"
                  {...form.getInputProps("lastName")}
                  classNames={{
                    input:
                      "!bg-white/15 !border-white/30 !text-white placeholder:!text-white/70 !rounded-xl h-11 lg:h-12 text-sm lg:text-base focus:!border-white/60 focus:!bg-white/20 transition-all duration-200",
                  }}
                />
              </div>
            </div>

            {/* Second row - Mobile & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label className="block text-white text-sm lg:text-base font-medium mb-2">
                  Mobile
                </label>
                <TextInput
                  placeholder="Placeholder"
                  {...form.getInputProps("mobile")}
                  classNames={{
                    input:
                      "!bg-white/15 !border-white/30 !text-white placeholder:!text-white/70 !rounded-xl h-11 lg:h-12 text-sm lg:text-base focus:!border-white/60 focus:!bg-white/20 transition-all duration-200",
                  }}
                />
              </div>
              <div>
                <label className="block text-white text-sm lg:text-base font-medium mb-2">
                  email (optional)
                </label>
                <TextInput
                  placeholder="Placeholder"
                  {...form.getInputProps("email")}
                  classNames={{
                    input:
                      "!bg-white/15 !border-white/30 !text-white placeholder:!text-white/70 !rounded-xl h-11 lg:h-12 text-sm lg:text-base focus:!border-white/60 focus:!bg-white/20 transition-all duration-200",
                  }}
                />
              </div>
            </div>

            {/* Third row - District & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label className="block text-white text-sm lg:text-base font-medium mb-2">
                  District
                </label>
                <TextInput
                  placeholder="Placeholder"
                  {...form.getInputProps("district")}
                  classNames={{
                    input:
                      "!bg-white/15 !border-white/30 !text-white placeholder:!text-white/70 !rounded-xl h-11 lg:h-12 text-sm lg:text-base focus:!border-white/60 focus:!bg-white/20 transition-all duration-200",
                  }}
                />
              </div>
              <div>
                <label className="block text-white text-sm lg:text-base font-medium mb-2">
                  City
                </label>
                <TextInput
                  placeholder="Placeholder"
                  {...form.getInputProps("city")}
                  classNames={{
                    input:
                      "!bg-white/15 !border-white/30 !text-white placeholder:!text-white/70 !rounded-xl h-11 lg:h-12 text-sm lg:text-base focus:!border-white/60 focus:!bg-white/20 transition-all duration-200",
                  }}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-8 lg:mt-10 pt-2">
              <StyledButton
                type="button"
                onClick={handleClose}
                variant="primary"
                size="lg"
                className="flex-1 h-11 !bg-white !text-black lg:h-12 text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Close
              </StyledButton>
              <StyledButton
                type="submit"
                variant="primary"
                size="lg"
                className="flex-1 h-11 lg:h-12 text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 !bg-blue-600 hover:!bg-blue-700"
              >
                Submit
              </StyledButton>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default POSRequestPopup;
