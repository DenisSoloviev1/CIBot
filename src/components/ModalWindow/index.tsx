import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { useModalWindow } from "../ModalWindow/store";
import { Close } from "../../assets/svg";
import { CustomButton } from "../CustomButton";

interface ModalWindowProps {
  children: ReactNode;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({ children }) => {
  const closeModal = useModalWindow((state) => state.close);
  const isOpen = useModalWindow((state) => state.isOpen);

  return (
    <div
      className={classNames(styles.modalWindow, isOpen ? styles.show : "")}
      onClick={closeModal}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <CustomButton onClick={closeModal} className={"close"}>
          <Close />
        </CustomButton>
        {children}
      </div>
    </div>
  );
};
