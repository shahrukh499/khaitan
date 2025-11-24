import Image from "next/image";
import Link from "next/link";
import React from "react";

function Showcards() {
  return (
    <div className="showcard border border-gray-100 transition-transform duration-500 ease-in-out hover:z-20 bg-white">
      <div className="relative z-10">
        <Image
          src="/assets/img/home5-category-home-appliance.webp"
          alt="home appliance"
          width={490}
          height={490}
        />
      </div>
      <div className="block_content_text relative  pt-[26px] bg-white">
        <h2 className="text-sm font-bold text-center text-(--rbb-general-heading-color) uppercase mb-2">
          Smartphone
        </h2>
        <div className="description text-xs font-normal text-center mb-4 text-(--rbb-general-body-text-color)">
          <ul>
            <li className="mb-2">
              <Link href="#" tabIndex={0}>
                Logitech Products
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" tabIndex={0}>
                Altec Lansing
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" tabIndex={0}>
                Accessories
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" tabIndex={0}>
                Plantronics Products
              </Link>
            </li>
          </ul>
        </div>
        <div>
            <Link
            href="#"
            className="duration-300 flex justify-center items-center pb-7"
            tabIndex={0}
            >
            <span className="text-xs text-center inline-flex font-semibold text-(--rbb-general-heading-color) transition-all hover:text-(--rbb-general-primary-color)">
                Shop More
            </span>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Showcards;
