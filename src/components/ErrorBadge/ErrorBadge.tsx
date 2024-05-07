import AlertIcon from "@icons/Alert.svg?react";

// 1 prop = no dedicated type
export default function ErrorBadge({ text }: Readonly<{ text: string }>) {
  return (
    <div className="py-2 px-1 rounded-md flex items-center gap-2 bg-[#FFCECD] w-fit">
      <AlertIcon />
      <span className="text-xs">{text}</span>
    </div>
  );
}
