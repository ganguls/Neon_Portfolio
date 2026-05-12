"use client";

const skills = [
  {
    icon: "language",
    title: "Web Application Security",
    description:
      "Advanced exploitation of OWASP Top 10, deep-dive vulnerability research, and API security assessment.",
  },
  {
    icon: "phone_iphone",
    title: "Mobile Security",
    description:
      "Security audits for Android and iOS applications, including static and dynamic binary analysis.",
  },
  {
    icon: "hub",
    title: "Network Security",
    description:
      "Internal and external network penetration testing, pivoting, and infrastructure assessment.",
  },
  {
    icon: "groups",
    title: "Active Directory Security",
    description:
      "Exploiting trust relationships, Kerberos attacks, and post-exploitation in Windows environments.",
  },
  {
    icon: "security",
    title: "Red Teaming",
    description:
      "Simulating real-world adversaries, lateral movement, and EDR/AV evasion techniques.",
  },
  {
    icon: "find_in_page",
    title: "Digital Forensics",
    description:
      "Incident response, artifact analysis, and memory forensics to trace adversary footprints.",
  },
  {
    icon: "memory",
    title: "Hardware Security",
    description:
      "IoT device analysis, firmware dumping, and side-channel attack assessments.",
  },
  {
    icon: "psychology",
    title: "AI Red Teaming",
    description:
      "Assessing LLM security, prompt injection, and model inversion attack surfaces.",
  },
];

export default function ExpertiseSection() {
  return (
    <section
      className="reveal-3d py-stack-xl relative overflow-hidden"
      id="intelligence"
    >
      <div className="max-w-[1280px] mx-auto px-[80px]">
        <div className="text-center mb-24">
          <span className="text-primary text-[10px] tracking-[0.5em] uppercase font-bold mb-4 block">
            Areas of Focus
          </span>
          <h2 className="font-display-xl text-6xl font-bold text-white tracking-tighter">
            Expertise
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="premium-glass carbon-texture p-8 rounded-[2rem] group hover:border-primary/30 transition-all tilt-container"
            >
              <div className="tilt-child">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {skill.icon}
                  </span>
                </div>
                <h3 className="font-display-xl text-xl text-white mb-4">
                  {skill.title}
                </h3>
                <p className="text-on-surface-variant text-xs leading-relaxed opacity-70">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
