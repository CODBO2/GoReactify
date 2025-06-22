package controller

import (
	"github.com/gin-gonic/gin"
)

func Auth(c *gin.Context) {
	token := c.GetHeader("Authorization")
	if token == "" {
		c.JSON(401, gin.H{"error": "No token provided"})
		return
	}

	if token != "1234567890" {
		c.JSON(401, gin.H{"error": "Invalid token"})
		return
	}

	c.JSON(200, gin.H{
		"message": "Authorized",
		"auth":    true,
	})
}
