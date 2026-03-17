import { Code, Code2, Database, Monitor, LucideIcon } from "lucide-react"
import dashboardImage from "./assets/dashboard.webp"
import ecomerceImage from "./assets/ecommerce.webp"
import tiendaonlineImage from "./assets/tiendaonline.webp"

export interface Skill {
   title: string
   subtitle: string
   icon: LucideIcon
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

export const SKILLS: Record<string, Skill[]> = {
   es: [
      { title: "ASP.NET", subtitle: "ESPECIALISTA BACKEND", icon: Code2 },
      { title: "SQL Server / Postgres", subtitle: "BASES DE DATOS RELACIONALES", icon: Database },
      { title: "React + TypeScript", subtitle: "EXPERTO FRONTEND", icon: Monitor },
      { title: "NodeJs", subtitle: "EXPERTO BACKEND", icon: Code },
   ],
   en: [
      { title: "ASP.NET", subtitle: "BACKEND SPECIALIST", icon: Code2 },
      { title: "SQL Server / Postgres", subtitle: "RELATIONAL DATABASES", icon: Database },
      { title: "React + TypeScript", subtitle: "FRONTEND EXPERT", icon: Monitor },
      { title: "NodeJs", subtitle: "BACKEND EXPERT", icon: Code },
   ]
}

export const EXPERIENCE: Record<string, Experience[]> = {
   es: [
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
         description: "Desarrollé aplicaciones en C# .NET Framework, participó en la creación de " +
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
   ],
   en: [
      {
         period: "2019 — 2026",
         role: "Technical Lead",
         company: "Sistemas y Computadores S.A.",
         description: "Led a development team, implementing clean architectures and " +
            "robust design patterns in ASP.NET Core. Optimized SQL Server databases for " +
            "high-concurrency environments and managed CI/CD processes with Azure DevOps. " +
            "On the frontend, worked with React and TypeScript, implementing modern and responsive user interfaces.",
      },
      {
         period: "2014 — 2018",
         role: "Senior Software Engineer",
         company: "Sistemas y Computadores S.A.",
         description: "Developed applications in C# .NET Framework, participated in creating " +
            "cross-cutting tools for the company, such as: file upload component, dynamic form generation " +
            "component, oper-manager, mass filing through loading and data extraction from Excel files, " +
            "and built automata for batch processing and data transfer.",
      },
      {
         period: "2010 — 2013",
         role: "Junior Software Engineer",
         company: "Sistemas y Computadores S.A.",
         description: "Participated in the creation of applications in VB .NET Framework, " +
            "building database models, analyzing queries, generating reports, and developing " +
            "user interfaces with HTML, CSS, JavaScript, jQuery, and Bootstrap.",
      },
      {
         period: "2008 - 2009",
         role: "Web Developer",
         company: "Systemico Software",
         description: "Worked as a web developer on a document management application called GEMAGRID, " +
            "using CGI templates and Perl as the server-side language, JavaScript for validations and AJAX requests.",
      },
   ]
}

export const PROJECTS: Record<string, Project[]> = {
   es: [
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
   ],
   en: [
      {
         title: "ARL Affiliations Project",
         description: "My experience as Technical Lead at Sistemas y Computadores S.A. for the ARL project " +
            "allowed me to design APIs with clean architectures, ensuring data integrity in high-criticality processes. " +
            "Thanks to the implementation of robust patterns and process optimization, we achieved highly tuned systems " +
            "to support the massive concurrency required by the occupational risk sector.",
         image: dashboardImage,
         tags: ["ASP.NET", "SQL SERVER", "Clean Architecture"],
         links: { noLink: "#" },
      },
      {
         title: "Online Store Demo with React + IndexedDB",
         description: "This application is a demonstration of an inventory system for virtual stores. " +
            "Its goal is to show some of my technical skills in modern web application development. " +
            "In the data persistence layer, IndexedDB is used to simulate the backend, a local database in the browser.",
         image: ecomerceImage,
         tags: ["REACT", "TYPESCRIPT", "INDEXEDDB"],
         links: {
            demo: "https://demo-tienda-online-react.vercel.app",
            code: "https://github.com/dubian26/demo-tienda-online-react"
         },
      },
      {
         title: "Online Store Demo with React + Node.js + Postgres",
         description: "Demo of an inventory system for virtual stores. This time I want to use technologies " +
            "from the JavaScript ecosystem such as Node.js, Prisma, Postgres, among others.",
         image: tiendaonlineImage,
         tags: ["REACT", "NODEJS", "POSTGRES"],
         links: {
            demo: "https://demo-tienda-online-full.vercel.app",
            code: "https://github.com/dubian26/demo-tienda-online-full"
         },
      },
   ]
}

export const TRANSLATIONS = {
   es: {
      nav: [
         { name: "Sobre mí", id: "about" },
         { name: "Habilidades", id: "skills" },
         { name: "Experiencia", id: "experience" },
         { name: "Proyectos", id: "projects" },
         { name: "Contacto", id: "contact" }
      ],
      hero: {
         available: "Disponible",
         title: "Ingeniero de Sistemas & Full Stack Developer",
         description: "Experto en el desarrollo de software escalable utilizando ASP.NET, React y TypeScript. Especialista en Clean Architecture (DDD) y patrones de diseño robustos.",
         viewProjects: "Ver Proyectos",
         contact: "Contactar",
      },
      skills: {
         tag: "Core Stack",
         title: "Habilidades & Experiencia",
         description: "Dominio profundo de tecnologías modernas para construir aplicaciones de grado empresarial con un enfoque en mantenibilidad y rendimiento.",
         cleanArch: {
            title: "Clean Architecture (DDD)",
            description: "Domain-Driven-Design me permitió escalar y mantener las reglas de negocio de forma robusta. Gracias a la inyección de dependencias y la responsabilidad única de los repositorios, logré implementar pruebas unitarias eficaces mediante mocks, validando no solo funciones aisladas sino casos de uso completos. Esto garantizó despliegues a producción seguros y una estabilidad constante en cada nueva funcionalidad."
         },
         patterns: {
            title: "Patrones de Diseño",
            description: "Mi enfoque en el desarrollo de APIs va más allá del CRUD básico. Domino patrones avanzados como CQRS para optimizar el rendimiento y otros para resolver la consistencia en sistemas distribuidos. Utilizo Repository Pattern junto a Unit of Work para un acceso a datos estructurado, y priorizo siempre la legibilidad (Clean Code) mediante patrones creacionales, mediador, Early Return entre otros, permitiendo que la lógica de negocio sea el centro de la aplicación."
         }
      },
      experience: {
         tag: "Trayectoria",
         title: "Línea de Tiempo"
      },
      projects: {
         tag: "Portafolio",
         title: "Proyectos Destacados",
         viewGitHub: "Ver demos en GitHub",
         documentation: "Documentación"
      },
      contact: {
         tag: "¿Tienes un proyecto en mente?",
         title: "Trabajemos juntos para construir algo increíble.",
         button: "Contactar ahora",
         sendEmail: "Envíame un Email"
      }
   },
   en: {
      nav: [
         { name: "About", id: "about" },
         { name: "Skills", id: "skills" },
         { name: "Experience", id: "experience" },
         { name: "Projects", id: "projects" },
         { name: "Contact", id: "contact" }
      ],
      hero: {
         available: "Available",
         title: "Systems Engineer & Full Stack Developer",
         description: "Expert in developing scalable software using ASP.NET, React, and TypeScript. Specialist in Clean Architecture (DDD) and robust design patterns.",
         viewProjects: "View Projects",
         contact: "Contact Me",
      },
      skills: {
         tag: "Core Stack",
         title: "Skills & Expertise",
         description: "Deep mastery of modern technologies to build enterprise-grade applications with a focus on maintainability and performance.",
         cleanArch: {
            title: "Clean Architecture (DDD)",
            description: "Domain-Driven Design allowed me to scale and maintain business rules robustly. Thanks to dependency injection and the single responsibility of repositories, I implemented effective unit tests using mocks, validating not only isolated functions but complete use cases. This guaranteed secure production deployments and constant stability in every new feature."
         },
         patterns: {
            title: "Design Patterns",
            description: "My approach to API development goes beyond basic CRUD. I master advanced patterns like CQRS to optimize performance and others to resolve consistency in distributed systems. I use the Repository Pattern along with Unit of Work for structured data access, and always prioritize readability (Clean Code) through creational patterns, mediator, Early Return, among others, allowing business logic to be the center of the application."
         }
      },
      experience: {
         tag: "Trajectory",
         title: "Experience Timeline"
      },
      projects: {
         tag: "Portfolio",
         title: "Featured Projects",
         viewGitHub: "View demos on GitHub",
         documentation: "Documentation"
      },
      contact: {
         tag: "Have a project in mind?",
         title: "Let's work together to build something amazing.",
         button: "Contact now",
         sendEmail: "Send me an Email"
      }
   }
}
