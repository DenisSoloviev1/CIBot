import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface CustomButtonProps {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <button
      className={classNames(styles.customButton, className && styles[className])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
