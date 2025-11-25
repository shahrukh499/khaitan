import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Dummy data for navbar
const navdata = {
  navdata: [
    {
      name: "Home",
      dropItem: [],
    },
    {
      name: "Electronics",
      dropItem: [
        { name: "Smartphones", link: "/electronics/smartphones" },
        { name: "Laptops", link: "/electronics/laptops" },
        { name: "Tablets", link: "/electronics/tablets" },
        { name: "Cameras", link: "/electronics/cameras" },
        { name: "Headphones", link: "/electronics/headphones" },
        { name: "Speakers", link: "/electronics/speakers" },
        { name: "Smart Watches", link: "/electronics/smart-watches" },
        { name: "Gaming Consoles", link: "/electronics/gaming" },
        { name: "TVs", link: "/electronics/tvs" },
        { name: "Accessories", link: "/electronics/accessories" },
      ],
    },
    {
      name: "Fashion",
      dropItem: [
        { name: "Men's Clothing", link: "/fashion/mens" },
        { name: "Women's Clothing", link: "/fashion/womens" },
        { name: "Kids Clothing", link: "/fashion/kids" },
        { name: "Shoes", link: "/fashion/shoes" },
        { name: "Bags", link: "/fashion/bags" },
        { name: "Watches", link: "/fashion/watches" },
        { name: "Jewelry", link: "/fashion/jewelry" },
        { name: "Sunglasses", link: "/fashion/sunglasses" },
      ],
    },
    {
      name: "Home & Garden",
      dropItem: [
        { name: "Furniture", link: "/home/furniture" },
        { name: "Kitchen", link: "/home/kitchen" },
        { name: "Bathroom", link: "/home/bathroom" },
        { name: "Bedding", link: "/home/bedding" },
        { name: "Decor", link: "/home/decor" },
        { name: "Lighting", link: "/home/lighting" },
        { name: "Garden Tools", link: "/home/garden" },
        { name: "Storage", link: "/home/storage" },
        { name: "Cleaning Supplies", link: "/home/cleaning" },
      ],
    },
    {
      name: "Sports",
      dropItem: [
        { name: "Fitness Equipment", link: "/sports/fitness" },
        { name: "Outdoor Sports", link: "/sports/outdoor" },
        { name: "Team Sports", link: "/sports/team" },
        { name: "Water Sports", link: "/sports/water" },
        { name: "Winter Sports", link: "/sports/winter" },
        { name: "Cycling", link: "/sports/cycling" },
      ],
    },
    {
      name: "Books",
      dropItem: [
        { name: "Fiction", link: "/books/fiction" },
        { name: "Non-Fiction", link: "/books/non-fiction" },
        { name: "Educational", link: "/books/educational" },
        { name: "Children's Books", link: "/books/children" },
      ],
    },
  ],
};

function Navitem() {
  const isLoading = false;

  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <ul className="md:flex items-start gap-x-6 hidden">
        {navdata?.navdata?.map((el, i) => (
          <li key={i} className="group cursor-pointer py-5 relative">
            {isLoading ? (
              <div className="w-full">
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "80px" }}
                />
              </div>
            ) : (
              <Link
                href="#"
                className="hover:text-[#FF3333] font-medium flex items-center gap-1"
              >
                {el.name}
                {el.dropItem.length > 0 && (
                  <KeyboardArrowDownIcon sx={{ fontSize: "1rem" }} />
                )}
              </Link>
            )}
            {el.dropItem.length > 0 && (
              <ul className="absolute left-0 top-full z-[999] hidden flex-col gap-2 border-t-[3px] border-amber-600 bg-white py-2 shadow-lg group-hover:flex min-w-[200px]">
                <div
                  className={`grid ${
                    el.dropItem.length > 30
                      ? "grid-cols-4 w-[800px]"
                      : el.dropItem.length > 20
                      ? "grid-cols-3 w-[600px]"
                      : el.dropItem.length > 10
                      ? "grid-cols-2 w-[400px]"
                      : "grid-cols-1 w-[200px]"
                  }`}
                >
                  {el.dropItem.map((item, j) => (
                    <li
                      key={j}
                      className="px-4 py-2 hover:bg-gray-100 text-sm whitespace-nowrap"
                    >
                      <Link
                        className="max-w-full w-[200px] block"
                        href={item.link}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default Navitem;
