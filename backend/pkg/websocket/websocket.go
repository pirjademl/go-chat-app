package websocket

import (
	"fmt"
	"io"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

// upgrader function to upgrade from standard http connection to websocket longlasting connection
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(r *http.Request) bool { return true },
}

func Upgrader(w http.ResponseWriter, r *http.Request) (*websocket.Conn, error) {
	socket, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return socket, err
	}

	return socket, nil

}

func Reader(conn *websocket.Conn) {
	for {
		//read in message
		msgType, msg, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}
		// no error can print the message
		fmt.Println(string(msg))

		if err := conn.WriteMessage(msgType, msg); err != nil {
			log.Println(err)
			return
		}

	}
}

func Writer(conn *websocket.Conn) {
	for {
		fmt.Println(("Sending"))
		msgType, msg, err := conn.NextReader()
		if err != nil {
			fmt.Println(err)
			return
		}

		w, err := conn.NextWriter(msgType)
		if err != nil {
			fmt.Println(err)
			return
		}
		if _, err := io.Copy(w, r); err != nil {
			fmt.Println(err)
			return
		}
		if err := w.Close(); err != nil {
			fmt.Println(err)
			return
		}

	}
}
