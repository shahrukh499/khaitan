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

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <Banner/>
      <ShowcaseArea />
      <TrustSection />
      <BestSeller />
      <Brandos />
      <FullSizeSection/>
      <NewArrivalsProducts />
      <TwinBrandos />
    </>
  );
}