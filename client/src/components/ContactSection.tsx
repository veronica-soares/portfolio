import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-muted/30 via-muted/20 to-primary/5">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Vamos Conversar?</h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 w-full sm:w-auto"
              onClick={() => window.location.href = "mailto:veronicaferreirasoares@gmail.com"}
            >
              <Mail className="w-5 h-5" />
              Enviar mensagem
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="gap-2 w-full sm:w-auto border-primary text-primary hover:bg-primary/10"
              onClick={() => window.open("https://www.linkedin.com/in/veronicafsoares", "_blank")}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="gap-2 w-full sm:w-auto border-primary text-primary hover:bg-primary/10"
              onClick={() => window.open("https://wa.me/5562992285202", "_blank")}
            >
              <Phone className="w-5 h-5" />
              (62) 99228-5202
            </Button>
          </div>
          
          <div className="pt-12 border-t border-border/50 mt-12">
            <p className="text-sm text-muted-foreground">
              © 2025 Veronica Ferreira Soares. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
