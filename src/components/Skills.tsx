import { skillCategories } from '../data/portfolioData';

const Skills = () => (
  <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
    <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Technical Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((cat, i) => (
        <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">{cat.category}</h3>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((skill, j) => (
              <span key={j} className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Skills;