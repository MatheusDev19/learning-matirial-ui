import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Gondola } from "./components/gondola/index.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Gondola />
  </StrictMode>
);
