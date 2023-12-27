import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Goerli } from "@thirdweb-dev/chains";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={Goerli}
      clientId={import.meta.env.VITE_PUBLIC_THIRDWEB_CLIENT_ID}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
