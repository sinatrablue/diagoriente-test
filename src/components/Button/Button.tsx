type ButtonProps = {
  text: string;
  onClick: () => void;
  variant: "large" | "small";
};

export default function Button({
  text,
  onClick,
  variant,
}: Readonly<ButtonProps>) {
  return (
    <button
      className={`${
        variant === "small" ? "py-3 px-5" : "py-5 px-7"
      } rounded-md text-white bg-[#494BFF] hover:bg-[#6C95FA] active:bg-[#3032CC]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
