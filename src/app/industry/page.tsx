import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { LocationCards } from "@/components/shared/LocationCards";
import { INDUSTRIES } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "Industry",
  description:
    "Software solutions across Manufacturing, Healthcare, Logistics, Retail, Education, Finance, Media, Travel, Construction, and more.",
};

export default function IndustryPage() {
  return (
    <>
      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:[&>*:first-child]:order-2">
            <div className="flex justify-center">
              <img src="/images/industry-bn.png" alt="" className="max-w-full h-auto" />
            </div>
            <div>
              <h1 className="home-title">Industries We Serve</h1>
              <p className="details-text">
                We bring deep domain understanding to every engagement — building
                software that fits the way your industry actually works.
              </p>
              <Button href="/contact" className="mt-3">Discuss Your Project</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((i) => (
              <div key={i.title} className="industries-box">
                <img src={i.icon} alt={i.title} />
                <h3>{i.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationCards />
    </>
  );
}
