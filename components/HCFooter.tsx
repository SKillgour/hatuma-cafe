import Link from "next/link";

export default function HCFooter() {
  return (
    <footer className="hc-footer">
      <style>{`
        .hc-footer {
          background-color: var(--color-dark-surface);
          color: var(--color-text-on-dark);
          padding: 3.5rem 0 2rem;
        }
        .hc-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 2.5rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(245,238,216,0.12);
        }
        @media (max-width: 768px) {
          .hc-footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .hc-footer-brand {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .hc-footer-grid {
            grid-template-columns: 1fr;
          }
        }
        .hc-footer-wordmark {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--color-text-on-dark);
          display: block;
          margin-bottom: 0.75rem;
          text-decoration: none;
        }
        .hc-footer-tagline {
          font-size: 0.875rem;
          color: rgba(245,238,216,0.65);
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }
        .hc-footer-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .hc-footer-badge {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 0.25rem 0.7rem;
          border-radius: 999px;
          border: 1px solid rgba(245,238,216,0.25);
          color: rgba(245,238,216,0.75);
        }
        .hc-footer-heading {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 1rem;
        }
        .hc-footer-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .hc-footer-list li {
          font-size: 0.9rem;
          color: rgba(245,238,216,0.8);
          line-height: 1.5;
        }
        .hc-footer-list a {
          color: rgba(245,238,216,0.8);
          text-decoration: none;
          transition: color var(--transition);
        }
        .hc-footer-list a:hover {
          color: var(--color-text-on-dark);
        }
        .hc-footer-hours-note {
          font-size: 0.78rem;
          color: rgba(245,238,216,0.5);
          margin-top: 0.6rem;
          font-style: italic;
        }
        .hc-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .hc-footer-copy {
          font-size: 0.8rem;
          color: rgba(245,238,216,0.4);
        }
        .hc-footer-fb {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(245,238,216,0.7);
          text-decoration: none;
          transition: color var(--transition);
        }
        .hc-footer-fb:hover {
          color: var(--color-text-on-dark);
        }
        .footer-credit { text-align: center; font-size: 0.68rem; opacity: 0.35; margin-top: 1.5rem; padding-bottom: 0.75rem; letter-spacing: 0.02em; }
        .footer-credit a { color: inherit; text-decoration: none; }
        .footer-credit a:hover { opacity: 0.7; }
      `}</style>

      <div className="container">
        <div className="hc-footer-grid">
          <div className="hc-footer-brand">
            <Link href="/" className="hc-footer-wordmark">
              Hatuma Cafe
            </Link>
            <p className="hc-footer-tagline">
              A reason to drive out. Family cafe with a playground, great coffee,
              and a warm welcome for dogs too.
            </p>
            <div className="hc-footer-badges">
              <span className="hc-footer-badge">Dog Friendly</span>
              <span className="hc-footer-badge">Family Friendly</span>
              <span className="hc-footer-badge">Outdoor Seating</span>
              <span className="hc-footer-badge">Playground</span>
            </div>
          </div>

          <div>
            <p className="hc-footer-heading">Visit Us</p>
            <ul className="hc-footer-list">
              <li>2398 Takapau Road</li>
              <li>Waipukurau</li>
              <li>Hawke&apos;s Bay, NZ</li>
              <li style={{ marginTop: "0.5rem" }}>
                <a href="tel:068586922">06-858 6922</a>
              </li>
              <li>
                <a href="mailto:hatumacafe@gmail.com">hatumacafe@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="hc-footer-heading">Hours</p>
            <ul className="hc-footer-list">
              <li>Mon - Fri: 7:30am - 2:30pm</li>
              <li>Saturday: 8:00am - 2:30pm</li>
              <li>Sunday: 8:30am - 2:30pm</li>
            </ul>
            <p className="hc-footer-hours-note">
              Kitchen orders close at 2:00pm.
            </p>
            <div style={{ marginTop: "1.25rem" }}>
              <p className="hc-footer-heading">Connect</p>
              <a
                href="https://www.facebook.com/HatumaCafe"
                target="_blank"
                rel="noopener noreferrer"
                className="hc-footer-fb"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook - 2.7K followers
              </a>
            </div>
          </div>
        </div>

        <div className="hc-footer-bottom">
          <p className="hc-footer-copy">
            &copy; {new Date().getFullYear()} Hatuma Cafe. All rights reserved.
          </p>
          <Link href="/menu" className="hc-footer-fb">
            View Menu
          </Link>
        </div>
        <p className="footer-credit">Website by <a href="https://insightly.nz" target="_blank" rel="noopener noreferrer">Insightly</a></p>
      </div>
    </footer>
  );
}
