"use client"

import { authClient } from "@/utils/auth-client";

export default function LoginComponent() {

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <form
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
                    try {
                        await authClient.signIn.email({ email, password });
                        alert('Login successful!');
                    } catch (err) {
                        alert('Login failed');
                    }
                }}
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                        name="email"
                        id="email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        name="password"
                        id="password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                    Login
                </button>
            </form>
        </div>
    );
}