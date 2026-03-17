# AGENTS.md

Welcome to the Portafolio project! This document provides essential information for AI agents and developers working on this codebase. It is designed to ensure consistency, quality, and adherence to the project's architectural principles.

## 🚀 Project Overview & Tech Stack

This is a modern portfolio website built with **React 19**, **Vite 6**, and **TypeScript**. It focuses on high performance, clean code, and interactive user experiences.

- **Framework:** React 19 (using Strict Mode)
- **Build Tool:** Vite 6
- **Language:** TypeScript (Strict Mode enabled)
- **Styling:** Tailwind CSS 4 (Utility-first, mobile-first)
- **Animations:** Framer Motion (`motion/react`)
- **Icons:** Lucide React
- **Persistence:** LocalStorage (for theme) and IndexedDB (for demos)

---

## 🛠 Build, Lint, and Test Commands

### Development & Build
- **Start Dev Server:** `npm run dev` (Launches Vite development server)
- **Build Project:** `npm run build` (Runs `tsc -b` for type checking followed by `vite build`)
- **Preview Build:** `npm run preview` (Serves the production build locally)
- **Clean Artifacts:** `npm run clean` (Removes the `dist/` directory)

### Quality Control
- **Linting/Type-checking:** `npm run lint` (Currently runs `tsc --noEmit` to verify types)
- **ESLint:** Run `npx eslint .` to check for linting issues based on `eslint.config.js`.

### Testing
> [!NOTE]
> There is currently no test suite configured. When adding tests, **Vitest** is the preferred framework for its seamless integration with Vite.

- **Run All Tests:** `npx vitest` (Once configured)
- **Run Single Test:** `npx vitest run path/to/file.test.ts`
- **Watch Mode:** `npx vitest watch`

---

## 🏗 Architecture & Principles

### Clean Architecture
As a **Senior Systems Engineer**, we adhere to Clean Architecture principles to ensure the codebase remains maintainable and scalable:
- **Separation of Concerns:** Keep UI logic (components) separate from business logic (context/services).
- **Domain Logic:** Centralize core data and business rules in `src/constants.ts` or dedicated service files.
- **Dependency Rule:** High-level modules should not depend on low-level modules. Both should depend on abstractions.
- **Single Responsibility:** Each component or hook should do one thing well.

### PostgreSQL & Database Optimization
While this is a frontend project, some demos interact with backend services or simulate database behavior:
- **Query Optimization:** When writing SQL or interacting with APIs, ensure queries are optimized (use indexes, avoid `SELECT *`, minimize joins).
- **Data Integrity:** Use proper types and validation for all data structures.
- **Clean Queries:** Prefer parameterized queries to prevent SQL injection.

---

## 🎨 Code Style & Guidelines

### 📦 Imports
- Use **ES modules** (`import`/`export`).
- Prefer **Named Exports** for all components, hooks, and utilities.
- **Order:**
  1. React and third-party libraries (e.g., `lucide-react`, `motion/react`).
  2. Local hooks and services.
  3. Local components.
  4. Constants, types, and assets.
  5. Styles/CSS.
- **Paths:** Use **relative paths** (e.g., `./components/Header`). Avoid path aliases unless explicitly configured.

### 🏷 Naming Conventions
- **Components:** `PascalCase` (e.g., `ProjectCard.tsx`).
- **Context/Hooks:** `PascalCase` for Providers and `camelCase` with `use` prefix for hooks (e.g., `LanguageContext.tsx`, `useLanguage`).
- **Files:** Match the primary export name (e.g., `Header.tsx` for `Header` component).
- **Variables/Functions:** `camelCase`.
- **Constants:** `UPPER_SNAKE_CASE` (e.g., `PROJECTS_LIST`).
- **Types/Interfaces:** `PascalCase`.

### ⌨️ TypeScript Usage
- **Strict Mode:** Always keep strict mode enabled.
- **Interfaces vs Types:** Use **Interfaces** for object structures (extensible) and **Types** for unions or simple aliases.
- **Avoid `any`:** Use proper types. For Lucide icons, use `LucideIcon` or `React.ComponentType`.
- **Explicit Returns:** While not strictly required, explicit return types for functions improve readability.

### 💄 Formatting (Critical)
- **Indentation:** **3 spaces**. This is the project's strict default.
- **Quotes:** Double quotes (`"`) for strings and JSX attributes.
- **Semicolons:** **Omit semicolons** unless necessary for statement separation.
- **Trailing Commas:** Use trailing commas in multi-line objects and arrays for cleaner diffs.
- **Tailwind CSS:** Order classes logically: Layout (position, z-index) -> Box Model (margin, padding, size) -> Typography -> Visuals (colors, shadows) -> Misc.

### 🚨 Error Handling
- Use **Try/Catch** for all asynchronous operations (API calls, storage access).
- Implement graceful degradation: show fallback UI or error messages instead of crashing.
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safe property access.

---

## 📂 Project Structure

```text
/
├── src/
│   ├── assets/         # Images, icons, and static assets
│   ├── components/     # Reusable UI components
│   ├── context/        # React Context Providers (Language, Theme)
│   ├── App.tsx         # Main application component
│   ├── constants.ts    # Centralized data and configuration
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles and Tailwind directives
├── public/             # Static files served directly
├── eslint.config.js    # Linting configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

---

## 📏 Rules & Instructions for Agents

1. **Responsive Design:** All UI changes must be mobile-first. Use Tailwind's `md:`, `lg:`, etc., prefixes.
2. **Accessibility (a11y):**
   - Use semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<footer>`).
   - Ensure interactive elements have `aria-label` if they don't have text.
   - Maintain high color contrast for readability.
3. **Interactions:** Use `motion` from `motion/react` for hover, tap, and entry animations to maintain the "premium" feel.
4. **Performance:**
   - Optimize images (use `.webp` where possible).
   - Avoid unnecessary re-renders by using `useMemo` or `useCallback` only when justified.
5. **Git Workflow:**
   - Create descriptive commit messages (e.g., `feat: add project filtering`, `fix: header mobile alignment`).
   - Do not commit large binary files; use optimized assets.

---

## 🛠 Common Tasks

### Adding a New Project
1. Add the project image to `src/assets/`.
2. Import the image in `src/constants.ts`.
3. Add a new object to the `PROJECTS` array following the `Project` interface.

### Adding a New Skill
1. Find a relevant icon from `lucide-react`.
2. Add the skill to the `SKILLS` array in `src/constants.ts`.

### Creating a New Component
1. Create a new file in `src/components/` using `PascalCase`.
2. Use the arrow function syntax with named export.
3. Ensure 3-space indentation and no semicolons.

---

## 🤖 Agent Persona
When operating in this repository, act as a **Senior Systems Engineer**. Prioritize code quality, architectural integrity, and performance. Always consider the long-term maintainability of the solutions you implement.
