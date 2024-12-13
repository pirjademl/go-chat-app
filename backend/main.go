package main

import (
	"fmt"
	"net/http"

	"github.com/pirjademl/realtime-chat-go-react/pkg/websocket"
)

// websocket endpoint
func serveWS(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("websocket endpoint hit")

	ws, err := websocket.Upgrade(w, r)

	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
		return
	}
	client := &websocket.Client{
		Conn: ws,
		Pool: pool,
	}
	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWS(pool, w, r)
	})

}
func main() {
	fmt.Println("Distributed chat App v0.01")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
