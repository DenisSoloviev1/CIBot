import React from "react";
import styles from "./styles.module.scss";
import { Tag } from "../../components/Tag";
import { Message } from "../../components/Message";

export const Chat: React.FC = () => {
  return (
    <div className={styles.chat}>
      <Tag text={"Сегодня"} />

      <Message text={"fhjshjhsjdfhsjdfh"} isAnswer={true} />
      <Message text={"fhjshjhsjdfh sjdfhfhjshjhsjdfhsjdf hfhjshjhsj dfhsjdfhfhjshj hsjdfhsjdfhfhjshjhsjdfhsjdfh"} isAnswer={false} />
      <Message text={"fhjshjhsjdfhsjdfh"} isAnswer={true} />
      <Message text={"fhjshjhsjdfhsjdfh"} isAnswer={false} />
      <Message text={"fhjshjhsjdfhsjdfh"} isAnswer={true} />
      <Message text={"fhjshjhsjdfhsjdfh"} isAnswer={false} />
      <Message text={"fhjshjhsjdfhsjdfh"} isAnswer={true} />
      <Message text={"fhjshjhsjdfhsjdfh"} isAnswer={false} />
      <Message text={"fhjshjhsjdfhsjdfh"} isAnswer={true} />
      <Message text={"fhjshjhsjdfhsjdfh"} isAnswer={false} />
      <Message text={"fhjshjhsjdfhsjdfh"} isAnswer={true} />
    </div>
  );
};
