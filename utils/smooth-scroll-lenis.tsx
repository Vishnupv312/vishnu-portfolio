"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothSnap() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.2,
    });

    // Animation frame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Snap on wheel
    let isScrolling = false;

    window.addEventListener("wheel", (e) => {
      if (isScrolling) return;
      isScrolling = true;

      // find current section
      const sections = Array.from(document.querySelectorAll("section"));
      const current = window.scrollY;
      const direction = e.deltaY > 0 ? 1 : -1;

      // find nearest section index
      const positions = sections.map((s) => s.offsetTop);
      const next = positions.find((pos) =>
        direction > 0 ? pos > current + 10 : pos < current - 10
      );

      if (next !== undefined) {
        lenis.scrollTo(next, {
          duration: 1.5,
          easing: (t) => t,
          lock: true, // prevent mid-scroll
        });
      }

      // unlock after animation
      setTimeout(() => {
        isScrolling = false;
      }, 1200);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
