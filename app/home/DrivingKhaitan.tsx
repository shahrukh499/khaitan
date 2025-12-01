import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

function DrivingKhaitan() {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Image
            className="rounded-2xl"
            src="/assets/img/khaitan45.jpg"
            alt="driving khaitan"
            width={1464}
            height={600}
          />
        </div>
        <div className="relative pt-5 md:py-16 lg:py-10 md:mx-5">
          <div className="md:absolute bottom-20 left-0 w-full h-full z-50">
            <div className="flex flex-wrap items-center justify-center bg-[#F2F2F2] max-w-[1200px] mx-auto w-full rounded-2xl">
              <div className="bg-[#e13032] md:flex items-center gap-5 p-6 rounded-2xl w-full md:w-[80%]">
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
                    backgroundColor: "#e13032",
                    color: "white",
                    borderRadius: 50,
                    px: 3,
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
