const Header = () => (
  <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <div className="text-xl font-bold text-sky-400">Ryzent.dev</div>
      <nav className="flex gap-4 sm:gap-6 text-sm font-medium">
        <a href="#hero" className="text-slate-400 hover:text-sky-400 transition-colors">Home</a>
        <a href="#projects" className="text-slate-400 hover:text-sky-400 transition-colors">Projects</a>
        <a href="#skills" className="text-slate-400 hover:text-sky-400 transition-colors">Skills</a>
        <a href="#contact" className="text-slate-400 hover:text-sky-400 transition-colors">Contact</a>
      </nav>
    </div>
  </header>
);
export default Header;