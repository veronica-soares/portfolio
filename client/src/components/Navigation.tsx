import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Veronica Soares
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => scrollToSection("portfolio-visual")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Portfólio Visual
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Projetos & Cases
            </button>
            <button
              onClick={() => scrollToSection("competencias")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Competências
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contato
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) {
                menu.classList.toggle("hidden");
              }
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
          <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                scrollToSection("sobre");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => {
                scrollToSection("portfolio-visual");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Portfólio Visual
            </button>
            <button
              onClick={() => {
                scrollToSection("projetos");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Projetos & Cases
            </button>
            <button
              onClick={() => {
                scrollToSection("competencias");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Competências
            </button>
            <Button
              onClick={() => {
                scrollToSection("contato");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
            >
              Contato
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
