"use client";

import { useState } from "react";

type TabItem = {
  key: string;
  label: string;
  content: React.ReactNode;
};

type Props = {
  items: TabItem[];
  className?: string;
  tabsClassName?: string;
  defaultActive?: string;
};

export function Tabs({ items, className, tabsClassName, defaultActive }: Props) {
  const [active, setActive] = useState(defaultActive ?? items[0]?.key);
  return (
    <div className={className}>
      <ul
        className={
          "flex flex-wrap justify-center gap-3 mb-8 " + (tabsClassName ?? "")
        }
        role="tablist"
      >
        {items.map((item) => (
          <li key={item.key}>
            <button
              type="button"
              role="tab"
              aria-selected={active === item.key}
              data-active={active === item.key}
              className="tab-pill"
              onClick={() => setActive(item.key)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {items.map((item) =>
          active === item.key ? <div key={item.key}>{item.content}</div> : null
        )}
      </div>
    </div>
  );
}
