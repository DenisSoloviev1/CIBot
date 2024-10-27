import React, { useState } from "react";
import styles from "./styles.module.scss";
import { CustomButton } from "../../components";
import { Arrow, Mic, Question, Rec } from "../../assets/svg";

export const InputField: React.FC = () => {
  const [voiceChange, setVoiceChange] = useState(<Mic />);
  const [inputValue, setInputValue] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (!isRecording) {
      setVoiceChange(value ? <Arrow /> : <Mic />);
    }
  };

  const handleClick = () => {
    if (!isRecording && voiceChange.type === Mic) {
      setVoiceChange(<Rec />);
      setIsRecording(true);
    } else {
      setVoiceChange(inputValue ? <Arrow /> : <Mic />);
      setIsRecording(false);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <CustomButton>
        <Question />
      </CustomButton>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        disabled={isRecording} // Блокировка ввода при записи
        className={isRecording ? styles.disabledInput : ""}
      />
      <CustomButton onClick={handleClick}>{voiceChange}</CustomButton>
    </div>
  );
};
