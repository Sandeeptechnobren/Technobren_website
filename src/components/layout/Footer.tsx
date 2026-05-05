import Link from "next/link";
import { FOOTER_GROUPS } from "@/lib/data/navigation";

const PHONES = [
  { flag: "/images/flag-India.png", number: "+91 93 0536 5576", tel: "+919305365576" },
  { flag: "/images/flag-India.png", number: "+91 94 0918 4115", tel: "+919409184115" },
  { flag: "/images/flag-India.png", number: "+91 90 1664 3264", tel: "+919016643264" },
];

const SOCIAL = [
  { href: "https://www.facebook.com/technobren", icon: "/images/facebook.svg", alt: "Facebook" },
  { href: "https://www.instagram.com/", icon: "/images/instagram.svg", alt: "Instagram" },
  { href: "https://x.com/", icon: "/images/twitter.svg", alt: "Twitter" },
  {
    href: "https://www.linkedin.com/company/technobren-infotech-ptv-ltd",
    icon: "/images/linkedin.svg",
    alt: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="section-padding bg-surface-alt">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8">
          <div className="xl:col-span-4">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="TechnoBren Infotech"
                className="h-[60px] w-auto mb-4"
              />
            </Link>
            <p className="details-text mb-1">Get Free Estimation</p>
            <a
              href="mailto:info@technobren.com"
              className="text-primary font-semibold inline-block mb-6"
            >
              info@technobren.com
            </a>
            <p className="details-text mb-3">Call</p>
            <div className="flex flex-col gap-2">
              {PHONES.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="details-text inline-flex items-center gap-2 mb-0"
                >
                  <img src={p.flag} alt="" className="h-4" />
                  {p.number}
                </a>
              ))}
            </div>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div
              key={group.title}
              className={
                group.title === "Solutions"
                  ? "xl:col-span-3"
                  : group.title === "Services"
                    ? "xl:col-span-2"
                    : "xl:col-span-2"
              }
            >
              <h3 className="font-bold text-lg mb-4 mt-1">{group.title}</h3>
              <ul className="flex flex-col gap-2">
                {group.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[#555] hover:text-primary text-[15px]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8 border-t border-[#e5e5e5]" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="details-text mb-0 text-sm">
            &copy; 2025-26, TechnoBren Infotech Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.alt}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.alt}
              >
                <img src={s.icon} alt={s.alt} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
