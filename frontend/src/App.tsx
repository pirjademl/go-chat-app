import { useEffect, useState } from "react";
import { connect } from "../lib/api/";
import { Header, Footer, ChatHistory } from "./components";
import { IChat } from "./types";

function App() {
  const [ChatMessageHistory, setChatHistory] = useState<IChat[]>([]);
  useEffect(() => {
    connect((msg: { type: number; data: string }) => {
      const parsedMessage = JSON.parse(msg.data);
      setChatHistory((prevChat) => [...prevChat, parsedMessage]);
    });
  }, []);

  return (
    <div className="w-full   flex flex-col h-full font-nunito ">
      <Header />
      <ChatHistory messages={ChatMessageHistory} />
      <Footer />
    </div>
  );
}

export default App;
