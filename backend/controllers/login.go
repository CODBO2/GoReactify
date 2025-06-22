package controller

import (
	"github.com/gin-gonic/gin"
)

type Credentials struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func Login(c *gin.Context) {
	var credentials Credentials

	if err := c.ShouldBindJSON(&credentials); err != nil {
		c.JSON(400, gin.H{"error": "Solicitud inválida"})
		return
	}

	if credentials.Email != "admin@admin.com" || credentials.Password != "admin" {
		c.JSON(401, gin.H{"error": "Credenciales incorrectas"})
		return
	}

	// Generar token
	token := "1234567890"

	c.JSON(200, gin.H{
		"auth":    true,
		"message": "Logged in",
		"token":   token,
	})
}
