import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { LocationCards } from "@/components/shared/LocationCards";
import { ClientsCarousel } from "@/components/carousel/ClientsCarousel";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Sales Process Automation, Distributor & Merchandiser Management, Asset Management, Warehouse, and E-Learning solutions for modern enterprises.",
};

const SOLUTIONS = [
  {
    title: "Sales Process Automation",
    body: "Automate your sales pipeline, lead capture, approvals, and reporting for predictable revenue growth.",
    image: "/images/van-sales.jpg",
    href: "/vans-sales",
  },
  {
    title: "Distributor Management",
    body: "Onboard, track, and grow your distribution network with end-to-end visibility and digital workflows.",
    image: "/images/Distributor Management.jpg",
    href: "/contact",
  },
  {
    title: "Merchandiser Management",
    body: "Real-time field execution, route planning, and shelf compliance — all from a single mobile-first platform.",
    image: "/images/Merchandiser.jpg",
    href: "/contact",
  },
  {
    title: "Asset Management",
    body: "Track, maintain, and optimize the lifecycle of every physical asset with audit-ready reporting.",
    image: "/images/Asset Management.jpg",
    href: "/contact",
  },
  {
    title: "Warehouse Management",
    body: "Inventory accuracy, smarter picking flows, and on-time fulfillment — engineered for scale.",
    image: "/images/warehouse.jpg",
    href: "/contact",
  },
  {
    title: "E-Learning Solutions",
    body: "Build engaging, scalable learning platforms with content authoring, assessments, and analytics built in.",
    image: "/images/education.png",
    href: "/contact",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="section-padding bg-surface-alt">
        <div className="container-page text-center max-w-3xl mx-auto">
          <h1 className="home-title">Solutions Built for Real Outcomes</h1>
          <p className="details-text">
            Pre-architected, configurable platforms — accelerated delivery without
            sacrificing fit. Each solution is shaped to your processes.
          </p>
          <Button href="/contact" className="mt-3">Request a Demo</Button>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden hover:shadow-xl transition flex flex-col"
              >
                <img src={s.image} alt="" className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                  <p className="details-text flex-1">{s.body}</p>
                  <a href={s.href} className="btn-link-pill mt-2">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
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
