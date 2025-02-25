import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import Router from "./router.tsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <BrowserRouter>
         <Router />
      </BrowserRouter>
   </StrictMode>
);
