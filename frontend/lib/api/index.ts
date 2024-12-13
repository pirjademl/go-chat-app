var socket = new WebSocket("ws://localhost:8080/ws");

let connect = (cb: any) => {
  socket.onopen = () => {
    console.log("connected  to websocket");
  };
  socket.onmessage = (msg) => {
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
