"use client";

import { useState } from "react";
import Link from "next/link";

type WhoOption = "adults" | "kids" | "dog" | "family";
type TimeOption = "morning" | "brunch" | "lunch";

interface VisitTip {
  headline: string;
  what: string;
  order: string[];
  tip: string;
}

const tips: Record<WhoOption, Record<TimeOption, VisitTip>> = {
  adults: {
    morning: {
      headline: "A slow morning coffee run",
      what: "Grab a table, order a flat white, and let the Hawke's Bay pace slow you down. Cabinet slices are usually out fresh first thing.",
      order: ["Flat White or Long Black", "Cabinet slice or muffin", "Eggs Benedict if you're hungry"],
      tip: "Arrive before 9am on weekends for the quietest seats.",
    },
    brunch: {
      headline: "Classic brunch stop",
      what: "This is the sweet spot. Full menu open, quieter than a city cafe, and the kitchen's firing on all cylinders.",
      order: ["Eggs Benedict", "Big Breakfast", "French Toast with seasonal fruit"],
      tip: "Kitchen closes at 2pm - brunch runs right through so you're in good shape.",
    },
    lunch: {
      headline: "Lunch before the road",
      what: "Solid lunch options and the best pie cabinet this side of Waipukurau. Don't leave without checking the daily specials board.",
      order: ["Burger with the lot", "Soup of the day", "Toasted sandwich", "Cabinet pie"],
      tip: "Order kitchen food before 2pm or you'll be on cabinet food only - still great though.",
    },
  },
  kids: {
    morning: {
      headline: "Morning with the little ones",
      what: "Kids can head straight for the playground while you wait for coffee. The trampoline is a recent addition and it's always busy.",
      order: ["Pikelets for the kids", "Flat white for you", "Hot chocolate if they're keen"],
      tip: "The playground is fenced and visible from most outdoor tables - proper peace of mind.",
    },
    brunch: {
      headline: "Family brunch with a side of playground",
      what: "Order, then send them to the playground. By the time food arrives they'll be ready to eat. Works every time.",
      order: ["Kids breakfast platter ($10)", "Pancakes - kids love them", "Big Breakfast for the grown-ups"],
      tip: "The trampoline is the big hit right now. Kids will want to go back after eating too.",
    },
    lunch: {
      headline: "Lunch then leg stretch",
      what: "Good kids menu with proper food - not just nuggets. The toasted sandwich is a winner for picky eaters.",
      order: ["Kids toasted sandwich ($8)", "Pikelet stack ($9)", "Kids burger or daily special"],
      tip: "Kitchen closes at 2pm sharp. If you're coming with kids, aim for 12:30 to have time.",
    },
  },
  dog: {
    morning: {
      headline: "Morning walk reward",
      what: "Hatuma is properly dog-friendly - outdoor tables, water bowl ready, and no side-eye from staff or locals.",
      order: ["Flat white to go or at an outdoor table", "Cabinet slice", "Muffin"],
      tip: "Tie up at the outdoor area. Your dog will get more pats than you get waves.",
    },
    brunch: {
      headline: "Brunch with your best mate",
      what: "Outdoor seating means your dog stays close. Plenty of space, no stress. The rural setting means dogs fit right in.",
      order: ["Eggs Benedict at an outdoor table", "Avocado toast", "Long black"],
      tip: "Water bowl is out the front. Ask staff if you need anything for your dog.",
    },
    lunch: {
      headline: "Road trip lunch stop",
      what: "SH2 road trip? Hatuma is the perfect pull-over. Dog stretches its legs, you get a proper lunch, everyone wins.",
      order: ["Burger", "Toasted sandwich", "Soup of the day"],
      tip: "The outdoor area has good shade in the afternoon. Arrive by 1:30pm to have time for lunch.",
    },
  },
  family: {
    morning: {
      headline: "Full family morning out",
      what: "Kids to the playground, dog in the outdoor area, adults at a table with coffee. This is what Hatuma was made for.",
      order: ["Flat whites all round", "Hot chocolate for kids", "Cabinet slices and muffins to share"],
      tip: "Weekday mornings are the quietest. Weekends fill up fast - arrive by 9am.",
    },
    brunch: {
      headline: "The ideal Sunday drive",
      what: "Load everyone in the car, point it at Waipukurau, and let Hatuma do the rest. Playground, coffee, dog-friendly. Proper Sunday.",
      order: ["Big Breakfast to share", "Kids breakfast plates", "Pikelet stack", "French Toast"],
      tip: "Book ahead on Sundays if you can, or come before 10am to guarantee outdoor seating.",
    },
    lunch: {
      headline: "Lunch with the whole crew",
      what: "Generous portions, good kids menu, and nothing on the menu that breaks the bank. Rural hospitality at its best.",
      order: ["Burgers for adults", "Kids toasted sandwiches", "Soup of the day", "Daily specials"],
      tip: "Remember: kitchen orders close at 2pm. With a big group, aim to order by 1:30pm.",
    },
  },
};

