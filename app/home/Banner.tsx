"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

function Banner() {
  
  return (
    <section className="relative py-3">
      <div className="container mx-auto px-4">
        <Splide
          options={{
            type: "fade",
            rewind: true,
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            arrows: false,
            pagination: true,
            speed: 1000,
            fadeEffect: {
              crossFade: true,
            },
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <Image
              className="rounded-lg"
              src="/assets/img/slideshow-01.jpg"
              alt="Banner 1"
              width={1920}
              height={888}
            />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}

export default Banner;
