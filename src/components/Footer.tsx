import { Github, Linkedin, Terminal } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"
import { TRANSLATIONS } from "../constants"

export const Footer = () => {
   const { language } = useLanguage()
   const t = TRANSLATIONS[language].footer

   return (
      <footer className="py-12 border-t border-slate-800">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
               <div className="size-8 bg-primary/20 rounded flex items-center justify-center border border-primary/30">
                  <Terminal className="text-primary size-4" />
               </div>
               <p className="text-sm text-slate-500 font-medium">
                  © {new Date().getFullYear()} Dubian Sepulveda. Built with Passion
               </p>
            </div>

            <div className="flex items-center gap-8">
               <a
                  href="https://www.linkedin.com/in/dubian-sepulveda-ab2252b3"
                  target="_blank"
                  className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest group"
               >
                  <Linkedin className="size-5" />
                  LinkedIn
               </a>
               <a
                  href="https://github.com/dubian26"
                  target="_blank"
                  className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest group"
               >
                  <Github className="size-5" />
                  GitHub
               </a>
            </div>
         </div>
      </footer>
   )
}
