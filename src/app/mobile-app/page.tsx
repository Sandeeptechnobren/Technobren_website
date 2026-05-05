import type { Metadata } from "next";
import { Button } from "@/components/shared/Button";
import { LocationCards } from "@/components/shared/LocationCards";

export const metadata: Metadata = {
  title: "Mobile App Development",
  description:
    "Native iOS, Android, and cross-platform mobile apps engineered for performance, polish, and reliability.",
};

const APP_TYPES = [
  {
    title: "Enterprise Apps",
    body: "Mobile apps for internal teams — sales force automation, field operations, HR, asset tracking.",
    icon: "/images/enterprise.png",
  },
  {
    title: "Business Apps",
    body: "Customer-facing apps that drive engagement, conversion, and retention.",
    icon: "/images/business.png",
  },
  {
    title: "Consumer Apps",
    body: "Polished, fast consumer apps with great UX, loved by users and reviewers alike.",
    icon: "/images/consumers.png",
  },
];

const FEATURES = [
  "Native iOS development with Swift / SwiftUI",
  "Native Android development with Kotlin / Jetpack Compose",
  "Cross-platform with React Native and Flutter",
  "App Store / Play Store submission and launch",
  "Crash reporting, analytics, and user feedback loops",
  "Ongoing maintenance and version upgrades",
];

const STATS = [
  { number: "50+", label: "Apps Shipped" },
  { number: "4.7★", label: "Avg App Rating" },
  { number: "99.9%", label: "Crash-free Sessions" },
  { number: "24/7", label: "App Support" },
];

export default function MobileAppPage() {
  return (
    <>
      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:[&>*:first-child]:order-2">
            <div className="flex justify-center">
              <img src="/images/mobile-app-bg.png" alt="" className="max-w-full h-auto" />
            </div>
            <div>
              <h1 className="home-title">Mobile Apps That Users Actually Love</h1>
              <p className="details-text">
                Native and cross-platform apps engineered for the long haul: fast
                launches, smooth animations, robust offline support, and honest analytics.
              </p>
              <Button href="/contact" className="mt-3">Build Your App</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="section-title">App Categories We Specialize In</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {APP_TYPES.map((a) => (
              <div key={a.title} className="value-boxes text-center">
                <img src={a.icon} alt="" className="h-16 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">{a.title}</h3>
                <p className="details-text mb-0">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img src="/images/ios-img.png" alt="iOS development" className="max-w-full h-auto" />
            </div>
            <div>
              <h2 className="section-title">iOS Development</h2>
              <p className="details-text">
                Polished iOS apps using Swift and SwiftUI — taking advantage of the
                platform&apos;s capabilities, designed to feel native and intuitive.
              </p>
              <ul className="default-list">
                <li>SwiftUI &amp; UIKit</li>
                <li>App Store optimization</li>
                <li>WatchOS &amp; iPad apps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:[&>*:first-child]:order-2">
            <div className="flex justify-center lg:justify-end">
              <img src="/images/android-img.png" alt="Android development" className="max-w-full h-auto" />
            </div>
            <div>
              <h2 className="section-title">Android Development</h2>
              <p className="details-text">
                Modern Android apps with Kotlin and Jetpack Compose — material design
                that scales from phones to tablets and Wear OS.
              </p>
              <ul className="default-list">
                <li>Kotlin / Jetpack Compose</li>
                <li>Play Store rollouts</li>
                <li>Wear OS &amp; Android TV</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="section-title">What You Get With Every Engagement</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-base">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
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
