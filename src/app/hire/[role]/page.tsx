import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Reveal } from "@/components/shared/Reveal";
import { HIRE_ROLES, ENGAGEMENT_MODELS } from "@/lib/data/hire-roles";

type Params = { role: string };

export function generateStaticParams() {
  return HIRE_ROLES.map((r) => ({ role: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { role: slug } = await params;
  const data = HIRE_ROLES.find((r) => r.slug === slug);
  if (!data) return { title: "Hire Developers — Not Found" };
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function HireRolePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { role: slug } = await params;
  const data = HIRE_ROLES.find((r) => r.slug === slug);
  if (!data) notFound();

  return (
    <>
      {/* Hero */}
      <section className="hero-bg section-padding">
        <div className="container-page">
          <Reveal>
            <Link
              href="/hire"
              className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 mb-6 hover:opacity-80"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              All hire roles
            </Link>
          </Reveal>
          <div className="max-w-3xl">
            <Reveal delay={50}>
              <Eyebrow>Hire Developers</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="home-title">{data.title}</h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="details-text text-lg max-w-2xl">{data.tagline}</p>
            </Reveal>
            <Reveal delay={240}>
              <p className="details-text">{data.description}</p>
            </Reveal>
            <Reveal delay={320}>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Button href="/contact">Hire engineers</Button>
                <Link href="/hire" className="btn-link-pill">
                  All roles
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <Reveal className="text-center mb-10">
            <Eyebrow>Tech stack</Eyebrow>
            <h2 className="section-title">Skills our team brings</h2>
            <p className="details-text center-details-text mt-4 text-lg">
              Day-one fluency in the tools below — and a working knowledge of the long tail you&apos;d only ever need to reach for if your project demanded it.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
              {data.skills.map((s) => (
                <span key={s} className="skill-chip">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Use cases */}
      <section className="section-padding">
        <div className="container-page">
          <Reveal className="text-center mb-10">
            <Eyebrow>What they build</Eyebrow>
            <h2 className="section-title">Where this role fits</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 80} className="value-boxes">
                <h3 className="text-xl font-bold mb-2">{u.title}</h3>
                <p className="details-text mb-0">{u.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <Reveal className="text-center mb-10">
            <Eyebrow>Engagement</Eyebrow>
            <h2 className="section-title">Ways to bring our team on</h2>
            <p className="details-text center-details-text mt-4 text-lg">
              Three contract shapes — pick the one that matches the work you have, not the one we&apos;d prefer to sell.
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
                <Eyebrow className="eyebrow-on-dark">Ready to start?</Eyebrow>
                <h2 className="cta-title">Ready to bring on {data.shortLabel}?</h2>
                <p className="cta-sub">
                  Tell us about the project. We&apos;ll come back inside 24 hours
                  with a scoping plan, a recommended engagement model, and an
                  introduction to the engineers we&apos;d put on it.
                </p>
                <div className="cta-actions">
                  <a href="/contact" className="btn-on-dark">
                    Contact engineering
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
                  <Link href="/hire" className="btn-ghost-on-dark">
                    Browse all roles
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
