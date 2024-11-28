import { FC } from "react";
import Logo from "../../assets/react.svg";

export type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
    return (
        <header className="bg-black h-20  sticky top-0">
            <nav className="flex justify-between items-center text-gray-500 p-4 ">
                <div className="flex items-center gap-3">
                    <img src={Logo} />
                    <span className="font-bold">
                        <b className="text-yellow-400">Bihari</b>Chat
                    </span>
                </div>
                <div>
                    <h1 className="font-bold text-sm ">
                        A chat app for biharis cause they don't have else
                    </h1>
                </div>
            </nav>
        </header>
    );
};
