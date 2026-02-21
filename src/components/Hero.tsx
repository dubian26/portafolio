import { ArrowDown } from "lucide-react"
import { motion } from "motion/react"

export const Hero = () => {
   return (
      <section id="about" className="relative overflow-hidden py-24 md:py-32 lg:py-48 px-6">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
         </div>

         <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
            >
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
               </span>
               Disponible
            </motion.div>

            <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 max-w-4xl tracking-tight"
            >
               <div>Dubian Sepulveda</div>
               <span className="text-gradient">Ingeniero de Sistemas & Full Stack Developer</span>
            </motion.h1>

            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
            >
               Experto en el desarrollo de software escalable utilizando{" "}
               <span className="text-slate-100 font-semibold">ASP.NET, React y TypeScript</span>.
               Especialista en Clean Architecture (DDD) y patrones de diseño robustos.
            </motion.p>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="flex flex-col sm:flex-row gap-4"
            >
               <a
                  href="#projects"
                  className="inline-flex items-center justify-center min-w-[180px] bg-primary text-background-dark font-bold py-4 rounded-xl shadow-xl shadow-primary/20 hover:scale-105 transition-all"
               >
                  Ver Proyectos
                  <ArrowDown className="ml-2 size-5" />
               </a>
               <a
                  href="#contact"
                  className="inline-flex items-center justify-center min-w-[180px] bg-slate-800 text-white font-bold py-4 rounded-xl hover:bg-slate-700 transition-all"
               >
                  Contactar
               </a>
            </motion.div>
         </div>
      </section>
   )
}
