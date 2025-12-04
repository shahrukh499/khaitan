import React from "react";

interface WaterHeatersvgProps {
  isActive?: boolean;
}

function WaterHeatersvg({ isActive = false }: WaterHeatersvgProps) {
  const gradientIdRef = React.useRef(`water-heater-${Math.random().toString(36).substr(2, 9)}`);
  const gradientId = gradientIdRef.current;
  const fillColor = isActive ? "#ffffff" : undefined;
  const gradientStart = isActive ? "#ffffff" : "#074f83";
  const gradientEnd = isActive ? "#ffffff" : "#0496ab";

  return (
    <svg
      id="Component_23"
      data-name="Component 23"
      className="p-4"
      width="85"
      height="87"
      viewBox="0 0 42.464 70.002"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="-0.124"
          x2="1"
          y2="0.947"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor={gradientStart}></stop>
          <stop offset="1" stopColor={gradientEnd}></stop>
        </linearGradient>
      </defs>
      <g
        id="Group_51757"
        data-name="Group 51757"
        transform="translate(-38.768 -27)"
      >
        <path
          opacity="0"
          id="Ellipse_2533_-_Outline"
          data-name="Ellipse 2533 - Outline"
          d="M4.5,1.6A2.9,2.9,0,1,0,7.4,4.5,2.9,2.9,0,0,0,4.5,1.6M4.5,0A4.5,4.5,0,1,1,0,4.5,4.5,4.5,0,0,1,4.5,0Z"
          transform="translate(50 62)"
          stroke="rgba(0,0,0,0)"
          strokeMiterlimit="10"
          strokeWidth="1"
          fill={`url(#${gradientId})`}
        ></path>
        <path
          opacity="0"
          id="Ellipse_2534_-_Outline"
          data-name="Ellipse 2534 - Outline"
          d="M3,1.6A1.4,1.4,0,1,0,4.4,3,1.4,1.4,0,0,0,3,1.6M3,0A3,3,0,1,1,0,3,3,3,0,0,1,3,0Z"
          transform="translate(43 51)"
          stroke="rgba(0,0,0,0)"
          strokeMiterlimit="10"
          strokeWidth="1"
          fill={`url(#${gradientId})`}
        ></path>
        <path
          opacity="0"
          id="Ellipse_2535_-_Outline"
          data-name="Ellipse 2535 - Outline"
          d="M3,1.6A1.4,1.4,0,1,0,4.4,3,1.4,1.4,0,0,0,3,1.6M3,0A3,3,0,1,1,0,3,3,3,0,0,1,3,0Z"
          transform="translate(70 43)"
          stroke="rgba(0,0,0,0)"
          strokeMiterlimit="10"
          strokeWidth="1"
          fill={`url(#${gradientId})`}
        ></path>
        <path
          opacity="0"
          id="Ellipse_2536_-_Outline"
          data-name="Ellipse 2536 - Outline"
          d="M5.5,1.6A3.9,3.9,0,1,0,9.4,5.5,3.9,3.9,0,0,0,5.5,1.6M5.5,0A5.5,5.5,0,1,1,0,5.5,5.5,5.5,0,0,1,5.5,0Z"
          transform="translate(62 71)"
          stroke="rgba(0,0,0,0)"
          strokeMiterlimit="10"
          strokeWidth="1"
          fill={`url(#${gradientId})`}
        ></path>
      </g>
      <path
        id="Path_93068"
        data-name="Path 93068"
        d="M0,0H36.987s11.8,5.694,0,9.367S0,9.367,0,9.367Z"
        transform="translate(0.232 48)"
        fill="#fff"
      ></path>
      <path
        id="Path_70443"
        data-name="Path 70443"
        d="M37.127,0H5.337A5.344,5.344,0,0,0,0,5.337V53.366A5.344,5.344,0,0,0,5.337,58.7H9.991v2.925a3.165,3.165,0,0,0,3.161,3.161h1.214v4.229A.986.986,0,0,0,15.35,70h3.1a.986.986,0,0,0,.984-.984V64.789h3.6v4.227a.986.986,0,0,0,.984.984h3.1a.986.986,0,0,0,.984-.984V64.787h1.2a3.165,3.165,0,0,0,3.161-3.161V58.7h4.664a5.344,5.344,0,0,0,5.337-5.337V5.338A5.344,5.344,0,0,0,37.127,0m-11,68.03H24.989V64.785h1.134Zm-8.669-3.245V68.03H16.319V64.785ZM30.5,61.624A1.194,1.194,0,0,1,29.3,62.817H13.141a1.194,1.194,0,0,1-1.193-1.193V58.7H30.493Zm-4.9-34.574a4.37,4.37,0,1,1-8.739,0V11.317H25.6Zm-4.287,6.418a6.339,6.339,0,0,0,6.259-6.418V11.317H40.5V47.4H1.957V11.317H14.886l0,15.733q0,.08,0,.159a6.339,6.339,0,0,0,6.418,6.259m19.187,15.9,0,4a3.372,3.372,0,0,1-3.369,3.369H5.323a3.372,3.372,0,0,1-3.369-3.369v-4Zm0-44.027v4H1.959v-4A3.372,3.372,0,0,1,5.328,1.969h31.8A3.372,3.372,0,0,1,40.5,5.338"
        fill={`url(#${gradientId})`}
      ></path>
    </svg>
  );
}

export default WaterHeatersvg;
