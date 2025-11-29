import * as React from "react";

export const Header = () => {
    return <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        Nuzlocke Generator
                    </div>
                </div>
            </div>
        </div>
    </header>;
};
