import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="competencias" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Competências Técnicas</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Tecnologias e ferramentas que domino para entregar soluções de dados de alta qualidade
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-sm px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
