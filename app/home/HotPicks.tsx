"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProductsCard from "../components/ProductsCard";
import { productsData } from "../data/productsData";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

function HotPicks() {
  const products = productsData;

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Title with Sun Icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mb: 4,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="5" fill="#FFA500" />
            <path
              d="M12 2V4M12 20V22M22 12H20M4 12H2M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93"
              stroke="#FFA500"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.5rem", md: "2rem" },
              color: "#1f2937",
            }}
          >
            Hot Picks
          </Typography>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="5" fill="#FFA500" />
            <path
              d="M12 2V4M12 20V22M22 12H20M4 12H2M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93"
              stroke="#FFA500"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Box>

        {/* Splide Slider */}
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            perMove: 1,
            gap: "1rem",
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            arrows: true,
            pagination: false,
            speed: 1000,
            easing: "ease-in-out",
            breakpoints: {
              1024: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
          aria-label="Hot Picks Products"
        >
          {products.map((product) => (
            <SplideSlide key={product.id}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                }}
              >

                {/* Product Card */}
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <ProductsCard
                    id={product.id}
                    title={product.name}
                    price={product.price}
                    image={product.image}
                    link={product.link}
                    rating={product.rating}
                    reviews={product.reviews}
                  />
                </Box>
              </Box>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

export default HotPicks;

