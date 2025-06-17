import React from "react";
import styles from "./image.module.css";

export default function Image() {
    return (
        <div className={styles.imageBg}>
            <div className={styles.imageContainer}>
                <h1 className={styles.imageTitle}>Imagen destacada</h1>
                <img
                    className={styles.imagePreview}
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                    alt="Paisaje de montaña al atardecer"
                />
                <p className={styles.imageDesc}>
                    Un hermoso paisaje de montaña al atardecer, ejemplo de Unsplash.
                </p>
            </div>
        </div>
    );
}