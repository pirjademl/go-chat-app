import { FC, ReactNode, useEffect } from "react";

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
      className={` flex items-center px-3 py-2 justify-center gap-3 text-center text-sm rounded-sm border border-border ${buttonStyle} `}
    >
      {title}
      {children}
    </button>
  );
};
