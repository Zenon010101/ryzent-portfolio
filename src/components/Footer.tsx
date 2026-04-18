import { personalInfo } from '../data/portfolioData';

const Footer = () => (
  <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
    <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Built with React, TypeScript & Tailwind CSS.</p>
  </footer>
);
export default Footer;