import type { Service } from "@/lib/types/content";

export const HOME_SERVICES: Service[] = [
  {
    slug: "enterprise-software",
    title: "Enterprise Software Development",
    blurb:
      "Enterprise solutions that optimize operations, reduce costs, and accelerate performance.",
    icon: "/images/service-4.svg",
    href: "/services",
    variant: "purple",
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    blurb:
      "Custom-built business solutions designed for accuracy, performance, and seamless operations.",
    icon: "/images/service-1.svg",
    href: "/custom-software-development",
    variant: "green",
  },
  {
    slug: "mobile-app",
    title: "Mobile App Development",
    blurb:
      "Scalable, secure, high-performance, and custom mobile apps to deliver a superior customer experience.",
    icon: "/images/service-3.svg",
    href: "/mobile-app",
    variant: "pink",
  },
  {
    slug: "business-intelligence",
    title: "Business Intelligence Services",
    blurb:
      "Empowering businesses with smart analytics, data visualization, and strategic decision-making tools.",
    icon: "/images/service-2.svg",
    href: "/services",
    variant: "yellow",
  },
];

export const TECH_TABS: Record<string, { name: string; icon: string }[]> = {
  Mobile: [
    { name: "iOS", icon: "/images/ios.png" },
    { name: "Android", icon: "/images/android.png" },
    { name: "React Native", icon: "/images/react.png" },
    { name: "Flutter", icon: "/images/flutter.png" },
    { name: "Kotlin", icon: "/images/kotlin.png" },
    { name: "Swift", icon: "/images/swift.png" },
  ],
  "Front End": [
    { name: "Angular", icon: "/images/angular.png" },
    { name: "React", icon: "/images/react.png" },
    { name: "Vue.js", icon: "/images/Vuejs.png" },
    { name: "Next.js", icon: "/images/nextjs.png" },
    { name: "JavaScript", icon: "/images/js.png" },
    { name: "TypeScript", icon: "/images/ts.png" },
  ],
  Database: [
    { name: "MySQL", icon: "/images/mysql.png" },
    { name: "PostgreSQL", icon: "/images/postgre-sql.png" },
    { name: "MongoDB", icon: "/images/mongodb.png" },
    { name: "DynamoDB", icon: "/images/DynamoDB.png" },
    { name: "MariaDB", icon: "/images/mariadb-icon.png" },
    { name: "Oracle", icon: "/images/oracle.png" },
  ],
  Backend: [
    { name: "Node.js", icon: "/images/node.png" },
    { name: "Python", icon: "/images/python.png" },
    { name: "PHP", icon: "/images/php.png" },
    { name: "Laravel", icon: "/images/laravel.png" },
    { name: "CodeIgniter", icon: "/images/codeigniter.png" },
    { name: "NestJS", icon: "/images/nestjs.png" },
  ],
  CMS: [
    { name: "WordPress", icon: "/images/wordpress.png" },
    { name: "Joomla", icon: "/images/joomla.png" },
    { name: "Magento", icon: "/images/magento.png" },
    { name: "Kentico", icon: "/images/kentico.png" },
  ],
  "Infra and DevOps": [
    { name: "AWS", icon: "/images/aws.png" },
    { name: "Azure", icon: "/images/azure.png" },
    { name: "Google Cloud", icon: "/images/google-cloud-icon.png" },
    { name: "Docker", icon: "/images/docker.png" },
    { name: "Kubernetes", icon: "/images/kubernetes.png" },
    { name: "Jenkins", icon: "/images/jenkins.png" },
  ],
};

export const SOLUTION_TABS = [
  {
    key: "van",
    label: "Sales Process Automation",
    title: "Sales Process Automation",
    image: "/images/van-sales.jpg",
    href: "/vans-sales",
    body: [
      "Sales Process Automation is all about making sales activities smoother and more efficient. It automates crucial tasks like managing the sales pipeline, processing orders, and generating reports and analytics.",
      "With features like approval workflows, accurate lead capturing, and timely follow-up emails, it really enhances productivity. By minimizing manual tasks and improving accuracy, businesses can quicken their sales cycle, boost overall productivity, and ensure a high-quality customer experience at every touchpoint.",
    ],
  },
  {
    key: "distributor",
    label: "Distributor Management",
    title: "Distributor Management",
    image: "/images/Distributor Management.jpg",
    href: "/solutions",
    body: [
      "Distributor Management involves the careful oversight and enhancement of the relationship between a company and its distributors. This process includes onboarding, tracking performance, and managing support to ensure that products or services are distributed efficiently.",
      "By adopting digital tools, businesses can refine their inventory control, ensure timely deliveries, foster stronger partnerships, and broaden their market reach. Ultimately, this drives improved sales performance and boosts customer satisfaction across all distribution channels.",
    ],
  },
  {
    key: "merchandiser",
    label: "Merchandiser Management",
    title: "Merchandiser Management",
    image: "/images/Merchandiser.jpg",
    href: "/solutions",
    body: [
      "Merchandiser Management is all about organizing and keeping an eye on retail execution to make sure products are visible and brands stay consistent. It involves managing activities in-store, conducting stock audits, and ensuring that displays meet compliance standards, all through the use of digital tools.",
      "By enabling real-time tracking of tasks, reporting, and route planning, businesses can increase the productivity of their merchandisers, improve shelf visibility, and drive sales. When done effectively, good merchandiser management leads to better data-driven decisions and enhances the shopping experience for everyone.",
    ],
  },
  {
    key: "asset",
    label: "Asset Management",
    title: "Asset Management",
    image: "/images/Asset Management.jpg",
    href: "/solutions",
    body: [
      "Asset Management covers key functions like Asset Tracking, Maintenance Scheduling, Audit Management, Resource Optimization, and Cost Reduction. Real-time tracking lets you monitor asset location and performance, while scheduled maintenance prevents unexpected breakdowns. Audit Management simplifies record-keeping and compliance.",
      "Resource Optimization helps utilize assets effectively, reducing waste. These elements work together to lower costs, extend asset life, and improve efficiency. Ultimately, Asset Management boosts profitability by streamlining operations and ensuring smarter, more effective use of resources.",
    ],
  },
  {
    key: "warehouse",
    label: "Warehouse Management",
    title: "Warehouse Management",
    image: "/images/warehouse.jpg",
    href: "/solutions",
    body: [
      "Warehouse Management includes key processes like Inventory Tracking, Order Processing, Space Optimization, Shipment Management, Automation, Supply Chain Efficiency, and Cost Reduction. Real-time Inventory Tracking ensures stock accuracy, while Order Processing handles the fulfillment flow.",
      "Space Optimization maximizes storage use, and Shipment Management ensures timely, accurate deliveries. Automation reduces errors and boosts productivity. These processes integrate seamlessly to enhance overall Supply Chain Efficiency and minimize operational costs.",
    ],
  },
] as const;
