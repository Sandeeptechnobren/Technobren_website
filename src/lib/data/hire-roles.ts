export type HireRole = {
  slug: string;
  title: string;
  shortLabel: string;
  tagline: string;
  description: string;
  skills: string[];
  useCases: { title: string; body: string }[];
};

export const HIRE_ROLES: HireRole[] = [
  {
    slug: "ios-developers",
    title: "Hire iOS Developers",
    shortLabel: "iOS Developers",
    tagline: "Native iOS apps that look, feel, and perform like Apple intended.",
    description:
      "Our iOS engineers ship Swift and SwiftUI apps to the App Store every week — for finance, healthcare, retail, and IoT clients. We handle the full lifecycle: spec, design system, build, App Store submission, and post-launch hardening.",
    skills: [
      "Swift",
      "SwiftUI",
      "Objective-C",
      "UIKit",
      "Core Data",
      "Combine",
      "Core ML",
      "ARKit",
      "TestFlight",
      "App Store Connect",
      "Xcode Cloud",
      "Firebase",
    ],
    useCases: [
      {
        title: "Native iPhone & iPad apps",
        body: "Universal apps with adaptive layouts for every Apple device, from iPhone SE to iPad Pro.",
      },
      {
        title: "Watch + Mac companions",
        body: "watchOS and macOS apps that share a Swift codebase and sync via iCloud or your backend.",
      },
      {
        title: "Enterprise iOS distribution",
        body: "MDM-aware builds, ad-hoc provisioning, and Apple Business Manager handover.",
      },
    ],
  },
  {
    slug: "android-developers",
    title: "Hire Android Developers",
    shortLabel: "Android Developers",
    tagline: "Production-grade Android apps in Kotlin — fast, accessible, store-ready.",
    description:
      "Kotlin-first Android engineering with Jetpack Compose, modern architecture (MVVM/MVI), and a sharp eye for performance on the long tail of devices your users actually own. We deliver Play Console-ready APKs and AAB bundles on every release.",
    skills: [
      "Kotlin",
      "Jetpack Compose",
      "Coroutines",
      "Flow",
      "Room",
      "Hilt / Dagger",
      "Retrofit",
      "WorkManager",
      "Material 3",
      "Play Console",
      "Firebase",
      "Espresso",
    ],
    useCases: [
      {
        title: "Consumer Android apps",
        body: "Compose-based UI, offline-first sync, and bundle splits sized for low-bandwidth markets.",
      },
      {
        title: "Enterprise + kiosk builds",
        body: "Android Enterprise, COSU lockdown, OEM-specific certifications (Samsung Knox, Zebra, etc.).",
      },
      {
        title: "Wear OS & Android TV",
        body: "Multi-form-factor builds that share business logic and respect each platform's interaction model.",
      },
    ],
  },
  {
    slug: "flutter-developers",
    title: "Hire Flutter Developers",
    shortLabel: "Flutter Developers",
    tagline: "One Dart codebase, two app stores, pixel-perfect on both.",
    description:
      "Flutter is our default for teams that need iOS and Android parity without the cost of two parallel native teams. We ship Dart with strict null safety, stateful widget tests, and golden-image diffs so the design language stays consistent across every screen.",
    skills: [
      "Dart",
      "Flutter",
      "Riverpod",
      "BLoC",
      "Dio",
      "Hive / Isar",
      "Firebase",
      "Mockito",
      "Golden Tests",
      "FastLane",
      "Codemagic",
      "Freezed",
    ],
    useCases: [
      {
        title: "Cross-platform MVPs",
        body: "One team, two stores — typically 40–60% cost savings versus native iOS + Android.",
      },
      {
        title: "Bring-your-own-design-system apps",
        body: "Custom theming, motion design, and accessibility built into a reusable widget library.",
      },
      {
        title: "Flutter rescue projects",
        body: "Refactor poorly-architected Flutter codebases (no state management, GOD widgets) into a maintainable shape.",
      },
    ],
  },
  {
    slug: "react-native-developers",
    title: "Hire React Native Developers",
    shortLabel: "React Native Developers",
    tagline: "Cross-platform mobile with a familiar React stack and full native escape hatches.",
    description:
      "Best fit when you have web React engineers and want to leverage shared knowledge for mobile. We use the New Architecture (Fabric + TurboModules), Expo Router for app-router-style navigation, and write native modules in Swift/Kotlin when JS bridges aren't enough.",
    skills: [
      "React Native",
      "TypeScript",
      "Expo",
      "Expo Router",
      "Reanimated 3",
      "TanStack Query",
      "Zustand",
      "Redux Toolkit",
      "Hermes",
      "EAS Build",
      "Sentry",
    ],
    useCases: [
      {
        title: "Companion apps for web products",
        body: "Reuse types, validation, and even some UI logic between your web app and React Native build.",
      },
      {
        title: "Marketing & content apps",
        body: "Stable, store-ready apps that can be updated frequently via OTA without app review.",
      },
      {
        title: "Hybrid apps with native features",
        body: "We write Swift and Kotlin where it matters — BLE, camera kits, video pipelines — and bridge cleanly.",
      },
    ],
  },
  {
    slug: "front-end-developers",
    title: "Hire Front-End Developers",
    shortLabel: "Front-End Developers",
    tagline: "Modern React, Vue, or Angular — typed, tested, accessibility-correct.",
    description:
      "Front-end engineers who care as much about the rendered output as the code: Lighthouse scores in the 90s, WCAG 2.2 AA by default, design-system discipline, and visible craft on every interaction. We work in Next.js, Remix, Nuxt, and Angular depending on what your stack demands.",
    skills: [
      "React 19",
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "Vue 3",
      "Nuxt 4",
      "Angular 20",
      "TanStack Query",
      "Vite",
      "Storybook",
      "Playwright",
      "Vitest",
    ],
    useCases: [
      {
        title: "SaaS dashboards",
        body: "Data-dense UIs with real-time updates, permissions, and accessibility built in from day one.",
      },
      {
        title: "Marketing websites",
        body: "Static or hybrid-rendered, CMS-driven, and benchmarked against Core Web Vitals.",
      },
      {
        title: "Design system implementations",
        body: "Token-based theming, Storybook-documented components, automated visual regression.",
      },
    ],
  },
  {
    slug: "back-end-developers",
    title: "Hire Back-End Developers",
    shortLabel: "Back-End Developers",
    tagline: "Reliable services in Node, Python, Go, or Java — observable, scalable, secure.",
    description:
      "We design boring, reliable backends. Polyglot stacks (Node, Python, Go, Java, .NET), event-driven architectures with Kafka or NATS, and PostgreSQL until you genuinely need something else. Observability and security are built in, not retrofitted.",
    skills: [
      "Node.js",
      "Python",
      "FastAPI",
      "Django",
      "Go",
      "Java / Spring Boot",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "gRPC",
      "OpenAPI",
      "OpenTelemetry",
    ],
    useCases: [
      {
        title: "API-first products",
        body: "OpenAPI-spec'd services with versioning, rate limiting, idempotency, and clean DTO boundaries.",
      },
      {
        title: "Event-driven systems",
        body: "Kafka or message-broker-based pipelines with at-least-once delivery, dead-letter queues, replayable streams.",
      },
      {
        title: "Legacy modernisation",
        body: "Strangle a monolith into services without a six-month rewrite that ships nothing.",
      },
    ],
  },
  {
    slug: "full-stack-developers",
    title: "Hire Full-Stack Developers",
    shortLabel: "Full-Stack Developers",
    tagline: "End-to-end ownership from database schema to pixels — small teams that move fast.",
    description:
      "Senior full-stack engineers who can take a feature from a Figma frame to a production deploy without handoffs. Comfortable with both relational data modelling and rendered-component performance. Best for greenfield products and lean teams.",
    skills: [
      "TypeScript",
      "React + Next.js",
      "Node.js",
      "Bun",
      "Python / Django",
      "PostgreSQL",
      "Prisma",
      "Drizzle",
      "tRPC",
      "GraphQL",
      "Tailwind",
      "AWS / GCP",
    ],
    useCases: [
      {
        title: "MVPs in 8–12 weeks",
        body: "Feature-complete v1 from a single small team — auth, payments, dashboard, deployment, monitoring.",
      },
      {
        title: "Internal tools",
        body: "Lightweight admin panels, ops dashboards, and approval workflows that replace fragile spreadsheets.",
      },
      {
        title: "B2B SaaS feature teams",
        body: "Embedded engineers running a vertical slice of your product end-to-end.",
      },
    ],
  },
  {
    slug: "devops-engineers",
    title: "Hire DevOps Engineers",
    shortLabel: "DevOps Engineers",
    tagline: "Cloud infrastructure and CI/CD that run quietly so your engineers don't have to think about it.",
    description:
      "Cloud-native infrastructure, CI/CD pipelines, observability, and incident response. We provision in your AWS, GCP, or Azure account from day one — IaC-first (Terraform, Pulumi), least-privilege IAM, and runbooks for every alert.",
    skills: [
      "AWS",
      "GCP",
      "Azure",
      "Terraform",
      "Pulumi",
      "Kubernetes",
      "Helm",
      "Docker",
      "GitHub Actions",
      "ArgoCD",
      "Prometheus + Grafana",
      "Datadog",
    ],
    useCases: [
      {
        title: "Greenfield platform setup",
        body: "Account + organisation structure, network design, IaC from scratch, secret management, baseline observability.",
      },
      {
        title: "CI/CD modernisation",
        body: "Replace flaky scripts with parallelised, cached, signed pipelines that ship in minutes, not hours.",
      },
      {
        title: "Incident response & SRE",
        body: "On-call rotations, runbooks, blameless post-mortems, error budgets that drive engineering trade-offs.",
      },
    ],
  },
];

export const ENGAGEMENT_MODELS = [
  {
    title: "Dedicated Team",
    body: "A full-time team that integrates with your standups, your tools, and your roadmap. Best for product builds with a 3+ month horizon.",
    bullet: "Monthly retainer",
  },
  {
    title: "Part-Time Engineers",
    body: "20 or 30 hours per week from a single named engineer. Good for steady maintenance, gradual feature work, or filling a senior gap.",
    bullet: "Hourly billing",
  },
  {
    title: "Project-Based",
    body: "Fixed scope, fixed price, fixed timeline. We write the spec together, agree the deliverables, and you only pay on milestones.",
    bullet: "Fixed-fee",
  },
];
