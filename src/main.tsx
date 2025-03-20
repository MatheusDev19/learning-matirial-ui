import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GondolaTest } from "./components/gondola-test";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GondolaTest />
  </StrictMode>
);


