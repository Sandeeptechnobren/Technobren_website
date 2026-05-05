export type NavItem = {
  label: string;
  href: string;
  cta?: boolean;
};

export type FooterLinkGroup = {
  title: string;
  links: { label: string; href: string }[];
};

export type Location = {
  city: string;
  country: string;
  flag: string;
  address: string;
};

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  icon: string;
  href: string;
  variant: "green" | "yellow" | "pink" | "purple";
};

export type Industry = {
  title: string;
  icon: string;
};

export type SolutionItem = {
  title: string;
  blurb: string;
  image: string;
  href: string;
};

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

export type Feedback = {
  name: string;
  company: string;
  quote: string;
};

export type Tech = {
  name: string;
  icon: string;
};
