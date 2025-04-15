import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GondolaTest } from "./components/gondola-test";
import { GondolaMt } from "./components/gondola-mt";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GondolaMt />
  </StrictMode>
);


