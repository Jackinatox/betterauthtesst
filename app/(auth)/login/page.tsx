"use server"

export default function LoginPage() {

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <h2>Login</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: "300px" }}>
                <input type="text" placeholder="Username" style={{ padding: "0.5rem" }} />
                <input type="password" placeholder="Password" style={{ padding: "0.5rem" }} />
                <button type="submit" style={{ padding: "0.5rem", cursor: "pointer" }}>Login</button>
            </form>
        </div>
    )
}