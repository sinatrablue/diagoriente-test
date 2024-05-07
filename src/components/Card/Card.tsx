import Checkbox from "../Checkbox/Checkbox";

export type CardProps = {
  text: string;
  id: string;
  isChecked: boolean;
  onClick: (id: string) => void;
  variant: "standard" | "slim";
};

export default function Card({
  text,
  id,
  isChecked,
  onClick,
  variant,
}: Readonly<CardProps>) {
  return (
    <button
      onClick={() => onClick(id)}
      className={`flex gap-4 ${
        variant === "slim" ? "py-3 px-4" : "py-4 px-5"
      } rounded-md w-[521px] ${isChecked ? "bg-[#F0F4FF]" : "bg-[#F6F6F8]"}`}
    >
      <Checkbox isChecked={isChecked} />
      <span className="text-start">{text}</span>
    </button>
  );
}
