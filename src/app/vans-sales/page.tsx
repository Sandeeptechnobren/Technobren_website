import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { LocationCards } from "@/components/shared/LocationCards";

export const metadata: Metadata = {
  title: "Sales Process Automation",
  description:
    "Sales pipeline, lead capture, approval workflows, route management, and analytics — all in one Sales Process Automation platform.",
};

const FEATURES = [
  {
    title: "Sales Pipeline Management",
    body: "Real-time visibility into every deal — from lead to close.",
    icon: "/images/proccess.png",
  },
  {
    title: "Order Processing",
    body: "Mobile-first order capture with instant approvals and tracking.",
    icon: "/images/order-box.png",
  },
  {
    title: "Approval Workflows",
    body: "Multi-tier approvals with Slack/email notifications and audit logs.",
    icon: "/images/automation.png",
  },
  {
    title: "Route Management",
    body: "Smart routing, GPS tracking, and beat planning for field reps.",
    icon: "/images/route.png",
  },
  {
    title: "Reports & Analytics",
    body: "Live dashboards with conversion, revenue, and rep performance.",
    icon: "/images/analystics.png",
  },
  {
    title: "CRM Integration",
    body: "Plug into Salesforce, HubSpot, Zoho, or your custom CRM.",
    icon: "/images/integration.png",
  },
];

const CHANNELS = [
  { title: "General Trade", body: "Field rep apps for kirana, pharmacy, and traditional retail.", image: "/images/general-trade.png" },
  { title: "Modern Trade", body: "Listing, planogram, and promo execution for modern retail chains.", image: "/images/modern-trade.png" },
  { title: "B2B / HoReCa", body: "Distributor and HoReCa channel management with credit and order rules.", image: "/images/order-box.png" },
  { title: "D2C", body: "Direct-to-consumer order capture with delivery and returns flows.", image: "/images/d2c.png" },
];

export default function VansSalesPage() {
  return (
    <>
      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:[&>*:first-child]:order-2">
            <div className="flex justify-center">
              <img src="/images/vans-banner.png" alt="" className="max-w-full h-auto" />
            </div>
            <div>
              <h1 className="home-title">Sales Process Automation that Works in the Field</h1>
              <p className="details-text">
                A complete sales execution platform — from lead capture to last-mile
                delivery. Built for distributors, brands, and field teams who need
                real-time visibility and reliable mobile workflows.
              </p>
              <Button href="/contact" className="mt-3">Request a Demo</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="section-title">Key Features</h2>
            <p className="details-text center-details-text mt-4">
              Everything your sales operation needs in one platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="value-boxes">
                <img src={f.icon} alt="" className="h-12 mb-4" />
                <h3 className="font-bold text-xl mb-2">{f.title}</h3>
                <p className="details-text mb-0">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="section-title">Built for Every Trade Channel</h2>
            <p className="details-text center-details-text mt-4">
              From traditional retail to direct-to-consumer — one platform, every channel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHANNELS.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl overflow-hidden border border-[#e8e8e8]">
                <img src={c.image} alt="" className="w-full h-40 object-cover" />
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{c.title}</h3>
                  <p className="details-text mb-0 text-sm">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center lg:justify-start">
              <img src="/images/vans-app-img.png" alt="" className="max-w-full h-auto" />
            </div>
            <div>
              <h2 className="section-title">Mobile-First, Always On</h2>
              <p className="details-text">
                Field reps work where the customer is, not at a desk. Our mobile app
                works offline, syncs when reconnected, and ships with biometric login,
                push notifications, and intuitive navigation.
              </p>
              <ul className="default-list">
                <li>Offline-first architecture</li>
                <li>iOS &amp; Android</li>
                <li>Biometric login</li>
              </ul>
              <Button href="/contact" className="mt-3">Talk to Our Team</Button>
            </div>
          </div>
        </div>
      </section>

      <LocationCards />
    </>
  );
}
