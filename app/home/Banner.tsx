"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

function Banner() {
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const splideRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const INTERVAL = 3000;
  const TRANSITION_SPEED = 1000; // Match the speed in Splide options

  const startProgress = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    setProgress(0);
    startTimeRef.current = Date.now();

    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTimeRef.current;

      if (elapsed < 0) {
        // Still waiting for transition to complete
        animationRef.current = requestAnimationFrame(updateProgress);
        return;
      }

      const newProgress = Math.min((elapsed / INTERVAL) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        animationRef.current = requestAnimationFrame(updateProgress);
      }
    };

    animationRef.current = requestAnimationFrame(updateProgress);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let checkInterval: NodeJS.Timeout | null = null;
    let splideInstance: any = null;

    // Wait for Splide to initialize
    checkInterval = setInterval(() => {
      const splideElement = container.querySelector(".splide") as any;
      if (splideElement?.splide) {
        if (checkInterval) {
          clearInterval(checkInterval);
          checkInterval = null;
        }

        splideInstance = splideElement.splide;
        splideRef.current = splideInstance;

        // Listen for slide changes
        const handleMove = () => {
          startProgress();
        };

        splideInstance.on("moved", handleMove);
        startProgress();
      }
    }, 100);

    return () => {
      if (checkInterval) {
        clearInterval(checkInterval);
      }
      if (splideInstance) {
        splideInstance.off("moved");
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [startProgress]);

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const progressPercent = Math.max(0, Math.min(100, progress));
  // Calculate offset: when progress is 0, offset is full circumference (hidden)
  // when progress is 100, offset is 0 (fully visible)
  const offset = circumference - (progressPercent / 100) * circumference;

  return (
    <section className="relative">
      <div className="container mx-auto px-4" ref={containerRef}>
        <Splide
          options={{
            type: "fade",
            rewind: true,
            autoplay: true,
            interval: INTERVAL,
            pauseOnHover: true,
            arrows: false,
            pagination: true,
            speed: TRANSITION_SPEED,
            fadeEffect: {
              crossFade: true,
            },
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <Image
              src="/assets/img/homepages-08-slideshow-01.jpg"
              alt="Banner 1"
              width={1920}
              height={1080}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/assets/img/homepages-08-slideshow-02.webp"
              alt="Banner 2"
              width={1920}
              height={1080}
            />
          </SplideSlide>
        </Splide>
        <div className="absolute bottom-4 right-4 z-10">
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />

            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="8"
              strokeDasharray={2 * Math.PI * 40}
              strokeDashoffset={
                2 * Math.PI * 40 - (progress / 100) * (2 * Math.PI * 40)
              }
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Banner;
