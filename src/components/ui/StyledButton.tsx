import { ButtonProps, Button as MantineButton } from "@mantine/core";
import React from "react";
import { cn } from "../../libs/utils";

interface StyledButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  type,
  ...props
}) => {
  const baseClasses = "font-semibold transition-all duration-200 rounded-full";

  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white border-0",
    secondary: "bg-white hover:bg-gray-100 text-gray-800 border-0",
    outline:
      "bg-transparent hover:bg-blue-50 text-blue-600 border border-blue-600",
  };

  const sizeClasses = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <MantineButton
      type={type}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      classNames={{
        root: cn(
          "!rounded-full !font-semibold !transition-all !duration-200",
          variantClasses[variant],
          sizeClasses[size]
        ),
      }}
      {...props}
    >
      {children}
    </MantineButton>
  );
};

export default StyledButton;
