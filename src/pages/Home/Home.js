import React from 'react';
import Trainers from '../Institution/Trainers/Trainers';
import Banner from './Banner';
import Services from './Services/Services';

const Home = () => {
  return (
    <>
       <Banner/>
      <Services/>
      <Trainers/>
    </>
  );
};

export default Home;