import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Gondola } from "./components/gondola/index.tsx";
// import { GondolaDrag } from "./components/gondola-drag/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <GondolaDrag /> */}
    <Gondola />
  </StrictMode>
);
