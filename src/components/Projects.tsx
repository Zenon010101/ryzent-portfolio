import { projects } from '../data/portfolioData';

const Projects = () => (
  <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
    <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((proj, i) => (
        <article key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-sky-500/50 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">{proj.desc}</p>
          <div className="flex flex-wrap gap-2">
            {proj.tech.map((t, j) => (
              <span key={j} className="px-2.5 py-1 bg-sky-500/10 text-sky-400 text-xs font-medium rounded-full">{t}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);
export default Projects;