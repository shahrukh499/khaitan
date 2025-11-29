import { Button } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import ProductsCard from "../components/ProductsCard";
import { productsData } from "../data/productsData";

function BestSeller() {
  const products = productsData;
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-[30%]">
            <div className="shadow-lg border border-gray-100 p-10 rounded-lg flex justify-center flex-col gap-y-5 h-full">
              <div>
                <span>Best selers</span>
                <h3 className="text-[22px] lg:text-[30px] font-semibold leading-tight">
                  Best sellers of SmartPhone
                </h3>
              </div>
              <p className="text-[13px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                nesciunt fugiat.
              </p>
              <div>
                <Button variant="contained" color="primary" sx={{backgroundColor:'#FF3333'}}>
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[70%]">
            <Splide
              options={{
                type:"loop",
                perPage: 4,
                perMove: 1,
                gap: 10,
                autoplay: true,
                interval: 3000,
                pauseOnHover: true,
                arrows: false,
                pagination: true,
                speed: 1000,
                easing: "ease-in-out",
                drag: "free",
                dragAngleThreshold: 10,
                dragThreshold: 10,
                dragVelocity: 100,
                dragAllowMomentum: true,
                dragMomentum: true,
              }}
              aria-label="My Favorite Images"
            >
              {
                products.map((product) => (
                  <SplideSlide key={product.id}>
                    <ProductsCard
                      id={product.id}
                      title={product.name}
                      price={product.price}
                      image={product.image}
                      link={product.link}
                      rating={product.rating}
                      reviews={product.reviews}
                    />
                  </SplideSlide>
                ))
              }
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSeller;
