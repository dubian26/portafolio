# AGENTS.md

Welcome to the Portafolio project! This document provides essential information for AI agents and developers working on this codebase.

## 🛠 Build, Lint, and Test Commands

This project uses **Vite** with **React 19** and **TypeScript**.

- **Development Server:** `npm run dev`
- **Build Project:** `npm run build` (Runs `tsc -b` followed by `vite build`)
- **Linting/Type-checking:** `npm run lint` (Currently runs `tsc --noEmit`)
- **Preview Build:** `npm run preview`
- **Clean Build Artifacts:** `npm run clean` (Removes `dist/`)

### Testing
> [!NOTE]
> There is currently no test suite configured in this project. When adding tests, prefer **Vitest** for compatibility with Vite.

To run a single test (when configured): `npx vitest run path/to/file.test.ts`

---

## 🎨 Code Style & Guidelines

### 📦 Imports
- Use **ES modules** (`import`/`export`).
- Prefer **Named Exports** for components and utilities to improve grep-ability and refactoring.
- **Order:**
  1. React and third-party libraries (e.g., `lucide-react`, `motion/react`).
  2. Local hooks/services.
  3. Local components.
  4. Constants and assets.
  5. Styles/CSS.
- Avoid path aliases (`@/`) unless already established; currently, **relative paths** are used.

### 🏗 Architecture
- **Components:** Functional components using arrow function syntax.
- **State Management:** Local `useState` and `useEffect` hooks. For persistent data, use `localStorage`.
- **Hooks:** Extracted into `src/hooks/` for reusability (e.g., `useTheme.ts`).
- **Constants:** Centralized in `src/constants.ts`.

### 🏷 Naming Conventions
- **Components:** `PascalCase` (e.g., `Header.tsx`, `ContactCTA.tsx`).
- **Hooks:** `camelCase` with `use` prefix (e.g., `useTheme`).
- **Files:** Match the component/hook name.
- **Variables/Functions:** `camelCase`.
- **Constants:** `UPPER_SNAKE_CASE` (e.g., `SKILLS`, `EXPERIENCE`).
- **Types/Interfaces:** `PascalCase`.

### ⌨️ Types (TypeScript)
- Use **Interfaces** for object structures that might be extended.
- Use **Types** for unions, aliases, or simple records.
- Avoid `any`. In `src/constants.ts`, some icons use `any`; replace with proper types from `lucide-react` if possible.
- Use **Strict Mode** (enabled in `main.tsx`).

### 💄 Formatting
- **Indentation:** **3 spaces**. (Critical: Adhere to this as it's the project default).
- **Quotes:** Double quotes for strings and JSX attributes.
- **Semicolons:** Omit semicolons (standard in this project's style).
- **Trailing Commas:** Use trailing commas in multi-line objects and arrays.
- **Tailwind CSS:** Use Tailwind classes directly in `className`. Follow a logical order (layout, spacing, typography, colors, effects).

### 🚨 Error Handling
- Use **Try/Catch** blocks for asynchronous operations or potentially failing logic.
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safer property access.

---

## 🚀 Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion (`motion/react`)
- **Icons:** Lucide React

## 📏 Rules & Instructions
- **Responsive Design:** Ensure all components are mobile-first and use Tailwind's responsive prefixes (e.g., `md:`, `lg:`).
- **Accessibility:** Use semantic HTML (`header`, `main`, `nav`, `footer`) and appropriate `aria-label` attributes.
- **Interactions:** Use `motion` for hover and tap effects to maintain the interactive feel of the portfolio.
