"use client";

import { SwiperCarousel } from "./SwiperCarousel";
import { FEEDBACKS } from "@/lib/data/feedback";

export function FeedbackCarousel() {
  return (
    <SwiperCarousel
      className="pb-12"
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      }}
      spaceBetween={24}
      slides={FEEDBACKS.map((f, i) => (
        <div key={i} className="feedback-box">
          <img src="/images/qoute.svg" alt="" className="h-6 mb-4" />
          <p className="details-text mb-6 leading-7" style={{ color: "#fff" }}>
            {f.quote}
          </p>
          <div>
            <h4 className="font-bold text-lg m-0">{f.name}</h4>
            <p className="text-sm text-[#bcbcbc] m-0">{f.company}</p>
          </div>
        </div>
      ))}
    />
  );
}
