"use client";

/* eslint-disable @next/next/no-img-element */

interface CertCardProps {
  title: string;
  subtitle: string;
  link: string;
  stagger?: boolean;
}

function CertCard({ title, subtitle, link, stagger = false }: CertCardProps) {
  return (
    <div className={stagger ? "sm:translate-y-12" : ""}>
      <div className="group" style={{ perspective: "1000px", height: "12rem" }}>
        <div
          className="relative w-full h-full transition-[transform] duration-700 cert-flip"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front face */}
          <div
            className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center text-center p-8"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              background: "rgba(22, 17, 28, 0.6)",
              backdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.8)",
            }}
          >
            <span className="text-3xl font-display-xl text-primary block mb-2">
              {title}
            </span>
            <span className="text-[8px] tracking-[0.3em] text-on-surface-variant uppercase font-bold">
              {subtitle}
            </span>
          </div>
          {/* Back face */}
          <div
            className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center text-center p-6"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "rgba(22, 17, 28, 0.85)",
              backdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(216, 185, 255, 0.15)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.8)",
            }}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/20 border border-primary/40 text-primary px-8 py-3 rounded-full text-[12px] font-bold uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      className="reveal-3d py-stack-xl max-w-[1280px] mx-auto px-6 md:px-[80px]"
      id="about"
    >
      <div className="grid md:grid-cols-2 gap-24 items-start">
        <div className="space-y-8">
          <h2 className="font-display-xl text-[clamp(3rem,6vw,5rem)] font-bold text-white leading-none tracking-tighter">
            About
            <br />
            <span className="text-primary flicker">Me.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CertCard
              title="HTB CWES"
              subtitle="Certification"
              link="https://www.credly.com/badges/7633c9d0-9fb4-4a95-bd5d-8d01fcfef85b/public_url"
            />
            <CertCard
              title="eJPT"
              subtitle="Certification"
              link="https://certs.ine.com/20c9c1b9-3f00-40ba-a4a6-c3a5776dccf5#acc.FsSW8UxV"
              stagger
            />
            <CertCard
              title="CRTA"
              subtitle="Certification"
              link="https://labs.cyberwarfare.live/credential/achievement/6885b4dd91e1e7894fd4da4e"
            />
            <CertCard
              title="ISO 27001"
              subtitle="Internal Auditor"
              link="https://learn.mastermindassurance.com/certificates/nwoqe9eb83"
              stagger
            />
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

