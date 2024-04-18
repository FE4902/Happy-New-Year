import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { DesignSystemProvider } from "./components/DesignSystemProvider/DesignSystemProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <DesignSystemProvider>
            <App />
        </DesignSystemProvider>
    </React.StrictMode>
);
