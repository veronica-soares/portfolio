export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Sobre Mim</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Conheça minha trajetória e experiência em Data Analytics
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {/* Foto - 1/3 */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="w-48 md:w-full max-w-xs">
              <img
                src="/veronica-photo.jpg"
                alt="Veronica Ferreira Soares"
                className="w-full h-auto rounded-2xl shadow-lg object-cover aspect-square"
              />
            </div>
          </div>
          
          {/* Texto - 2/3 */}
          <div className="md:col-span-2 space-y-6 text-foreground/90">
            <p className="text-base md:text-lg leading-relaxed text-justify">
              Profissional com sólida experiência em Data Visualization, Business Intelligence e Data Analytics, unindo habilidades técnicas e estratégicas na criação de produtos de dados e soluções analíticas.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-justify">
              Atualmente, líder da área de Data Visualization na Vitrio Consultoria, com atuação voltada à gestão de equipes multidisciplinares, governança de dados, automação de processos e storytelling com dados.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-justify">
              Ampla vivência no ecossistema de dados do Google Cloud, atuando com BigQuery para análise avançada e machine learning, Cloud Run e Cloud Schedule para orquestração e automação de pipelines analíticos, e Vertex AI para aplicação de modelos de inteligência artificial em escala.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-justify">
              Utiliza Figma, Looker Studio e outras plataformas de visualização de dados para transformar informações complexas em insights visuais estratégicos e acionáveis, apoiando decisões de negócio com clareza e impacto.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-justify">
              Além disso, possui domínio em n8n para integrações e automações no-code, conectando múltiplas fontes e sistemas em fluxos inteligentes de dados e relatórios dinâmicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
