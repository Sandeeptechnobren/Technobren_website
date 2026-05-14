"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/data/navigation";
import { Button } from "@/components/shared/Button";

const Chevron = ({ className = "" }: { className?: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
    className={className}
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Header() {
  const [open, setOpen] = useState(false);
  const [expandedNav, setExpandedNav] = useState<string | null>(null);
  const pathname = usePathname();

  const closeMobile = () => {
    setOpen(false);
    setExpandedNav(null);
  };

  return (
    <header className="sticky top-0 z-[999] w-full bg-white/85 backdrop-blur-md py-4 border-b border-black/[0.04]">
      <nav className="container-page">
        <div className="flex items-center justify-between">
          <Link href="/" className="block" onClick={closeMobile}>
            <img
              src="/images/logo.png"
              alt="TechnoBren Infotech"
              className="h-[60px] w-auto"
            />
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="lg:hidden text-2xl text-ink p-2"
            onClick={() => setOpen((o) => !o)}
          >
            <i className="fas fa-bars" aria-hidden="true" />
          </button>

          <ul className="hidden lg:flex items-center ml-auto gap-0">
            {NAV_ITEMS.map((item) => {
              if (item.cta) {
                return (
                  <li key={item.href} className="ml-[30px]">
                    <Button href={item.href}>{item.label}</Button>
                    {/* Hello */}
                  </li>
                );
              }
              if (item.children) {
                return (
                  <li key={item.href} className="has-dropdown">
                    <Link
                      href={item.href}
                      className={
                        "nav-link-default inline-flex items-center gap-1.5" +
                        (pathname === item.href ? " active" : "")
                      }
                    >
                      {item.label}
                      <Chevron className="nav-chevron" />
                    </Link>
                    <div className="nav-dropdown" role="menu">
                      <ul className="nav-dropdown-grid">
                        {item.children.map((c) => (
                          <li key={c.label} role="none">
                            <Link
                              href={c.href}
                              className="nav-dropdown-link"
                              role="menuitem"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      "nav-link-default" +
                      (pathname === item.href ? " active" : "")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {open && (
          <ul className="lg:hidden mt-4 flex flex-col gap-2 bg-white rounded-2xl p-4 shadow-[var(--shadow-menu)]">
            {NAV_ITEMS.map((item) => {
              if (item.cta) {
                return (
                  <li key={item.href}>
                    <Button href={item.href} className="w-full">
                      {item.label}
                    </Button>
                  </li>
                );
              }
              if (item.children) {
                const isExpanded = expandedNav === item.label;
                return (
                  <li key={item.href}>
                    <button
                      type="button"
                      className={
                        "w-full flex items-center justify-between py-2 px-2 nav-link-default" +
                        (pathname === item.href ? " active" : "")
                      }
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setExpandedNav(isExpanded ? null : item.label)
                      }
                    >
                      <span>{item.label}</span>
                      <Chevron
                        className={
                          "transition-transform duration-200" +
                          (isExpanded ? " rotate-180" : "")
                        }
                      />
                    </button>
                    {isExpanded && (
                      <ul className="ml-4 mt-1 mb-2 flex flex-col gap-1 border-l border-black/[0.08] pl-3">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <Link
                              href={c.href}
                              onClick={closeMobile}
                              className="block py-1.5 px-2 text-[15px] text-gray-700 hover:text-primary"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className={
                      "block py-2 px-2 nav-link-default" +
                      (pathname === item.href ? " active" : "")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}
