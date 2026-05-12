"use client";

/* eslint-disable @next/next/no-img-element */

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20" id="hero">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[80px] w-full grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-8 relative z-20">
          <div className="inline-flex items-center gap-4 mb-8 stagger-hero">
            <div className="flex gap-1">
              <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
              <span className="w-1 h-1 rounded-full bg-primary/40" />
            </div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary/80 font-bold">
              Status: Available
            </span>
          </div>
          <h1
            className="font-display-xl text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.9] text-white mb-6 tracking-tighter"
            id="hero-title"
          >
            <span className="block overflow-hidden">
              <span className="reveal-text inline-block">Offensive Cyber</span>
            </span>
            <span className="block overflow-hidden">
              <span className="reveal-text inline-block">Security Specialist</span>
            </span>
          </h1>
          <div className="font-display-xl text-2xl text-primary/90 mb-8 stagger-hero font-medium">
            Bsc(Hons) CyberSec | CWES | eJPT | CRTA
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 mb-10 stagger-hero">
            <a
              className="social-icon"
              href="https://github.com/ganguls"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              className="social-icon"
              href="https://profile.hackthebox.com/profile/019dc34d-9a68-72de-93fa-0a2d1c260e6d"
              target="_blank"
              rel="noopener noreferrer"
              title="HackTheBox"
            >
              <img src="/htb.webp" alt="HackTheBox" className="w-5 h-5 object-contain" />
            </a>
            <a
              className="social-icon"
              href="https://tryhackme.com/p/gangulsw"
              target="_blank"
              rel="noopener noreferrer"
              title="TryHackMe"
            >
              <img src="/thm.webp" alt="TryHackMe" className="w-5 h-5 object-contain" />
            </a>
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/ganguls/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.981 0 1.775-.771 1.775-1.729V1.729C24 .774 23.207 0 22.225 0z" />
              </svg>
            </a>
          </div>
          <p className="stagger-hero font-body-lg text-xl text-on-surface-variant mb-12 max-w-xl leading-relaxed opacity-80">
            Offensive Security Specialist with expertise in Red Teaming, Active
            Directory exploitation, and EDR evasion. Focused on securing complex
            enterprise environments through advanced technical research.
          </p>
          <div className="flex flex-wrap gap-8 mb-12 stagger-hero">
            <a
              className="group relative px-10 py-5 bg-primary text-white rounded-xl font-bold flex items-center gap-3 overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(216,185,255,0.3)]"
              href="#portfolio"
            >
              <span className="relative z-10">Explore</span>
              <span className="material-symbols-outlined text-xl relative z-10 group-hover:translate-x-1 transition-transform">
                north_east
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              className="px-10 py-5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/5 transition-all backdrop-blur-sm"
              href="#contact"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hidden md:block md:col-span-4 relative z-20 stagger-hero">
          <div className="tilt-container relative">
            <div className="premium-glass p-2 rounded-[3rem] tilt-child border-primary/20">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.8rem] group">
                <img
                  alt="Gangul Weerasinghe"
                  className="w-full h-full object-cover grayscale opacity-60 mix-blend-lighten group-hover:scale-105 transition-transform duration-1000"
                  src="/img.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(216,185,255,0.03)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none" />
                <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
                <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-primary/50" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-surface border border-primary/30 px-6 py-2 rounded-full backdrop-blur-xl tilt-child">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[9px] tracking-[0.2em] font-bold text-white uppercase">
                  Certified Professional
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/30">
          Scroll to Dive
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
