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

  const handleSubmit = async (values: FormData) => {
    setIsSubmitting(true);
    setNotification(null);

    try {
      // Replace this with your actual email service call
      // const response = await emailService.sendSimpleRequestEmail(values);

      // Simulating success response here:
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
        }, 3000);
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
      size="md"
      withCloseButton={false}
      padding="lg"
      radius="md"
      classNames={{
        overlay: "!bg-black/60 backdrop-blur-sm",
        content: "!bg-white !shadow-lg",
      }}
      transitionProps={{
        transition: "fade",
        duration: 300,
      }}
    >
      <div>
        <h2 className="mb-6 text-xl font-bold text-center">
          Simple Request Form
        </h2>

        {notification && (
          <div
            className={`mb-4 p-3 rounded ${
              notification.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {notification.message}
          </div>
        )}

        <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <TextInput
              placeholder="Enter your username"
              {...form.getInputProps("username")}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Mobile Number</label>
            <TextInput
              placeholder="Enter your mobile number"
              {...form.getInputProps("mobile")}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <TextInput
              placeholder="Enter your email"
              {...form.getInputProps("email")}
            />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <StyledButton
              type="button"
              onClick={handleClose}
              variant="outline"
              disabled={isSubmitting}
            >
              Close
            </StyledButton>

            <StyledButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </StyledButton>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SimpleRequestPopup;
