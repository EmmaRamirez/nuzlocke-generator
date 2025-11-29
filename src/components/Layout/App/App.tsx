import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Header } from "components/Common/ui/Header";
import { Sidebar } from "components/Common/ui/Sidebar";
import { ApiExplorer } from "./ApiExplorer";
import { login, register } from "api/auth";
import { useAuthStore } from "./auth";

const handleLogin = async (email: string, password: string) => {
    const response = await login(email, password);
    if (response.token) {
        console.log("Login successful", response.token);
        localStorage.setItem("auth_token", response.token);
        useAuthStore.setState({ token: response.token, isAuthenticated: true });
    }
};

const handleRegister = async (email: string, password: string) => {
    const response = await register(email, password);
    if (response.token) {
        console.log("Register successful", response.token);
        localStorage.setItem("auth_token", response.token);
        useAuthStore.setState({ token: response.token, isAuthenticated: true });
    }
};

// Home/Dashboard page with login/register
const HomePage: React.FC = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (isAuthenticated) {
        return (
            <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Dashboard
                </h1>
                <p className="text-gray-600">
                    Welcome! You are logged in. Use the sidebar to navigate.
                </p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Nuzlocke Generator
            </h1>
            <div className="bg-white rounded-lg shadow p-6 space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Sign In or Register</h2>
                <div className="space-y-3">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => handleLogin(email, password)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => handleRegister(email, password)}
                        className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

// Protected route wrapper
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

// API Explorer page
const ApiExplorerPage: React.FC = () => {
    return (
        <div className="p-6 max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                API Explorer
            </h1>
            <ApiExplorer />
        </div>
    );
};

export const App = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="flex min-h-screen">
                <Sidebar />
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/api-explorer"
                            element={
                                <ProtectedRoute>
                                    <ApiExplorerPage />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </div>
            </main>
        </div>
    );
};
