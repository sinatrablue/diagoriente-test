import { NavLink, useLocation } from "react-router-dom";

type HeaderLinkProps = {
  text: string;
  path: string;
};

export default function HeaderLink({ text, path }: Readonly<HeaderLinkProps>) {
  const location = useLocation();
  // I should've created a theme in a project context
  // please excuse this as it is just a little test sensei
  return (
    <NavLink
      to={path}
      className={`px-5 py-3 rounded-md cursor-pointer hover:bg-[#F0F4FF] active:bg-[#494BFF26] ${
        location.pathname.includes(path) && "bg-[#494BFF26]"
      }`}
    >
      {text}
    </NavLink>
  );
}
