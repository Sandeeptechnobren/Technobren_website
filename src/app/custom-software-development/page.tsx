import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { LocationCards } from "@/components/shared/LocationCards";

export const metadata: Metadata = {
  title: "Custom Software Development",
  description:
    "From discovery and prototyping to deployment and ongoing support — TechnoBren delivers custom software built for your business.",
};

const SERVICE_BOXES = [
  { title: "Enterprise Software", body: "Mission-critical platforms for operations, finance, and HR.", icon: "/images/enterprise.png" },
  { title: "SaaS Development", body: "Multi-tenant SaaS products engineered for scale and security.", icon: "/images/saas-Development.png" },
  { title: "Cloud Application Development", body: "Cloud-native apps using AWS, Azure, and Google Cloud.", icon: "/images/cloud-application-sevelopment.png" },
  { title: "Desktop App Development", body: "Cross-platform desktop apps with native performance.", icon: "/images/desktop-app-development.png" },
  { title: "Product Development", body: "From idea to launch — strategy, design, build, ship.", icon: "/images/product-development.png" },
  { title: "Software Testing", body: "Manual and automated QA across web, mobile, and API surfaces.", icon: "/images/software-testing.png" },
  { title: "Legacy System Modernization", body: "Migrate and refactor legacy systems without disrupting operations.", icon: "/images/legacy-systems.png" },
  { title: "Software Integration", body: "Seamlessly connect ERPs, CRMs, payment, and analytics tools.", icon: "/images/integration.png" },
  { title: "Hi-Tech Engineering", body: "IoT, AR/VR, and emerging tech engineering services.", icon: "/images/hitech.png" },
];

const STATS = [
  { number: "100+", label: "Projects Delivered" },
  { number: "50+", label: "Enterprise Clients" },
  { number: "30+", label: "Skilled Engineers" },
  { number: "24/7", label: "Support" },
];

export default function CustomSoftwarePage() {
  return (
    <>
      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:[&>*:first-child]:order-2">
            <div className="flex justify-center">
              <img src="/images/software-bn.png" alt="" className="max-w-full h-auto" />
            </div>
            <div>
              <h1 className="home-title">Custom Software Built For You — Not Off The Shelf</h1>
              <p className="details-text">
                We build precise, scalable, and secure software that fits exactly how
                your business runs. No bloat, no rework — just dependable software
                that drives outcomes.
              </p>
              <Button href="/contact" className="mt-3">Start Your Project</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="section-title">Our Custom Software Services</h2>
            <p className="details-text center-details-text mt-4">
              Comprehensive software services covering the full lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_BOXES.map((s) => (
              <div key={s.title} className="value-boxes">
                <img src={s.icon} alt="" className="h-12 mb-4" />
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="details-text mb-0">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="section-title">A Track Record That Speaks</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="value-boxes text-center">
                <div className="text-5xl font-bold text-primary mb-2">{s.number}</div>
                <p className="details-text mb-0">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationCards />
    </>
  );
}
