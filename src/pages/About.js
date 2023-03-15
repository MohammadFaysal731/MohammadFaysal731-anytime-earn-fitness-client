import React, { useState } from 'react';
import { GiWeight, GiWeightLiftingUp } from "react-icons/gi";
import { AiFillPlusCircle } from "react-icons/ai";
import AboutImage from "../assets/images/others/about.png";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const About = () => {
  const [counterOn, setCounterOn]=useState(false);
  return (
    <>
      <div
        className="card mb-3 p-3 rounded-0"
        style={{ background: "#742A59", color: "white" }}
      >
        <div className="row g-3">
          <div className="col-md-6">
            <img src={AboutImage} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="">
              <h3 className="text-center m-4" style={{ color: "white" }}>
                About GYM
              </h3>
              <div>
                <h3>We Can Give A Shape Of Your Body Here!</h3>
                <h6 className="text-justify">
                  Starting a fitness journey can be difficult and scary. If you
                  are at this point, ready to make some serious lifestyle
                  changes, then come to our gym. We help you transform your body
                  into a beautiful shape।
                </h6>
              </div>
              <div className="row">
                <div className="col-6 col-md-6">
                  <span className="fs-1">
                    <GiWeightLiftingUp />
                  </span>
                  <span className="fs-4">
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      {counterOn && <CountUp start={0} end={1500} duration={3} delay={0} />
                    }&nbsp;<AiFillPlusCircle />
                      
                    </ScrollTrigger>
                  </span>
                  <h5>TRAINED PEOPLE</h5>
                </div>
                <div className="col-6 col-md-6">
                  <span className="fs-1">
                    <GiWeight />
                  </span>
                  <span className="fs-4">
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                    {counterOn &&<CountUp start={0} end={1200} duration={3} delay={0} />}
                      &nbsp;
                      <AiFillPlusCircle />
                    </ScrollTrigger>
                  </span>
                  <h5 className="text-nowrap">MODERN EQUIPMENT</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;