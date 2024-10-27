import React from "react";
import styles from "./styles.module.scss";

interface PropsTag {
  text: string;
  onClick?: () => void;
}

export const Tag: React.FC<PropsTag> = ({ text, onClick }) => {
  return (
    <div className={styles.tag} onClick={onClick}>
      <p>{text}</p>
    </div>
  );
};
