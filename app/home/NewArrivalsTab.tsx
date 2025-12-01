import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

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
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NewArrivalsTab() {
  const [value, setValue] = React.useState(0);

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
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#FF3333",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#FF3333",
            },
          }}
        >
          <Tab
            label="Living Room"
            {...a11yProps(0)}
            sx={{ textTransform: "capitalize" }}
          />
          <Tab
            label="Bathroom"
            {...a11yProps(1)}
            sx={{ textTransform: "capitalize" }}
          />
          <Tab
            label="Kitchen"
            {...a11yProps(2)}
            sx={{ textTransform: "capitalize" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div>
          <div className="flex flex-wrap gap-y-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                className="w-full md:w-[50%] lg:w-[33.33%] px-1.5"
                key={index}
              >
                <div className="flex items-center gap-x-1.5 shadow rounded-lg bg-[#ffffff] p-1">
                  <div>
                    <Link href="#">
                      <Image
                        src={`/assets/img/1-36.webp`}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                  <div className="max-w-[270px] w-full">
                    <Link
                      href="#"
                      className="text-[14px] font-semibold hover:text-[#e13032]"
                    >
                      Nova A12 Factory Unlocked 4G/LTE Smartphone
                    </Link>
                  </div>
                  <div>
                    <span className="font-semibold">156.00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div>
          <div className="flex flex-wrap gap-y-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                className="w-full md:w-[50%] lg:w-[33.33%] px-1.5"
                key={index}
              >
                <div className="flex items-center gap-x-1.5 shadow rounded-lg bg-[#ffffff] p-1">
                  <div>
                    <Link href="#">
                      <Image
                        src={`/assets/img/1-36.webp`}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                  <div className="max-w-[270px] w-full">
                    <Link
                      href="#"
                      className="text-[14px] font-semibold hover:text-[#e13032]"
                    >
                      Nova A12 Factory Unlocked 4G/LTE Smartphone
                    </Link>
                  </div>
                  <div>
                    <span className="font-semibold">156.00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div>
          <div className="flex flex-wrap gap-y-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                className="w-full md:w-[50%] lg:w-[33.33%] px-1.5"
                key={index}
              >
                <div className="flex items-center gap-x-1.5 shadow rounded-lg bg-[#ffffff] p-1">
                  <div>
                    <Link href="#">
                      <Image
                        src={`/assets/img/1-36.webp`}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                  <div className="max-w-[270px] w-full">
                    <Link
                      href="#"
                      className="text-[14px] font-semibold hover:text-[#e13032]"
                    >
                      Nova A12 Factory Unlocked 4G/LTE Smartphone
                    </Link>
                  </div>
                  <div>
                    <span className="font-semibold">156.00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
