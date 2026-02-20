import { ArrowRight, ExternalLink, Code } from 'lucide-react';
import { PROJECTS } from '../constants';
import { motion } from 'motion/react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl font-black">Featured Projects</h3>
          </div>
          <a href="#" className="text-primary font-bold hover:underline underline-offset-4 flex items-center gap-2 group">
            Ver todo en GitHub
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-sm hover:shadow-2xl transition-all flex flex-col"
            >
              <div className="aspect-video bg-slate-700 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                  <a
                    href={project.links.caseStudy || project.links.demo || project.links.docs || '#'}
                    className="text-primary font-bold text-sm flex items-center gap-1 group/link"
                  >
                    {project.links.caseStudy ? 'Case Study' : project.links.docs ? 'Documentación' : 'Ver Código'}
                    <ExternalLink className="size-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                  <Code className="size-5 text-slate-400 hover:text-primary cursor-pointer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
