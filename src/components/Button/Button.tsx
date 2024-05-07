type ButtonProps = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: Readonly<ButtonProps>) {
  return (
    <button
      className="py-5 px-7 rounded-md text-white bg-[#494BFF] hover:bg-[#6C95FA] active:bg-[#3032CC]"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
