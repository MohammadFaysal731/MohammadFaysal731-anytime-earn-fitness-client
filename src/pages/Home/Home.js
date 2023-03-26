import React from 'react';
import useTitle from '../../hooks/useTitle';
import Trainers from '../Trainers/Trainers';
import AboutSection from './AboutSection';
import Banner from './Banner';
import OnlineShop from './OnlineShop';
import Services from './Services/Services';
import WeeklyClassSchedule from './WeeklyClassSchedule/WeeklyClassSchedule';

const Home = () => {
  useTitle("Home")
  return (
    <>
      <Banner />
      <Services />
      <AboutSection/>
      <Trainers />
      <WeeklyClassSchedule/>
      <OnlineShop/>
    </>
  );
};

export default Home;