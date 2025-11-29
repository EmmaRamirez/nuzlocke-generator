import * as React from "react";

import { Header } from "components/Common/ui/Header";
import { Sidebar } from "components/Common/ui/Sidebar";


export const App = () => {
    return <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex min-h-screen">
            <Sidebar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Nuzlocke Generator
                </h1>
            </div>
        </main>
    </div>;
};

