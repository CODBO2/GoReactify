// React    
import React from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Button/Button.jsx";
import styles from "./notFound.module.css";

export default function NotFound() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    };

    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.notFoundContent}>
                <h1 className={styles.errorCode}>404</h1>
                <h2 className={styles.errorTitle}>Página no encontrada</h2>
                <p className={styles.errorMessage}>
                    Lo sentimos, la página que buscas no existe o ha sido movida.
                </p>
                <div className={styles.buttonContainer}>
                    <Button 
                        onClick={handleGoBack}
                        className={styles.backButton}
                    >
                        Volver atrás
                    </Button>
                </div>
            </div>
        </div>
    );
} 