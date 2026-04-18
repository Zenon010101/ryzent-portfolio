import { personalInfo } from '../data/portfolioData';

const Hero = () => (
  <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-start max-w-6xl mx-auto px-4 sm:px-6 py-20">
    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">{personalInfo.name}</h1>
    <h2 className="text-xl sm:text-2xl text-sky-400 font-medium mb-6">{personalInfo.title}</h2>
    <p className="text-slate-400 max-w-2xl mb-8 leading-relaxed">{personalInfo.summary}</p>
    <div className="flex gap-4">
      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors">GitHub</a>
      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-slate-700 hover:border-sky-400 text-slate-300 hover:text-sky-400 font-medium rounded-lg transition-colors">LinkedIn</a>
    </div>
  </section>
);
export default Hero;