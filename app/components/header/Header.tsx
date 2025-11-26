"use client";
import {
  Badge,
  BadgeProps,
  IconButton,
  InputBase,
  Paper,
  styled,
  TextField,
  Theme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Navitem from "./Navitem";

const StyledBadge = styled(Badge)<BadgeProps>(
  ({ theme }: { theme: Theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: "0 4px",
      backgroundColor: "#FF3333",
      color: "#ffffff",
      fontSize: "12px",
      fontWeight: "bold",
      borderRadius: "50%",
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

function Header() {
  return (
    <header className="bg-linear-to-r from-[#300a81] via-[#0f3b79] to-[#412283]">
      <div className="container mx-auto px-4">
        <div className="py-8">
          <div className="flex items-center">
            <div className="basis-1/5 w-full">
              <Image
                src="/assets/img/khaitan.gif"
                alt="logo"
                width={200}
                height={100}
              />
            </div>
            <div className="basis-4/5 flex w-full items-center justify-end gap-x-10">
              <div className="grow max-w-[400px]">
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 400,
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </div>
              <div className="flex items-center gap-x-2">
                <svg
                  className="elementor-animation-pulse w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="508.000000pt"
                  height="512.000000pt"
                  viewBox="0 0 508.000000 512.000000"
                  fill="#FF3333"
                >
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                    <path
                      d="M2315 5114 c-421 -40 -662 -104 -990 -264 -587 -286 -1040 -780
      -1281 -1395 -48 -123 -49 -141 -11 -182 18 -20 30 -23 99 -23 71 0 79 -2 74
      -17 -22 -72 -59 -227 -77 -323 -21 -108 -22 -152 -26 -719 -2 -332 -2 -615 1
      -627 11 -43 52 -54 204 -54 l139 0 5 -132 c5 -151 19 -196 84 -267 31 -36 98
      -81 119 -81 3 0 5 254 5 565 0 468 -2 565 -13 565 -20 0 -88 -51 -121 -91 -56
      -65 -69 -112 -74 -257 l-5 -132 -93 0 -94 0 0 413 c1 599 16 769 92 1037 l33
      115 115 5 c63 3 121 9 128 14 8 4 29 41 47 82 88 193 240 409 400 569 281 281
      625 463 1033 546 149 30 589 39 762 15 666 -93 1226 -498 1520 -1102 28 -57
      59 -108 70 -114 10 -5 66 -10 123 -10 l105 0 10 -27 c38 -101 75 -257 96 -411
      13 -90 16 -214 16 -622 l0 -510 -89 0 -88 0 -6 128 c-6 149 -21 201 -79 267
      -34 38 -101 85 -123 85 -3 0 -5 -254 -5 -565 0 -311 2 -565 5 -565 22 0 89 47
      123 85 58 66 73 118 79 268 l6 127 139 0 c152 0 193 11 204 53 3 13 4 291 1
      618 -3 505 -6 610 -21 698 -14 87 -54 255 -82 349 -6 22 -5 22 73 22 72 0 82
      2 103 25 38 40 30 78 -52 247 -157 324 -318 554 -558 802 -413 426 -930 692
      -1500 772 -99 14 -536 27 -625 18z"
                    ></path>
                    <path
                      d="M1790 3711 c-39 -38 -39 -74 -1 -112 l29 -29 211 0 211 0 0 -135 0
      -135 -205 0 c-217 0 -245 -5 -264 -47 -7 -15 -11 -109 -11 -263 0 -238 0 -239
      24 -267 l24 -28 244 -3 c265 -3 300 0 329 29 30 30 26 92 -7 118 -25 20 -39
      21 -235 21 l-209 0 0 134 0 135 216 3 c213 3 216 3 235 27 18 21 19 42 19 276
      0 234 -1 255 -19 276 l-19 24 -271 3 -272 3 -29 -30z"
                    ></path>
                    <path
                      d="M2725 3730 c-49 -19 -50 -26 -50 -311 l0 -267 24 -26 24 -26 214 0
      213 0 0 -174 c0 -170 1 -176 24 -202 30 -36 86 -39 119 -6 l22 23 3 470 3 470
      -30 29 c-38 39 -74 39 -112 1 l-29 -29 0 -211 0 -212 -152 3 -153 3 -5 220
      c-4 121 -7 221 -8 222 -1 1 -15 9 -32 18 -32 17 -45 18 -75 5z"
                    ></path>
                    <path
                      d="M930 2473 c-37 -14 -74 -49 -91 -87 -18 -39 -19 -81 -19 -791 0 -710
      1 -752 19 -791 10 -23 34 -52 52 -65 34 -24 34 -24 352 -27 l319 -3 43 25 c85
      50 80 -1 80 866 l0 765 -24 38 c-12 21 -40 46 -62 57 -36 19 -59 20 -346 19
      -169 0 -315 -3 -323 -6z"
                    ></path>
                    <path
                      d="M3481 2463 c-18 -9 -45 -34 -60 -57 l-26 -40 0 -770 0 -771 24 -38
      c38 -61 81 -77 211 -77 l110 0 0 -67 c-1 -138 -42 -237 -139 -333 -71 -70
      -143 -111 -229 -129 -34 -7 -206 -11 -488 -11 l-435 0 -24 -25 c-31 -30 -33
      -83 -6 -116 l19 -24 464 0 c517 0 518 0 658 68 149 72 271 217 322 380 10 34
      22 106 25 159 l6 96 121 4 c109 3 124 5 155 27 18 13 42 42 52 65 18 39 19 81
      19 791 0 710 -1 752 -19 791 -10 23 -34 52 -52 65 -34 24 -34 24 -354 26 -282
      3 -324 1 -354 -14z"
                    ></path>
                  </g>
                </svg>
                <div>
                  <p className="font-semibold text-[13px] text-white">
                    Hotline:{" "}
                    <Link href="#" className="text-[#FF3333]">
                      +32526556445
                    </Link>
                  </p>
                  <p className="font-semibold text-[13px] text-white">
                    Email: <Link href="#">info@khaitan.com</Link>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <FavoriteBorderIcon sx={{ color: "#FFFFFF" }} />
                  </StyledBadge>
                </IconButton>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartOutlinedIcon sx={{ color: "#FFFFFF" }} />
                  </StyledBadge>
                </IconButton>
                <IconButton aria-label="cart">
                  <PermIdentityOutlinedIcon sx={{ color: "#FFFFFF" }} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white px-4 rounded-t-lg shadow-lg flex items-center justify-between">
          <div>
            <Navitem />
          </div>
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-1">
              <LocalShippingOutlinedIcon sx={{ color: "#FF3333" }} />
              <Link href="#" className="text-[14px] font-semibold">
                Track Your Order
              </Link>
            </div>
            <div className="flex items-center gap-x-1">
              <LocationOnOutlinedIcon sx={{ color: "#FF3333" }} />
              <Link href="#" className="text-[14px] font-semibold">
                Store Locator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
