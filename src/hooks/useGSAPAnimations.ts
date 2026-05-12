"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useGSAPAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Reveal-3d scroll animations
    const reveals = document.querySelectorAll(".reveal-3d");
    reveals.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => el.classList.add("active"),
      });
    });

    // Timeline Progress
    gsap.to("#timeline-scroll", {
      height: "100%",
      scrollTrigger: {
        trigger: "#experience",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Tilt Effect
    document.querySelectorAll(".tilt-container").forEach((container) => {
      const el = container as HTMLElement;
      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(el, {
          rotateY: x * 15,
          rotateX: -y * 15,
          duration: 0.5,
          ease: "power2.out",
        });
      };
      const handleMouseLeave = () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
        });
      };
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
