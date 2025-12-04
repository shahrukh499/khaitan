import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProductsCard from "../components/ProductsCard";
import { productsData } from "../data/productsData";
import Link from "next/link";
  import Fansvg from "./svg/Fansvg";
import Bulbsvg from "./svg/Bulbsvg";
import WaterHeatersvg from "./svg/WaterHeatersvg";
import Coolersvg from "./svg/Coolersvg";
import Ironsvg from "./svg/Ironsvg";
import Pumpsvg from "./svg/Pumpsvg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="mt-10"
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

function CustomNotificationIcon() {
  return (
    <Image
      src="/assets/icons/fan1.gif"
      alt="notification"
      width={80}
      height={80}
    />
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ComparitionTab() {
  const [value, setValue] = React.useState(0);
  const products = productsData;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          allowScrollButtonsMobile
          sx={{
            "& .MuiTabs-indicator": {
              display: "none",
            },
            "& .MuiTab-root": {
              boxShadow: "inset 4px 8px 8px #0000001a, 4px 8px 8px #0000001a",
              textTransform: "capitalize",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              minHeight: "auto",
              margin: "0 5px",
              my: "10px",
              py: { xs: "10px", sm: "10px" },
              px: { xs: "12px", sm: "10px" },
              borderRadius: 50,
              color: "#6b7280",
              fontWeight: 600,
              transition: "all 0.2s ease-in-out",
              border: "none",
              outline: "none",
              "&:focus": {
                outline: "none",
              },
            },
            "& .MuiTab-root.Mui-selected": {
              background: "linear-gradient(145deg, #c80000, #ff3333)",
              borderRadius: "100%",
              border: "none",
              outline: "none",
            },
            "& .MuiTabs-flexContainer": {
              justifyContent: {
                xs: "flex-start",
                lg: "center",
              },
            },
          }}
        >
          <Tab
            icon={
              <Fansvg isActive={value === 0} />
            }
            iconPosition="start"
            {...a11yProps(0)}
          />
          <Tab
            icon={
              <Bulbsvg isActive={value === 1} />
            }
            iconPosition="start"
            {...a11yProps(1)}
          />
          <Tab
            icon={
              <WaterHeatersvg isActive={value === 2} />
            }
            iconPosition="start"
            {...a11yProps(2)}
          />
          <Tab
            icon={
              <Coolersvg isActive={value === 3} />  
            }
            iconPosition="start"
            {...a11yProps(3)}
          />
          <Tab
            icon={
              <Ironsvg isActive={value === 4} />
            }
            iconPosition="start"
            {...a11yProps(4)}
          />
          <Tab
            icon={
              <Pumpsvg isActive={value === 5} />
            }
            iconPosition="start"
            {...a11yProps(5)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="mb-5 flex justify-between items-center">
          <h3 className="text-[26px] font-semibold">Fans</h3>
          <Link
            href="#"
            className="text-[14px] font-semibold text-[#ffffff] bg-[#c80000] px-4 py-2 rounded-full"
          >
            View All
          </Link>
        </div>
        <Splide
          options={{
            type: "loop",
            perPage: 6,
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
            breakpoints: {
              640: {
                perPage: 2,
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          {products.map((product) => (
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
          ))}
        </Splide>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="mb-5 flex justify-between items-center">
          <h3 className="text-[26px] font-semibold">Bulbs</h3>
          <Link
            href="#"
            className="text-[14px] font-semibold text-[#ffffff] bg-[#c80000] px-4 py-2 rounded-full"
          >
            View All
          </Link>
        </div>
        <Splide
          options={{
            type: "loop",
            perPage: 6,
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
            breakpoints: {
              640: {
                perPage: 2,
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          {products.map((product) => (
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
          ))}
        </Splide>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="mb-5 flex justify-between items-center">
          <h3 className="text-[26px] font-semibold">Water Tanks</h3>
          <Link
            href="#"
            className="text-[14px] font-semibold text-[#ffffff] bg-[#c80000] px-4 py-2 rounded-full"
          >
            View All
          </Link>
        </div>
        <Splide
          options={{
            type: "loop",
            perPage: 6,
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
            breakpoints: {
              640: {
                perPage: 2,
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          {products.map((product) => (
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
          ))}
        </Splide>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className="mb-5 flex justify-between items-center">
          <h3 className="text-[26px] font-semibold">Exhust Fans</h3>
          <Link
            href="#"
            className="text-[14px] font-semibold text-[#ffffff] bg-[#c80000] px-4 py-2 rounded-full"
          >
            View All
          </Link>
        </div>
        <Splide
          options={{
            type: "loop",
            perPage: 6,
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
            breakpoints: {
              640: {
                perPage: 2,
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          {products.map((product) => (
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
          ))}
        </Splide>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <div className="mb-5 flex justify-between items-center">
          <h3 className="text-[26px] font-semibold">Chimneys</h3>
          <Link
            href="#"
            className="text-[14px] font-semibold text-[#ffffff] bg-[#c80000] px-4 py-2 rounded-full"
          >
            View All
          </Link>
        </div>
        <Splide
          options={{
            type: "loop",
            perPage: 6,
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
            breakpoints: {
              640: {
                perPage: 2,
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          {products.map((product) => (
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
          ))}
        </Splide>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <div className="mb-5 flex justify-between items-center">
          <h3 className="text-[26px] font-semibold">Pumps</h3>
          <Link
            href="#"
            className="text-[14px] font-semibold text-[#ffffff] bg-linear-to-r from-[#c80000] to-[#ff3333] px-6 py-2 rounded-full"
          >
            View All
          </Link>
        </div>
        <Splide
          options={{
            type: "loop",
            perPage: 6,
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
            breakpoints: {
              640: {
                perPage: 2,
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          {products.map((product) => (
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
          ))}
        </Splide>
      </CustomTabPanel>
    </Box>
  );
}
