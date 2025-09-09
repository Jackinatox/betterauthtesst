"use server"

import LoginComponent from "./LoginComponent"

export default async function LoginPage() {

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <h2>Login</h2>
            <LoginComponent />
        </div>
    )
}