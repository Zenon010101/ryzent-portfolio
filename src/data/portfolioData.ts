export interface Project {
  title: string;
  desc: string;
  tech: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const personalInfo = {
  name: "Ryzent T. Mula Cruz",
  title: "BSIT Graduate | Network Engineer & Software Developer",
  email: "mulacruzryzent@gmail.com",
  phone: "+639764152432",
  location: "Taguig City, Philippines",
  linkedin: "https://www.linkedin.com/in/ryzent-mula-cruz-12218b348/",
  github: "https://github.com/Zenon010101",
  summary: "BSIT graduate expertise in computer networking and foundational cybersecurity knowledge. Proficient in Python, Java, C#, JavaScript, Android development, Unity, Blender, and Adobe Creative Suite. Seeking an entry-level position in network engineering, software development, cybersecurity, or multimedia technology."
};

export const projects: Project[] = [
  { title: "DigiFortress", 
    desc: "A multiplayer cybersecurity awareness game with custom 3D models and interactive virus-fixing mechanics.", 
    tech: ["Unity", "C#", "Blender"] },
  { title: "Company Network Infrastructure Simulation", desc: "Simulated enterprise network using Cisco Packet Tracer with IP addressing, VLANs, routing, and switching.", tech: ["Cisco Packet Tracer", "Networking", "Subnetting"] },
  { title: "Void Vision Website", desc: "Responsive portfolio website showcasing freelance video editing projects and social links.", tech: ["HTML", "CSS", "JavaScript"] },
  { title: "Mobile E-Wallet Application", desc: "Android app with cash-in and money transfer features, secure flow, and intuitive UI.", tech: ["Java", "Android SDK"] },
  { title: "Mobile Game: Wait, Where Is It?", desc: "Find-the-item Android game with simple gameplay logic and interactive UI.", tech: ["Java", "Android"] },
  { title: "Walking Tracker", desc: "Step counter and distance calculator for walking destinations.", tech: ["Java", "Android", "Sensors API"] }
];

export const skillCategories: SkillCategory[] = [
  { category: "Programming & Web", items: ["Python", "Java", "C#", "JavaScript", "HTML/CSS"] },
  { category: "Mobile & Game Dev", items: ["Android (Java)", "Unity (C#)", "Blender"] },
  { category: "Networking & Infra", items: ["IP/Subnetting", "VLANs", "Routing & Switching", "Cisco Packet Tracer", "Linux"] },
  { category: "Multimedia", items: ["Adobe Premiere Pro", "After Effects", "3D Modeling"] },
  { category: "Soft Skills", items: ["Problem-Solving", "Collaboration", "Critical Thinking", "Fast Learner", "Attention to Detail"] }
];