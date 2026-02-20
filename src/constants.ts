import { Terminal, Code2, Monitor, Database, DraftingCompass, Share2, Github, Mail, Linkedin, ArrowDown, ExternalLink, Code } from 'lucide-react';

export interface Skill {
  title: string;
  subtitle: string;
  icon: any;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description?: string;
  bullets?: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    code?: string;
    caseStudy?: string;
    docs?: string;
  };
}

export const SKILLS: Skill[] = [
  { title: 'ASP.NET', subtitle: 'BACKEND SPECIALIST', icon: Code2 },
  { title: 'React', subtitle: 'FRONTEND EXPERT', icon: Monitor },
  { title: 'TypeScript', subtitle: 'STRONGLY TYPED CODE', icon: Code },
  { title: 'SQL Server', subtitle: 'POSTGRES & RELATIONAL', icon: Database },
];

export const EXPERIENCE: Experience[] = [
  {
    period: '2021 — Presente',
    role: 'Senior Full Stack Developer',
    company: 'Empresa Tech Global',
    bullets: [
      'Liderazgo técnico en arquitecturas de microservicios con .NET 8.',
      'Desarrollo de dashboards complejos en React y Redux Toolkit.',
    ],
  },
  {
    period: '2018 — 2021',
    role: 'Systems Engineer',
    company: 'Software Factory Regional',
    description: 'Diseño e implementación de bases de datos relacionales y optimización de consultas en SQL Server para sistemas de alta disponibilidad.',
  },
  {
    period: '2016 — 2018',
    role: 'Junior Developer',
    company: 'Sistemas Integrados S.A.',
    description: 'Mantenimiento y desarrollo de nuevas funcionalidades en aplicaciones legacy ASP.NET MVC y Web API.',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'SaaS Analytics Platform',
    description: 'Plataforma escalable de análisis de datos en tiempo real construida bajo Clean Architecture.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLC-6K5p9apRDiEOvOAzF3dB7GfkASTFxKzpgkBaejjsVXkTLnq-HzcuUYOBMsa95s1ndN_hYCDDXtztOsThk5uTLMd08gU-2Rab481jRh0yAkKBYaRmOpbkxBi-p9nAfSmobk6ztGA2p8FLkxBBfXgcbUIksB_8DN6T45OeACieeqPBXEJqbljvsksBT5BDuuM4riU-dOgwLzZER6XYWhT99rx0jt-Ha1M6uPEefnqnoG9wRfV_umBCbuNEfjT3fetE-7LdzqFWs',
    tags: ['REACT', 'ASP.NET', 'DDD'],
    links: { caseStudy: '#' },
  },
  {
    title: 'E-commerce API Engine',
    description: 'Motor robusto para tiendas online con soporte para múltiples pasarelas de pago y gestión de stock.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvJZ-6MAFGN3KAYYp75ddYASaZH4O8D43sElVjBQIQSUkWDa2LmT4NG_6jMMdAk-o5XOZX31nfXWKRzqTav1yrcSo6j-4blAtUFVmIFqmGMNqZh-gqhrHQUKAb7h9waroZE5PgX_YllkENUIMjdgrPuPVfDWGaRxNXoLLqfFWODHGO3qE597kZ3bqrGbWULuRIFSMxl88FcK_96wvQqQwJFlLJEqdttvJNdcvjPi6GyGPvsOGGt96JJXGY4W8-3nYdWjKuqTKzg1A',
    tags: ['TYPESCRIPT', 'POSTGRES', 'NODEJS'],
    links: { code: '#' },
  },
  {
    title: 'Distributed Caching System',
    description: 'Sistema de caché distribuido diseñado para optimizar el rendimiento de microservicios de alta carga.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATIuiwsX5ZxgkFH6hjQ1wn9Cbyg0R2oepzOyIyGozHBDjAKw1dtgkdyKanw9gMkZ5yfLhw7l-rjen2rkS6QPTVn1XkCcklHuJ7fgXl__MkTNspnNfEK3H4hk4LV2z967oqj048UPjElcE8IVxZnaA71b2PkmGyGSZDGGvW9UflLgYmYsRI7_StzO1VulKYb1DyA5YzMdfZmTo_ZD1k-GgzzSPdiqtGt8YHcc_deI0gmd4XhzithHTNrLiylbLB-Yf1kd_WhFIaCZU',
    tags: ['.NET CORE', 'REDIS', 'DOCKER'],
    links: { docs: '#' },
  },
];
