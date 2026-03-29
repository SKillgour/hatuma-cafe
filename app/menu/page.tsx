"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  image: string;
  alt: string;
};

type Category = {
  id: string;
  label: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    items: [
      {
        name: "Eggs Benedict",
        desc: "Poached eggs, hollandaise, toasted ciabatta",
        price: "$18",
        image: "https://images.unsplash.com/photo-1762631934366-efa1a9f56da3?w=700&q=80",
        alt: "Eggs benedict with hollandaise sauce on toasted ciabatta",
      },
      {
        name: "Big Breakfast",
        desc: "Eggs, bacon, hash brown, toast, grilled tomato",
        price: "$22",
        image: "https://images.unsplash.com/photo-1558672367-241cd1a01b16?w=700&q=80",
        alt: "Full breakfast with scrambled eggs, bacon and beans",
      },
      {
        name: "French Toast",
        desc: "Thick-cut brioche, maple syrup, fresh berries",
        price: "$16",
        image: "https://images.unsplash.com/photo-1595249674211-9887de51e63a?w=700&q=80",
        alt: "Brioche French toast with maple syrup being poured",
      },
      {
        name: "Avocado Toast",
        desc: "Sourdough, smashed avo, feta, chilli flakes",
        price: "$17",
        image: "https://images.unsplash.com/photo-1604634077134-6f774f610f47?w=700&q=80",
        alt: "Avocado toast on sourdough with cherry tomatoes and radish",
      },
      {
        name: "Bircher Muesli",
        desc: "Overnight oats, apple, honey, yoghurt",
        price: "$12",
        image: "https://images.unsplash.com/photo-1543792096-24270c85b26e?w=700&q=80",
        alt: "Bircher muesli in a bowl with fresh fruit",
      },
    ],
  },
  {
    id: "lunch",
    label: "Lunch",
    items: [
      {
        name: "Pork Belly Bao",
        desc: "Two bao buns, hoisin, cucumber, spring onion",
        price: "$19",
        image: "https://images.unsplash.com/photo-1675096000167-4b8a276b6187?w=700&q=80",
        alt: "Steamed bao buns filled with crispy pork belly",
      },
      {
        name: "Loaded Fries",
        desc: "Aioli, bacon, cheese sauce, chives",
        price: "$14",
        image: "https://images.unsplash.com/photo-1639744210631-209fce3e256c?w=700&q=80",
        alt: "Loaded fries with cheese, bacon and toppings",
      },
      {
        name: "Toasted Sandwich",
        desc: "Ask us about today's fillings",
        price: "$14",
        image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=700&q=80",
        alt: "Fresh toasted sandwich with salad",
      },
      {
        name: "Soup of the Day",
        desc: "Served with crusty bread",
        price: "$13",
        image: "https://images.unsplash.com/photo-1643270676149-0f4d21b7c047?w=700&q=80",
        alt: "Cream soup in a bowl with crusty toasted bread",
      },
    ],
  },
];

