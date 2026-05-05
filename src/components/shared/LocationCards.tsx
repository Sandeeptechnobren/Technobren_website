import { LOCATIONS } from "@/lib/data/locations";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";

export function LocationCards() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <Reveal className="text-center mb-12">
          <Eyebrow>Global Footprint</Eyebrow>
          <h2 className="section-title">Our Brand Locations</h2>
          <p className="details-text center-details-text mt-4 text-lg">
            We operate across India and the UAE, serving clients globally with
            our software and product development expertise.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.city} delay={i * 80}>
              <div className="value-boxes h-full">
                <img src={l.flag} alt={l.country} className="h-9 mb-4 rounded-md shadow-sm" />
                <h3 className="font-bold text-xl mb-1">{l.city}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{l.country}</p>
                <p className="text-sm leading-6 text-[#444] mb-0">{l.address}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
