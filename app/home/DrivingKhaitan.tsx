import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

function DrivingKhaitan() {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Image
            src="/assets/img/khaitan45.jpg"
            alt="driving khaitan"
            width={1464}
            height={600}
          />
        </div>
        <div className="relative pt-5 md:py-16 lg:py-10 md:mx-5">
          <div className="md:absolute bottom-20 left-0 w-full h-full z-50">
            <div className="flex flex-wrap items-center justify-center bg-[#F2F2F2] max-w-[1200px] mx-auto w-full rounded-lg">
              <div className="bg-[#FF3333] md:flex items-center gap-5 p-6 rounded-lg w-full md:w-[80%]">
                <Image
                  src="/assets/icons/iconsdd.png"
                  alt="driving khaitan"
                  width={80}
                  height={80}
                />
                <div>
                  <h4 className="font-semibold text-white">
                    Need help deciding on the right products?
                  </h4>
                  <p className="text-[14px] text-gray-200">
                    Try our product selection guide to help you in your decision
                    making
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[20%] py-2">
                <Button
                  variant="text"
                  color="primary"
                  sx={{
                    color: "black",
                    textTransform: "capitalize",
                    display: "block",
                    margin: "auto",
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrivingKhaitan;
