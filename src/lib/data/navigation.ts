import type { NavItem, FooterLinkGroup } from "@/lib/types/content";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industry", href: "/industry" },
  { label: "Solutions", href: "/solutions" },
  { label: "Contact Us", href: "/contact", cta: true },
];

export const FOOTER_GROUPS: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/our-team" },
      { label: "Industry", href: "/industry" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom Software Development", href: "/custom-software-development" },
      { label: "Mobile App Development", href: "/mobile-app" },
      { label: "Web Development", href: "/services" },
      { label: "UI/UX Design", href: "/services" },
      { label: "AI / ML", href: "/services" },
      { label: "Digital Marketing", href: "/services" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Sales Process Automation", href: "/vans-sales" },
      { label: "Distributor Management", href: "/solutions" },
      { label: "Merchandiser Management", href: "/solutions" },
      { label: "Asset Management", href: "/solutions" },
      { label: "Warehouse Management", href: "/solutions" },
      { label: "E-Learning", href: "/solutions" },
    ],
  },
  {
    title: "Hire Developer Team",
    links: [
      { label: "iOS Developer", href: "/contact" },
      { label: "Android Developer", href: "/contact" },
      { label: "Front-End Developer", href: "/contact" },
      { label: "Back-End Developer", href: "/contact" },
      { label: "Full-Stack Developer", href: "/contact" },
    ],
  },
];
