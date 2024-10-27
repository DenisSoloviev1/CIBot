import React from "react";
import styles from "./styles.module.scss";
import { Flex, ModalWindow } from "../../components";
import { Profile } from "../../assets/svg";
import { Chat } from "../Chat";
import { InputField } from "../InputField";

export const Main: React.FC = () => {
  return (
    <main>
      <div className={styles.wrapper}>
        <ModalWindow>
          <Flex className={"row"}>
            <a href="https://www.centrinvest.ru/" target="_blanck">
              <Profile />
            </a>
            <h3> Ассистент Рубик</h3>
          </Flex>
          <Chat/>
          <InputField/>
        </ModalWindow>
      </div>
    </main>
  );
};
