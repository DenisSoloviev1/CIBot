import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface MessageProps {
  text: string;
  isAnswer: boolean;
}
export const Message: React.FC<MessageProps> = ({ text, isAnswer = false }) => {
  return (
    <div className={classNames(styles.message, isAnswer ? styles.answer : "")}>
      <p>{text}</p>
    </div>
  );
};
