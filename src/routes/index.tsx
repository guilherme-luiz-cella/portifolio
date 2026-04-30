import { createFileRoute } from "@tanstack/react-router";
import { PortfolioLanguageProvider } from "@/application/PortfolioLanguageProvider";
import { BootScreen } from "@/components/BootScreen";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <PortfolioLanguageProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <BootScreen />
        <div
          className="pointer-events-none fixed inset-0 z-40 crt-scanlines opacity-40"
          aria-hidden
        />
        <NavBar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </PortfolioLanguageProvider>
  );
}
