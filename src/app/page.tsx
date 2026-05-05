import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { HOME_SERVICES, SOLUTION_TABS, TECH_TABS } from "@/lib/data/services";
import { Tabs } from "@/components/shared/Tabs";
import { LocationCards } from "@/components/shared/LocationCards";
import { FeedbackCarousel } from "@/components/carousel/FeedbackCarousel";
import { IndustriesCarousel } from "@/components/carousel/IndustriesCarousel";
import { ClientsCarousel } from "@/components/carousel/ClientsCarousel";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { CountUp } from "@/components/shared/CountUp";

export const metadata: Metadata = {
  title: "Home",
  description:
    "TechnoBren Infotech delivers next-gen software solutions: custom software, mobile apps, and tailored IT solutions powered by deep expertise.",
};

type HomeStat =
  | { kind: "count"; target: number; suffix?: string; label: string }
  | { kind: "display"; display: string; label: string };

const HOME_STATS: HomeStat[] = [
  { kind: "count", target: 100, suffix: "+", label: "Projects shipped" },
  { kind: "count", target: 5, suffix: "+", label: "Years building software" },
  { kind: "display", display: "24/7", label: "Engineering support" },
  { kind: "count", target: 4, label: "Continents served" },
];

const HOME_SERVICE_KEYWORDS = [
  "AI Engineering",
  "Cloud Infrastructure",
  "Mobile Apps",
  "Enterprise Software",
  "Custom Development",
  "DevOps & SRE",
  "Security Engineering",
  "Data & Analytics",
  "UI / UX Design",
  "QA Automation",
];

const HOME_FAQS = [
  {
    q: "How do you typically engage with new clients?",
    a: "We start with a 30-minute discovery call (free, no-obligation) to understand your goals. Within 24 hours we send a written scoping plan covering scope, timeline, team shape, and price — then you decide if we're the right fit.",
  },
  {
    q: "Do you work fixed-fee or time and materials?",
    a: "Both. Fixed-fee suits well-defined scopes (a portal, a mobile app v1). T&M suits longer-running product work where requirements evolve. We'll recommend whichever fits your project after the discovery call.",
  },
  {
    q: "Who actually writes the code? Do you outsource?",
    a: "Our own engineers — average 8+ years of experience. We don't subcontract; you talk to the people building your product. Daily standups and weekly demos keep you in the loop.",
  },
  {
    q: "Will I own the source code, infrastructure, and data?",
    a: "Yes — completely. Source lives in your GitHub/GitLab, infra runs in your AWS/GCP/Azure account, and CI/CD is wired to your accounts on day one. No vendor lock-in, no proprietary platforms.",
  },
  {
    q: "How do you handle security and compliance?",
    a: "OWASP-aligned reviews on every release, automated secret scanning in CI, least-privilege IAM by default. We've shipped HIPAA-, GDPR-, and PCI-bound systems and can produce evidence packages on request.",
  },
  {
    q: "What happens after the build is done?",
    a: "A clean handover to your team (documentation, runbooks, knowledge transfer sessions) and an optional support retainer for hardening, observability, and minor enhancements. You're never locked in to keep us around.",
  },
];

const HOME_PROCESS = [
  {
    step: "01",
    title: "Discover",
    body: "Workshops, audits, and architecture maps to lock scope and risk before a line of code.",
  },
  {
    step: "02",
    title: "Design",
    body: "User flows, system diagrams, and clickable prototypes — sign-off before build.",
  },
  {
    step: "03",
    title: "Build",
    body: "Two-week sprints, demoable every Friday, code reviewed by senior engineers.",
  },
  {
    step: "04",
    title: "Scale",
    body: "Hardening, observability, and a clear handover so your team owns what we shipped.",
  },
];

