export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Analytics & ML",
    skills: [
      "BigQuery",
      "Python",
      "SQL",
      "Machine Learning",
      "K-means",
      "Estatística",
      "LLMs",
      "Prompt Engineering"
    ]
  },
  {
    title: "Programação",
    skills: [
      "Python",
      "JavaScript",
      "Apps Script",
      "n8n"
    ]
  },
  {
    title: "Cloud & Big Data",
    skills: [
      "Google Cloud Platform",
      "BigQuery",
      "Vertex AI",
      "Cloud Run"
    ]
  },
  {
    title: "Inteligência Artificial",
    skills: [
      "LLMs",
      "Prompt Engineering",
      "Google Gemini",
      "ChatGPT"
    ]
  },
  {
    title: "Visualização de Dados",
    skills: [
      "Looker Studio",
      "Power BI",
      "Figma",
      "Design Thinking"
    ]
  },
  {
    title: "Automação & Integração",
    skills: [
      "n8n",
      "APIs",
      "Cloud Run",
      "Google Sheets"
    ]
  }
];
