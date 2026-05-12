"use client";

export default function AboutSection() {
  return (
    <section
      className="reveal-3d py-stack-xl max-w-[1280px] mx-auto px-[80px]"
      id="about"
    >
      <div className="grid md:grid-cols-2 gap-24 items-start">
        <div className="space-y-8">
          <h2 className="font-display-xl text-[clamp(3rem,6vw,5rem)] font-bold text-white leading-none tracking-tighter">
            About
            <br />
            <span className="text-primary flicker">Me.</span>
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="premium-glass p-8 rounded-3xl group tilt-container">
              <div className="tilt-child text-center">
                <span className="text-3xl font-display-xl text-primary block mb-2">
                  HTB CWES
                </span>
                <span className="text-[8px] tracking-[0.3em] text-on-surface-variant uppercase font-bold">
                  Certification
                </span>
              </div>
            </div>
            <div className="premium-glass p-8 rounded-3xl group translate-y-12 tilt-container">
              <div className="tilt-child text-center">
                <span className="text-3xl font-display-xl text-primary block mb-2">
                  eJPT
                </span>
                <span className="text-[8px] tracking-[0.3em] text-on-surface-variant uppercase font-bold">
                  Certification
                </span>
              </div>
            </div>
            <div className="premium-glass p-8 rounded-3xl group tilt-container">
              <div className="tilt-child text-center">
                <span className="text-3xl font-display-xl text-primary block mb-2">
                  CRTA
                </span>
                <span className="text-[8px] tracking-[0.3em] text-on-surface-variant uppercase font-bold">
                  Certification
                </span>
              </div>
            </div>
            <div className="premium-glass p-8 rounded-3xl group translate-y-12 tilt-container">
              <div className="tilt-child text-center">
                <span className="text-3xl font-display-xl text-primary block mb-2">
                  ISO 27001
                </span>
                <span className="text-[8px] tracking-[0.3em] text-on-surface-variant uppercase font-bold">
                  Internal Auditor
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-24 space-y-10">
          <p className="text-2xl text-on-surface leading-relaxed font-light opacity-90">
            I&apos;m Gangul Weerasinghe, an Offensive Security Specialist
            dedicated to revealing and mitigating complex security
            vulnerabilities within enterprise infrastructures.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed opacity-70">
            Currently pursuing a BSc (Hons) in Computer Science (Information
            &amp; Cyber Security) at SLIIT, I hold industry-recognized
            certifications like HTB Certified Web Exploitation Specialist
            (CWES), eLearnSecurity Junior Penetration Tester (eJPT), and
            Certified Red Team Analyst (CRTA).
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed opacity-70">
            My practical experience includes serving as an Undergraduate Trainee
            at Hatton National Bank PLC and working as a freelance security
            researcher. Beyond my technical roles, I am actively involved in the
            security community as a Lead Ambassador for TryHackMe and a Member
            of the SLIIT FOSS Community.
          </p>
          <div className="flex gap-8 pt-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                verified
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white">
                Elite Researcher
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                security
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white">
                Red Team Ops
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
