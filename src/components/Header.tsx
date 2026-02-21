import { Moon, Sun, Terminal } from "lucide-react"
import { motion } from "motion/react"
import { useTheme } from "../hooks/useTheme"

export const Header = () => {
   const { theme, toggleTheme } = useTheme()

   return (
      <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-primary/10">
         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="size-10 bg-primary/20 rounded flex items-center justify-center border border-primary/30">
                  <a href="#about">
                     <Terminal className="text-primary size-6" />
                  </a>
               </div>
               <h2 className="text-xl font-bold tracking-tight hidden sm:block">
                  Dubian <span className="text-primary">Sepulveda</span>
               </h2>
            </div>

            <nav className="hidden md:flex items-center gap-6">
               {
                  ["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                     <a
                        key={item} href={`#${item.toLowerCase()}`}
                        className="text-md font-medium nav-link hover:text-primary hover:underline transition-colors"
                     >
                        {item}
                     </a>
                  ))
               }
            </nav>

            <div className="flex items-center gap-3">
               <motion.button
                  id="theme-toggle"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="theme-toggle-btn size-10 rounded-lg flex items-center justify-center transition-all"
                  aria-label={theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
               >
                  <motion.div
                     key={theme}
                     initial={{ rotate: -90, opacity: 0 }}
                     animate={{ rotate: 0, opacity: 1 }}
                     transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                     {theme === "dark" ? (
                        <Sun className="size-5 text-primary" />
                     ) : (
                        <Moon className="size-5 text-primary" />
                     )}
                  </motion.div>
               </motion.button>

               <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="bg-primary hover:bg-primary/90 text-background-dark px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
               >
                  Contactar
               </motion.a>
            </div>
         </div>
      </header>
   )
}
