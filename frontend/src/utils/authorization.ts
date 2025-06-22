import { redirect } from "react-router";

export async function authorization() {
    // Extrae el token del localStorage.
    const token = localStorage.getItem("token");

    // Verifica si el token existe.
    if (token === null) return redirect("/");

    // Intenta autenticar el token.
    try {
        const response = await fetch("http://localhost:8080/api/auth", {
            headers: {
                "Authorization": `${token}`
            }
        });
        if (response.status === 401) return redirect("/");
    } catch (error) {
        return redirect("/");
    }

    return null;
}