import React from "react";

interface BulbsvgProps {
  isActive?: boolean;
}

function Bulbsvg({ isActive = false }: BulbsvgProps) {
  const fillColor = isActive ? "#ffffff" : undefined;
  const gradientStart = isActive ? "#ffffff" : "#074f82";
  const gradientEnd = isActive ? "#ffffff" : "#0496ad";
  
  return (
    <svg
    width="85"
    height="87"
    className="p-4"
      viewBox="0 0 70.834 80"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.195"
          y1="0.088"
          x2="0.81"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor={gradientStart}></stop>
          <stop offset="1" stopColor={gradientEnd}></stop>
        </linearGradient>
        <clipPath id="clipPath">
          <rect
            id="Rectangle_417"
            data-name="Rectangle 417"
            width="70.834"
            height="80"
            fill="url(#linear-gradient)"
          ></rect>
        </clipPath>
      </defs>
      <g id="Group_44547-2" data-name="Group 44547" clipPath="url(#clipPath)">
        <path
          id="Path_70354"
          opacity="0"
          data-name="Path 70354"
          d="M31.139,10.48v0h0a1.2,1.2,0,0,0,1.2-1.2v-8a1.2,1.2,0,1,0-2.4,0v8a1.2,1.2,0,0,0,1.2,1.2"
          transform="translate(4.276 0.012)"
          fill="url(#linear-gradient)"
        ></path>
        <path
          id="Path_70355"
          opacity="0"
          data-name="Path 70355"
          d="M14.846,17.672a1.2,1.2,0,0,0,.841-2.046l-5.355-5.35a1.2,1.2,0,0,0-1.676.019,1.272,1.272,0,0,0,0,1.735l5.383,5.3a1.082,1.082,0,0,0,.8.345Z"
          transform="translate(1.187 1.42)"
          fill="url(#linear-gradient)"
        ></path>
        <path
          id="Path_70356"
          opacity="0"
          data-name="Path 70356"
          d="M9.289,29.94h-8a1.2,1.2,0,1,0,0,2.4h8a1.2,1.2,0,1,0,0-2.4"
          transform="translate(0.013 4.276)"
          fill="url(#linear-gradient)"
        ></path>
        <path
          id="Path_70357"
          data-name="Path 70357"
          d="M39.083,56.041h-13.6a3.548,3.548,0,0,0,0,7.1h13.6a3.548,3.548,0,1,0,0-7.1m1.152,3.547a1.152,1.152,0,0,1-1.152,1.154h-13.6a1.153,1.153,0,0,1,0-2.306h13.6a1.154,1.154,0,0,1,1.152,1.152"
          transform="translate(3.133 8.003)"
          fill="url(#linear-gradient)"
        ></path>
        <path
          id="Path_70358"
          opacity="0"
          data-name="Path 70358"
          d="M53.993,29.94h0a1.2,1.2,0,0,0,0,2.4h8a1.2,1.2,0,1,0,0-2.4"
          transform="translate(7.539 4.276)"
          fill="url(#linear-gradient)"
        ></path>
        <path
          id="Path_70359"
          opacity="0"
          data-name="Path 70359"
          d="M54.61,10.353c-1.184-.96-1.724.042-2.3.542l-4.949,4.918a1.134,1.134,0,0,0-.316.8,1.193,1.193,0,0,0,2.03.875L54.61,12a1.2,1.2,0,0,0,0-1.645"
          transform="translate(6.719 1.421)"
          fill="url(#linear-gradient)"
        ></path>
        <path
          id="Path_70360"
          data-name="Path 70360"
          d="M35.078,63.794H28.832a3.548,3.548,0,0,0,0,7.1h6.245a3.548,3.548,0,1,0,0-7.1m1.15,3.544a1.152,1.152,0,0,1-1.152,1.154H28.839a1.153,1.153,0,0,1,0-2.306h6.236a1.154,1.154,0,0,1,1.152,1.152"
          transform="translate(3.611 9.11)"
          fill="url(#linear-gradient)"
        ></path>
        <path
          id="Path_70361"
          data-name="Path 70361"
          d="M53.062,31.023a18.932,18.932,0,0,0-6.72-12.793,20.365,20.365,0,0,0-13.02-4.751A18.871,18.871,0,0,0,19.99,18.931a19.69,19.69,0,0,0-1.345,26.832,18.285,18.285,0,0,1,4.424,11.85,2.21,2.21,0,0,0,2.21,2.194h16.6v-.043l.01.04c2.11-.1,2.191-1.866,2.262-3.428a8.246,8.246,0,0,1,.178-1.641v-.017a19.845,19.845,0,0,1,4.343-9.188,19.5,19.5,0,0,0,4.39-14.5ZM34.612,40.048h4.434a1.2,1.2,0,0,0,0-2.4H28.1a1.2,1.2,0,0,0,0,2.4h4.114V57.392l-6.757-.011a20.686,20.686,0,0,0-4.993-13.174,17.2,17.2,0,0,1,13.1-28.342c.219,0,.448,0,.677.014a16.572,16.572,0,0,1,9.182,3.073,17.8,17.8,0,0,1,7.237,16.219,16.474,16.474,0,0,1-3.835,8.837,21.86,21.86,0,0,0-5.172,13.4L34.612,57.4Z"
          transform="translate(2 1.925)"
          fill="url(#linear-gradient)"
        ></path>
      </g>
    </svg>
  );
}

export default Bulbsvg;
