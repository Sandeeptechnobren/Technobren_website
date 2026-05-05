import type { Metadata } from "next";
import { TEAM } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the engineers, designers, and project leaders behind TechnoBren Infotech.",
};

export default function OurTeamPage() {
  return (
    <section className="section-padding bg-surface-alt">
      <div className="container-page">
        <div className="text-center mb-10">
          <h2 className="section-title">Creative Team</h2>
          <div className="mt-2 flex justify-center">
            <img src="/images/devider.svg" alt="" className="h-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TEAM.map((m) => (
            <div key={m.name} className="team-boxes bg-surface-alt">
              <img src={m.photo} alt={m.name} />
              <h3 className="text-base">{m.name}</h3>
              <p className="details-text mb-3">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
