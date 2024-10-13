import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './Button.module.scss';
import { Arrow } from "@/shared/icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}
export const Button = ({
  className,
  disabled,
  children,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      disabled={disabled}
      {...otherProps}
    >
      {children}
      <Arrow fill="white"/>
    </button>
  );
};