const HOME_DIFFERENTIATORS = [
  {
    title: "Senior engineering",
    body: "Average 8+ years on the team. No juniors hidden behind a project manager.",
    iconPath: (
      <>
        <circle cx="12" cy="8" r="6" />
        <polyline points="15.477 12.89 17 22 12 19 7 22 8.523 12.89" />
      </>
    ),
  },
  {
    title: "Code you own",
    body: "Source, infra, and CI in your accounts on day one. No vendor lock-in.",
    iconPath: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  {
    title: "Transparent sprints",
    body: "Public board, weekly demos, fixed-fee or T&M — you choose what fits.",
    iconPath: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
  },
  {
    title: "Security by default",
    body: "OWASP review, secret scanning, and least-privilege infra in every release.",
    iconPath: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </>
    ),
  },
];


export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg section-padding relative">
        <a href="#explore" className="hero-scroll-cue" aria-label="Scroll to explore">
          <span>Scroll to explore</span>
          <span className="hero-scroll-arrow" aria-hidden>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:[&>*:first-child]:order-2">
            <Reveal className="flex justify-center lg:justify-end">
              <img
                src="/images/home-info.svg"
                alt=""
                className="max-w-full h-auto drop-shadow-[0_25px_50px_rgba(167,35,41,0.15)] float-soft"
              />
            </Reveal>
            <div>
              <Reveal>
                <div style={{ marginBottom: 14 }}>
                  <span className="status-pill" style={{ marginLeft: 0 }}>
                    <span className="status-dot" aria-hidden />
                    Available for new projects · 2026
                  </span>
                </div>
                <Eyebrow>Software Studio · Est. 2019</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="home-title">
                  Software Development Driven by{" "}
                  <span className="home-title-accent">Excellence &amp; Efficiency</span>
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="details-text text-lg max-w-xl">
                  We&apos;re your trusted software development partner with 5+ years of
                  experience delivering next-gen solutions that fuel growth, streamline
                  operations, and equip your business for tomorrow.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <Button href="/contact">Start a Project</Button>
                  <a href="/services" className="btn-link-pill">
                    Explore Services
                  </a>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="trust-row">
                  <span className="trust-badge">
                    <span className="check">✓</span> NDA on Request
                  </span>
                  <span className="trust-badge">
                    <span className="check">✓</span> 100+ Projects Shipped
                  </span>
                  <span className="trust-badge">
                    <span className="check">✓</span> 24/7 Support
                  </span>
                </div>
              </Reveal>
              <Reveal delay={360}>
                <div className="rating-row">
                  <span className="rating-stars" aria-hidden>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </span>
                  <span className="rating-text">
                    <strong>5.0</strong> · Average from 30+ client reviews
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Service-keyword marquee — decorative, infinite scroll */}
      <section
        id="explore"
        className="marquee-strip"
        aria-label="Capabilities at a glance"
      >
        <div className="marquee-track">
          {[...HOME_SERVICE_KEYWORDS, ...HOME_SERVICE_KEYWORDS].map((kw, i) => (
            <span
              key={i}
              className="marquee-item"
              aria-hidden={i >= HOME_SERVICE_KEYWORDS.length}
            >
              {kw}
            </span>
          ))}
        </div>
      </section>

      {/* Stat strip — animated counters */}
      <section className="stat-strip">
        <div className="container-page">
          <ul className="stat-grid">
            {HOME_STATS.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 60} className="stat-item">
                <span className="stat-value">
                  {s.kind === "count" ? (
                    <CountUp target={s.target} suffix={s.suffix ?? ""} />
                  ) : (
                    s.display
                  )}
                </span>
                <span className="stat-label">{s.label}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* About / Build & Hire */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:[&>*:first-child]:order-2">
            <Reveal className="flex justify-center lg:justify-end">
              <img src="/images/about.svg" alt="" className="max-w-full h-auto" />
            </Reveal>
            <Reveal delay={80}>
              <Eyebrow>Who We Are</Eyebrow>
              <h2 className="section-title">
                Leading App and Software Development Company
              </h2>
              <h3 className="devider-text">Build &amp; Hire Your Own Distributed Team</h3>
              <p className="details-text">
                We build innovative, scalable, and user-friendly apps and software
                that empower businesses to grow, transform digitally, and stay ahead
                in today&apos;s fast-moving, tech-driven world.
              </p>
              <ul className="default-list">
                <li>Software Development</li>
                <li>Mobile App</li>
                <li>Custom Software Development</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <Reveal className="text-center mb-12">
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="section-title">
              One Partner for All Your Software Development Needs
            </h2>
            <p className="details-text center-details-text mt-4 text-lg">
              We help startups, businesses, and brands tap into technology to drive
              growth and innovation — modernizing systems, unlocking opportunities,
              and turning ideas into impact.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {HOME_SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80} className="flex">
                <div className="service-box">
                  <span className="sc-step" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <img src={s.icon} alt="" className="sc-img" />
                  <h3 className="sc-title">{s.title}</h3>
                  <p className="details-text">{s.blurb}</p>
                  <a href={s.href} className="btn-link-pill mt-auto">
                    Read More
                    <svg
                      width="25"
                      height="17"
                      viewBox="0 0 25 17"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 8.35617L24 8.1781"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.8219 1L24 8.17809L16.8219 15.3562"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work — process steps */}
      <section className="section-padding">
        <div className="container-page">
          <Reveal className="text-center mb-12">
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="section-title">
              A four-step path from idea to shipped product
            </h2>
            <p className="details-text center-details-text mt-4 text-lg">
              Predictable cadence, transparent decisions, demoable progress every Friday — so you always know what shipped, what&apos;s next, and why.
            </p>
          </Reveal>
          <ol className="process-grid">
            {HOME_PROCESS.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 80} className="process-step">
                <span className="process-step-num">{p.step}</span>
                <h3 className="process-step-title">{p.title}</h3>
                <p className="details-text">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Sales process automation */}
      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal className="flex justify-center lg:justify-start">
              <img src="/images/dev-img.svg" alt="" className="max-w-full h-auto" />
            </Reveal>
            <Reveal delay={80}>
              <Eyebrow>Global Reach</Eyebrow>
              <h2 className="section-title">
                Your Global Partner in Sales Process Automation
              </h2>
              <p className="details-text">
                We deliver high-quality business software solutions and development
                from India. We focus on building scalable and user-friendly digital
                products with a global clientele across the USA, UAE, Africa, and Australia.
              </p>
              <p className="details-text">
                With modern infrastructure and expert engineers, we deliver complete
                software solutions — custom software, mobile apps, e-commerce platforms,
                and more.
              </p>
              <Button href="/contact" className="mt-3">Our Work</Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solution tabs */}
      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <Reveal className="text-center mb-10">
            <Eyebrow>Solutions</Eyebrow>
            <h2 className="section-title">Tailored IT Solutions for Your Unique Goals</h2>
            <p className="details-text center-details-text mt-4 text-lg">
              Configurable, pre-architected platforms designed to optimize performance,
              minimize costs, and automate processes — without sacrificing fit.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Tabs
              items={SOLUTION_TABS.map((s) => ({
                key: s.key,
                label: s.label,
                content: (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:[&>*:first-child]:order-2 py-4">
                    <div className="flex justify-center lg:justify-end">
                      <img
                        src={s.image}
                        alt=""
                        className="max-w-full h-auto rounded-3xl shadow-2xl"
                      />
                    </div>
                    <div>
                      <h3 className="section-title">{s.title}</h3>
                      {s.body.map((p, i) => (
                        <p key={i} className="details-text">
                          {p}
                        </p>
                      ))}
                      <Button href={s.href} className="mt-3">Show More</Button>
                    </div>
                  </div>
                ),
              }))}
            />
          </Reveal>
        </div>
      </section>

      {/* Tech tabs */}
      <section className="section-padding">
        <div className="container-page">
          <Reveal className="text-center mb-10">
            <Eyebrow>Tech Stack</Eyebrow>
            <h2 className="section-title">Helping Businesses Grow With Smart Tech</h2>
            <p className="details-text center-details-text mt-4 text-lg">
              We empower your business through technology — simplifying workloads,
              cutting costs, and helping you expand with smarter solutions.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Tabs
              items={Object.entries(TECH_TABS).map(([key, items]) => ({
                key,
                label: key,
                content: (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
                    {items.map((t) => (
                      <div key={t.name} className="tech-img-box">
                        <img src={t.icon} alt={t.name} />
                        <h3 className="title-md">{t.name}</h3>
                      </div>
                    ))}
                  </div>
                ),
              }))}
            />
          </Reveal>
        </div>
      </section>

      {/* Why Teams Choose Us — differentiators band */}
      <section className="diff-band">
        <div className="container-page">
          <div className="diff-grid">
            <Reveal className="diff-intro">
              <Eyebrow className="eyebrow-on-dark">Why teams choose us</Eyebrow>
              <h2 className="section-title">
                Built like an in-house team, billed like an agency
              </h2>
              <p>
                Senior engineers, transparent process, code you own — every project,
                every time. No black boxes, no juniors hidden behind a project manager.
              </p>
              <Button href="/contact">Talk to engineering</Button>
            </Reveal>
            <ul className="diff-cards">
              {HOME_DIFFERENTIATORS.map((d, i) => (
                <Reveal as="li" key={d.title} delay={i * 60} className="differentiator">
                  <span className="diff-icon" aria-hidden>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {d.iconPath}
                    </svg>
                  </span>
                  <h3 className="diff-title">{d.title}</h3>
                  <p className="diff-body">{d.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <Reveal className="text-center mb-10">
            <Eyebrow>Industries</Eyebrow>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="details-text center-details-text mt-4 text-lg">
              From manufacturing to healthcare, we craft custom software for every
              vertical — modernizing operations and unlocking growth.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <IndustriesCarousel />
          </Reveal>
        </div>
      </section>

      {/* Feedback */}
      <section className="section-padding feedback-bg">
        <div className="container-page">
          <Reveal className="text-center mb-10">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="details-text center-details-text mt-4 text-lg">
              Real results, real reviews — from teams who trusted us to build their software.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <FeedbackCarousel />
          </Reveal>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding">
        <div className="container-page">
          <Reveal className="text-center mb-10">
            <Eyebrow>Trusted By</Eyebrow>
            <h2 className="section-title">Trusted by Brands Worldwide</h2>
          </Reveal>
          <Reveal delay={80}>
            <ClientsCarousel />
          </Reveal>
        </div>
      </section>

      <LocationCards />

      {/* FAQ accordion */}
      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <Reveal className="text-center mb-10">
            <Eyebrow>Common Questions</Eyebrow>
            <h2 className="section-title">Frequently asked, plainly answered</h2>
            <p className="details-text center-details-text mt-4 text-lg">
              Most teams ask the same six things before starting. Here&apos;s what we tell them — short, honest, no sales fluff.
            </p>
          </Reveal>
          <div className="faq-grid">
            {HOME_FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <details className="faq-item">
                  <summary className="faq-summary">{f.q}</summary>
                  <div className="faq-body">{f.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA banner */}
      <section className="section-padding">
        <div className="container-page">
          <Reveal>
            <div className="cta-banner">
              <div className="cta-banner-inner">
                <Eyebrow className="eyebrow-on-dark">Ready when you are</Eyebrow>
                <h2 className="cta-title">Have an idea? Let&apos;s engineer it.</h2>
                <p className="cta-sub">
                  Tell us what you&apos;re building. We&apos;ll come back inside 24 hours
                  with a scoping plan, not a sales pitch.
                </p>
                <div className="cta-actions">
                  <a href="/contact" className="btn-on-dark">
                    Start a project
                    <svg
                      width="25"
                      height="17"
                      viewBox="0 0 25 17"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 8.35617L24 8.1781"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.8219 1L24 8.17809L16.8219 15.3562"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a href="/services" className="btn-ghost-on-dark">
                    Explore services
                  </a>
                </div>
                <ul className="cta-meta">
                  <li>24-hour response</li>
                  <li>NDA-first</li>
                  <li>No-obligation scoping</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
