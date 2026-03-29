import Link from "next/link";

export default function MenuPage() {
  return (
    <>
      <style>{`
        /* ---- Page Hero ---- */
        .hc-menu-hero {
          background-color: var(--color-surface);
          padding: 5rem 0 4rem;
          border-bottom: 1px solid rgba(46,66,40,0.08);
        }
        .hc-menu-hero-kicker {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 0.6rem;
          display: block;
        }
        .hc-menu-hero-heading {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.75rem;
          line-height: 1.1;
        }
        .hc-menu-hero-sub {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          max-width: 520px;
          line-height: 1.6;
        }

        /* ---- Section layout ---- */
        .hc-menu-section {
          padding: 4rem 0;
          border-bottom: 1px solid rgba(46,66,40,0.07);
        }
        .hc-menu-section:last-of-type {
          border-bottom: none;
        }
        .hc-menu-section-alt {
          background-color: var(--color-surface);
        }
        .hc-menu-cat-header {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--color-accent);
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .hc-menu-cat-title {
          font-family: var(--font-heading);
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 600;
          color: var(--color-text);
        }
        .hc-menu-cat-note {
          font-size: 0.82rem;
          color: var(--color-text-muted);
          font-style: italic;
        }

        /* ---- Item rows ---- */
        .hc-menu-items {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .hc-menu-item {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.1rem 0;
          border-bottom: 1px solid rgba(46,66,40,0.07);
        }
        .hc-menu-item:last-child {
          border-bottom: none;
        }
        .hc-menu-item-left {
          flex: 1;
          min-width: 0;
        }
        .hc-menu-item-name {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.2rem;
        }
        .hc-menu-item-desc {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
        .hc-menu-item-price {
          font-weight: 700;
          font-size: 1rem;
          color: var(--color-accent);
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ---- Cabinet block ---- */
        .hc-cabinet-card {
          background-color: var(--color-bg);
          border: 1px solid rgba(46,66,40,0.1);
          border-radius: var(--radius-lg);
          padding: 2rem 2.25rem;
        }
        .hc-cabinet-lead {
          font-size: 1rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          max-width: 600px;
        }
        .hc-cabinet-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 1.25rem;
        }
        .hc-cabinet-tag {
          background-color: var(--color-surface);
          border: 1px solid rgba(46,66,40,0.12);
          border-radius: 999px;
          padding: 0.3rem 0.9rem;
          font-size: 0.85rem;
          color: var(--color-text);
          font-weight: 500;
        }

        /* ---- Drinks two-col ---- */
        .hc-drinks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        @media (max-width: 640px) {
          .hc-drinks-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        .hc-drinks-col-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid var(--color-accent);
        }

        /* ---- Footer note ---- */
        .hc-menu-footer-note {
          padding: 3rem 0;
          text-align: center;
        }
        .hc-menu-footer-note p {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          margin-bottom: 0.4rem;
        }
        .hc-menu-footer-note a {
          color: var(--color-accent);
          text-decoration: none;
          font-weight: 600;
        }
        .hc-menu-footer-note a:hover {
          text-decoration: underline;
        }

        /* ---- CTA block ---- */
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
      `}</style>

      {/* Hero */}
      <section className="hc-menu-hero">
        <div className="container">
          <div className="hc-reveal">
            <span className="hc-menu-hero-kicker">From the kitchen</span>
            <h1 className="hc-menu-hero-heading">What&apos;s On the Menu</h1>
            <div className="hc-divider" />
            <p className="hc-menu-hero-sub">
              Fresh cabinet food, hot meals, proper coffee. Kitchen closes at 2pm sharp.
            </p>
          </div>
        </div>
      </section>

      {/* Breakfast */}
      <section className="hc-menu-section">
        <div className="container">
          <div className="hc-reveal">
            <div className="hc-menu-cat-header">
              <h2 className="hc-menu-cat-title">Breakfast</h2>
              <span className="hc-menu-cat-note">Served all day until kitchen close</span>
            </div>
          </div>
          <div className="hc-menu-items hc-stagger-group">
            <div className="hc-menu-item hc-stagger-item">
              <div className="hc-menu-item-left">
                <p className="hc-menu-item-name">Eggs Benedict</p>
                <p className="hc-menu-item-desc">Poached eggs, hollandaise, toasted ciabatta</p>
              </div>
              <span className="hc-menu-item-price">$18</span>
            </div>
            <div className="hc-menu-item hc-stagger-item">
              <div className="hc-menu-item-left">
                <p className="hc-menu-item-name">Big Breakfast</p>
                <p className="hc-menu-item-desc">Eggs, bacon, hash brown, toast, grilled tomato</p>
              </div>
              <span className="hc-menu-item-price">$22</span>
            </div>
            <div className="hc-menu-item hc-stagger-item">
              <div className="hc-menu-item-left">
                <p className="hc-menu-item-name">French Toast</p>
                <p className="hc-menu-item-desc">Thick-cut brioche, maple, fresh berries</p>
              </div>
              <span className="hc-menu-item-price">$16</span>
            </div>
            <div className="hc-menu-item hc-stagger-item">
              <div className="hc-menu-item-left">
                <p className="hc-menu-item-name">Avocado Toast</p>
                <p className="hc-menu-item-desc">Sourdough, smashed avo, feta, chilli flakes</p>
              </div>
              <span className="hc-menu-item-price">$17</span>
            </div>
            <div className="hc-menu-item hc-stagger-item">
              <div className="hc-menu-item-left">
                <p className="hc-menu-item-name">Bircher Muesli</p>
                <p className="hc-menu-item-desc">Overnight oats, apple, honey, yoghurt</p>
              </div>
              <span className="hc-menu-item-price">$12</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lunch */}
      <section className="hc-menu-section hc-menu-section-alt">
        <div className="container">
          <div className="hc-reveal">
            <div className="hc-menu-cat-header">
              <h2 className="hc-menu-cat-title">Lunch</h2>
              <span className="hc-menu-cat-note">Kitchen closes at 2pm</span>
            </div>
          </div>
          <div className="hc-menu-items hc-stagger-group">
            <div className="hc-menu-item hc-stagger-item">
              <div className="hc-menu-item-left">
                <p className="hc-menu-item-name">Pork Belly Bao</p>
                <p className="hc-menu-item-desc">Two bao buns, hoisin, cucumber, spring onion</p>
              </div>
              <span className="hc-menu-item-price">$19</span>
            </div>
            <div className="hc-menu-item hc-stagger-item">
              <div className="hc-menu-item-left">
                <p className="hc-menu-item-name">Loaded Fries</p>
                <p className="hc-menu-item-desc">Aioli, bacon, cheese sauce, chives</p>
              </div>
              <span className="hc-menu-item-price">$14</span>
            </div>
            <div className="hc-menu-item hc-stagger-item">
              <div className="hc-menu-item-left">
                <p className="hc-menu-item-name">Toasted Sandwich</p>
                <p className="hc-menu-item-desc">Ask us about today&apos;s fillings</p>
              </div>
              <span className="hc-menu-item-price">$14</span>
            </div>
            <div className="hc-menu-item hc-stagger-item">
              <div className="hc-menu-item-left">
                <p className="hc-menu-item-name">Soup of the Day</p>
                <p className="hc-menu-item-desc">Served with crusty bread</p>
              </div>
              <span className="hc-menu-item-price">$13</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Food */}
      <section className="hc-menu-section">
        <div className="container">
          <div className="hc-reveal">
            <div className="hc-menu-cat-header">
              <h2 className="hc-menu-cat-title">Cabinet Food</h2>
              <span className="hc-menu-cat-note">Self-serve -- ask us for prices</span>
            </div>
            <div className="hc-cabinet-card">
              <p className="hc-cabinet-lead">
                Our cabinet changes daily -- come in and see what&apos;s on. We bake fresh every morning, so it never looks the same twice.
              </p>
              <div className="hc-cabinet-items">
                <span className="hc-cabinet-tag">Daily Quiches</span>
                <span className="hc-cabinet-tag">Pies</span>
                <span className="hc-cabinet-tag">Muffins</span>
                <span className="hc-cabinet-tag">Scones</span>
                <span className="hc-cabinet-tag">Scrolls</span>
                <span className="hc-cabinet-tag">Slices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drinks */}
      <section className="hc-menu-section hc-menu-section-alt">
        <div className="container">
          <div className="hc-reveal" style={{ marginBottom: "2.5rem" }}>
            <p className="hc-menu-hero-kicker">Something to drink</p>
            <h2 className="hc-menu-cat-title" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, color: "var(--color-text)" }}>Hot &amp; Cold</h2>
          </div>
          <div className="hc-drinks-grid hc-stagger-group">
            {/* Hot Drinks */}
            <div className="hc-stagger-item">
              <h3 className="hc-drinks-col-heading">Hot Drinks</h3>
              <div className="hc-menu-items">
                <div className="hc-menu-item">
                  <div className="hc-menu-item-left">
                    <p className="hc-menu-item-name">Flat White</p>
                  </div>
                  <span className="hc-menu-item-price">$5.50</span>
                </div>
                <div className="hc-menu-item">
                  <div className="hc-menu-item-left">
                    <p className="hc-menu-item-name">Long Black</p>
                  </div>
                  <span className="hc-menu-item-price">$5.00</span>
                </div>
                <div className="hc-menu-item">
                  <div className="hc-menu-item-left">
                    <p className="hc-menu-item-name">Cappuccino / Latte</p>
                  </div>
                  <span className="hc-menu-item-price">$5.50</span>
                </div>
                <div className="hc-menu-item">
                  <div className="hc-menu-item-left">
                    <p className="hc-menu-item-name">Hot Chocolate</p>
                  </div>
                  <span className="hc-menu-item-price">$5.50</span>
                </div>
                <div className="hc-menu-item">
                  <div className="hc-menu-item-left">
                    <p className="hc-menu-item-name">Kids Hot Choc</p>
                    <p className="hc-menu-item-desc">Small size</p>
                  </div>
                  <span className="hc-menu-item-price">$4.00</span>
                </div>
              </div>
            </div>

            {/* Cold Drinks */}
            <div className="hc-stagger-item">
              <h3 className="hc-drinks-col-heading">Cold Drinks</h3>
              <div className="hc-menu-items">
                <div className="hc-menu-item">
                  <div className="hc-menu-item-left">
                    <p className="hc-menu-item-name">Milkshakes</p>
                    <p className="hc-menu-item-desc">Chocolate, strawberry, caramel, vanilla</p>
                  </div>
                  <span className="hc-menu-item-price">$8</span>
                </div>
                <div className="hc-menu-item">
                  <div className="hc-menu-item-left">
                    <p className="hc-menu-item-name">Freshly Squeezed Juice</p>
                    <p className="hc-menu-item-desc">Ask us what&apos;s on today</p>
                  </div>
                  <span className="hc-menu-item-price">Ask us</span>
                </div>
                <div className="hc-menu-item">
                  <div className="hc-menu-item-left">
                    <p className="hc-menu-item-name">Soft Drinks / Water</p>
                  </div>
                  <span className="hc-menu-item-price">$3.50+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div className="hc-menu-footer-note">
        <div className="container">
          <p>Menu subject to change. Check{" "}
            <a href="https://www.facebook.com/HatumaCafe" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            {" "}for daily specials.
          </p>
        </div>
      </div>

      {/* CTA band */}
      <section className="hc-menu-cta-band">
        <div className="container">
          <div className="hc-reveal">
            <h2 className="hc-menu-cta-heading">Coming for a visit?</h2>
            <p className="hc-menu-cta-sub">We&apos;re on SH2. Easy to find, hard to leave.</p>
            <Link href="/contact" className="hc-btn-primary">
              Find Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
