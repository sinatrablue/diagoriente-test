// Tempted to declare a type like HeaderLinkProps but just for one prop is seems overkill
export default function HeaderLink({ text }: { text: string }) {
  // I should've created a theme in a project context
  // please excuse this as it is just a little test sensei
  return (
    <button className="px-5 py-3 rounded-md cursor-pointer hover:bg-[#F0F4FF] active:bg-[#494BFF26] focus:bg-[#494BFF26]">
      {text}
    </button>
  );
}
