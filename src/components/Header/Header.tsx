import BlahblahLogo from "@icons/Blahblah.svg?react";
import UnAutreLogo from "@icons/UnAutreLogo.svg?react";
import DialogIcon from "@icons/Dialog.svg?react";
import GridIcon from "@icons/Grid.svg?react";
import ProfilLetterIcon from "@icons/ProfilLetter.svg?react";
import HeaderLink from "./HeaderLink";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  // h-20 = 5rem = 80px
  return (
    <div className="h-20 shadow-md flex items-center shrink-0">
      <button
        className="h-full px-10 border-r-2 border-gray-100 flex items-center"
        onClick={() => navigate("/")}
      >
        <BlahblahLogo />
      </button>
      <div className="flex justify-between px-10 w-full">
        <div className="flex gap-7 items-center">
          <UnAutreLogo />
          <HeaderLink text="Rore mipsum" path="/themes" />
          <HeaderLink text="Corem ipsumdolor" path="/help" />
          <HeaderLink text="Lorem ipsumdolor" path="/credits" />
        </div>
        <div className="flex items-center">
          <span className="px-5 py-3">Aide</span>
          <button className="px-5 py-3">
            <DialogIcon />
          </button>
          <button className="px-5 py-3">
            <GridIcon />
          </button>
          <button className="px-5 py-3">
            <ProfilLetterIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
