import * as React from "react";
import { injectGlobal } from "emotion";
import { ErrorBoundary } from "components";
import "./index.css";

void injectGlobal`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }
`;

const mountNode = document.getElementById("app");

async function createRender() {
    const { render } = await import("react-dom");

    const App = React.lazy(() =>
        import("components/Layout/App").then((res) => ({ default: res.App })),
    );

    render(
        <ErrorBoundary>
            <React.Suspense fallback={"Loading App..."}>
                <App />
            </React.Suspense>
        </ErrorBoundary>,
        mountNode
    );
}

createRender().catch((err) => {
    console.error("Failed to create render:", err);
    document.body.innerHTML = `<div style="color: red; padding: 20px;"><h1>Failed to start app</h1><pre>${err.message}\n${err.stack}</pre></div>`;
});