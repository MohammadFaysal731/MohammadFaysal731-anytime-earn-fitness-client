import React from 'react';
import About from '../About';
import Trainers from '../Dashboard/Trainers/Trainers';
import Banner from './Banner';
import OnlineShop from './OnlineShop/OnlineShop';
import Services from './Services/Services';
import WeeklyClassSchedule from './WeeklyClassSchedule/WeeklyClassSchedule';

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <Trainers />
      <WeeklyClassSchedule/>
      <OnlineShop/>
    </>
  );
};

export default Home;