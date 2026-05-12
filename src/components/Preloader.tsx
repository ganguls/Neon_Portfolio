"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(barRef.current, {
      width: "100%",
      duration: 1.5,
      ease: "power2.inOut",
    }).to(preloaderRef.current, {
      opacity: 0,
      duration: 0.8,
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.remove();
        }
      },
    });

    // Trigger hero animations after preloader
    tl.from(".reveal-text", {
      y: "100%",
      duration: 1,
      ease: "expo.out",
      stagger: 0.2,
    }).from(
      ".stagger-hero",
      {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.5"
    );
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-1000"
      id="preloader"
    >
      <div className="text-center relative">
        <div className="font-display-xl text-3xl font-bold text-primary mb-4 flicker tracking-tighter">
          GANGUL WEERASINGHE
        </div>
        <div className="w-64 h-[1px] bg-white/10 mx-auto overflow-hidden relative">
          <div
            ref={barRef}
            className="absolute inset-0 bg-primary w-0"
            id="preloader-bar"
          />
        </div>
        <div className="mt-4 text-[10px] text-primary/50 font-mono uppercase tracking-[0.3em]">
          Loading Portfolio...
        </div>
      </div>
    </div>
  );
}
