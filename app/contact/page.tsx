import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <style>{`
        /* ---- Hero ---- */
        .hc-contact-hero {
          background-color: var(--color-dark-surface);
          padding: 6rem 0 5rem;
        }
        .hc-contact-hero-kicker {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 0.75rem;
          display: block;
        }
        .hc-contact-hero-heading {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 400;
          color: var(--color-text-on-dark);
          line-height: 1.05;
          margin-bottom: 1rem;
        }
        .hc-contact-hero-sub {
          font-size: 1.05rem;
          color: rgba(245,238,216,0.65);
          max-width: 480px;
          line-height: 1.65;
        }

        /* ---- Two column info layout ---- */
        .hc-contact-main {
          padding: 5rem 0;
        }
        .hc-contact-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .hc-contact-cols {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        /* ---- Left column: info ---- */
        .hc-contact-info-heading {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 1.5rem;
        }
        .hc-contact-detail-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.9rem 0;
          border-bottom: 1px solid rgba(46,66,40,0.08);
        }
        .hc-contact-detail-row:first-of-type {
          padding-top: 0;
        }
        .hc-contact-detail-label {
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-text-muted);
          width: 80px;
          flex-shrink: 0;
          padding-top: 0.15rem;
        }
        .hc-contact-detail-val {
          font-size: 0.95rem;
          color: var(--color-text);
          line-height: 1.55;
        }
        .hc-contact-detail-val a {
          color: var(--color-text);
          text-decoration: none;
          transition: color var(--transition);
        }
        .hc-contact-detail-val a:hover {
          color: var(--color-accent);
        }

        /* ---- Features row ---- */
        .hc-contact-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        .hc-contact-feature-badge {
          background-color: var(--color-surface);
          border: 1px solid rgba(46,66,40,0.12);
          border-radius: 999px;
          padding: 0.35rem 0.9rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--color-text);
          letter-spacing: 0.02em;
        }

        /* ---- Facebook link ---- */
        .hc-contact-fb-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.75rem;
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--color-accent);
          text-decoration: none;
          transition: opacity var(--transition);
        }
        .hc-contact-fb-link:hover {
          opacity: 0.75;
        }
        .hc-contact-fb-arrow {
          font-size: 1rem;
        }

        /* ---- Right column: map placeholder ---- */
        .hc-map-card {
          background-color: var(--color-dark-surface);
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 4 / 3;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2.5rem;
        }
        .hc-map-card-label {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(245,238,216,0.4);
          margin-bottom: 0.75rem;
        }
        .hc-map-card-address {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-text-on-dark);
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }
        .hc-map-card-link {
          display: inline-block;
          padding: 0.65rem 1.4rem;
          border: 1px solid rgba(245,238,216,0.25);
          border-radius: 999px;
          font-size: 0.88rem;
          font-weight: 600;
          color: rgba(245,238,216,0.85);
          text-decoration: none;
          transition: background-color var(--transition), color var(--transition);
        }
        .hc-map-card-link:hover {
          background-color: rgba(245,238,216,0.08);
          color: var(--color-text-on-dark);
        }
        .hc-map-crosshair {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          opacity: 0.04;
        }
        .hc-map-crosshair-h {
          position: absolute;
          width: 100%;
          height: 1px;
          background-color: rgba(245,238,216,1);
        }
        .hc-map-crosshair-v {
          position: absolute;
          height: 100%;
          width: 1px;
          background-color: rgba(245,238,216,1);
        }

        /* ---- Getting here section ---- */
        .hc-getting-here {
          background-color: var(--color-surface);
          padding: 5rem 0;
        }
        .hc-getting-here-inner {
          max-width: 680px;
        }
        .hc-getting-here-kicker {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 0.6rem;
          display: block;
        }
        .hc-getting-here-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 1rem;
        }
        .hc-getting-here-body {
          font-size: 1rem;
          color: var(--color-text-muted);
          line-height: 1.75;
          margin-bottom: 0.85rem;
        }
      `}</style>

      {/* Hero */}
      <section className="hc-contact-hero">
        <div className="container">
          <div className="hc-reveal">
            <span className="hc-contact-hero-kicker">Find us</span>
            <h1 className="hc-contact-hero-heading">Worth the drive.</h1>
            <p className="hc-contact-hero-sub">
              State Highway 2 between Waipukurau and Dannevirke. Pull in. Stay a while.
            </p>
          </div>
        </div>
      </section>

      {/* Main two-column */}
      <section className="hc-contact-main">
        <div className="container">
          <div className="hc-contact-cols">

            {/* Left: practical info */}
            <div className="hc-reveal">
              <p className="hc-contact-info-heading">The details</p>

              <div className="hc-contact-detail-row">
                <span className="hc-contact-detail-label">Address</span>
                <span className="hc-contact-detail-val">
                  2398 Takapau Road<br />Waipukurau, Hawke&apos;s Bay
                </span>
              </div>

              <div className="hc-contact-detail-row">
                <span className="hc-contact-detail-label">Kitchen</span>
                <span className="hc-contact-detail-val">Open daily -- closes 2:00pm</span>
              </div>

              <div className="hc-contact-detail-row">
                <span className="hc-contact-detail-label">Cafe</span>
                <span className="hc-contact-detail-val">Open daily -- closes 2:30pm</span>
              </div>

              <div className="hc-contact-detail-row">
                <span className="hc-contact-detail-label">Phone</span>
                <span className="hc-contact-detail-val">
                  <a href="tel:068586922">06-858 6922</a>
                </span>
              </div>

              <div className="hc-contact-features">
                <span className="hc-contact-feature-badge">Dog Friendly</span>
                <span className="hc-contact-feature-badge">Playground</span>
                <span className="hc-contact-feature-badge">Trampoline</span>
                <span className="hc-contact-feature-badge">Outdoor Seating</span>
              </div>

              <a
                href="https://www.facebook.com/HatumaCafe"
                target="_blank"
                rel="noopener noreferrer"
                className="hc-contact-fb-link"
              >
                Follow us on Facebook
                <span className="hc-contact-fb-arrow">&#8599;</span>
              </a>
            </div>

            {/* Right: map placeholder */}
            <div className="hc-reveal">
              <a
                href="https://www.google.com/maps/search/2398+Takapau+Road+Waipukurau+Hawkes+Bay"
                target="_blank"
                rel="noopener noreferrer"
                className="hc-map-card"
                style={{ display: "flex", textDecoration: "none" }}
              >
                <div className="hc-map-crosshair" aria-hidden="true">
                  <div className="hc-map-crosshair-h" />
                  <div className="hc-map-crosshair-v" />
                </div>
                <p className="hc-map-card-label">Location</p>
                <p className="hc-map-card-address">
                  2398 Takapau Road<br />Waipukurau, Hawke&apos;s Bay
                </p>
                <span className="hc-map-card-link">View on Google Maps</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section className="hc-getting-here">
        <div className="container">
          <div className="hc-getting-here-inner hc-reveal">
            <span className="hc-getting-here-kicker">Getting here</span>
            <h2 className="hc-getting-here-heading">Right on SH2 -- you can&apos;t miss us.</h2>
            <p className="hc-getting-here-body">
              Hatuma Cafe sits right on State Highway 2, the main route through central Hawke&apos;s Bay. Whether you&apos;re heading north toward Dannevirke or south toward Waipukurau, we&apos;re easy to spot from the road. Keep an eye out for the signage and the playground.
            </p>
            <p className="hc-getting-here-body">
              There&apos;s plenty of parking out front -- enough room for cars, bikes, and the occasional long vehicle. Pull in, take a breath, and let us make you a proper coffee.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <Link href="/menu" className="hc-btn-primary">
                View the Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
