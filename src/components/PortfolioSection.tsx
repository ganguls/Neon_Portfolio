"use client";

interface Project {
  tech: string;
  title: string;
  description: string;
  link: string;
}

const offensiveProjects: Project[] = [
  {
    tech: "Python, LDAP, Active Directory",
    title: "CertPyre: AD CS Auditing Framework",
    description:
      "Developed a modular security auditing tool designed to identify misconfigurations in Active Directory Certificate Services (AD CS). Currently supports automated enumeration and detection of ESC1 vulnerabilities (Enrollee Supplies Subject), facilitating advanced privilege escalation assessments in enterprise environments.",
    link: "https://github.com/ganguls/CertPyre",
  },
  {
    tech: "Python, ADB, SQLite",
    title: "DroidSnoop: Mobile Forensic Analysis Tool",
    description:
      "Engineered a mobile forensics tool for automated security analysis of Android applications. Features automated extraction of local data storage, scanning for hardcoded secrets in Shared Preferences, SQLite database dumping for sensitive keywords, and Firebase misconfiguration checks to identify publicly accessible cloud endpoints.",
    link: "https://github.com/ganguls/Droidsnoop",
  },
  {
    tech: "C++, Python, Arduino, Serial Comm",
    title: "Hardware Security Attack Simulation Lab",
    description:
      "Developed a controlled hardware simulation environment to demonstrate physical layer vulnerabilities, specifically focusing on Man-in-the-Middle (MITM) and Side-Channel attacks. Implemented a Side-Channel simulation capable of leaking secrets via timing and optical channels and built a custom Python CLI dashboard for live monitoring.",
    link: "https://github.com/ganguls/Arduino-Based-Hardware-Security-Attack-Simulation-Lab",
  },
];

const cloudProjects: Project[] = [
  {
    tech: "AWS, Python, React",
    title: "CloudSentinel: Enterprise Serverless API Security",
    description:
      "Designed a production-grade serverless security framework providing defense-in-depth for cloud-native APIs. Implemented JWT-based IAM, adaptive rate limiting, and a custom threat detection engine (WAF logic) to inspect payloads for SQLi and XSS, paired with a React-based security telemetry dashboard.",
    link: "https://github.com/ganguls/CloudSentinel-Serverless-Security",
  },
  {
    tech: "Python, Flask, psutil, Heuristics",
    title: "Anti-Keylogger Defense System",
    description:
      "Built a Windows-based endpoint security tool that utilizes behavioral heuristics and process monitoring to detect and block keylogging activity. Features a glassmorphism-style web dashboard for real-time threat management, risk categorization, and administrative process termination.",
    link: "https://github.com/ganguls/Anti-Keylogger-Defense-System",
  },
];

const aiProjects: Project[] = [
  {
    tech: "K8s, Docker, Python, Flower, OpenSSL",
    title: "Federated Learning Defense Framework",
    description:
      "Developed a production-grade federated learning platform with integrated defenses against Sybil, poisoning, and inference attacks. Implemented a custom PKI-based certificate authority for secure client authentication and deployed microservices using Kubernetes with real-time monitoring through Prometheus and Grafana.",
    link: "https://github.com/ganguls/Federated-Learning-for-Secure-Finance-System",
  },
  {
    tech: "TensorFlow, Keras, ResNet, Flask",
    title: "Deep Learning Malware Classification",
    description:
      "Built a ResNet-based deep learning model capable of classifying 25 malware families with 95.7% accuracy using image-based malware analysis on the MalIMG dataset. Developed a RESTful API for automated static analysis and real-time malware assessment of uploaded binaries.",
    link: "https://github.com/ganguls/Malware-Classification-Using-DL",
  },
  {
    tech: "Python, Random Forest, Scikit-learn",
    title: "Network Anomaly Detection System",
    description:
      "Implemented a high-performance network security monitor using Machine Learning to classify traffic into 'Normal' or various attack vectors (DoS, Probe, R2L, U2R). Achieved ~99.5% accuracy through rigorous feature engineering and multi-class classification on the NSL-KDD dataset.",
    link: "https://github.com/ganguls/Network-Anomaly-Detection-Using-ML",
  },
  {
    tech: "Python, Naive Bayes, N-grams",
    title: "Spam Classifier Using ML",
    description:
      "Developed an SMS spam classification system utilizing Multinomial Naive Bayes and N-gram feature extraction. Optimized model performance using GridSearchCV for hyperparameter tuning and implemented a full text-preprocessing pipeline (tokenization, stemming, and stop-word removal).",
    link: "https://github.com/ganguls/Spamclassifier-Using-ML",
  },
];

const softwareProjects: Project[] = [
  {
    tech: "Django, PostgreSQL, GitHub Actions, CodeQL",
    title: "DevSecOps E-Commerce Platform",
    description:
      "Designed a secure full-stack e-commerce platform with automated CI/CD pipelines. Integrated CodeQL SAST scanning and Dependabot for supply-chain security, ensuring a robust defensive posture from development through deployment.",
    link: "https://github.com/ganguls/django-Pizza-Shop",
  },
  {
    tech: "React, Node.js, Express, MongoDB, Gemini AI",
    title: "Vocabulary PDF Reader (GenAI)",
    description:
      "Developed a GenAI-powered platform for interactive PDF reading. Integrated Gemini AI for real-time English-to-Sinhala translation and advanced vocabulary extraction, featuring a searchable dashboard and persistent storage via MongoDB.",
    link: "https://github.com/ganguls/VocabPDF",
  },

];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="premium-glass group rounded-[2.5rem] tilt-container p-2">
      <div className="p-8 tilt-child h-full flex flex-col">
        <span className="text-primary/50 text-[10px] font-mono block mb-2">
          {project.tech}
        </span>
        <h4 className="font-display-xl text-2xl mb-4 text-white group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed opacity-70 flex-grow">
          {project.description}
        </p>
        <a
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-all mt-auto"
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
      className="reveal-3d py-stack-xl max-w-[1280px] mx-auto px-6 md:px-[80px]"
      id="portfolio"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-2xl">
          <div className="text-primary text-[10px] tracking-[0.4em] uppercase font-bold mb-4">
            Portfolio
          </div>
          <h2 className="font-display-xl text-4xl md:text-6xl font-bold text-white tracking-tighter">
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

      {/* Software Engineering & Tools */}
      <div className="mb-16">
        <h3 className="text-primary text-[12px] tracking-[0.5em] uppercase font-bold mb-10 border-l-4 border-primary pl-4">
          Software Engineering &amp; Tools
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwareProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
