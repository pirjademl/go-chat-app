var socket = new WebSocket("ws://localhost:8080/ws");

let connect = (cb: any) => {
    console.log("connecting");
    socket.onopen = () => {
        console.log("connected  to websocket");
    };
    socket.onmessage = (msg) => {
        console.log(msg);
        cb(msg);
    };
    socket.onclose = (event) => {
        console.log("closing socket connection ", event);
    };
    socket.onerror = (err) => {
        console.log("socket err", err);
    };
};
let sendMessage = (msg: any) => {
    socket.send(msg);
};
export { connect, sendMessage };
