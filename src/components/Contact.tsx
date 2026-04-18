import { personalInfo } from '../data/portfolioData';

const Contact = () => (
  <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
    <h2 className="text-3xl font-bold text-white mb-4 border-b border-slate-800 pb-4">Get In Touch</h2>
    <p className="text-slate-400 max-w-2xl mb-10 leading-relaxed">
      I'm currently open to opportunities in network engineering, software development, cybersecurity, and multimedia tech. Feel free to reach out!
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
        <h3 className="text-slate-300 font-medium mb-2">Email</h3>
        <a href={`mailto:${personalInfo.email}`} className="text-sky-400 hover:underline break-all">{personalInfo.email}</a>
      </div>
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
        <h3 className="text-slate-300 font-medium mb-2">Phone</h3>
        <p className="text-slate-400">{personalInfo.phone}</p>
      </div>
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
        <h3 className="text-slate-300 font-medium mb-2">Location</h3>
        <p className="text-slate-400">{personalInfo.location}</p>
      </div>
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
        <h3 className="text-slate-300 font-medium mb-2">Social</h3>
        <div className="flex justify-center gap-3">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>
  </section>
);
export default Contact;