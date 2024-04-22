import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { TooltipProvider } from "@radix-ui/react-tooltip";
// import { ToastProvider } from '@radix-ui/react-toast';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        {/* <ToastProvider> */}
        <TooltipProvider>
            <App />
        </TooltipProvider>
        {/* </ToastProvider> */}
    </React.StrictMode>
);
