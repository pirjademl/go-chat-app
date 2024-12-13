import { ChangeEvent, FC, forwardRef, Ref, RefObject } from "react";

export type InputProps = {
  ref?: Ref<HTMLInputElement>;
  classNames: string;
  placeholder: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const Input: FC<InputProps> = ({
  classNames,
  placeholder,
  changeHandler,
  value,
}) => {
  return (
    <input
      value={value}
      onChange={changeHandler}
      className={`${classNames} border border-border font-nunito font-thin text-sm`}
      placeholder={placeholder}
    />
  );
};
