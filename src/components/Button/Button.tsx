import React from "react";
import "./button.css";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  type?: "primary" | "secondary";
  flavor?: "default" | "hover" | "icon" | "disabled" | "disabledIcon";
  buttonType?: "button" | "submit" | "reset";
  customStyles?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  type = "primary",
  flavor = "default",
  buttonType = "button",
  customStyles,
  ...props
}: ButtonProps) => {
  const mode = `button--${type}--${flavor}`;
  return (
    <button
      type={buttonType}
      className={["button", `button--${size}`, mode].join(" ")}
      style={{ backgroundColor, ...customStyles }}
      {...props}
    >
      {label}
    </button>
  );
};