export default function OccasionHelper() {
  const [who, setWho] = useState<WhoOption | null>(null);
  const [time, setTime] = useState<TimeOption | null>(null);

  const result = who && time ? tips[who][time] : null;

  const whoOptions: { value: WhoOption; label: string; icon: string }[] = [
    { value: "adults", label: "Just adults", icon: "☕" },
    { value: "kids", label: "Bringing kids", icon: "🛝" },
    { value: "dog", label: "Bringing the dog", icon: "🐾" },
    { value: "family", label: "Family with both", icon: "🌿" },
  ];

  const timeOptions: { value: TimeOption; label: string; sub: string }[] = [
    { value: "morning", label: "Morning coffee", sub: "Before 10am" },
    { value: "brunch", label: "Brunch", sub: "10am - 12pm" },
    { value: "lunch", label: "Lunch", sub: "12pm - 2pm" },
  ];

  return (
    <section className="hc-section hc-occasion-wrapper">
      <style>{`
        .hc-occasion-wrapper {
          background-color: var(--color-surface);
        }
        .hc-occasion-inner {
          max-width: 780px;
          margin: 0 auto;
        }
        .hc-occasion-heading {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 400;
          color: var(--color-text);
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .hc-occasion-sub {
          font-size: 1rem;
          color: var(--color-text-muted);
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .hc-occasion-step-label {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 0.75rem;
        }
        .hc-occasion-options {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.75rem;
        }
        .hc-occasion-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.6rem 1.1rem;
          border-radius: var(--radius);
          border: 2px solid rgba(46,66,40,0.15);
          background-color: #ffffff;
          color: var(--color-text);
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: border-color var(--transition), background-color var(--transition), transform var(--transition);
        }
        .hc-occasion-btn:hover {
          border-color: var(--color-accent);
          transform: translateY(-2px);
        }
        .hc-occasion-btn.active {
          border-color: var(--color-accent);
          background-color: var(--color-accent);
          color: #ffffff;
        }
        .hc-occasion-time-btn {
          display: flex;
          flex-direction: column;
          padding: 0.7rem 1.2rem;
          border-radius: var(--radius);
          border: 2px solid rgba(46,66,40,0.15);
          background-color: #ffffff;
          color: var(--color-text);
          font-family: var(--font-body);
          cursor: pointer;
          transition: border-color var(--transition), background-color var(--transition), transform var(--transition);
          text-align: left;
        }
        .hc-occasion-time-btn:hover {
          border-color: var(--color-accent);
          transform: translateY(-2px);
        }
        .hc-occasion-time-btn.active {
          border-color: var(--color-accent);
          background-color: var(--color-accent);
          color: #ffffff;
        }
        .hc-occasion-time-label {
          font-weight: 700;
          font-size: 0.9rem;
        }
        .hc-occasion-time-sub {
          font-size: 0.75rem;
          opacity: 0.7;
          margin-top: 0.1rem;
        }
        .hc-occasion-result {
          background-color: #ffffff;
          border-radius: var(--radius-lg);
          padding: 1.75rem 2rem;
          border-left: 4px solid var(--color-accent);
          margin-top: 0.5rem;
        }
        .hc-occasion-result-headline {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 1.4rem;
          font-weight: 400;
          color: var(--color-text);
          margin-bottom: 0.6rem;
        }
        .hc-occasion-result-what {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .hc-occasion-order-label {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-text);
          margin-bottom: 0.5rem;
        }
        .hc-occasion-order-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 1.25rem;
        }
        .hc-occasion-order-list li {
          font-size: 0.92rem;
          color: var(--color-text);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .hc-occasion-order-list li::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-accent);
          flex-shrink: 0;
        }
        .hc-occasion-tip {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          font-style: italic;
          background-color: rgba(196,113,58,0.06);
          padding: 0.6rem 0.9rem;
          border-radius: var(--radius);
          margin-bottom: 1.25rem;
        }
        .hc-occasion-prompt {
          text-align: center;
          padding: 2rem;
          color: var(--color-text-muted);
          font-style: italic;
          font-size: 0.95rem;
        }
      `}</style>

      <div className="container">
        <div className="hc-occasion-inner">
          <div className="hc-divider" style={{ margin: "0 auto 1.25rem" }} />
          <h2 className="hc-occasion-heading">Planning a visit?</h2>
          <p className="hc-occasion-sub">Tell us who&apos;s coming and when.</p>

          <div>
            <p className="hc-occasion-step-label">Step 1 - Who&apos;s coming?</p>
            <div className="hc-occasion-options">
              {whoOptions.map((opt) => (
                <button
                  key={opt.value}
                  className={`hc-occasion-btn${who === opt.value ? " active" : ""}`}
                  onClick={() => {
                    setWho(opt.value);
                    setTime(null);
                  }}
                >
                  <span>{opt.icon}</span>
                  {opt.label}
                </button>
              ))}
            </div>

            {who && (
              <>
                <p className="hc-occasion-step-label">Step 2 - What time?</p>
                <div className="hc-occasion-options">
                  {timeOptions.map((opt) => (
                    <button
                      key={opt.value}
                      className={`hc-occasion-time-btn${time === opt.value ? " active" : ""}`}
                      onClick={() => setTime(opt.value)}
                    >
                      <span className="hc-occasion-time-label">{opt.label}</span>
                      <span className="hc-occasion-time-sub">{opt.sub}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {result ? (
              <div className="hc-occasion-result">
                <p className="hc-occasion-result-headline">{result.headline}</p>
                <p className="hc-occasion-result-what">{result.what}</p>
                <p className="hc-occasion-order-label">What to order</p>
                <ul className="hc-occasion-order-list">
                  {result.order.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="hc-occasion-tip">Tip: {result.tip}</p>
                <a
                  href="https://www.facebook.com/HatumaCafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hc-btn-primary"
                  style={{ fontSize: "0.88rem" }}
                >
                  Check today&apos;s specials on Facebook
                </a>
              </div>
            ) : (
              !who && (
                <div className="hc-occasion-prompt">
                  Select who&apos;s coming to get personalised tips.
                </div>
              )
            )}
          </div>

          {result && (
            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <Link href="/menu" className="hc-btn-ghost-dark" style={{ color: "var(--color-text-muted)", borderColor: "rgba(46,66,40,0.2)" }}>
                Browse the full menu
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
