import Checkbox from "../Checkbox/Checkbox";

export type CardProps = {
  text: string;
  id: string;
  isChecked: boolean;
  onClick: (id: string) => void;
};

export default function Card({
  text,
  id,
  isChecked,
  onClick,
}: Readonly<CardProps>) {
  return (
    <button
      onClick={() => onClick(id)}
      className={`flex gap-4 py-4 px-5 rounded h-14 w-[521px] ${
        isChecked ? "bg-[#F0F4FF]" : "bg-[#F6F6F8]"
      }`}
    >
      <Checkbox isChecked={isChecked} />
      <span>{text}</span>
    </button>
  );
}
