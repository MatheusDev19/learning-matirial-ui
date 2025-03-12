import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Gondola } from "./components/gondola/index.tsx";
import { GondolaWithStack } from "./components/gondola-with-stack/index.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GondolaWithStack />
    {/* <Gondola /> */}
  </StrictMode>
);
