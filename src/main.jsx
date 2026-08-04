import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import { HomePage } from "./pages/HomePage";
import { CitasPage } from "./pages/CitasPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="citas" element={<CitasPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);