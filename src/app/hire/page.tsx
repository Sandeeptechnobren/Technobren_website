import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Reveal } from "@/components/shared/Reveal";
import { HIRE_ROLES, ENGAGEMENT_MODELS } from "@/lib/data/hire-roles";

export const metadata: Metadata = {
  title: "Hire Developers",
  description:
    "Hire dedicated iOS, Android, Flutter, React Native, Front-End, Back-End, Full-Stack developers and DevOps engineers from TechnoBren — full-time, part-time, or fixed-fee.",
};

export default function HirePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg section-padding">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Hire Developers</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="home-title">
                Senior engineers, ready to{" "}
                <span className="home-title-accent">join your team this week</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="details-text text-lg max-w-2xl">
                Eight specialisations across mobile, web, and infrastructure.
                Dedicated full-time, part-time, or project-based — your choice.
                NDA-first, no-obligation discovery call.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Button href="/contact">Talk to engineering</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Roles grid */}
      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <Reveal className="text-center mb-10">
            <Eyebrow>Specialisations</Eyebrow>
            <h2 className="section-title">
              Every role you&apos;d hire on a senior team
            </h2>
            <p className="details-text center-details-text mt-4 text-lg">
              Click into any role to see the tech stack, what they build, and how to bring them on.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIRE_ROLES.map((r, i) => (
              <Reveal key={r.slug} delay={i * 50}>
                <Link
                  href={`/hire/${r.slug}`}
                  className="value-boxes block h-full no-underline"
                >
                  <h3 className="text-lg font-bold mb-2">{r.shortLabel}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {r.tagline}
                  </p>
                  <span className="text-sm font-semibold text-primary inline-flex items-center gap-1.5">
                    Learn more
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="section-padding">
        <div className="container-page">
          <Reveal className="text-center mb-10">
            <Eyebrow>Engagement</Eyebrow>
            <h2 className="section-title">Three ways to engage</h2>
            <p className="details-text center-details-text mt-4 text-lg">
              Pick the contract shape that matches the work you have, not the one we&apos;d prefer to sell.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((m, i) => (
              <Reveal key={m.title} delay={i * 80} className="value-boxes">
                <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                <p className="details-text mb-3">{m.body}</p>
                <p className="text-sm font-semibold text-primary m-0">{m.bullet}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-page">
          <Reveal>
            <div className="cta-banner">
              <div className="cta-banner-inner">
                <Eyebrow className="eyebrow-on-dark">No-obligation</Eyebrow>
                <h2 className="cta-title">Tell us who you need to hire</h2>
                <p className="cta-sub">
                  We&apos;ll come back inside 24 hours with three CVs, a scoping
                  plan, and a recommendation on how to bring them on.
                </p>
                <div className="cta-actions">
                  <a href="/contact" className="btn-on-dark">
                    Start hiring
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
