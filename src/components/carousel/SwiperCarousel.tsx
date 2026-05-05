"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {
  className?: string;
  slides: React.ReactNode[];
  loop?: boolean;
  autoplay?: boolean;
  pagination?: boolean;
  navigation?: boolean;
  spaceBetween?: number;
  breakpoints?: SwiperOptions["breakpoints"];
  slidesPerView?: SwiperOptions["slidesPerView"];
};

export function SwiperCarousel({
  className,
  slides,
  loop = true,
  autoplay = true,
  pagination = true,
  navigation = false,
  spaceBetween = 24,
  breakpoints,
  slidesPerView = 1,
}: Props) {
  return (
    <Swiper
      className={className}
      modules={[Autoplay, Pagination, Navigation]}
      loop={loop}
      autoplay={autoplay ? { delay: 4500, disableOnInteraction: false } : false}
      pagination={pagination ? { clickable: true } : false}
      navigation={navigation}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}
