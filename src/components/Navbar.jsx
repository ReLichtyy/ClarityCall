import { CalendarDays } from "lucide-react";
import { NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-sidebar/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary-subtle text-primary shadow-sm">
            <CalendarDays className="h-5 w-5" />
          </div>

          <h1 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
            <span className="text-primary">Clarity</span> Call
          </h1>
        </NavLink>

        <div className="flex items-center gap-2 rounded-full border border-border-default bg-surface-elevated/90 p-1 shadow-sm">
          <Button asChild variant="ghost">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-full px-4 ${
                  isActive
                    ? "bg-primary-subtle text-primary"
                    : "text-text-secondary hover:bg-surface-hover hover:text-text-primary"
                }`
              }
            >
              Inicio
            </NavLink>
          </Button>

          <Button asChild variant="ghost">
            <NavLink
              to="/citas"
              className={({ isActive }) =>
                `rounded-full px-4 ${
                  isActive
                    ? "bg-primary-subtle text-primary"
                    : "text-text-secondary hover:bg-surface-hover hover:text-text-primary"
                }`
              }
            >
              Citas
            </NavLink>
          </Button>

          <Button asChild variant="ghost">
            <NavLink
              to="/AgendarCita"
              className={({ isActive }) =>
                `rounded-full px-4 ${
                  isActive
                    ? "bg-primary-subtle text-primary"
                    : "text-text-secondary hover:bg-surface-hover hover:text-text-primary"
                }`
              }
            >
              Agendar cita
            </NavLink>
          </Button>
        </div>
      </nav>
    </header>
  );
}
