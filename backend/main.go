package main

import (
	"fmt"
	"log"
	"net/http"
    "github.com/chat-app-go/pkg/websocket"
)



// websocket endpoint
func serverWs(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Host)

	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}
	reader(ws)
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "simple server")
	})
	http.HandleFunc("/ws", serverWs)
	http.ListenAndServe(":8080", nil)
}
