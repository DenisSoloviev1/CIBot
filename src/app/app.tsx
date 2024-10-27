import React from "react";
import "./App.scss";
import { Header, Main, Footer } from "../widjets";
import { useModalWindow } from "../components/ModalWindow/store";
import { CustomButton } from "../components";

const App: React.FC = () => {
  const openModal = useModalWindow((state) => state.open);

  return (
    <>
      <Header />
      <Main />
      <div className="cat">
        <div className="message">
          <p>
            Привет, я Рубик, <br /> бот-помощник!
          </p>
        </div>
        <CustomButton onClick={openModal}>
          <img src="/cat.png" />
        </CustomButton>
      </div>
      <Footer />
    </>
  );
};

export default App;
