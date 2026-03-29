"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HCHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`hc-header${scrolled ? " hc-header--scrolled" : ""}${menuOpen ? " hc-header--open" : ""}`}
    >
      <style>{`
        .hc-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.25rem 0;
          transition: background-color 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease;
        }
        .hc-header--scrolled {
          background-color: var(--color-bg);
          box-shadow: 0 2px 16px rgba(46,66,40,0.08);
          padding: 0.75rem 0;
        }
        .hc-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .hc-wordmark {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 1.45rem;
          font-weight: 600;
          text-decoration: none;
          color: #ffffff;
          transition: color 0.35s ease;
          letter-spacing: 0.01em;
        }
        .hc-header--scrolled .hc-wordmark {
          color: var(--color-primary);
        }
        .hc-nav {
          display: flex;
          align-items: center;
          gap: 2.25rem;
        }
        .hc-nav .hc-nav-link {
          color: rgba(255,255,255,0.92);
          transition: color 0.35s ease;
        }
        .hc-header--scrolled .hc-nav .hc-nav-link {
          color: var(--color-text);
        }
        .hc-nav .hc-nav-link::after {
          background-color: var(--color-accent);
        }
        .hc-nav-cta {
          background-color: var(--color-accent);
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 0.5rem 1.2rem;
          border-radius: var(--radius);
          text-decoration: none;
          transition: background-color var(--transition), transform var(--transition);
        }
        .hc-nav-cta:hover {
          background-color: var(--color-accent-hover);
          transform: translateY(-1px);
        }
        .hc-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }
        .hc-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background-color: #ffffff;
          border-radius: 2px;
          transition: background-color 0.35s ease, transform 0.3s ease, opacity 0.3s ease;
        }
        .hc-header--scrolled .hc-hamburger span {
          background-color: var(--color-primary);
        }
        .hc-mobile-nav {
          display: none;
        }
        @media (max-width: 640px) {
          .hc-nav {
            display: none;
          }
          .hc-hamburger {
            display: flex;
          }
          .hc-header--open .hc-mobile-nav {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem 0 0.5rem;
          }
          .hc-mobile-nav .hc-nav-link {
            font-size: 1rem;
            color: var(--color-text);
          }
          .hc-header--open {
            background-color: var(--color-bg);
          }
          .hc-header--open .hc-wordmark {
            color: var(--color-primary);
          }
          .hc-header--open .hc-hamburger span {
            background-color: var(--color-primary);
          }
        }
      `}</style>

      <div className="container">
        <div className="hc-header-inner">
          <Link href="/" className="hc-wordmark">
            Hatuma Cafe
          </Link>

          <nav className="hc-nav" aria-label="Main navigation">
            <Link href="/menu" className="hc-nav-link">
              Menu
            </Link>
            <Link href="/contact" className="hc-nav-link">
              Find Us
            </Link>
            <Link href="/contact" className="hc-nav-cta">
              Visit
            </Link>
          </nav>

          <button
            className="hc-hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className="hc-mobile-nav" aria-label="Mobile navigation">
          <Link href="/menu" className="hc-nav-link" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>
          <Link href="/contact" className="hc-nav-link" onClick={() => setMenuOpen(false)}>
            Find Us
          </Link>
          <Link href="/contact" className="hc-btn-primary" style={{ alignSelf: "flex-start" }} onClick={() => setMenuOpen(false)}>
            Visit
          </Link>
        </nav>
      </div>
    </header>
  );
}
