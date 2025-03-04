import React from 'react';
import Banner from '../Components/Banner';
import FaceCareProducts from '../Components/FaceCareProducts';
import LightningSale from '../Components/LightningSale';
import WinterEssentials from '../Components/WinterEssentials';
import SkinCare from '../Components/SkinCare';
import HairCare from '../Components/HairCare';
import MakeUp from '../Components/MakeUp';
import Fragrances from '../Components/Fragrances';
import BabyCare from '../Components/BabyCare';
import NewLaunches from '../Components/NewLaunches';
import GoodnessPromise from '../Components/GoodnessPromise';
import SuperSafeStandards from '../Components/SuperSafeStandards';
import WhatCustomerSays from '../Components/WhatCustomerSays';
import Footer from '../Components/Footer';
import About from '../Components/About';

const Home = () => {
  return (
    <>
      <Banner />
      {/* <FaceCareProducts />
      <LightningSale/>
      <WinterEssentials />
      <SkinCare />
      <HairCare />
      <BabyCare />
      <MakeUp />
      <Fragrances />
      <NewLaunches /> */}
      <GoodnessPromise />
      <SuperSafeStandards />
      <WhatCustomerSays />
      <Footer />
      <About/>
    </>
  )
}

export default Home