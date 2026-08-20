import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="app-shell min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <Footer />

      <Toaster position="top-right" />
    </div>
  );
}