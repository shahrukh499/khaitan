import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProductsCard from "../components/ProductsCard";
import { productsData } from "../data/productsData";

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
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          allowScrollButtonsMobile
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#FF3333",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#FF3333",
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
              <Image
                className="p-3"
                src="/assets/icons/fan1.png"
                alt="notification"
                width={80}
                height={80}
              />
            }
            iconPosition="start"
            {...a11yProps(0)}
          />
          <Tab
            icon={
              <Image
                className="p-3"
                src="/assets/icons/bulb1.png"
                alt="notification"
                width={80}
                height={80}
              />
            }
            iconPosition="start"
            {...a11yProps(1)}
          />
          <Tab
            icon={
              <Image
                className="p-3"
                src="/assets/icons/water-tank.png"
                alt="notification"
                width={80}
                height={80}
              />
            }
            iconPosition="start"
            {...a11yProps(2)}
          />
          <Tab
            icon={
              <Image
                className="p-3"
                src="/assets/icons/exhust.png"
                alt="notification"
                width={80}
                height={80}
              />
            }
            iconPosition="start"
            {...a11yProps(3)}
          />
          <Tab
            icon={
              <Image
                className="p-3"
                src="/assets/icons/chimney.png"
                alt="notification"
                width={80}
                height={80}
              />
            }
            iconPosition="start"
            {...a11yProps(4)}
          />
          <Tab
            icon={
              <Image
                className="p-3"
                src="/assets/icons/pump.png"
                alt="notification"
                width={80}
                height={80}
              />
            }
            iconPosition="start"
            {...a11yProps(5)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
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
