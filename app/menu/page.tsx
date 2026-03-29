"use client";

import Link from "next/link";
import { useState } from "react";

const breakfast = [
  { name: "Eggs Benedict", desc: "Poached eggs, hollandaise, toasted ciabatta", price: "$18" },
  { name: "Big Breakfast", desc: "Eggs, bacon, hash brown, toast, grilled tomato", price: "$22" },
  { name: "French Toast", desc: "Thick-cut brioche, maple syrup, fresh berries", price: "$16" },
  { name: "Avocado Toast", desc: "Sourdough, smashed avo, feta, chilli flakes", price: "$17" },
  { name: "Bircher Muesli", desc: "Overnight oats, apple, honey, yoghurt", price: "$12" },
  { name: "Pikelets", desc: "Stack of three, served with butter and jam", price: "$10" },
  { name: "Kids Breakfast Plate", desc: "Scrambled eggs, toast, baked beans", price: "$10" },
];

const lunch = [
  { name: "Pork Belly Bao", desc: "Two bao buns, hoisin, cucumber, spring onion", price: "$19" },
  { name: "Loaded Fries", desc: "Aioli, bacon, cheese sauce, chives", price: "$14" },
  { name: "Toasted Sandwich", desc: "Ask us about today's fillings", price: "$14" },
  { name: "Soup of the Day", desc: "Served with crusty bread", price: "$13" },
  { name: "Kids Toasted Sandwich", desc: "Choose your filling, served with a juice", price: "$8" },
];

const cabinet = [
  "Daily Quiches",
  "Pies",
  "Muffins",
  "Scones",
  "Scrolls",
  "Slices",
];

const hotDrinks = [
  { name: "Flat White", price: "$5.50" },
  { name: "Long Black", price: "$5.00" },
  { name: "Cappuccino / Latte", price: "$5.50" },
  { name: "Hot Chocolate", price: "$5.50" },
  { name: "Kids Hot Choc", desc: "Small size", price: "$4.00" },
];

const coldDrinks = [
  { name: "Milkshakes", desc: "Chocolate, strawberry, caramel, vanilla", price: "$8" },
  { name: "Freshly Squeezed Juice", desc: "Ask us what's on today", price: "Ask us" },
  { name: "Soft Drinks / Water", price: "$3.50+" },
];

