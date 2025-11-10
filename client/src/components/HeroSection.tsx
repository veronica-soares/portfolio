import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5"
    >
      <div className="container mx-auto px-4 text-center" style={{marginTop: '49px'}}>
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
            Veronica Ferreira Soares
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
            Especialista em Data Analytics & Visualização de Dados
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transformando dados complexos em insights estratégicos através de análises avançadas e visualização impactante
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm md:text-base text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Anápolis, GO</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>4+ anos de experiência</span>
            </div>
          </div>
          
          {/* Botões de navegação para seções */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 text-foreground hover:bg-primary/10"
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Sobre Mim
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 text-foreground hover:bg-primary/10"
              onClick={() => document.getElementById('portfolio-visual')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Portfólio Visual
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 text-foreground hover:bg-primary/10"
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Projetos & Cases
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 text-foreground hover:bg-primary/10"
              onClick={() => document.getElementById('competencias')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Competências
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 text-foreground hover:bg-primary/10"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contato
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 w-full sm:w-auto"
              onClick={() => window.open("https://www.linkedin.com/in/veronicafsoares", "_blank")}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 w-full sm:w-auto border-primary text-primary hover:bg-primary/10"
              onClick={() => window.location.href = "mailto:veronicaferreirasoares@gmail.com"}
            >
              <Mail className="w-5 h-5" />
              Enviar Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
