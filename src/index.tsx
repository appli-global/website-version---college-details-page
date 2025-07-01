import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CollegeDetailsPage } from "./screens/CollegeDetailsPage/CollegeDetailsPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <CollegeDetailsPage />
  </StrictMode>,
);
