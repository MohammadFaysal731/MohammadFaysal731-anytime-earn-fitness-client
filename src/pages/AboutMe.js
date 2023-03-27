import React from 'react';
import { FcAbout } from "react-icons/fc";
import myself from "../assets/images/others/myself.png";
import useTitle from '../hooks/useTitle';
const AboutMe = () => {
  useTitle("About Me")
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-2">
          <FcAbout></FcAbout>Welcome <span style={{ color: "#742A59" }}>To</span> My <span style={{ color: "#742A59" }}>
            World <FcAbout></FcAbout>
          </span>
          
        </h1>
        <div className=" row mt-5 shadow-lg p-3 mb-5 rounded">
          <div className="col-12 col-md-6 col-lg-9">
            <h1>
              Mohammad <span style={{ color: "#742A59" }}> Faysal </span>
            </h1>
            <h4>
              My <span style={{ color: "#742A59" }}> Goal: </span>
            </h4>
            <blockquote>
              I am a student of Programing Hero.My Goal is can finished my
              crouse on time an submit my all assignment.and get reword like
              ACC.When I got ACC is batter for me.Now I need to do hard work and
              keep practice then I reach my goal.Thanks For Visited My About Me
              pages.
            </blockquote>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <img
              className="rounded-circle"
              src={myself}
              alt="Mohammad Faysal"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;