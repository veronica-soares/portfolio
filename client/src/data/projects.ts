export interface Project {
  category: string;
  title: string;
  client: string;
  period: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
}

export const projects: Project[] = [
  {
    category: "Produtos de Dados & Analytics",
    title: "Produtos de Analytics para E-commerce de Grande Varejo",
    client: "Granado, Growth Supplements, Bauducco",
    period: "2023-2025",
    challenge: "Grandes e-commerces do varejo precisavam de análises profundas e customizadas para entender comportamento de compra, sazonalidade, performance de produtos e relacionamento com clientes.",
    solution: "Desenvolvimento de suite completa de produtos analíticos: (1) Análises sazonais de eventos-chave (Black Friday, Natal, datas comemorativas) e seu impacto na receita e comportamento de compra; (2) Análise de produtos incluindo top sellers, perda estimada por falta de estoque, e pareamento de produtos usando metodologia Apriori; (3) Clusterização de compradores utilizando K-means com otimização de hiperparâmetros, seguida de interpretação dos clusters via LLM para gerar insights qualitativos. Análise de métricas fundamentais e derivadas, amplitude e profundidade de interesses de compra, cadência e saúde do relacionamento com a marca.",
    impact: [
      "Insights estratégicos sobre impacto de eventos sazonais na receita",
      "Identificação de oportunidades de cross-sell através de pareamento Apriori",
      "Quantificação de perda de receita por falta de estoque",
      "Clusterização de clientes com K-means otimizado e interpretação via LLM",
      "Segmentação avançada de compradores por amplitude, profundidade e cadência"
    ],
    technologies: ["BigQuery", "Python", "SQL", "K-means", "LLMs", "Apriori", "Google Analytics", "Looker Studio", "Estatística"]
  },
  {
    category: "Data Science & Machine Learning",
    title: "Análises Avançadas de Comportamento e Clusterização",
    client: "Vitrio Consultoria (clientes e-commerce)",
    period: "2023-2024",
    challenge: "E-commerces precisavam entender padrões complexos de comportamento de usuários, segmentação avançada de públicos e identificação de oportunidades de otimização de UX para estratégias de marketing direcionadas.",
    solution: "Análise estatística profunda de comportamento de compras, estudos de usabilidade de sites usando Google Analytics, clusterização de usuários usando técnicas de machine learning, aplicação de LLMs para análise qualitativa de padrões e insights.",
    impact: [
      "Segmentação precisa de públicos para campanhas personalizadas",
      "Identificação de oportunidades de otimização de UX baseada em dados",
      "Insights qualitativos gerados por IA sobre padrões de comportamento"
    ],
    technologies: ["BigQuery", "Python", "SQL", "Google Analytics", "Machine Learning", "LLMs", "Estatística", "Clusterização"]
  },
  {
    category: "Automação & Processos",
    title: "Automação de Integração Pré e Pós-Click com Google Sheets",
    client: "Vitrio Consultoria (time de mídia)",
    period: "2024",
    challenge: "A integração entre dados pré e pós-click era extremamente manual e morosa, com múltiplos pontos de manutenção. O time de mídia dependia constantemente do time de dados para realizar ajustes, gerando gargalos operacionais.",
    solution: "Desenvolvimento de sistema de automação usando Google Sheets integrado com Apps Script (JavaScript). Criação de regras automatizadas que processam e integram dados de campanhas, permitindo que o time de mídia tenha controle total sobre a integração de forma facilitada e independente.",
    impact: [
      "Redução de 15 para 1 task mensal (redução de 93%)",
      "Time de mídia empoderado com controle total sobre integração de dados",
      "Eliminação de dependência do time de dados para ajustes operacionais",
      "Redução drástica de pontos de manutenção manual"
    ],
    technologies: ["Google Sheets", "Apps Script", "JavaScript", "Automação de Processos"]
  },
  {
    category: "Governança & Qualidade de Dados",
    title: "Monitor de Saúde de Tagueamento (Google Analytics)",
    client: "Vitrio Consultoria (múltiplos clientes)",
    period: "2023-2025",
    challenge: "Clientes enfrentavam problemas recorrentes com tagueamento de analytics, resultando em dados inconsistentes e decisões baseadas em informações incorretas. Falta de visibilidade sobre a saúde do tagueamento.",
    solution: "Desenvolvimento de Monitor de Tags que valida o tagueamento contra planejamento prévio definido. Sistema identifica automaticamente: tags com hiato de disparo, tags que não disparam há algum tempo, tags com disparos irregulares, e tags disparando diariamente conforme esperado. Utiliza dados do Google Analytics para verificação contínua dos disparos.",
    impact: [
      "Identificação proativa de problemas de tagueamento antes de impactar decisões",
      "Redução de dados inconsistentes em análises",
      "Auditoria automatizada contra planejamento de tags"
    ],
    technologies: ["Google Analytics", "BigQuery", "Python", "Looker Studio", "Data Quality"]
  },
  {
    category: "Analytics em Tempo Real",
    title: "Monitoramento de Faturamento E-commerce em Tempo Real",
    client: "Vitrio Consultoria (clientes e-commerce)",
    period: "2023-2024",
    challenge: "Clientes de e-commerce precisavam acompanhar faturamento e métricas de vendas em tempo real para tomada de decisões ágeis, especialmente durante eventos sazonais e campanhas.",
    solution: "Extração automatizada de dados de plataformas de e-commerce via APIs, tratamento e transformação de dados em tempo real usando Cloud Run, dashboards com atualização automática em Looker Studio, alertas configuráveis para métricas críticas de faturamento.",
    impact: [
      "Visibilidade em tempo real do desempenho de vendas durante eventos",
      "Tomada de decisões ágil baseada em dados atualizados",
      "Identificação rápida de problemas operacionais (queda de vendas, falhas no checkout)",
      "Alertas automáticos para métricas fora do esperado"
    ],
    technologies: ["BigQuery", "Cloud Run", "APIs de E-commerce", "Looker Studio", "Python"]
  },
  {
    category: "Visualização de Dados & UX",
    title: "Reestruturação de Layout e Storytelling de Dashboards",
    client: "Vitrio Consultoria (50+ clientes)",
    period: "2024-2025",
    challenge: "Mais de 50 clientes utilizavam dashboards com layouts inconsistentes e genéricos, dificultando a interpretação de dados e a tomada de decisões estratégicas em diferentes níveis hierárquicos.",
    solution: "Transição de visual padrão para aplicação individualizada do brand book de cada cliente. Implementação de hierarquia visual estratégica para atender diferentes níveis organizacionais (executivo ao operacional), transformando cada dashboard em um único centro da verdade. Aplicação de princípios de storytelling com dados e técnicas de UX/UI Design específicas para BI.",
    impact: [
      "50+ clientes com experiência de visualização personalizada e alinhada à identidade da marca",
      "Dashboards estruturados como centro único da verdade para tomada de decisões",
      "Hierarquia visual clara atendendo desde executivos até nível operacional",
      "Redução significativa no tempo de interpretação de dados"
    ],
    technologies: ["Looker Studio", "Power BI", "Figma", "Design Thinking", "Brand Design"]
  },
  {
    category: "Liderança & Gestão",
    title: "Estruturação da Área de DataViz na Empresa",
    client: "Vitrio Consultoria (interno)",
    period: "2024-2025",
    challenge: "Necessidade de criar uma área dedicada de Visualização de Dados com processos estruturados, padrões de qualidade e equipe especializada para atender crescente demanda de clientes.",
    solution: "Planejamento estratégico da área de DataViz, definição de roadmap e objetivos de longo prazo, estruturação de processos e metodologias ágeis, desenvolvimento de programas de treinamento em boas práticas, gestão de equipe multidisciplinar, criação de guia de estilo e padrões de visualização.",
    impact: [
      "Criação de área estratégica de DataViz reconhecida no mercado",
      "Padronização de entregas com qualidade consistente",
      "Desenvolvimento de equipe especializada e capacitada",
      "Posicionamento da empresa como referência em visualização de dados",
      "Aumento de 40% na capacidade de entrega da área"
    ],
    technologies: ["Gestão de Projetos", "Metodologias Ágeis", "Treinamento", "Design System"]
  },
  {
    category: "Produto de Dados & Gestão",
    title: "Sistema de Cadastro e Gestão de Pessoas",
    client: "Vitrio Consultoria (interno)",
    period: "2024",
    challenge: "Necessidade de centralizar e gerenciar informações de colaboradores e clientes de forma estruturada e escalável, eliminando planilhas dispersas e processos manuais.",
    solution: "Planejamento da arquitetura de dados, desenvolvimento de sistema de cadastro integrado com BigQuery, implementação de dashboards de gestão em Looker Studio, automação de processos de onboarding e atualização de informações.",
    impact: [
      "Centralização de informações de pessoas em fonte única da verdade",
      "Redução de 40% no tempo gasto em processos administrativos",
      "Melhoria na governança de dados de pessoas",
      "Automação de onboarding e atualizações cadastrais"
    ],
    technologies: ["Google Cloud Platform", "BigQuery", "Looker Studio", "Data Modeling"]
  },
  {
    category: "Governança & Documentação",
    title: "Documentação e Governança de Data & Analytics",
    client: "Vitrio Consultoria",
    period: "2024-2025",
    challenge: "Falta de padronização e documentação dos processos de dados, dificultando o onboarding de novos membros, manutenção de projetos e garantia de qualidade das entregas.",
    solution: "Criação de documentação técnica completa dos processos de dados, desenvolvimento de guias de boas práticas de visualização e análise, implementação de processos de governança de dados, fomentação de cultura data-driven através de treinamentos e workshops.",
    impact: [
      "Padronização de processos em toda a área de dados",
      "Redução de 50% no tempo de onboarding de novos membros",
      "Cultura data-driven estabelecida na organização"
    ],
    technologies: ["Documentação Técnica", "Processos de Governança", "Data Quality"]
  },
  {
    category: "Inteligência Artificial & Automação",
    title: "Automação de Atendimento Comercial com Agentes de IA",
    client: "Projeto Freelance",
    period: "2024",
    challenge: "Cliente precisava automatizar o atendimento comercial inicial, qualificando leads e respondendo dúvidas frequentes de forma contextualizada, sem perder a qualidade do atendimento humanizado.",
    solution: "Desenvolvimento de agente de IA usando LLM integrado via n8n para automação de atendimento comercial. Implementação de workflow que captura mensagens, processa contexto com IA, gera respostas personalizadas e encaminha leads qualificados para o time comercial. Sistema com múltiplos outputs conforme perfil do lead e tipo de solicitação.",
    impact: [
      "Automação de 90% do atendimento comercial inicial",
      "Qualificação automática de leads com precisão",
      "Redução de tempo de resposta de horas para segundos",
      "Time comercial focado em leads qualificados e conversões"
    ],
    technologies: ["n8n", "LLMs", "Prompt Engineering", "APIs", "Automação de Processos"]
  }
];
