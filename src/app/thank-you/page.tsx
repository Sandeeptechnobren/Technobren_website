import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thanks for reaching out — we'll be in touch within one business day.",
};

export default function ThankYouPage() {
  return (
    <section className="section-padding bg-surface-alt">
      <div className="container-page text-center max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary text-4xl">
            ✓
          </div>
        </div>
        <h1 className="home-title">Thank You — We&apos;ve Got Your Message</h1>
        <p className="details-text">
          Our team will get back to you within one business day. In the meantime,
          feel free to explore our services or check out the work we&apos;ve done.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Button href="/">Back to Home</Button>
          <Link href="/services" className="btn-link-pill">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
