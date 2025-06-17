package main

import "github.com/gin-gonic/gin"

func main() {
	router := gin.Default()

	router.Static("/frontend", "../frontend/dist")
	router.LoadHTMLGlob("../frontend/dist/index.html")

	router.GET("/", func(c *gin.Context) {
		c.HTML(200, "index.html", nil)
	})

	router.NoRoute(func(c *gin.Context) {
		c.HTML(200, "index.html", nil)
	})

	router.Run(":8080")
}
