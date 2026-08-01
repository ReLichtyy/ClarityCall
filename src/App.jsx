import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { CitasPage } from "./pages/CitasPage";
export default function App() {
  return (
    <div className="app-shell min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto p-4">
        <CitasPage />
      </main>
      <Footer />
    </div> 
  );
}
