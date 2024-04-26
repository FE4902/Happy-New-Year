import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import RabbitProvider from "./components/RabbitProvider/RabbitProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RabbitProvider>
            <App />
        </RabbitProvider>
    </React.StrictMode>
);
