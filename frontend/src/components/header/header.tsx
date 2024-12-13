import { FC } from "react";
import Logo from "../../assets/logo.webp";

export type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  return (
    <header className=" h-20  sticky top-0 font-nunito  bg-primary text-textPrimary tracking-wider">
      <nav className="flex justify-between items-center  p-4 ">
        <div className="flex items-center gap-3">
          <img src={Logo} className="w-10 h-10 rounded-full" />
          <span className="font-semibold tracing-tight">
            <b className="text-textPrimary font-bold">You</b>Chat
          </span>
        </div>
        <div>
          <h1 className="font-bold text-sm capitalize  ">Hello , You</h1>
        </div>
      </nav>
    </header>
  );
};
