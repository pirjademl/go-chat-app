import { FC, ReactNode } from "react";

export type ButtonProps = {
    buttonStyle: string;
    children?: ReactNode;
    title: string;
    clickHandler: () => void;
};

export const Button: FC<ButtonProps> = ({
    title,
    buttonStyle,
    children,
    clickHandler,
}) => {
    return (
        <button
            onClick={clickHandler}
            className={`px-3 py-2 text-center rounded-sm ${buttonStyle} `}
        >
            {title}
            {children}
        </button>
    );
};
