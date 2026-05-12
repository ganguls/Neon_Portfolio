"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-6 border-b border-white/5 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/80" : ""
      }`}
      id="navbar"
    >
      <div className="max-w-[1280px] mx-auto px-[80px] flex justify-between items-center">
        <div className="font-display-xl text-xl font-bold tracking-tighter text-white flicker">
          GANGUL WEERASINGHE
        </div>
        <div className="hidden md:flex gap-12 items-center">
          <a
            className="text-on-surface-variant font-medium text-xs tracking-[0.2em] uppercase hover:text-primary transition-all"
            href="#hero"
          >
            Home
          </a>
          <a
            className="text-on-surface-variant font-medium text-xs tracking-[0.2em] uppercase hover:text-primary transition-all"
            href="#intelligence"
          >
            Expertise
          </a>
          <a
            className="text-on-surface-variant font-medium text-xs tracking-[0.2em] uppercase hover:text-primary transition-all"
            href="#portfolio"
          >
            Projects
          </a>
          <a
            className="text-on-surface-variant font-medium text-xs tracking-[0.2em] uppercase hover:text-primary transition-all"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="text-on-surface-variant font-medium text-xs tracking-[0.2em] uppercase hover:text-primary transition-all"
            href="#contact"
          >
            Contact
          </a>
          <a
            className="text-on-surface-variant font-medium text-xs tracking-[0.2em] uppercase hover:text-primary transition-all"
            href="#blogs"
          >
            Blogs
          </a>
          <a
            className="bg-primary/10 border border-primary/20 text-primary px-8 py-2 rounded-full text-xs font-bold hover:bg-primary hover:text-white transition-all neon-glow"
            href="#contact"
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
}
