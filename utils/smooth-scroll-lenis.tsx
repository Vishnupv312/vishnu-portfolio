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

    window.addEventListener(
      "wheel",
      (e) => {
        if (isScrolling) return;

        // Prevent default wheel behavior during our custom handling
        e.preventDefault();

        isScrolling = true;

        const sections = Array.from(document.querySelectorAll("section"));
        const current = window.scrollY;
        const direction = e.deltaY > 0 ? 1 : -1;
        const viewportHeight = window.innerHeight;

        // Find current section with better detection
        let currentSection = null;
        let currentSectionIndex = -1;

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const rect = section.getBoundingClientRect();
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          // More accurate current section detection
          if (
            current >= sectionTop - viewportHeight * 0.5 &&
            current < sectionBottom - viewportHeight * 0.3
          ) {
            currentSection = section;
            currentSectionIndex = i;
            break;
          }
        }

        if (currentSection && currentSectionIndex !== -1) {
          const sectionTop = currentSection.offsetTop;
          const sectionHeight = currentSection.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;
          const scrollProgress =
            (current - sectionTop) / (sectionHeight - viewportHeight);

          // Check if section is taller than viewport (like experience section)
          if (sectionHeight > viewportHeight * 1.2) {
            if (direction > 0) {
              // Scrolling down
              if (scrollProgress < 0.9) {
                // Still within the section, scroll smoothly
                const scrollAmount = Math.min(
                  viewportHeight * 0.7,
                  sectionBottom - viewportHeight - current
                );

                lenis.scrollTo(current + scrollAmount, {
                  duration: 0.8,
                  easing: (t) => 1 - Math.pow(1 - t, 3),
                });
              } else {
                // Near bottom of section, snap to next section
                const nextSectionIndex = currentSectionIndex + 1;
                if (nextSectionIndex < sections.length) {
                  lenis.scrollTo(sections[nextSectionIndex].offsetTop, {
                    duration: 1.2,
                    easing: (t) => 1 - Math.pow(1 - t, 3),
                  });
                }
              }
            } else {
              // Scrolling up
              if (scrollProgress > 0.1) {
                // Still within the section, scroll smoothly up
                const scrollAmount = Math.min(
                  viewportHeight * 0.7,
                  current - sectionTop
                );

                lenis.scrollTo(current - scrollAmount, {
                  duration: 0.8,
                  easing: (t) => 1 - Math.pow(1 - t, 3),
                });
              } else {
                // Near top of section, snap to previous section
                const prevSectionIndex = currentSectionIndex - 1;
                if (prevSectionIndex >= 0) {
                  const prevSection = sections[prevSectionIndex];
                  const prevSectionHeight = prevSection.offsetHeight;

                  // If previous section is also tall, go to its bottom
                  const targetScroll =
                    prevSectionHeight > viewportHeight * 1.2
                      ? prevSection.offsetTop +
                        prevSectionHeight -
                        viewportHeight
                      : prevSection.offsetTop;

                  lenis.scrollTo(targetScroll, {
                    duration: 1.2,
                    easing: (t) => 1 - Math.pow(1 - t, 3),
                  });
                }
              }
            }
          } else {
            // Handle normal-sized sections with snap behavior
            const targetIndex =
              direction > 0 ? currentSectionIndex + 1 : currentSectionIndex - 1;

            if (targetIndex >= 0 && targetIndex < sections.length) {
              const targetSection = sections[targetIndex];
              const targetSectionHeight = targetSection.offsetHeight;

              // Position tall sections appropriately
              let targetScroll = targetSection.offsetTop;
              if (targetSectionHeight > viewportHeight * 1.2) {
                // If going to a tall section from below, start at bottom
                if (direction < 0) {
                  targetScroll =
                    targetSection.offsetTop +
                    targetSectionHeight -
                    viewportHeight;
                }
              }

              lenis.scrollTo(targetScroll, {
                duration: 1.2,
                easing: (t) => 1 - Math.pow(1 - t, 3),
              });
            }
          }
        } else {
          // Fallback: find nearest section
          const positions = sections.map((s, index) => ({
            top: s.offsetTop,
            height: s.offsetHeight,
            index,
          }));

          let target = null;
          if (direction > 0) {
            target = positions.find((pos) => pos.top > current + 10);
          } else {
            target = positions.reverse().find((pos) => pos.top < current - 10);
          }

          if (target) {
            let targetScroll = target.top;
            // Adjust for tall sections
            if (direction < 0 && target.height > viewportHeight * 1.2) {
              targetScroll = target.top + target.height - viewportHeight;
            }

            lenis.scrollTo(targetScroll, {
              duration: 1.2,
              easing: (t) => 1 - Math.pow(1 - t, 3),
            });
          }
        }

        // Unlock after animation with longer delay for tall sections
        const unlockDelay =
          currentSection && currentSection.offsetHeight > viewportHeight * 1.2
            ? 1000
            : 1400;
        setTimeout(() => {
          isScrolling = false;
        }, unlockDelay);
      },
      { passive: false }
    ); // Important: set passive to false to allow preventDefault

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
