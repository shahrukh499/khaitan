"use client";
import * as React from "react";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

// Types
interface Hotspot {
  id: string;
  x: number; // Percentage from left (0-100)
  y: number; // Percentage from top (0-100)
  product: {
    title: string;
    price: string;
    image?: string;
    link: string;
  };
}

interface RoomData {
  image: string;
  alt: string;
  hotspots: Hotspot[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Tab Panel Component
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`hotspot-tabpanel-${index}`}
      aria-labelledby={`hotspot-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ mt: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `hotspot-tab-${index}`,
    "aria-controls": `hotspot-tabpanel-${index}`,
  };
}

// Hotspot Component
interface HotspotMarkerProps {
  hotspot: Hotspot;
  onMouseEnter: (hotspot: Hotspot, event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave: () => void;
}

function HotspotMarker({ hotspot, onMouseEnter, onMouseLeave }: HotspotMarkerProps) {
  return (
    <button
      className="absolute w-6 h-6 rounded-full bg-[#FF3333] border-2 border-white shadow-lg transition-all duration-300 hover:scale-125 hover:bg-[#ff5555] focus:outline-none focus:ring-2 focus:ring-[#FF3333] focus:ring-offset-2 z-10"
      style={{
        left: `${hotspot.x}%`,
        top: `${hotspot.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={(e) => onMouseEnter(hotspot, e)}
      onMouseLeave={onMouseLeave}
      aria-label={`View ${hotspot.product.title}`}
    >
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-2 h-2 bg-white rounded-full"></span>
      </span>
      <span className="absolute inset-0 animate-ping">
        <span className="w-full h-full bg-[#FF3333] rounded-full opacity-75"></span>
      </span>
    </button>
  );
}

// Product Hover Card Component
interface ProductHoverCardProps {
  hotspot: Hotspot | null;
  position: { x: number; y: number } | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function ProductHoverCard({ hotspot, position, onMouseEnter, onMouseLeave }: ProductHoverCardProps) {
  if (!hotspot || !position) return null;

  return (
    <Card
      className="absolute z-50 min-w-[240px] max-w-[280px] shadow-2xl transition-all duration-200"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(0%, -50%)",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        borderRadius: 2,
        pointerEvents: "auto",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
        {hotspot.product.image && (
          <Box sx={{ mb: 1.5, borderRadius: 1, overflow: "hidden" }}>
            <Image
              src={hotspot.product.image}
              alt={hotspot.product.title}
              width={240}
              height={180}
              className="w-full h-auto object-cover"
            />
          </Box>
        )}
        <Typography
          variant="body2"
          component="div"
          sx={{
            fontWeight: 600,
            fontSize: "0.875rem",
            mb: 1,
            lineHeight: 1.4,
            color: "#1f2937",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {hotspot.product.title}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "#FF3333",
            fontWeight: 700,
            fontSize: "1.125rem",
            mb: 1.5,
          }}
        >
          ${hotspot.product.price}
        </Typography>
        <Link
          href={hotspot.product.link}
          className="text-[#FF3333] text-sm font-semibold hover:underline inline-flex items-center"
        >
          View More →
        </Link>
      </CardContent>
    </Card>
  );
}

// Main Component
function HotspotsProducts() {
  const [value, setValue] = useState(0);
  const [hoveredHotspot, setHoveredHotspot] = useState<Hotspot | null>(null);
  const [cardPosition, setCardPosition] = useState<{ x: number; y: number } | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const hideTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const setContainerRef = React.useCallback((node: HTMLDivElement | null) => {
    containerRef.current = node;
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setHoveredHotspot(null);
    setCardPosition(null);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const handleHotspotEnter = (hotspot: Hotspot, event: React.MouseEvent<HTMLButtonElement>) => {
    // Clear any pending hide timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }

    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const buttonRect = event.currentTarget.getBoundingClientRect();

    // Calculate position relative to container
    const x = buttonRect.left - containerRect.left + buttonRect.width / 2;
    const y = buttonRect.top - containerRect.top;

    setCardPosition({ x, y });
    setHoveredHotspot(hotspot);
  };

  const handleHotspotLeave = () => {
    // Add a small delay before hiding to allow moving to the card
    hideTimeoutRef.current = setTimeout(() => {
      setHoveredHotspot(null);
      setCardPosition(null);
      hideTimeoutRef.current = null;
    }, 100);
  };

  const handleCardEnter = () => {
    // Clear hide timeout when entering card
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const handleCardLeave = () => {
    // Hide card when leaving
    setHoveredHotspot(null);
    setCardPosition(null);
  };

  // Room data - easily customizable
  const roomData: Record<string, RoomData> = {
    kitchen: {
      image: "/assets/img/Livingroom_1660x-compressed_1660x.jpg", // Replace with actual kitchen image
      alt: "Kitchen interior",
      hotspots: [
        {
          id: "kitchen-1",
          x: 30,
          y: 40,
          product: {
            title: "Modern Ceiling Fan with Remote Control",
            price: "129.99",
            image: "/assets/img/1-36.webp",
            link: "/products/ceiling-fan-1",
          },
        },
        {
          id: "kitchen-2",
          x: 70,
          y: 35,
          product: {
            title: "Energy Efficient LED Light Fixture",
            price: "79.99",
            image: "/assets/img/1-36.webp",
            link: "/products/led-light-1",
          },
        },
        {
          id: "kitchen-3",
          x: 50,
          y: 60,
          product: {
            title: "Premium Range Hood Extractor",
            price: "349.99",
            link: "/products/range-hood-1",
          },
        },
      ],
    },
    bathroom: {
      image: "/assets/img/Livingroom_1660x-compressed_1660x.jpg", // Replace with actual bathroom image
      alt: "Bathroom interior",
      hotspots: [
        {
          id: "bathroom-1",
          x: 40,
          y: 30,
          product: {
            title: "Waterproof Bathroom Exhaust Fan",
            price: "89.99",
            image: "/assets/img/1-36.webp",
            link: "/products/bathroom-fan-1",
          },
        },
        {
          id: "bathroom-2",
          x: 65,
          y: 50,
          product: {
            title: "Modern Vanity Mirror Light",
            price: "149.99",
            image: "/assets/img/1-36.webp",
            link: "/products/mirror-light-1",
          },
        },
      ],
    },
    bedroom: {
      image: "/assets/img/Livingroom_1660x-compressed_1660x.jpg", // Replace with actual bedroom image
      alt: "Bedroom interior",
      hotspots: [
        {
          id: "bedroom-1",
          x: 52,
          y: 17,
          product: {
            title: "Quiet Bedroom Ceiling Fan",
            price: "159.99",
            image: "/assets/img/1-36.webp",
            link: "/products/bedroom-fan-1",
          },
        },
        {
          id: "bedroom-2",
          x: 70,
          y: 45,
          product: {
            title: "Elegant Table Lamp with USB Charging",
            price: "59.99",
            image: "/assets/img/1-36.webp",
            link: "/products/table-lamp-1",
          },
        },
        {
          id: "bedroom-3",
          x: 55,
          y: 65,
          product: {
            title: "Smart Bedside Reading Light",
            price: "89.99",
            link: "/products/reading-light-1",
          },
        },
      ],
    },
  };

  const tabs = [
    { label: "Kitchen", key: "kitchen" },
    { label: "Bathroom", key: "bathroom" },
    { label: "Bedroom", key: "bedroom" },
  ];

  const currentRoom = roomData[tabs[value].key];

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Box 
          sx={{ 
            display: "flex",
            justifyContent: "center",
            py: 2,
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              backgroundColor: "#f3f4f6",
              borderRadius: 50,
              p: 0.5,
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="room tabs with hotspots"
              sx={{
                minHeight: "auto",
                "& .MuiTabs-indicator": {
                  display: "none",
                },
                "& .MuiTabs-flexContainer": {
                  gap: 0.5,
                },
              }}
            >
              {tabs.map((tab, index) => (
                <Tab
                  key={tab.key}
                  label={tab.label}
                  {...a11yProps(index)}
                  sx={{
                    textTransform: "capitalize",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    minHeight: "auto",
                    py: 1.5,
                    px: { xs: 2, sm: 3 },
                    borderRadius: 50,
                    color: "#6b7280",
                    fontWeight: 600,
                    transition: "all 0.2s ease-in-out",
                    "&.Mui-selected": {
                      color: "#ffffff",
                      backgroundColor: "#FF3333",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(255, 51, 51, 0.1)",
                    },
                    "&.Mui-selected:hover": {
                      backgroundColor: "#ff5555",
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </Box>

        {tabs.map((tab, index) => (
          <CustomTabPanel key={tab.key} value={value} index={index}>
            <Box
              ref={index === value ? setContainerRef : null}
              sx={{
                position: "relative",
                width: "100%",
                minHeight: { xs: "400px", sm: "500px", md: "600px", lg: "700px" },
                borderRadius: { xs: 0, sm: 2 },
                backgroundColor: "#f3f4f6",
              }}
            >
              {/* Background Image */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                }}
              >
                <Image
                  src={roomData[tab.key].image}
                  alt={roomData[tab.key].alt}
                  fill
                  className="object-contain"
                  priority={index === 0}
                  sizes="100vw"
                />
              </Box>

              {/* Hotspots */}
              {roomData[tab.key].hotspots.map((hotspot) => (
                <HotspotMarker
                  key={hotspot.id}
                  hotspot={hotspot}
                  onMouseEnter={handleHotspotEnter}
                  onMouseLeave={handleHotspotLeave}
                />
              ))}

              {/* Hover Card */}
              <ProductHoverCard 
                hotspot={hoveredHotspot} 
                position={cardPosition}
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
              />
            </Box>
          </CustomTabPanel>
        ))}
      </Box>
    </section>
  );
}

export default HotspotsProducts;