function FlipCard({ item }: { item: MenuItem }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="hc-flip-card"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onTouchStart={() => setFlipped((f) => !f)}
      aria-label={`${item.name} — ${item.desc} — ${item.price}`}
    >
      <div className={`hc-flip-inner${flipped ? " hc-flipped" : ""}`}>
        {/* Front */}
        <div className="hc-flip-front">
          <div className="hc-flip-front-top">
            <h3 className="hc-flip-name">{item.name}</h3>
            <span className="hc-flip-price">{item.price}</span>
          </div>
          <p className="hc-flip-desc">{item.desc}</p>
          <span className="hc-flip-hint" aria-hidden="true">Hover to see</span>
        </div>
        {/* Back */}
        <div className="hc-flip-back">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="hc-flip-img"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="hc-flip-back-overlay" aria-hidden="true" />
          <div className="hc-flip-back-label">
            <span className="hc-flip-back-name">{item.name}</span>
            <span className="hc-flip-back-price">{item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("breakfast");

  const active = categories.find((c) => c.id === activeTab)!;

  return (
    <>
      <style>{`
        /* Hero */
        .hc-menu-pg-hero {
          background-color: var(--color-dark-surface);
          padding: 5rem 0 3.5rem;
          position: relative;
          overflow: hidden;
        }
        .hc-menu-pg-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=60') center/cover no-repeat;
          opacity: 0.15;
        }
        .hc-menu-pg-hero-inner {
          position: relative;
          z-index: 1;
        }
        .hc-menu-pg-kicker {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-accent);
          display: block;
          margin-bottom: 0.75rem;
        }
        .hc-menu-pg-heading {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-style: italic;
          font-weight: 400;
          color: var(--color-text-on-dark);
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .hc-menu-pg-sub {
          font-size: 1rem;
          color: rgba(245,238,216,0.65);
          max-width: 480px;
          line-height: 1.6;
        }

        /* Tabs */
        .hc-menu-tabs {
          display: flex;
          gap: 0;
          border-bottom: 2px solid rgba(46,66,40,0.1);
          margin-bottom: 2.5rem;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .hc-menu-tabs::-webkit-scrollbar { display: none; }
        .hc-menu-tab {
          padding: 0.9rem 1.75rem;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-text-muted);
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.2s, border-color 0.2s;
        }
        .hc-menu-tab:hover { color: var(--color-text); }
        .hc-menu-tab.active {
          color: var(--color-accent);
          border-bottom-color: var(--color-accent);
        }

        /* Flip cards grid */
        .hc-flip-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.25rem;
        }

        /* Flip card */
        .hc-flip-card {
          perspective: 1000px;
          height: 220px;
          cursor: pointer;
        }
        .hc-flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .hc-flip-inner.hc-flipped {
          transform: rotateY(180deg);
        }
        .hc-flip-front,
        .hc-flip-back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        /* Front */
        .hc-flip-front {
          background-color: var(--color-surface);
          border: 1px solid rgba(46,66,40,0.1);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .hc-flip-front-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .hc-flip-name {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text);
          line-height: 1.2;
        }
        .hc-flip-price {
          font-weight: 700;
          font-size: 1rem;
          color: var(--color-accent);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .hc-flip-desc {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          flex: 1;
        }
        .hc-flip-hint {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-accent);
          opacity: 0.6;
          margin-top: 0.5rem;
        }

        /* Back */
        .hc-flip-back {
          transform: rotateY(180deg);
          position: relative;
        }
        .hc-flip-img {
          object-fit: cover;
        }
        .hc-flip-back-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(30,20,10,0.85) 0%, rgba(30,20,10,0.2) 50%, transparent 100%);
        }
        .hc-flip-back-label {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          right: 1.25rem;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 0.5rem;
        }
        .hc-flip-back-name {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 1.2rem;
          font-weight: 400;
          color: #fff;
          line-height: 1.2;
        }
        .hc-flip-back-price {
          font-weight: 700;
          font-size: 1rem;
          color: var(--color-accent);
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* Cabinet section */
        .hc-cabinet-section {
          background-color: var(--color-surface);
          padding: 4rem 0;
          border-top: 1px solid rgba(46,66,40,0.08);
        }
        .hc-cabinet-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 640px) {
          .hc-cabinet-inner { grid-template-columns: 1fr; gap: 2rem; }
        }
        .hc-cabinet-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-style: italic;
          font-weight: 400;
          color: var(--color-text);
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }
        .hc-cabinet-body {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }
        .hc-cabinet-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .hc-cabinet-tag {
          background-color: var(--color-bg);
          border: 1px solid rgba(46,66,40,0.12);
          border-radius: 999px;
          padding: 0.3rem 1rem;
          font-size: 0.85rem;
          color: var(--color-text);
          font-weight: 500;
        }
        .hc-cabinet-img-wrap {
          position: relative;
          height: 320px;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        /* Drinks */
        .hc-drinks-section {
          padding: 4rem 0;
          border-top: 1px solid rgba(46,66,40,0.08);
        }
        .hc-drinks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 2rem;
        }
        @media (max-width: 640px) {
          .hc-drinks-grid { grid-template-columns: 1fr; gap: 1.5rem; }
        }
        .hc-drinks-col-heading {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-text);
          border-bottom: 2px solid var(--color-accent);
          padding-bottom: 0.6rem;
          margin-bottom: 1rem;
        }
        .hc-drink-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 1rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(46,66,40,0.07);
        }
        .hc-drink-row:last-child { border-bottom: none; }
        .hc-drink-name {
          font-size: 0.95rem;
          color: var(--color-text);
          font-weight: 500;
        }
        .hc-drink-sub {
          font-size: 0.82rem;
          color: var(--color-text-muted);
        }
        .hc-drink-price {
          font-weight: 700;
          color: var(--color-accent);
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* CTA */
        .hc-menu-cta-band {
          background-color: var(--color-dark-surface);
          padding: 4rem 0;
          text-align: center;
        }
        .hc-menu-cta-heading {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 400;
          color: var(--color-text-on-dark);
          margin-bottom: 0.75rem;
        }
        .hc-menu-cta-sub {
          font-size: 1rem;
          color: rgba(245,238,216,0.65);
          margin-bottom: 2rem;
        }
        .hc-menu-note {
          padding: 1.5rem 0;
          text-align: center;
          font-size: 0.88rem;
          color: var(--color-text-muted);
        }
        .hc-menu-note a {
          color: var(--color-accent);
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>

      {/* Hero */}
      <section className="hc-menu-pg-hero">
        <div className="container hc-menu-pg-hero-inner hc-reveal">
          <span className="hc-menu-pg-kicker">From the kitchen</span>
          <h1 className="hc-menu-pg-heading">What&apos;s on<br />the menu.</h1>
          <p className="hc-menu-pg-sub">
            Fresh cabinet food, hot meals, proper coffee. Kitchen closes at 2pm sharp.
            Hover the cards to see the dish.
          </p>
        </div>
      </section>

      {/* Flip card menu */}
      <section className="hc-section">
        <div className="container">
          {/* Tabs */}
          <div className="hc-menu-tabs" role="tablist">
            {categories.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={activeTab === c.id}
                className={`hc-menu-tab${activeTab === c.id ? " active" : ""}`}
                onClick={() => setActiveTab(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="hc-flip-grid" role="tabpanel">
            {active.items.map((item) => (
              <FlipCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Cabinet Food */}
      <section className="hc-cabinet-section">
        <div className="container">
          <div className="hc-cabinet-inner">
            <div>
              <span className="hc-menu-pg-kicker">Fresh daily</span>
              <h2 className="hc-cabinet-heading">The cabinet changes every morning.</h2>
              <p className="hc-cabinet-body">
                We bake fresh every day. Quiches, pies, muffins, scrolls and slices.
                Ask at the counter what just came out of the oven. Prices vary, always worth checking.
              </p>
              <div className="hc-cabinet-tags">
                {["Daily Quiches", "Pies", "Muffins", "Scones", "Scrolls", "Slices"].map((t) => (
                  <span key={t} className="hc-cabinet-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="hc-cabinet-img-wrap">
              <Image
                src="https://images.unsplash.com/photo-1618686397306-b1a4a556f138?w=700&q=80"
                alt="Golden meat pie fresh from the oven"
                fill
                className="hc-flip-img"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Drinks */}
      <section className="hc-drinks-section">
        <div className="container">
          <span className="hc-menu-pg-kicker">Something to drink</span>
          <h2 className="hc-cabinet-heading">Hot &amp; Cold</h2>
          <div className="hc-drinks-grid">
            <div>
              <h3 className="hc-drinks-col-heading">Hot Drinks</h3>
              {[
                { name: "Flat White", price: "$5.50" },
                { name: "Long Black", price: "$5.00" },
                { name: "Cappuccino / Latte", price: "$5.50" },
                { name: "Hot Chocolate", price: "$5.50" },
                { name: "Kids Hot Choc", sub: "Small size", price: "$4.00" },
              ].map((d) => (
                <div key={d.name} className="hc-drink-row">
                  <div>
                    <div className="hc-drink-name">{d.name}</div>
                    {d.sub && <div className="hc-drink-sub">{d.sub}</div>}
                  </div>
                  <span className="hc-drink-price">{d.price}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="hc-drinks-col-heading">Cold Drinks</h3>
              {[
                { name: "Milkshakes", sub: "Chocolate, strawberry, caramel, vanilla", price: "$8" },
                { name: "Freshly Squeezed Juice", sub: "Ask us what's on today", price: "Ask us" },
                { name: "Soft Drinks / Water", price: "$3.50+" },
              ].map((d) => (
                <div key={d.name} className="hc-drink-row">
                  <div>
                    <div className="hc-drink-name">{d.name}</div>
                    {d.sub && <div className="hc-drink-sub">{d.sub}</div>}
                  </div>
                  <span className="hc-drink-price">{d.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <div className="hc-menu-note">
        <div className="container">
          Menu subject to change. Check{" "}
          <a href="https://www.facebook.com/HatumaCafe" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>{" "}
          for daily specials.
        </div>
      </div>

      {/* CTA */}
      <section className="hc-menu-cta-band">
        <div className="container hc-reveal">
          <h2 className="hc-menu-cta-heading">Coming for a visit?</h2>
          <p className="hc-menu-cta-sub">We&apos;re on SH2. Easy to find, hard to leave.</p>
          <Link href="/contact" className="hc-btn-primary">
            Find Us
          </Link>
        </div>
      </section>
    </>
  );
}
