import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Projetos & Cases</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Seleção de projetos que demonstram minha experiência em análises avançadas, machine learning, produtos de dados, automação e visualização estratégica
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
