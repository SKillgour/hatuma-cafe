"use client";

import { useEffect } from "react";

export default function HCScrollAnimations() {
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // .hc-reveal elements: fade + rise on scroll
        gsap.utils.toArray<HTMLElement>(".hc-reveal").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

        // .hc-stagger-item: staggered children inside a .hc-stagger-group
        gsap.utils
          .toArray<HTMLElement>(".hc-stagger-group")
          .forEach((group) => {
            const items = group.querySelectorAll(".hc-stagger-item");
            if (!items.length) return;

            gsap.fromTo(
              items,
              { y: 36, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.85,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: group,
                  start: "top 86%",
                  once: true,
                },
              }
            );
          });
      });
    };

    init();

    return () => {
      ctx?.revert();
    };
  }, []);

  return null;
}
