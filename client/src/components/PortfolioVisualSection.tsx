export default function PortfolioVisualSection() {
  return (
    <section id="portfolio-visual" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Portfólio Visual</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Explore exemplos interativos dos meus dashboards e visualizações de dados
        </p>
        
        {/* Desktop: iframe em 16:9 e imagem com mesma altura | Mobile: iframe 16:9 e imagem com altura auto */}
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
          {/* Iframe SEMPRE em aspect ratio 16:9 */}
          <div className="w-full lg:flex-1">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://lookerstudio.google.com/embed/reporting/6727d10a-4ce9-489b-bd7c-ce93b69c23b6/page/p_pib67of4ud"
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg border border-border/50"
                frameBorder="0"
                allowFullScreen
                title="Portfólio Visual - Looker Studio"
              />
            </div>
          </div>
          
          {/* Imagem dos dashboards */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            {/* Mobile: largura total, altura automática */}
            <img
              src="/portfolio-visual.png"
              alt="Exemplos de dashboards e visualizações de dados"
              className="w-full h-auto lg:hidden rounded-xl shadow-lg border border-border/50"
            />
            {/* Desktop: se ajusta à altura do iframe (aproximadamente) */}
            <img
              src="/portfolio-visual.png"
              alt="Exemplos de dashboards e visualizações de dados"
              className="hidden lg:block w-auto rounded-xl shadow-lg border border-border/50"
              style={{ maxHeight: 'calc((100vw - 8rem) * 0.6 * 0.5625)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
