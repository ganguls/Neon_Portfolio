"use client";

interface Project {
  tech: string;
  title: string;
  description: string;
  link: string;
}

const offensiveProjects: Project[] = [
  {
    tech: "Python, Forensic-Tools",
    title: "Forensic-Artifact-Analysis",
    description:
      "A repository focused on extracting and analyzing various forensic artifacts from systems.",
    link: "https://github.com/gangul-weerasinghe/Forensic-Artifact-Analysis",
  },
  {
    tech: "Bash, Security",
    title: "AD-Lab-Deployment",
    description:
      "Scripts and documentation for automating the deployment of Active Directory security labs.",
    link: "https://github.com/gangul-weerasinghe/AD-Lab-Deployment",
  },
];

const cloudProjects: Project[] = [
  {
    tech: "Ansible, AWS, Docker",
    title: "Cybersecurity-Lab-Cloud",
    description:
      "Automated deployment of security testing labs in cloud environments using Infrastructure as Code.",
    link: "https://github.com/gangul-weerasinghe/Cybersecurity-Lab-Cloud",
  },
  {
    tech: "Python, ELK, Snort",
    title: "Threat-Detection-Dashboard",
    description:
      "A real-time dashboard for monitoring and visualizing security threats and network intrusions.",
    link: "https://github.com/gangul-weerasinghe/Threat-Detection-Dashboard",
  },
];

const aiProjects: Project[] = [
  {
    tech: "Python, TensorFlow",
    title: "AI-Malware-Detector",
    description:
      "Machine learning models trained to identify malicious patterns in binaries and script files.",
    link: "https://github.com/gangul-weerasinghe/AI-Malware-Detector",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="premium-glass group rounded-[2.5rem] tilt-container p-2">
      <div className="p-8 tilt-child">
        <span className="text-primary/50 text-[10px] font-mono block mb-2">
          {project.tech}
        </span>
        <h4 className="font-display-xl text-2xl mb-4 text-white group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed opacity-70">
          {project.description}
        </p>
        <a
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-all"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code{" "}
          <span className="material-symbols-outlined text-xs">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section
      className="reveal-3d py-stack-xl max-w-[1280px] mx-auto px-[80px]"
      id="portfolio"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-2xl">
          <div className="text-primary text-[10px] tracking-[0.4em] uppercase font-bold mb-4">
            Portfolio
          </div>
          <h2 className="font-display-xl text-6xl font-bold text-white tracking-tighter">
            Technical Projects
          </h2>
        </div>
      </div>

      {/* Offensive Security & Forensics */}
      <div className="mb-16">
        <h3 className="text-primary text-[12px] tracking-[0.5em] uppercase font-bold mb-10 border-l-4 border-primary pl-4">
          Offensive Security &amp; Forensics
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offensiveProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* Cloud & Defense Systems */}
      <div className="mb-16">
        <h3 className="text-primary text-[12px] tracking-[0.5em] uppercase font-bold mb-10 border-l-4 border-primary pl-4">
          Cloud &amp; Defense Systems
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cloudProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* AI & Machine Learning for Security */}
      <div className="mb-16">
        <h3 className="text-primary text-[12px] tracking-[0.5em] uppercase font-bold mb-10 border-l-4 border-primary pl-4">
          AI &amp; Machine Learning for Security
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
