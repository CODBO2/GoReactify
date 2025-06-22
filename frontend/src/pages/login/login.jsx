// React    
import React, { useState } from "react";

import { useNavigate } from "react-router";

import styles from "./login.module.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Extrae el token del localStorage.
        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: username, password: password })
            });

            const data = await response.json();

            if (data.auth) {
                localStorage.setItem("token", data.token);
                navigate("/todo");
            }
        } catch (error) {
            console.log(error)
            console.log("Error al iniciar sesión.")
        }
    };

    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h1 className={styles.loginTitle}>Sign in to GitHub</h1>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Username or email address"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    autoComplete="username"
                    required
                />
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                />
                <button className={styles.loginButton} type="submit">Sign in</button>
            </form>
        </div>
    );
}