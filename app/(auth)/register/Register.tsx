"use client";

import { authClient, useSession } from "@/utils/auth-client";
import { useState } from "react";

function RegisterComponent() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const { data: session } = useSession();

    

    if (session?.user.role === "admin") {
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { data, error } = await authClient.signUp.email({
            email: form.email,
            name: form.username,
            password: form.password,
        });
        if (!error) {
            alert("Registered!");
        }
    };

    return (
        <div
            style={{
                maxWidth: 400,
                margin: "40px auto",
                padding: 24,
                border: "1px solid #ddd",
                borderRadius: 8,
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                background: "#fff",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: 24 }}>Register</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: 8,
                                marginTop: 4,
                                borderRadius: 4,
                                border: "1px solid #ccc",
                            }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: 8,
                                marginTop: 4,
                                borderRadius: 4,
                                border: "1px solid #ccc",
                            }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: 24 }}>
                    <label style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: 8,
                                marginTop: 4,
                                borderRadius: 4,
                                border: "1px solid #ccc",
                            }}
                        />
                    </label>
                </div>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px 0",
                        background: "#0070f3",
                        color: "#fff",
                        border: "none",
                        borderRadius: 4,
                        fontWeight: 600,
                        cursor: "pointer",
                        fontSize: 16,
                        transition: "background 0.2s",
                    }}
                >
                    Register
                </button>
            </form>
        </div>
    );
}

export default RegisterComponent;
