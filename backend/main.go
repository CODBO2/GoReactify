package main

import (
	controller "GoReactify/controllers"

	"github.com/gin-gonic/gin"
)

func main() {
	var server *gin.Engine = gin.Default()

	// API
	server.POST("/api/login", controller.Login)
	server.GET("/api/auth", controller.Auth)

	// Renderiza la página web.
	server.Static("/frontend", "../frontend/dist")
	server.LoadHTMLGlob("../frontend/dist/*.html")
	server.NoRoute(func(c *gin.Context) {
		c.HTML(200, "index.html", nil)
	})

	server.Run(":8080")
}
