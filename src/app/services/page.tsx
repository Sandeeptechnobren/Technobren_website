import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { LocationCards } from "@/components/shared/LocationCards";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom Software, Mobile Apps, Web Development, UI/UX, AI/ML, and Digital Marketing — services tailored to fit your business goals.",
};

const SERVICES = [
  {
    title: "Custom Software Development",
    body: "End-to-end custom software solutions designed for your unique business workflow — built to scale, ship fast, and integrate cleanly.",
    image: "/images/software-services.png",
    href: "/custom-software-development",
    reverse: false,
  },
  {
    title: "Mobile App Development",
    body: "Native iOS, Android, and cross-platform apps engineered for performance, polish, and reliability. Designed for retention.",
    image: "/images/app-services.png",
    href: "/mobile-app",
    reverse: true,
  },
  {
    title: "Web Development",
    body: "Modern, fast, and accessible websites and web apps using React, Next.js, and the latest web standards.",
    image: "/images/web-development.png",
    href: "/contact",
    reverse: false,
  },
  {
    title: "UI/UX Design",
    body: "Research-driven design — wireframes, prototypes, and design systems that translate user needs into delightful interfaces.",
    image: "/images/design-bn.png",
    href: "/contact",
    reverse: true,
  },
  {
    title: "AI / ML Services",
    body: "Practical AI: from intelligent automation to predictive analytics and LLM-powered features that move your business forward.",
    image: "/images/ai-bn.png",
    href: "/contact",
    reverse: false,
  },
  {
    title: "Digital Marketing",
    body: "SEO, content, and paid marketing strategies that turn product launches into measurable growth.",
    image: "/images/marketing-bn.png",
    href: "/contact",
    reverse: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-bg section-padding">
        <div className="container-page">
          <Reveal className="text-center max-w-3xl mx-auto">
            <Eyebrow>Our Services</Eyebrow>
            <h1 className="home-title">
              Services that{" "}
              <span className="home-title-accent">Power Your Vision</span>
            </h1>
            <p className="details-text text-lg">
              From the spark of an idea to the launch and beyond — we deliver
              software services that fit your business, not the other way round.
            </p>
            <div className="flex justify-center">
              <Button href="/contact" className="mt-3">Schedule a Call</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section
          key={s.title}
          className={
            "section-padding " + (i % 2 === 1 ? "bg-surface-alt" : "")
          }
        >
          <div className="container-page">
            <div
              className={
                "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" +
                (s.reverse ? " lg:[&>*:first-child]:order-2" : "")
              }
            >
              <Reveal className="flex justify-center">
                <img
                  src={s.image}
                  alt=""
                  className="max-w-full h-auto rounded-3xl shadow-2xl"
                />
              </Reveal>
              <Reveal delay={80}>
                <h2 className="section-title">{s.title}</h2>
                <p className="details-text">{s.body}</p>
                <Button href={s.href} className="mt-3">Learn More</Button>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <LocationCards />
    </>
  );
}
