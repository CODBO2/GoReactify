import { redirect } from "react-router";

export async function loaderLogin() {
    const token = localStorage.getItem("token");
    
    // Verifica si el token existe.
    if (token) {
        try {
            const response = await fetch("http://localhost:8080/api/auth", {
                headers: {
                    "Authorization": `${token}`
                }
            });
            if (response.status === 200) {
                return redirect("/todo");
            }
        } catch (error) {
            console.log("Error al autenticar el token.")
        }
    }

    return null;
}