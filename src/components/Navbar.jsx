import { CalendarDays } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { Button } from "./ui/button";
import { useAuth } from "@/auth/useAuth";
import { GradientText } from "./ui/gradient-text";

export function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  const navLinkClass = ({ isActive }) => `
    group relative px-1 py-2
    text-sm font-medium
    transition-colors duration-300
    ${
      isActive
        ? "text-primary"
        : "text-text-secondary hover:text-primary"
    }
  `;

  const underlineClass = (isActive) => `
    absolute -bottom-0.5 left-1/2
    h-[2px] w-full
    -translate-x-1/2
    bg-primary
    transition-transform duration-300 ease-out
    origin-center
    ${
      isActive
        ? "scale-x-100"
        : "scale-x-0 group-hover:scale-x-100"
    }
  `;

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-border-subtle
        bg-sidebar/90
        backdrop-blur-xl
      "
    >
      <nav
        className="
          relative mx-auto
          flex h-16 max-w-6xl
          items-center justify-between
          px-4
        "
      >
        {/* LOGO */}
        <NavLink
          to="/"
          className="
            flex items-center gap-2.5
            transition-opacity duration-300
            hover:opacity-80
          "
        >
          <div
            className="
              flex h-8 w-8
              items-center justify-center
              rounded-full
              bg-primary
              text-primary-foreground
              shadow-sm
            "
          >
            <CalendarDays className="h-4 w-4" />
          </div>

          <h1 className="text-base font-bold tracking-tight text-foreground">
            <span className="text-primary">Clarity</span> Call
          </h1>
        </NavLink>

        {/* NAVEGACIÓN CENTRAL */}
        <div
          className="
            absolute left-1/2
            hidden -translate-x-1/2
            items-center gap-8
            md:flex
          "
        >
          <NavLink to="/" end className={navLinkClass}>
            {({ isActive }) => (
              <>
                Inicio
                <span className={underlineClass(isActive)} />
              </>
            )}
          </NavLink>

          <NavLink to="/servicios" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Servicios
                <span className={underlineClass(isActive)} />
              </>
            )}
          </NavLink>

          <NavLink to="/team" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Team
                <span className={underlineClass(isActive)} />
              </>
            )}
          </NavLink>

          <NavLink to="/about-us" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Acerca de
                <span className={underlineClass(isActive)} />
              </>
            )}
          </NavLink>

          {isAuthenticated && (
            <NavLink to="/citas" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  Citas
                  <span className={underlineClass(isActive)} />
                </>
              )}
            </NavLink>
          )}
        </div>

        {/* CTA - AGENDAR CITA */}
        <NavLink
          to="/reservar"
          className="
            group relative
            flex items-center justify-center
            px-3 py-2
            text-sm font-semibold
            transition-all duration-300
          "
        >
          {/* Glow exterior */}
          <span
            className="
              pointer-events-none
              absolute left-1/2 top-1/2
              h-7 w-20
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-primary/0
              blur-xl
              transition-all duration-500
              group-hover:w-28
              group-hover:bg-primary/30
            "
          />

          {/* Glow interior */}
          <span
            className="
              pointer-events-none
              absolute left-1/2 top-1/2
              h-3 w-8
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-primary/0
              blur-md
              transition-all duration-500
              group-hover:w-16
              group-hover:bg-primary/40
            "
          />

          {/* Texto */}
          <span className="relative z-10">
            <GradientText
              text="Agendar sesión"
              neon
            />
          </span>

          {/* Línea inferior */}
          <span
            className="
              absolute bottom-0 left-1/2
              h-[2px] w-full
              -translate-x-1/2
              origin-center
              scale-x-0
              bg-primary
              transition-transform
              duration-300
              ease-out
              group-hover:scale-x-100
            "
          />
        </NavLink>

        {/* Acciones de sesión */}
        {isAuthenticated ? (
          <Button variant="ghost" size="sm" onClick={logout}>
            Cerrar sesión
          </Button>
        ) : (
          <Button asChild variant="ghost" size="sm">
            <Link to="/login">Iniciar sesión</Link>
          </Button>
        )}
      </nav>
    </header>
  );
}
