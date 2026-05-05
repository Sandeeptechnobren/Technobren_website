import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { LocationCards } from "@/components/shared/LocationCards";
import { TEAM } from "@/lib/data/team";
import { ClientsCarousel } from "@/components/carousel/ClientsCarousel";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TechnoBren Infotech — a software development company building scalable digital products for businesses worldwide.",
};

const VALUES = [
  {
    title: "Customer Focus",
    body: "We put your goals first, working closely to deliver solutions that move the needle for your business.",
    icon: "/images/value-icon.svg",
  },
  {
    title: "Innovation",
    body: "We continually explore emerging technologies to keep our clients ahead of the curve.",
    icon: "/images/value-icon.svg",
  },
  {
    title: "Quality",
    body: "Reliability, performance, and clean architecture are non-negotiable in everything we ship.",
    icon: "/images/value-icon.svg",
  },
  {
    title: "Integrity",
    body: "Transparent communication, honest timelines, and accountable delivery — every engagement.",
    icon: "/images/value-icon.svg",
  },
];

const MILESTONES = [
  { number: "5+", label: "Years of Experience" },
  { number: "100+", label: "Projects Delivered" },
  { number: "50+", label: "Happy Clients" },
  { number: "30+", label: "Skilled Engineers" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:[&>*:first-child]:order-2">
            <Reveal className="flex justify-center lg:justify-end">
              <img src="/images/abount-bn-img.svg" alt="" className="max-w-full h-auto" />
            </Reveal>
            <Reveal delay={80}>
              <Eyebrow>About TechnoBren</Eyebrow>
              <h1 className="home-title">
                Where Ideas Meet Execution &amp;{" "}
                <span className="home-title-accent">Innovation Drives Impact</span>
              </h1>
              <p className="details-text text-lg max-w-xl">
                We&apos;re a team of designers, engineers, and product thinkers who turn
                bold ideas into world-class digital products. With a global clientele
                across the USA, UAE, Africa, and Australia, we&apos;ve established
                ourselves as a leading software development partner.
              </p>
              <Button href="/contact" className="mt-3">
                Talk To Our Team
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center lg:justify-start">
              <img src="/images/ceo-img.svg" alt="" className="max-w-full h-auto rounded-2xl" />
            </div>
            <div>
              <h3 className="devider-text">A Message from our CEO</h3>
              <h2 className="section-title">
                Driven by purpose. Powered by people.
              </h2>
              <p className="details-text">
                At TechnoBren, we believe great software starts with understanding
                great problems. Every project we take on is a partnership — we listen,
                we challenge, and we ship. Our people make the difference, and our
                customers&apos; success is the only metric that matters.
              </p>
              <p className="details-text">
                Thank you for being part of the TechnoBren journey. Whatever you&apos;re
                building, we&apos;re ready to help you build it well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <Reveal className="text-center mb-12">
            <Eyebrow>By The Numbers</Eyebrow>
            <h2 className="section-title">Our Milestones</h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.label} delay={i * 80}>
                <div className="value-boxes text-center">
                  <div className="stat-number">{m.number}</div>
                  <p className="details-text mb-0">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-page">
          <Reveal className="text-center mb-12">
            <Eyebrow>What Drives Us</Eyebrow>
            <h2 className="section-title">Our Core Values</h2>
            <p className="details-text center-details-text mt-4 text-lg">
              The principles that guide every line of code and every conversation.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="value-boxes">
                  <img src={v.icon} alt="" className="h-12 mb-4" />
                  <h3 className="font-bold text-xl mb-2">{v.title}</h3>
                  <p className="details-text mb-0">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="section-title">Meet The Team</h2>
            <p className="details-text center-details-text mt-4">
              The people behind every project we deliver.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {TEAM.slice(0, 4).map((m) => (
              <div key={m.name} className="team-boxes">
                <img src={m.photo} alt={m.name} />
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/our-team">View Full Team</Button>
          </div>
        </div>
      </section>

      {/* Trusted brands */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="section-title">Trusted by Leading Brands</h2>
          </div>
          <ClientsCarousel />
        </div>
      </section>

      <LocationCards />
    </>
  );
}
