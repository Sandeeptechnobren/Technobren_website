"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/data/navigation";
import { Button } from "@/components/shared/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[999] w-full bg-white/85 backdrop-blur-md py-4 border-b border-black/[0.04]">
      <nav className="container-page">
        <div className="flex items-center justify-between">
          <Link href="/" className="block" onClick={() => setOpen(false)}>
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
            {NAV_ITEMS.map((item) =>
              item.cta ? (
                <li key={item.href} className="ml-[30px]">
                  <Button href={item.href}>{item.label}</Button>
                </li>
              ) : (
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
              )
            )}
          </ul>
        </div>

        {open && (
          <ul className="lg:hidden mt-4 flex flex-col gap-2 bg-white rounded-2xl p-4 shadow-[var(--shadow-menu)]">
            {NAV_ITEMS.map((item) =>
              item.cta ? (
                <li key={item.href}>
                  <Button
                    href={item.href}
                    className="w-full"
                  >
                    {item.label}
                  </Button>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={
                      "block py-2 px-2 nav-link-default" +
                      (pathname === item.href ? " active" : "")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        )}
      </nav>
    </header>
  );
}
