"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HCHero() {
  const headingRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const hoursRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    let ctx: { revert: () => void } | null = null;

    const initGSAP = async () => {
      const { gsap } = await import("gsap");

      ctx = gsap.context(() => {
        const lines =
          headingRef.current?.querySelectorAll(".hc-hero-line") ?? [];
        const sub = subRef.current;
        const cta = ctaRef.current;
        const hours = hoursRef.current;

        gsap.set(lines, { y: 60, opacity: 0 });
        gsap.set(sub, { y: 24, opacity: 0 });
        gsap.set(cta, { y: 20, opacity: 0 });
        gsap.set(hours, { y: 12, opacity: 0 });

        const tl = gsap.timeline({ delay: 0.2 });

        tl.to(lines, {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.16,
          ease: "power3.out",
        })
          .to(
            sub,
            { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" },
            "-=0.5"
          )
          .to(
            cta,
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            "-=0.4"
          )
          .to(
            hours,
            { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
            "-=0.35"
          );
      });
    };

    initGSAP();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section className="hc-hero">
      <style>{`
        .hc-hero-img {
          position: absolute;
          inset: 0;
          object-fit: cover;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .hc-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(46, 66, 40, 0.78) 0%,
            rgba(46, 66, 40, 0.52) 55%,
            rgba(46, 66, 40, 0.68) 100%
          );
          z-index: 1;
        }
        .hc-hero-content {
          position: relative;
          z-index: 2;
          padding-top: 8rem;
          padding-bottom: 5rem;
          max-width: 720px;
        }
        .hc-hero-eyebrow {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-accent);
          background-color: rgba(196,113,58,0.15);
          display: inline-block;
          padding: 0.3rem 0.9rem;
          border-radius: 999px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(196,113,58,0.3);
        }
        .hc-hero-heading {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }
        .hc-hero-line {
          display: block;
        }
        .hc-hero-sub {
          font-family: var(--font-body);
          font-size: clamp(1rem, 2vw, 1.15rem);
          font-weight: 400;
          color: rgba(255,255,255,0.88);
          line-height: 1.6;
          max-width: 520px;
          margin-bottom: 2.25rem;
        }
        .hc-hero-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        .hc-hero-hours {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.6);
          font-style: italic;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .hc-hero-hours::before {
          content: '';
          display: inline-block;
          width: 16px;
          height: 1px;
          background-color: var(--color-accent);
        }
        .hc-hero-scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          opacity: 0.5;
          animation: hc-scroll-bounce 2s ease-in-out infinite;
        }
        .hc-hero-scroll-hint span {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          font-weight: 600;
        }
        @keyframes hc-scroll-bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>

      <Image
        src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1800&q=80"
        alt="Warm cafe table with coffee and plants by garden windows"
        fill
        priority
        className="hc-hero-img"
        sizes="100vw"
      />
      <div className="hc-hero-overlay" />

      <div className="container">
        <div className="hc-hero-content">
          <span className="hc-hero-eyebrow">Waipukurau, Hawke&apos;s Bay</span>

          <div ref={headingRef} className="hc-hero-heading" aria-label="A reason to drive out.">
            <span className="hc-hero-line">A reason to</span>
            <span className="hc-hero-line">drive out.</span>
          </div>

          <p ref={subRef} className="hc-hero-sub">
            Family cafe, playground, great coffee and proper kai. 2398 Takapau Road, Waipukurau.
          </p>

          <div ref={ctaRef} className="hc-hero-cta-row">
            <Link href="/menu" className="hc-btn-primary">
              See Our Menu
            </Link>
            <Link href="/contact" className="hc-btn-ghost">
              Find Us
            </Link>
          </div>

          <p ref={hoursRef} className="hc-hero-hours">
            Kitchen till 2pm, cafe till 2:30pm
          </p>
        </div>
      </div>

      <div className="hc-hero-scroll-hint" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#ffffff" }}>
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
