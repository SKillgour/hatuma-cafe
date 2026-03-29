import Image from "next/image";
import Link from "next/link";
import HCHero from "@/components/HCHero";
import HCScrollAnimations from "@/components/HCScrollAnimations";
import OccasionHelper from "@/components/OccasionHelper";

export default function Home() {
  return (
    <>
      <HCScrollAnimations />
      <HCHero />

      {/* What Makes Hatuma Special */}
      <section className="hc-section">
        <style>{`
          .hc-features-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            gap: 1.5rem;
            align-items: start;
          }
          .hc-feature-main {
            grid-column: 1;
            grid-row: 1 / 3;
          }
          .hc-feature-side {
            grid-column: 2;
          }
          @media (max-width: 768px) {
            .hc-features-layout {
              grid-template-columns: 1fr;
              grid-template-rows: auto;
            }
            .hc-feature-main {
              grid-column: 1;
              grid-row: auto;
            }
            .hc-feature-side {
              grid-column: 1;
            }
          }
          .hc-feature-img-wrap {
            position: relative;
            width: 100%;
            overflow: hidden;
            border-radius: var(--radius-lg) var(--radius-lg) 0 0;
          }
          .hc-feature-img-wrap-tall {
            height: 380px;
          }
          .hc-feature-img-wrap-short {
            height: 220px;
          }
          .hc-feature-body {
            padding: 1.5rem;
          }
          .hc-feature-tag {
            font-size: 0.72rem;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--color-accent);
            margin-bottom: 0.5rem;
            display: block;
          }
          .hc-feature-title {
            font-family: var(--font-heading);
            font-size: 1.4rem;
            font-weight: 600;
            color: var(--color-text);
            margin-bottom: 0.5rem;
          }
          .hc-feature-side .hc-feature-title {
            font-size: 1.15rem;
          }
          .hc-feature-desc {
            font-size: 0.92rem;
            color: var(--color-text-muted);
            line-height: 1.6;
          }
          .hc-section-kicker {
            font-size: 0.75rem;
            font-weight: 800;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--color-accent);
            margin-bottom: 0.5rem;
          }
          .hc-section-heading {
            font-family: var(--font-heading);
            font-size: clamp(1.9rem, 3.5vw, 2.8rem);
            font-weight: 600;
            color: var(--color-text);
            margin-bottom: 0.5rem;
          }
          .hc-section-sub {
            font-size: 1rem;
            color: var(--color-text-muted);
            max-width: 500px;
          }
        `}</style>

        <div className="container">
          <div className="hc-reveal" style={{ marginBottom: "3rem" }}>
            <p className="hc-section-kicker">What makes us different</p>
            <h2 className="hc-section-heading">More than just a coffee stop.</h2>
            <div className="hc-divider" />
            <p className="hc-section-sub">
              We&apos;re a proper destination cafe. Bring the kids, bring the dog, take your time.
            </p>
          </div>

          <div className="hc-features-layout hc-stagger-group">
            {/* Feature 1 - Main (tall) */}
            <div className="hc-feature-card hc-feature-main hc-stagger-item">
              <div className="hc-feature-img-wrap hc-feature-img-wrap-tall">
                <Image
                  src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=900&q=80"
                  alt="Children playing in a playground outdoors"
                  fill
                  className="hc-feature-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="hc-feature-body">
                <span className="hc-feature-tag">For the family</span>
                <h3 className="hc-feature-title">The Playground</h3>
                <p className="hc-feature-desc">
                  Kids playground out the back, and we just added a trampoline.
                  Bring the kids, we&apos;ll keep them busy while you actually enjoy your coffee.
                </p>
              </div>
            </div>

            {/* Feature 2 - Top right */}
            <div className="hc-feature-card hc-feature-side hc-stagger-item">
              <div className="hc-feature-img-wrap hc-feature-img-wrap-short">
                <Image
                  src="https://images.unsplash.com/photo-1770262619388-abffbc52c782?w=700&q=80"
                  alt="Happy corgi resting on an outdoor cafe table"
                  fill
                  className="hc-feature-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="hc-feature-body">
                <span className="hc-feature-tag">Dog Friendly</span>
                <h3 className="hc-feature-title">Dogs welcome here</h3>
                <p className="hc-feature-desc">
                  Your four-legged mate is welcome at Hatuma. Outdoor seating, water bowl ready, and no fuss.
                </p>
              </div>
            </div>

            {/* Feature 3 - Bottom right */}
            <div className="hc-feature-card hc-feature-side hc-stagger-item">
              <div className="hc-feature-img-wrap hc-feature-img-wrap-short">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80"
                  alt="Fresh coffee being made in a cafe kitchen"
                  fill
                  className="hc-feature-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="hc-feature-body">
                <span className="hc-feature-tag">Kitchen</span>
                <h3 className="hc-feature-title">Fresh meals, daily</h3>
                <p className="hc-feature-desc">
                  Cooked fresh every day. Kitchen orders close at 2pm sharp, so don&apos;t be late.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="hc-section" style={{ backgroundColor: "var(--color-surface)" }}>
        <style>{`
          .hc-menu-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem;
          }
          @media (max-width: 640px) {
            .hc-menu-grid {
              grid-template-columns: 1fr;
            }
          }
          .hc-menu-card-img {
            position: relative;
            height: 200px;
            overflow: hidden;
          }
          .hc-menu-card-body {
            padding: 1.25rem 1.5rem;
          }
          .hc-menu-card-name {
            font-family: var(--font-heading);
            font-size: 1.15rem;
            font-weight: 600;
            color: var(--color-text);
            margin-bottom: 0.35rem;
          }
          .hc-menu-card-desc {
            font-size: 0.88rem;
            color: var(--color-text-muted);
            line-height: 1.55;
            margin-bottom: 0.75rem;
          }
          .hc-menu-card-meta {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .hc-menu-card-price {
            font-weight: 700;
            font-size: 1rem;
            color: var(--color-accent);
          }
          .hc-menu-card-cat {
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--color-text-muted);
          }
        `}</style>

        <div className="container">
          <div className="hc-reveal" style={{ marginBottom: "3rem" }}>
            <p className="hc-section-kicker">From the kitchen</p>
            <h2 className="hc-section-heading">Menu highlights</h2>
            <div className="hc-divider" />
            <p className="hc-section-sub">
              Classic cafe kai, made fresh daily. Check Facebook for today&apos;s specials.
            </p>
          </div>

          <div className="hc-menu-grid hc-stagger-group">
            <div className="hc-menu-card hc-stagger-item">
              <div className="hc-menu-card-img">
                <Image
                  src="https://images.unsplash.com/photo-1762631934366-efa1a9f56da3?auto=format&fit=crop&w=700&q=80"
                  alt="Eggs benedict with potatoes and toast"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="hc-menu-card-body">
                <div className="hc-menu-card-meta" style={{ marginBottom: "0.4rem" }}>
                  <span className="hc-menu-card-cat">Breakfast</span>
                  <span className="hc-menu-card-price">$18</span>
                </div>
                <h3 className="hc-menu-card-name">Eggs Benedict</h3>
                <p className="hc-menu-card-desc">
                  Poached eggs, hollandaise, on toasted ciabatta. Classic done right.
                </p>
              </div>
            </div>

            <div className="hc-menu-card hc-stagger-item">
              <div className="hc-menu-card-img">
                <Image
                  src="https://images.unsplash.com/photo-1543792096-24270c85b26e?auto=format&fit=crop&w=700&q=80"
                  alt="Flat white coffee in a white ceramic cup with saucer"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="hc-menu-card-body">
                <div className="hc-menu-card-meta" style={{ marginBottom: "0.4rem" }}>
                  <span className="hc-menu-card-cat">Hot Drinks</span>
                  <span className="hc-menu-card-price">$5.50</span>
                </div>
                <h3 className="hc-menu-card-name">Flat White</h3>
                <p className="hc-menu-card-desc">
                  Proper Kiwi flat white. The one travellers come back for.
                </p>
              </div>
            </div>

            <div className="hc-menu-card hc-stagger-item">
              <div className="hc-menu-card-img">
                <Image
                  src="https://images.unsplash.com/photo-1618686397306-b1a4a556f138?auto=format&fit=crop&w=700&q=80"
                  alt="Golden meat pie fresh from the oven"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="hc-menu-card-body">
                <div className="hc-menu-card-meta" style={{ marginBottom: "0.4rem" }}>
                  <span className="hc-menu-card-cat">Cabinet Food</span>
                  <span className="hc-menu-card-price">Ask us</span>
                </div>
                <h3 className="hc-menu-card-name">Cabinet Pies &amp; Slices</h3>
                <p className="hc-menu-card-desc">
                  Daily quiches, pies, muffins and slices. Changes each day, always worth checking.
                </p>
              </div>
            </div>

            <div className="hc-menu-card hc-stagger-item">
              <div className="hc-menu-card-img">
                <Image
                  src="https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=700&q=80"
                  alt="Fresh cafe sandwich with salad fillings"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="hc-menu-card-body">
                <div className="hc-menu-card-meta" style={{ marginBottom: "0.4rem" }}>
                  <span className="hc-menu-card-cat">Lunch</span>
                  <span className="hc-menu-card-price">$14</span>
                </div>
                <h3 className="hc-menu-card-name">Toasted Sandwich</h3>
                <p className="hc-menu-card-desc">
                  Pressed and golden. Ask about today&apos;s fillings. Kitchen closes at 2pm.
                </p>
              </div>
            </div>
          </div>

          <div className="hc-reveal" style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/menu" className="hc-btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Visit / Worth the Drive */}
      <section className="hc-section hc-visit-band">
        <style>{`
          .hc-visit-band {
            background-color: var(--color-dark-surface);
            color: var(--color-text-on-dark);
          }
          .hc-visit-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
          }
          @media (max-width: 768px) {
            .hc-visit-layout {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
          }
          .hc-visit-big-text {
            font-family: var(--font-heading);
            font-style: italic;
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 400;
            color: var(--color-text-on-dark);
            line-height: 1.1;
            margin-bottom: 1.25rem;
          }
          .hc-visit-lead {
            font-size: 1rem;
            color: rgba(245,238,216,0.72);
            line-height: 1.65;
          }
          .hc-visit-detail-heading {
            font-size: 0.72rem;
            font-weight: 800;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--color-accent);
            margin-bottom: 0.75rem;
          }
          .hc-visit-detail-row {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 0.6rem 0;
            border-bottom: 1px solid rgba(245,238,216,0.08);
          }
          .hc-visit-detail-row:last-child {
            border-bottom: none;
          }
          .hc-visit-detail-label {
            font-size: 0.82rem;
            font-weight: 700;
            color: rgba(245,238,216,0.5);
            width: 90px;
            flex-shrink: 0;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            padding-top: 0.1rem;
          }
          .hc-visit-detail-val {
            font-size: 0.92rem;
            color: rgba(245,238,216,0.88);
            line-height: 1.5;
          }
          .hc-visit-detail-val a {
            color: rgba(245,238,216,0.88);
            text-decoration: none;
            transition: color var(--transition);
          }
          .hc-visit-detail-val a:hover {
            color: var(--color-text-on-dark);
          }
        `}</style>

        <div className="container">
          <div className="hc-visit-layout">
            <div className="hc-reveal">
              <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "0.75rem" }}>
                Come find us
              </p>
              <h2 className="hc-visit-big-text">Worth the drive.</h2>
              <p className="hc-visit-lead">
                On State Highway 2 between Waipukurau and Dannevirke. We&apos;re the one with the playground, the water bowl out front, and the coffee that makes people pull over.
              </p>
              <div style={{ marginTop: "1.75rem" }}>
                <Link href="/contact" className="hc-btn-primary">
                  Get Directions
                </Link>
              </div>
            </div>

            <div className="hc-reveal">
              <p className="hc-visit-detail-heading">Find us</p>

              <div className="hc-visit-detail-row">
                <span className="hc-visit-detail-label">Address</span>
                <span className="hc-visit-detail-val">2398 Takapau Road, Waipukurau, Hawke&apos;s Bay</span>
              </div>
              <div className="hc-visit-detail-row">
                <span className="hc-visit-detail-label">Kitchen</span>
                <span className="hc-visit-detail-val">Open till 2:00pm daily</span>
              </div>
              <div className="hc-visit-detail-row">
                <span className="hc-visit-detail-label">Cafe</span>
                <span className="hc-visit-detail-val">Open till 2:30pm daily</span>
              </div>
              <div className="hc-visit-detail-row">
                <span className="hc-visit-detail-label">Phone</span>
                <span className="hc-visit-detail-val">
                  <a href="tel:068586922">06-858 6922</a>
                </span>
              </div>
              <div className="hc-visit-detail-row">
                <span className="hc-visit-detail-label">Features</span>
                <span className="hc-visit-detail-val">Dog Friendly · Playground · Outdoor Seating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="hc-section">
        <style>{`
          .hc-testimonials-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
          @media (max-width: 768px) {
            .hc-testimonials-grid {
              grid-template-columns: 1fr;
            }
          }
          .hc-testimonial-card {
            background-color: var(--color-surface);
            border-radius: var(--radius-lg);
            padding: 1.75rem;
            position: relative;
          }
          .hc-testimonial-quote {
            font-family: var(--font-heading);
            font-style: italic;
            font-size: 2.5rem;
            font-weight: 400;
            color: var(--color-accent);
            line-height: 1;
            margin-bottom: 0.5rem;
            opacity: 0.4;
          }
          .hc-testimonial-text {
            font-size: 0.95rem;
            color: var(--color-text);
            line-height: 1.65;
            margin-bottom: 1.25rem;
          }
          .hc-testimonial-stars {
            display: flex;
            gap: 3px;
            margin-bottom: 0.75rem;
          }
          .hc-star {
            color: var(--color-accent);
            font-size: 0.85rem;
          }
          .hc-testimonial-author {
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--color-text);
          }
          .hc-testimonial-tag {
            font-size: 0.75rem;
            color: var(--color-text-muted);
            margin-top: 0.2rem;
          }
        `}</style>

        <div className="container">
          <div className="hc-reveal" style={{ marginBottom: "3rem" }}>
            <p className="hc-section-kicker">98% recommend</p>
            <h2 className="hc-section-heading">What people say</h2>
            <div className="hc-divider" />
          </div>

          <div className="hc-testimonials-grid hc-stagger-group">
            <div className="hc-testimonial-card hc-stagger-item">
              <div className="hc-testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="hc-star">&#9733;</span>
                ))}
              </div>
              <p className="hc-testimonial-quote">&ldquo;</p>
              <p className="hc-testimonial-text">
                Best flat white we&apos;ve had on a road trip, full stop. We were heading through on SH2 and pulled in on a whim. The coffee alone was worth the stop, but the kids found the playground and we ended up staying for lunch too.
              </p>
              <p className="hc-testimonial-author">Sarah M.</p>
              <p className="hc-testimonial-tag">Road trip stop, Google Review</p>
            </div>

            <div className="hc-testimonial-card hc-stagger-item">
              <div className="hc-testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="hc-star">&#9733;</span>
                ))}
              </div>
              <p className="hc-testimonial-quote">&ldquo;</p>
              <p className="hc-testimonial-text">
                We go every Sunday with the dog. Proper dog-friendly, not just tolerated. Water bowl already out, staff always make a fuss of him, outdoor tables in a nice spot. Our little ritual now and we&apos;d miss it badly.
              </p>
              <p className="hc-testimonial-author">Mike and Jan</p>
              <p className="hc-testimonial-tag">Regular customers, Facebook</p>
            </div>

            <div className="hc-testimonial-card hc-stagger-item">
              <div className="hc-testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="hc-star">&#9733;</span>
                ))}
              </div>
              <p className="hc-testimonial-quote">&ldquo;</p>
              <p className="hc-testimonial-text">
                Brought three kids under seven and didn&apos;t once feel like we were in the way. The trampoline is new and absolutely worth it. We had a full hot breakfast in peace while our kids burned off energy. This place gets it.
              </p>
              <p className="hc-testimonial-author">Tama H.</p>
              <p className="hc-testimonial-tag">Family visit, Google Review</p>
            </div>
          </div>

          <div className="hc-reveal" style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a
              href="https://www.facebook.com/HatumaCafe"
              target="_blank"
              rel="noopener noreferrer"
              className="hc-btn-ghost-dark"
              style={{ color: "var(--color-text-muted)", borderColor: "rgba(46,66,40,0.2)" }}
            >
              Read more reviews on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Occasion Helper */}
      <OccasionHelper />
    </>
  );
}
