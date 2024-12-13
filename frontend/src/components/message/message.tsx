import { FC } from "react";
import { IChat } from "../../App";
type MessageProps = {
  message: { type: number; body: string };
};

export const Message: FC<MessageProps> = ({ message }) => {
  console.log("message rendered");
  return (
    <span className="py-2 px-3   text-sm  bg-primary  text-[#333] font-nunito w-fit rounded-md">
      {message.body}
    </span>
  );
};
