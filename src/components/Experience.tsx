import { EXPERIENCE } from '../constants';
import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-3">Trayectoria</h2>
      <h3 className="text-4xl font-black mb-16">Experience Timeline</h3>

      <div className="relative space-y-12">
        <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform -translate-x-1/2 hidden sm:block"></div>

        {EXPERIENCE.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative flex flex-col sm:flex-row items-center justify-between group ${
              index % 2 !== 0 ? 'sm:flex-row-reverse' : ''
            }`}
          >
            <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-primary ring-8 ring-primary/20 z-10 transition-transform group-hover:scale-125"></div>
            
            <div className="w-full sm:w-[45%] bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl transition-all group-hover:-translate-y-2">
              <span className="text-primary font-bold text-sm">{item.period}</span>
              <h4 className="text-xl font-bold mt-2">{item.role}</h4>
              <p className="text-slate-400 mt-2 font-medium">{item.company}</p>
              
              {item.description && (
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">{item.description}</p>
              )}
              
              {item.bullets && (
                <ul className="mt-4 space-y-2 text-slate-400 text-sm">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="w-full sm:w-[45%] py-4 sm:py-0"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
