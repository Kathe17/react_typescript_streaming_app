import React from "react";
import { InputHTMLAttributes, DetailedHTMLProps } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  border?: boolean;
  type?: string;
  variant?: "primary" | "secondary" | "tertiary";
  customSize?: "small" | "medium" | "large";
  //   children: React.ReactNode;
  icon?: React.ReactNode;
  placeholder: string;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input: React.FC<InputProps> = ({
  //   children,
  border = true,
  type,
  variant,
  customSize,
  icon,
  placeholder,
  value,
  onChange,
  ...props
}) => {
  const inputClasses = `
    ${type === "textarea" ? "h-24 whitespace-normal" : "h-10"}
    ${variant === "primary" ? "bg-blue-100" : ""}
    ${variant === "secondary" ? "bg-gray-100" : ""}
    ${variant === "tertiary" ? "bg-white" : ""}
    ${customSize === "small" ? "px-2 py-1 text-sm" : ""}
    ${customSize === "medium" ? "px-3 py-2 text-base" : ""}
    ${customSize === "large" ? "px-4 py-3 text-lg" : ""}
    w-full rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
  `;

  return (
    <div
      className={`${
        border ? "border border-gray-400" : ""
      } flex items-center  rounded-lg w-2/5 justify-between}`}
    >
      <div className="px-2">{icon}</div>
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  variant: "primary",
  customSize: "medium",
};

export default Input;
