"use client";

export default function ExperienceSection() {
  return (
    <section
      className="reveal-3d py-stack-xl max-w-[1280px] mx-auto px-6 md:px-[80px]"
      id="experience"
    >
      <div className="mb-24">
        <span className="text-primary text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">
          Background
        </span>
        <h2 className="font-display-xl text-4xl md:text-6xl font-bold text-white tracking-tighter">
          Experience
        </h2>
      </div>
      <div className="space-y-16 max-w-4xl relative">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10">
          <div
            className="absolute top-0 left-0 w-full bg-primary"
            id="timeline-scroll"
          />
        </div>
        <div className="pl-8 md:pl-16 relative group">
          <div className="absolute left-[-4px] top-4 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#d8b9ff]" />
          <div className="premium-glass p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] group-hover:border-primary/40 transition-all">
            <span className="text-[10px] tracking-[0.3em] font-bold text-primary uppercase block mb-4">
              Sept 2024 — Mar 2026
            </span>
            <h4 className="font-display-xl text-2xl md:text-3xl text-white mb-4">
              Undergraduate Trainee | Hatton National Bank
            </h4>
            <p className="text-on-surface-variant leading-relaxed opacity-80">
              Assisting in security operations, threat assessment, and
              infrastructure monitoring within a leading financial institution.
              Gaining hands-on experience in enterprise-grade security protocols
              and defensive strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
