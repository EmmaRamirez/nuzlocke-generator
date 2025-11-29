import * as React from "react";
import { useRouteLoaderData, useRevalidator } from "react-router-dom";
import { login, register } from "api/auth";
import { useAuthStore } from "./auth";
import type { RootLoaderData } from "./RootLayout";

export const HomePage: React.FC = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const { isAuthenticated } = useRouteLoaderData("root") as RootLoaderData || { isAuthenticated: false };
    const revalidator = useRevalidator();

    const handleLogin = async () => {
        setError(null);
        setIsSubmitting(true);
        try {
            const response = await login(email, password);
            if (response.token) {
                localStorage.setItem("auth_token", response.token);
                useAuthStore.setState({ token: response.token, isAuthenticated: true });
                revalidator.revalidate();
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Login failed");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleRegister = async () => {
        setError(null);
        setIsSubmitting(true);
        try {
            const response = await register(email, password);
            if (response.token) {
                localStorage.setItem("auth_token", response.token);
                useAuthStore.setState({ token: response.token, isAuthenticated: true });
                revalidator.revalidate();
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Registration failed");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isAuthenticated) {
        return (
            <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
                <p className="text-gray-600">
                    Welcome! You are logged in. Use the sidebar to navigate.
                </p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Nuzlocke Generator</h1>
            <div className="bg-white rounded-lg shadow p-6 space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Sign In or Register</h2>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-md text-sm">
                        {error}
                    </div>
                )}

                <div className="space-y-3">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isSubmitting}
                        onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                    />
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handleLogin}
                        disabled={isSubmitting}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2 px-4 rounded-md font-medium transition-colors"
                    >
                        {isSubmitting ? "..." : "Login"}
                    </button>
                    <button
                        onClick={handleRegister}
                        disabled={isSubmitting}
                        className="flex-1 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-md font-medium transition-colors"
                    >
                        {isSubmitting ? "..." : "Register"}
                    </button>
                </div>
            </div>
        </div>
    );
};

