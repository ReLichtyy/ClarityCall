import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import { AuthProvider } from "./auth/AuthProvider";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { About } from "./pages/About";
import { CitasPage } from "./pages/CitasPage";
import { EspecialidadDetallePage } from "./pages/EspecialidadDetallePage";
import { EspecialidadesPage } from "./pages/EspecialidadesPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { MentorDetailPage } from "./pages/MentorDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NuevaCitaPage } from "./pages/NuevaCitaPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ReservarPage } from "./pages/ReservarPage";
import { TeamPage } from "./pages/TeamPage";
import { UnauthorizePage } from "./pages/UnauthorizePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            {/* Públicas */}
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="about-us" element={<About />} />
            <Route path="unauthorized" element={<UnauthorizePage />} />

            {/* Catálogo de especialidades */}
            <Route path="especialidades" element={<EspecialidadesPage />} />
            <Route
              path="especialidades/:slug"
              element={<EspecialidadDetallePage />}
            />

            {/* Perfil de mentor */}
            <Route path="mentores/:id" element={<MentorDetailPage />} />

            {/* Flujo de reserva del usuario */}
            <Route path="reservar" element={<ReservarPage />} />

            {/* Requieren sesión. /citas es la gestión interna de citas,
                no el flujo de reserva público. */}
            <Route element={<ProtectedRoute />}>
              <Route path="citas" element={<CitasPage />} />
              <Route path="AgendarCita" element={<NuevaCitaPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
