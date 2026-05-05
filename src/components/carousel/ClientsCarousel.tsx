"use client";

import { SwiperCarousel } from "./SwiperCarousel";
import { CLIENT_LOGOS } from "@/lib/data/feedback";

export function ClientsCarousel() {
  return (
    <SwiperCarousel
      className="pb-8"
      breakpoints={{
        0: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        992: { slidesPerView: 5 },
        1200: { slidesPerView: 6 },
      }}
      spaceBetween={32}
      pagination={false}
      slides={CLIENT_LOGOS.map((src, i) => (
        <div
          key={i}
          className="flex items-center justify-center h-24 grayscale hover:grayscale-0 transition"
        >
          <img src={src} alt="" className="max-h-16 w-auto object-contain" />
        </div>
      ))}
    />
  );
}
