import React from "react";
import styles from "./styles.module.scss";
import { Logo } from "../../assets/svg";

export const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.wrapper}>
        <Logo />
        <nav>
          <a href="https://www.centrinvest.ru/about" target="_blanck">О нас</a>
          <a href="https://www.centrinvest.ru/" target="_blanck">Услуги</a>
          <a href="https://www.centrinvest.ru/about/contacts" target="_blanck">Контакты</a>
        </nav>
      </div>
    </header>
  );
};
