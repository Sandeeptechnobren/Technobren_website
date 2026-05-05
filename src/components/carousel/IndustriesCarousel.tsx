"use client";

import { SwiperCarousel } from "./SwiperCarousel";
import { INDUSTRIES } from "@/lib/data/industries";

export function IndustriesCarousel() {
  return (
    <SwiperCarousel
      className="pb-12"
      breakpoints={{
        0: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
        1200: { slidesPerView: 6 },
      }}
      spaceBetween={16}
      slides={INDUSTRIES.map((i) => (
        <div key={i.title} className="industries-box">
          <img src={i.icon} alt={i.title} />
          <h3>{i.title}</h3>
        </div>
      ))}
    />
  );
}
