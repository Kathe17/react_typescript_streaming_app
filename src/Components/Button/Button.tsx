import React from "react";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  onClick,
  ...props
}) => {
  const buttonClasses = `
    ${variant === "primary" ? "bg-blue-500 hover:bg-blue-700" : ""}
    ${variant === "secondary" ? "bg-gray-500 hover:bg-gray-700" : ""}
    ${variant === "tertiary" ? "bg-white hover:bg-gray-100" : ""}
    ${size === "small" ? "px-2 py-1 text-sm" : ""}
    ${size === "medium" ? "px-4 py-2 text-base" : ""}
    ${size === "large" ? "px-6 py-3 text-lg" : ""}
   text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
  `;

  return (
    <button className={buttonClasses} {...props} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  size: "medium",
};

export default Button;
