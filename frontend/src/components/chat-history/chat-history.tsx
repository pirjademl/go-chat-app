import { FC, useCallback, useRef } from "react";
import { Button } from "../button/button";
import { sendMessage } from "../../../lib/api";

export type ChatHistoryProps = {
    messages: any;
};

export const ChatHistory: FC<ChatHistoryProps> = ({ messages }) => {
    const inputref = useRef();
    const messageHandler = useCallback(() => {
        console.log("hitting");
        sendMessage(inputref.current.value ?? "");
    }, []);
    return (
        <div className="w-full  p-4 bg-gray-600  h-full flex flex-col ">
            <h3 className="text-lg font-bold ">Chat history</h3>
            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-3 flex-1">
                    {messages.map((message: string, index: number) => (
                        <span key={index}>{message}</span>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    <input type="text" ref={inputref} />
                    <Button
                        clickHandler={messageHandler}
                        title="send "
                        buttonStyle="bg-red-500 text-white"
                    ></Button>
                </div>
            </div>
        </div>
    );
};
