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

export const metadata: Metadata = {
  title: "Home",
  description:
    "TechnoBren Infotech delivers next-gen software solutions: custom software, mobile apps, and tailored IT solutions powered by deep expertise.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:[&>*:first-child]:order-2">
            <Reveal className="flex justify-center lg:justify-end">
              <img
                src="/images/home-info.svg"
                alt=""
                className="max-w-full h-auto drop-shadow-[0_25px_50px_rgba(167,35,41,0.15)]"
              />
            </Reveal>
            <div>
              <Reveal>
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
            </div>
          </div>
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
                <div className={`service-box ${s.variant}-box`}>
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

      {/* Sales process automation */}
      <section className="section-padding">
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
    </>
  );
}
