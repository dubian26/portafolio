import { Code, Code2, Database, Monitor } from "lucide-react"
import dashboardImage from "./assets/dashboard.webp"
import ecomerceImage from "./assets/ecommerce.webp"
import tiendaonlineImage from "./assets/tiendaonline.webp"

export interface Skill {
   title: string
   subtitle: string
   icon: any
}

export interface Experience {
   period: string
   role: string
   company: string
   description?: string
   bullets?: string[]
}

export interface Project {
   title: string
   description: string
   image: string
   tags: string[]
   links: {
      demo?: string
      code?: string
      caseStudy?: string
      docs?: string
      noLink?: string
   }
}

export const SKILLS: Skill[] = [
   { title: "ASP.NET", subtitle: "BACKEND SPECIALIST", icon: Code2 },
   { title: "SQL Server", subtitle: "RELATIONAL DATABASES", icon: Database },
   { title: "React + TypeScript", subtitle: "FRONTEND EXPERT", icon: Monitor },
   { title: "NodeJs", subtitle: "BACKEND EXPERT", icon: Code },
]

export const EXPERIENCE: Experience[] = [
   {
      period: "2019 — 2026",
      role: "Líder técnico",
      company: "Sistemas y Computadores S.A.",
      description: "Lideré un equipo de desarrollo, implementando arquitecturas limpias y " +
         "patrones de diseño robustos en ASP.NET Core. Optimizé bases de datos SQL Server para entornos " +
         "de alta concurrencia y gestioné procesos de CI/CD con Azure DevOps. En el frontend, " +
         "trabajé con React y Typescript, implementando interfaces de usuario modernas y responsivas.",
   },
   {
      period: "2014 — 2018",
      role: "Ingeniero desarrollador senior",
      company: "Sistemas y Computadores S.A.",
      description: "Desarrollé aplicaciones en C# .NET Framework, participé en la creación de " +
         "herramientas transversales para la compañía, como: componente de cargue de archivos, componente de generación " +
         "dinámica de formularios, oper-manager, radicación masiva por medio cargue y extracción de datos desde archivos Excel " +
         "y construí autómatas para procesamiento en lote y transferencia de datos.",
   },
   {
      period: "2010 — 2013",
      role: "Ingeniero desarrollador auxiliar",
      company: "Sistemas y Computadores S.A.",
      description: "Participé en la creación de aplicaciones en VB .NET Framework, " +
         "construyendo modelos de base de datos, analizando consultas, generando reportes " +
         "y desarrollando interfaces de usuario con HTML, CSS, JavaScript, JQuery y Bootstrap.",
   },
   {
      period: "2008 - 2009",
      role: "Ingeniero desarrollador web",
      company: "Systemico Software",
      description: "Trabajé como desarrollador web en una aplicación de gestión " +
         "documental llamada GEMAGRID, donde utilizamos plantillas CGI y " +
         "código PERL como lenguaje lado servidor, JAVASCRIPT para " +
         "validaciones y peticiones AJAX.",
   },
]

export const PROJECTS: Project[] = [
   {
      title: "Proyecto de Afiliaciones ARL",
      description: "Mi experiencia como Líder Técnico en Sistemas y Computadores S.A. para el proyecto de ARL, " +
         "me permitió diseñar APIs con arquitecturas limpias, garantizando la integridad de datos en procesos de alta criticidad. " +
         "Gracias a la implementación de patrones robustos y optimización en los procesos, logramos sistemas altamente afinados para soportar " +
         "la concurrencia masiva exigida por el sector de riesgos laborales.",
      image: dashboardImage,
      tags: ["ASP.NET", "SQL SERVER", "Clean Architecture"],
      links: { noLink: "#" },
   },
   {
      title: "Demo Tienda Online con React + IndexedDB",
      description: "Esta aplicación es una demostración de un sistema de inventario " +
         "para tiendas virtuales. Su objetivo es mostrar algunas de mis habilidades " +
         "técnicas  en el desarrollo de aplicaciones web modernas. " +
         "En la capa de persistencia de datos se utiliza IndexedDB " +
         "para simular el backend, base de datos local en el navegador.",
      image: ecomerceImage,
      tags: ["REACT", "TYPESCRIPT", "INDEXEDDB"],
      links: {
         demo: "https://demo-tienda-online-react.vercel.app",
         code: "https://github.com/dubian26/demo-tienda-online-react"
      },
   },
   {
      title: "Demo Tienda Online con React + NodeJs + Postgres",
      description: "Demo de un sistema de inventario para tiendas virtuales. " +
         "Esta vez quiero usar tecnologías del ecosistema Javascript como NodeJs, " +
         "Prisma, Postgres, entre otros.",
      image: tiendaonlineImage,
      tags: ["REACT", "NODEJS", "POSTGRES"],
      links: {
         demo: "https://demo-tienda-online-full.vercel.app",
         code: "https://github.com/dubian26/demo-tienda-online-full"
      },
   },
]
