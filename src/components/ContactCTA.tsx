import { motion } from "motion/react"
import personaje from "../assets/personaje.webp"
import { useLanguage } from "../context/LanguageContext"
import { TRANSLATIONS } from "../constants"

export const ContactCTA = () => {
   const { language } = useLanguage()
   const t = TRANSLATIONS[language].contact

   return (
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-start flex-wrap md:flex-nowrap max-w-4xl mx-auto bg-primary shadow-lg shadow-primary/20 rounded-3xl p-8 relative z-10"
         >
            <div className="flex justify-center items-center shrink-0 grow">
               <img
                  src={personaje} alt="personaje"
                  className="size-72 object-cover border-6 border-white rounded-3xl"
               />
            </div>
            <div className="p-6 text-center">
               <h3 className="text-background-dark text-3xl md:text-4xl font-black mb-6 leading-tight">
                  {t.tag}
               </h3>
               <p className="text-background-dark/80 text-lg md:text-xl font-medium mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                  {t.title}
               </p>

               <div className="flex flex-wrap justify-center gap-4">
                  <motion.a
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     href="mailto:dubian26@gmail.com"
                     className="px-6 py-4 bg-background-dark text-primary font-black rounded-xl shadow-xl flex flex-col items-center min-w-[200px]"
                  >
                     <span className="text-sm opacity-80">{t.sendEmail}</span>
                     <span className="text-lg">dubian26@gmail.com</span>
                  </motion.a>
                  <motion.a
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     href="https://www.linkedin.com/in/dubian-sepulveda-ab2252b3"
                     target="_blank"
                     className="px-8 py-4 bg-background-dark/20 text-background-dark border-2 border-background-dark/20 font-black rounded-xl hover:bg-background-dark/30 transition-all"
                  >
                     LinkedIn Profile
                  </motion.a>
               </div>
            </div>

         </motion.div>

         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 opacity-5 pointer-events-none">
            <div className="bg-primary/20 blur-[120px] rounded-full w-[800px] h-[800px] mx-auto"></div>
         </div>
      </section>
   )
}
