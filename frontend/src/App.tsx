import { useEffect, useState } from "react";
import { connect, sendMessage } from "../lib/api/";
import { Header, ChatHistory } from "./components";

function App() {
    const [ChatMessageHistory, setChatHistory] = useState([]);
    useEffect(() => {
        connect((msg) => {
            console.log("new messages");
            setChatHistory((prevchat) => [...prevchat, msg.data]);
        });
    }, []);

    console.log(ChatMessageHistory);

    return (
        <main className="w-full h-full  ">
            <Header />

            <div className="flex items-center justify-center h-full">
                <ChatHistory messages={ChatMessageHistory ?? []} />
            </div>
        </main>
    );
}

export default App;
