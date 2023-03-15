import React from 'react';
import About from '../About';
import Trainers from '../Institution/Trainers/Trainers';
import Banner from './Banner';
import Services from './Services/Services';

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <Trainers />
    </>
  );
};

export default Home;