import type { ButtonHTMLAttributes } from "react";
import "./Button.css";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={`button button--${variant}`} {...props}>
      {children}
    </button>
  );
};
