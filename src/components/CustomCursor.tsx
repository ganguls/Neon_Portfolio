"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (innerRef.current) {
        gsap.to(innerRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
        });
      }
      if (outerRef.current) {
        gsap.to(outerRef.current, {
          x: e.clientX - 20,
          y: e.clientY - 20,
          duration: 0.3,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div ref={outerRef} className="cursor-outer" id="cursor-outer" />
      <div ref={innerRef} className="cursor-inner" id="cursor-inner" />
    </>
  );
}
