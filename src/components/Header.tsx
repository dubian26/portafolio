import { Terminal } from "lucide-react"
import { motion } from "motion/react"

export const Header = () => {
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

            <nav className="hidden md:flex items-center gap-8">
               {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                  <a
                     key={item}
                     href={`#${item.toLowerCase()}`}
                     className="text-md font-medium text-slate-300 hover:text-primary transition-colors"
                  >
                     {item}
                  </a>
               ))}
            </nav>

            <motion.a
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               href="#contact"
               className="bg-primary hover:bg-primary/90 text-background-dark px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
            >
               Contactar
            </motion.a>
         </div>
      </header>
   )
}
