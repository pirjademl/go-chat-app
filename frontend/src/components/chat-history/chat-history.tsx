import { IChat } from "../../App";
import { Footer } from "../footer/footer";
import { Message } from "../message/message";
import { FC } from "react";
export type ChatHistoryProps = {
  messages: IChat[];
};

export const ChatHistory: FC<ChatHistoryProps> = ({ messages }) => {
  let date = new Date();
  console.log(date);
  const month = date.toLocaleString("default", { month: "long" });
  const dayOfMonth = date.getDay();

  return (
    <div className="w-full  p-4 bg-secondary  h-full flex flex-col  text-textPrimary  h-[80%] overflow-y-auto tracking-wider">
      <h3 className="text-xs font-bold ">{dayOfMonth + " " + month}</h3>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col  gap-4 flex-1 h-[500px]  p-4">
          {messages.map((message: IChat, index: number) => (
            <Message message={message} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
