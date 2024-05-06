import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";

type CardProps = {
  text: string;
  onCheck: () => void;
};

export default function Card({ text, onCheck }: Readonly<CardProps>) {
  const [isCardChecked, setIsCardChecked] = useState(false);
  const handleCardCheck = () => {
    setIsCardChecked(!isCardChecked);
    onCheck();
  };

  return (
    <button
      onClick={handleCardCheck}
      className={`flex gap-4 py-4 px-5 rounded h-14 w-[521px] ${
        isCardChecked ? "bg-[#F0F4FF]" : "bg-[#F6F6F8]"
      }`}
    >
      <Checkbox isChecked={isCardChecked} />
      <span>{text}</span>
    </button>
  );
}
