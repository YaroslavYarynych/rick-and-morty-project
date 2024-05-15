/// <reference types="vite-plugin-svgr/client" />
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/svg/header/logo.svg?react";

export const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(`${path}`);
  };

  return (
    <header className="w-full h-[80px] bg-white">
      <div className="w-full h-full flex items-center justify-between gap-[20px] py-[10px] pr-[15px] pl-[15px] md:py-[20px] pr-[35px] pl-[35px]">
        <Logo
          className="h-full w-fit flex cursor-pointer place-start"
          onClick={() => handleNavigate("/")}
        />
      </div>
    </header>
  );
};
