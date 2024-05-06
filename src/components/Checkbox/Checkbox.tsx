import CheckIcon from "@icons/Check.svg?react";

export default function Checkbox({
  isChecked,
}: Readonly<{ isChecked: boolean }>) {
  return (
    <button
      className={`flex items-center justify-center h-6 w-6 rounded-lg ${
        isChecked ? "bg-[#494BFF]" : "border border-[#A4A5FF]"
      }`}
    >
      {isChecked && <CheckIcon />}
    </button>
  );
}
