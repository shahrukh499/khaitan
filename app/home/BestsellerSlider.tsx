"use client";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "../data/productsData";
import ProductsCard from "../components/ProductsCard";

interface SlideData {
  id: string;
  mainProduct: {
    title: string;
    image: string;
    link: string;
  };
  title: string;
  description: string;
  products: typeof productsData;
}

function BestsellerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample slide data - you can customize this
  const slides: SlideData[] = [
    {
      id: "slide-1",
      mainProduct: {
        title: "Crompton Silent Pro Fluido Wave 1200mm Ceiling Fan",
        image: "/assets/img/fan.jpg",
        link: "/products/ceiling-fan-1",
      },
      title: "Meet Our Bestsellers",
      description:
        "Experience the perfect blend of functionality and style with our range of top-selling products tailored for the modern Indian home. From premium lighting solutions that illuminate your home, to designer fans that are also energy efficient, or cutting-edge kitchen appliances, designed to make your life easier and more enjoyable. Elevate your living space with our carefully curated collection of bestsellers.",
      products: productsData.slice(0, 3),
    },
    {
      id: "slide-2",
      mainProduct: {
        title: "Premium Water Heater with Advanced Technology",
        image: "/assets/img/Geysers.jpg",
        link: "/products/water-heater-1",
      },
      title: "Meet Our Bestsellers",
      description:
        "Experience the perfect blend of functionality and style with our range of top-selling products tailored for the modern Indian home. From premium lighting solutions that illuminate your home, to designer fans that are also energy efficient, or cutting-edge kitchen appliances, designed to make your life easier and more enjoyable. Elevate your living space with our carefully curated collection of bestsellers.",
      products: productsData.slice(1, 4),
    },
    {
      id: "slide-3",
      mainProduct: {
        title: "Modern Mixer Grinder Collection",
        image: "/assets/img/mixer.jpg",
        link: "/products/mixer-grinder-1",
      },
      title: "Meet Our Bestsellers",
      description:
        "Experience the perfect blend of functionality and style with our range of top-selling products tailored for the modern Indian home. From premium lighting solutions that illuminate your home, to designer fans that are also energy efficient, or cutting-edge kitchen appliances, designed to make your life easier and more enjoyable. Elevate your living space with our carefully curated collection of bestsellers.",
      products: productsData.slice(2, 5),
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 3, lg: 4 },
            alignItems: "stretch",
          }}
        >
          {/* Left Panel - Main Product Image */}
          <Box
            sx={{
              width: { xs: "100%", lg: "40%" },
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              minHeight: { xs: "300px", md: "500px", lg: "600px" },
              backgroundColor: "#f9fafb",
            }}
          >
            <Image
              src={currentSlideData.mainProduct.image}
              alt={currentSlideData.mainProduct.title}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Text and Button */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                p: 3,
                color: "white",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  fontWeight: 500,
                }}
              >
                {currentSlideData.mainProduct.title}
              </Typography>
              <Link href={currentSlideData.mainProduct.link}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    fontSize: "0.875rem",
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Know More
                </Button>
              </Link>
            </Box>
          </Box>

          {/* Right Panel - Content and Products */}
          <Box
            sx={{
              width: { xs: "100%", lg: "60%" },
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* Title and Description */}
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  color: "#1f2937",
                  mb: 2,
                }}
              >
                {currentSlideData.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#6b7280",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  lineHeight: 1.7,
                }}
              >
                {currentSlideData.description}
              </Typography>
            </Box>

            {/* Navigation Arrows */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                py: 2,
              }}
            >
              <IconButton
                onClick={handlePrevious}
                sx={{
                  position: "relative",
                  backgroundColor: "#f3f4f6",
                  boxShadow:"inset 4px 8px 8px #0000001a, 4px 8px 8px #0000001a",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  "&:hover": {
                    backgroundColor: "#e5e7eb",
                  }
                }}
                aria-label="Previous slide"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </IconButton>
              {/* <Box
                sx={{
                  flex: 1,
                  height: 2,
                  backgroundColor: "#e5e7eb",
                  borderRadius: 1,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: `${((currentSlide + 1) / slides.length) * 100}%`,
                    backgroundColor: "#FF3333",
                    borderRadius: 1,
                    transition: "width 0.3s ease",
                  }}
                />
              </Box> */}
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "relative",
                  backgroundColor: "#f3f4f6",
                  boxShadow:"inset 4px 8px 8px #0000001a, 4px 8px 8px #0000001a",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  "&:hover": {
                    backgroundColor: "#e5e7eb",
                  }
                }}
                aria-label="Next slide"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </IconButton>
            </Box>

            {/* Product Cards Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: 2,
              }}
            >
              {currentSlideData.products.map((product) => (
                <Box
                  key={product.id}
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    backgroundColor: "white",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 3,
                    },
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
              ))}
            </Box>
          </Box>
        </Box>
      </div>
    </section>
  );
}

export default BestsellerSlider;

