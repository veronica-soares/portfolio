import { Card, CardContent, CardHeader } from "@/components/ui/card";

    interface ProjectCardProps {
      category: string;
      title: string;
      client: string;
      period: string;
      challenge: string;
      solution: string;
      impact: string[];
      technologies: string[];
    }

    export default function ProjectCard({
      category,
      title,
      client,
      period,
      challenge,
      solution,
      impact,
      technologies,
    }: ProjectCardProps) {
      return (
        <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-border/50">
          <CardHeader className="space-y-3 pb-4">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {category}
              </span>
              <span className="text-xs text-muted-foreground">{period}</span>
            </div>
            <h3 className="text-xl font-bold text-foreground leading-tight">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Cliente:</span> {client}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Desafio</h4>
              <p className="text-sm text-foreground/80 leading-relaxed text-justify">{challenge}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Solução</h4>
              <p className="text-sm text-foreground/80 leading-relaxed text-justify">{solution}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Impacto</h4>
              <ul className="space-y-1.5">
                {impact.map((item, index) => (
                  <li key={index} className="text-sm text-foreground/80 flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0 w-2 h-2 bg-primary rounded-full" />
                    <span className="leading-relaxed text-justify">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Tecnologias</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }