'use client';

import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import ShowcaseArea from './home/ShowcaseArea';
import Brandos from './home/Brandos';
import TrustSection from './home/TrustSection';
import FullSizeSection from './home/FullSizeSection';
import NewArrivalsProducts from './home/NewArrivalsProducts';
import Banner from './home/Banner';
import BestSeller from './home/BestSeller';
import TwinBrandos from './home/TwinBrandos';
import HotspotsProducts from './home/HotspotsProducts';
import CollageSection from './home/CollageSection';
import DrivingKhaitan from './home/DrivingKhaitan';
import SellingFact from './home/SellingFact';
import ContactInfo from './home/ContactInfo';
import ComparitionSection from './home/ComparitionSection';
import NearestStore from './home/NearestStore';
import BlogSection from './home/BlogSection';

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <Banner/>
      <ShowcaseArea />
      <TrustSection />
      <ComparitionSection />
      {/* <BestSeller /> */}
      <HotspotsProducts />
      <CollageSection/>
      <Brandos />
      {/* <FullSizeSection/> */}
      {/* <NewArrivalsProducts /> */}
      {/* <TwinBrandos /> */}
      <DrivingKhaitan/>
      <BlogSection/>
      <SellingFact/>
      <ContactInfo/>
      <NearestStore/>
    </>
  );
}