import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogSection() {
  return (
    <section className="pb-6 lg:pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-y-3">
          <div className="w-full lg:w-[50%] lg:px-1.5">
            <div className="relative mb-3 lg:mb-10">
              <h2 className="text-[30px] lg:text-[35px] font-semibold leading-tight mb-2 lg:mb-5">
                Khaitan Blog
              </h2>
              <p className="text-[16px] lg:text-[18px]">
                Uncertain about which mixer suits your kitchen best? Or in need
                of expert guidance to choose the ideal ceiling fan for your
                indoor space? Our informative blog is here to help. Learn more
                about our sleek and innovative range of consumer appliances and
                make well informed decisions for your convenience.
              </p>
            </div>
            <div className="relative mb-3">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/assets/img/dinning-room-light.jpg"
                  alt="blog 1"
                  width={800}
                  height={800}
                  className="rounded-2xl hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-5 w-full bg-linear-to-t from-[#000000] to-[#00000000] rounded-b-2xl">
                <h2 className="text-2xl font-bold mb-2 text-white">
                  Khaitan Blog
                </h2>
                <Link href="#" className="text-[14px] font-bold text-white">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/assets/img/dinning-room-light.jpg"
                  alt="blog 1"
                  width={800}
                  height={800}
                  className="rounded-2xl hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-5 w-full bg-linear-to-t from-[#000000] to-[#00000000] rounded-b-2xl">
                <h2 className="text-2xl font-bold mb-2 text-white">
                  Khaitan Blog
                </h2>
                <Link href="#" className="text-[14px] font-bold text-white">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] lg:px-1.5">
            <div className="relative mb-3">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/assets/img/dinning-room-light.jpg"
                  alt="blog 1"
                  width={800}
                  height={800}
                  className="rounded-2xl hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-5 w-full bg-linear-to-t from-[#000000] to-[#00000000] rounded-b-2xl">
                <h2 className="text-2xl font-bold mb-2 text-white">
                  Khaitan Blog
                </h2>
                <Link href="#" className="text-[14px] font-bold text-white">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/assets/img/dinning-room-light.jpg"
                  alt="blog 1"
                  width={800}
                  height={800}
                  className="rounded-2xl hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-5 w-full bg-linear-to-t from-[#000000] to-[#00000000] rounded-b-2xl">
                <h2 className="text-2xl font-bold mb-2 text-white">
                  Khaitan Blog
                </h2>
                <Link href="#" className="text-[14px] font-bold text-white">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
