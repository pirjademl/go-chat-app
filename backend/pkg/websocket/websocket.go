package websocket

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

// https://tutorialedge.net/projects/chat-system-in-go-and-react/part-1-initial-setup
// upgrader function to upgrade from standard http connection to web Socket long-lasting connection
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(r *http.Request) bool { return true },
}

func Upgrade(w http.ResponseWriter, r *http.Request) (*websocket.Conn, error) {
	socket, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return socket, err
	}

	return socket, nil

}
