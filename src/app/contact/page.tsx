import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { LocationCards } from "@/components/shared/LocationCards";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell us about your project — we'll get back within one business day. NDA available on request.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-bg section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <Eyebrow>Get In Touch</Eyebrow>
              <h1 className="home-title">
                Tell Us About{" "}
                <span className="home-title-accent">Your Project</span>
              </h1>
              <p className="details-text text-lg">
                Share a few details and we&apos;ll get back within one business day.
                We sign an NDA on request — your idea stays yours.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-primary/10 shrink-0">
                    <img src="/images/mail.svg" alt="" className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Email</h3>
                    <a
                      href="mailto:info@technobren.com"
                      className="text-primary font-medium"
                    >
                      info@technobren.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-primary/10 shrink-0">
                    <img src="/images/call.svg" alt="" className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Call</h3>
                    <a href="tel:+919305365576" className="block text-[#555]">
                      +91 93 0536 5576
                    </a>
                    <a href="tel:+919409184115" className="block text-[#555]">
                      +91 94 0918 4115
                    </a>
                    <a href="tel:+919016643264" className="block text-[#555]">
                      +91 90 1664 3264
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-white rounded-3xl p-8 border border-[#e8e8e8] shadow-2xl">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <LocationCards />
    </>
  );
}
