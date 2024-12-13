import { useCallback, useState, ChangeEvent } from "react";
import { Button } from "../button";
import { Input } from "../input";
import { sendMessage } from "../../../lib/api";
export const Footer = () => {
  const [chatmessage, setMessage] = useState("");
  const messageChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
    },
    [],
  );

  const messageHandler = useCallback(() => {
    if (!chatmessage) {
      return;
    }
    sendMessage(chatmessage);
    setMessage("");
  }, [chatmessage]);

  return (
    <div className="flex items-center gap-3  mt-auto p-4 bg-primary overflow-hidden border border-slate-500/40">
      <Input
        classNames=" py-2 px-3 rounded-sm focus:outline-none flex-1"
        placeholder="enter message"
        value={chatmessage}
        changeHandler={messageChangeHandler}
      />
      <Button
        clickHandler={messageHandler}
        title="send "
        buttonStyle="bg-secondary transition-colors transition-500 hover:bg-primary/50  uppercase w-1/4 focus:outline-none font-bold "
      ></Button>
    </div>
  );
};
