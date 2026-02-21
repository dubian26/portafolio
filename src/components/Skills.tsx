import { DraftingCompass, Network } from "lucide-react"
import { motion } from "motion/react"
import { SKILLS } from "../constants"

export const Skills = () => {
   return (
      <section id="skills" className="py-24 bg-slate-900/30">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
               <div className="max-w-2xl">
                  <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-3">Core Stack</h2>
                  <h3 className="text-4xl font-black">Skills & Expertise</h3>
                  <p className="text-slate-400 mt-4 leading-relaxed">
                     Dominio profundo de tecnologías modernas para construir aplicaciones de grado empresarial con un enfoque en mantenibilidad y rendimiento.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
               {SKILLS.map((skill, index) => (
                  <motion.div
                     key={skill.title}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                     className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-primary/50 transition-all group cursor-default"
                  >
                     <skill.icon className="size-10 text-primary mb-4 block group-hover:scale-110 transition-transform" />
                     <h4 className="font-bold text-lg">{skill.title}</h4>
                     <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">{skill.subtitle}</p>
                  </motion.div>
               ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 p-8 rounded-2xl bg-primary/5 border border-primary/20"
               >
                  <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                     <DraftingCompass className="text-primary size-8" />
                  </div>
                  <div>
                     <h4 className="text-xl font-bold mb-1">Clean Architecture (DDD)</h4>
                     <p className="text-slate-400 text-sm">
                        Domain-Driven-Design me permitió escalar y mantener las reglas de negocio
                        de forma robusta. Gracias a la inyección de dependencias y la responsabilidad única
                        de los repositorios, logré implementar pruebas unitarias eficaces mediante mocks,
                        validando no solo funciones aisladas sino casos de uso completos.
                        Esto garantizó despliegues a producción seguros y una estabilidad constante
                        en cada nueva funcionalidad.
                     </p>
                  </div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 p-8 rounded-2xl bg-primary/5 border border-primary/20"
               >
                  <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                     <Network className="text-primary size-8" />
                  </div>
                  <div>
                     <h4 className="text-xl font-bold mb-1">Design Patterns</h4>
                     <p className="text-slate-400 text-sm">
                        Mi enfoque en el desarrollo de APIs va más allá del CRUD básico.
                        Domino patrones avanzados como CQRS para optimizar el rendimiento y Saga/Outbox
                        para resolver la consistencia en sistemas distribuidos. Utilizo Repository Pattern junto a Unit of Work
                        para un acceso a datos estructurado, y priorizo siempre la legibilidad (Clean Code) mediante
                        Early Return y patrones creacionales, permitiendo que la lógica de negocio sea el centro de la aplicación.
                     </p>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   )
}