export default function MenuPage() {
  const [tab, setTab] = useState<"breakfast" | "lunch">("breakfast");
  const items = tab === "breakfast" ? breakfast : lunch;

  return (
    <>
      <style>{`
        .hc-menu-hero {
          background-color: var(--color-dark-surface);
          padding: 5rem 0 3.5rem;
          position: relative;
          overflow: hidden;
        }
        .hc-menu-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=50') center/cover no-repeat;
          opacity: 0.12;
        }
        .hc-menu-hero-inner {
          position: relative;
          z-index: 1;
        }
        .hc-menu-kicker {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-accent);
          display: block;
          margin-bottom: 0.75rem;
        }
        .hc-menu-heading {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-style: italic;
          font-weight: 400;
          color: var(--color-text-on-dark);
          line-height: 1.1;
          margin-bottom: 0.875rem;
        }
        .hc-menu-sub {
          font-size: 1rem;
          color: rgba(245,238,216,0.6);
          max-width: 460px;
          line-height: 1.6;
        }

        /* Tabs */
        .hc-menu-tabs-section {
          background-color: var(--color-bg);
          padding: 3rem 0 0;
        }
        .hc-menu-tabs {
          display: flex;
          border-bottom: 2px solid rgba(46,66,40,0.1);
          margin-bottom: 2.5rem;
        }
        .hc-menu-tab {
          padding: 0.875rem 1.75rem;
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

        /* Menu list */
        .hc-menu-list {
          display: flex;
          flex-direction: column;
        }
        .hc-menu-item {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          align-items: baseline;
          padding: 1.25rem 0;
          border-bottom: 1px solid rgba(46,66,40,0.08);
        }
        .hc-menu-item:last-child {
          border-bottom: none;
        }
        .hc-menu-item-name {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.25rem;
        }
        .hc-menu-item-desc {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
        .hc-menu-item-price {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-accent);
          white-space: nowrap;
        }
        .hc-menu-tab-note {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }

        /* Cabinet */
        .hc-cabinet-section {
          background-color: var(--color-surface);
          padding: 3.5rem 0;
        }
        .hc-cabinet-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hc-cabinet-label {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-accent);
          display: block;
          margin-bottom: 0.625rem;
        }
        .hc-cabinet-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-style: italic;
          font-weight: 400;
          color: var(--color-text);
          line-height: 1.2;
          margin-bottom: 0.875rem;
        }
        .hc-cabinet-body {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        .hc-cabinet-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .hc-cabinet-tag {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text);
          background: #fff;
          border: 1px solid rgba(46,66,40,0.12);
          padding: 0.35rem 0.875rem;
          border-radius: 50px;
        }
        .hc-cabinet-img-wrap {
          position: relative;
          height: 280px;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .hc-cabinet-img {
          object-fit: cover;
        }

        /* Drinks */
        .hc-drinks-section {
          background-color: var(--color-bg);
          padding: 3.5rem 0;
        }
        .hc-drinks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 2.5rem;
        }
        .hc-drinks-col-heading {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 1.25rem;
          padding-bottom: 0.625rem;
          border-bottom: 2px solid var(--color-accent);
          display: inline-block;
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
          font-size: 0.9375rem;
          color: var(--color-text);
          font-weight: 500;
        }
        .hc-drink-note {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          margin-top: 0.125rem;
        }
        .hc-drink-price {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-accent);
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* Footer note */
        .hc-menu-footer-note {
          text-align: center;
          padding: 2rem 0;
          font-size: 0.85rem;
          color: var(--color-text-muted);
          background-color: var(--color-bg);
        }

        /* Visit CTA */
        .hc-menu-visit-cta {
          background-color: var(--color-primary);
          padding: 4rem 0;
          text-align: center;
        }
        .hc-menu-visit-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-style: italic;
          font-weight: 400;
          color: var(--color-text-on-dark);
          margin-bottom: 0.75rem;
        }
        .hc-menu-visit-sub {
          font-size: 1rem;
          color: rgba(245,238,216,0.6);
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .hc-cabinet-inner,
          .hc-drinks-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hc-cabinet-img-wrap { height: 220px; }
        }
      `}</style>

      {/* Hero */}
      <div className="hc-menu-hero">
        <div className="container hc-menu-hero-inner">
          <span className="hc-menu-kicker">From the kitchen</span>
          <h1 className="hc-menu-heading">What&rsquo;s On the Menu</h1>
          <p className="hc-menu-sub">
            Fresh cabinet food, hot meals, proper coffee. Kitchen closes at 2pm sharp.
          </p>
        </div>
      </div>

      {/* Kitchen menu with tabs */}
      <section className="hc-menu-tabs-section">
        <div className="container">
          <div className="hc-menu-tabs" role="tablist">
            {(["breakfast", "lunch"] as const).map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                className={`hc-menu-tab${tab === t ? " active" : ""}`}
                onClick={() => setTab(t)}
              >
                {t === "breakfast" ? "Breakfast" : "Lunch"}
              </button>
            ))}
          </div>

          <p className="hc-menu-tab-note">
            {tab === "breakfast"
              ? "Served all day until kitchen close"
              : "Kitchen closes at 2pm"}
          </p>

          <div className="hc-menu-list" role="tabpanel">
            {items.map((item) => (
              <div key={item.name} className="hc-menu-item">
                <div>
                  <div className="hc-menu-item-name">{item.name}</div>
                  <div className="hc-menu-item-desc">{item.desc}</div>
                </div>
                <span className="hc-menu-item-price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabinet */}
      <section className="hc-cabinet-section">
        <div className="container">
          <div className="hc-cabinet-inner">
            <div>
              <span className="hc-cabinet-label">Fresh daily</span>
              <h2 className="hc-cabinet-heading">The cabinet changes every morning.</h2>
              <p className="hc-cabinet-body">
                We bake fresh every day. Quiches, pies, muffins, scrolls and slices.
                Ask at the counter what just came out of the oven. Prices vary, always worth checking.
              </p>
              <div className="hc-cabinet-tags">
                {cabinet.map((item) => (
                  <span key={item} className="hc-cabinet-tag">{item}</span>
                ))}
              </div>
            </div>
            <div className="hc-cabinet-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=700&q=80&auto=format&fit=crop"
                alt="Fresh golden pies just out of the oven"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Drinks */}
      <section className="hc-drinks-section">
        <div className="container">
          <span className="hc-menu-kicker">Something to drink</span>
          <h2 className="hc-menu-heading" style={{ color: "var(--color-text)", fontStyle: "normal", fontSize: "1.75rem", marginTop: "0.5rem" }}>
            Hot &amp; Cold
          </h2>
          <div className="hc-drinks-grid">
            <div>
              <div className="hc-drinks-col-heading">Hot Drinks</div>
              {hotDrinks.map((d) => (
                <div key={d.name} className="hc-drink-row">
                  <div>
                    <div className="hc-drink-name">{d.name}</div>
                    {"desc" in d && d.desc && <div className="hc-drink-note">{d.desc}</div>}
                  </div>
                  <span className="hc-drink-price">{d.price}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="hc-drinks-col-heading">Cold Drinks</div>
              {coldDrinks.map((d) => (
                <div key={d.name} className="hc-drink-row">
                  <div>
                    <div className="hc-drink-name">{d.name}</div>
                    {"desc" in d && d.desc && <div className="hc-drink-note">{d.desc}</div>}
                  </div>
                  <span className="hc-drink-price">{d.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div className="hc-menu-footer-note">
        <div className="container">
          Menu subject to change. Check{" "}
          <a href="https://www.facebook.com/HatumaCafe" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>
            Facebook
          </a>{" "}
          for daily specials.
        </div>
      </div>

      {/* Visit CTA */}
      <section className="hc-menu-visit-cta">
        <div className="container">
          <h2 className="hc-menu-visit-heading">Coming for a visit?</h2>
          <p className="hc-menu-visit-sub">We&rsquo;re on SH2. Easy to find, hard to leave.</p>
          <Link href="/contact" className="hc-btn-primary">Find Us</Link>
        </div>
      </section>
    </>
  );
}
