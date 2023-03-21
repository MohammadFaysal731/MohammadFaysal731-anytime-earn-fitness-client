import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const SocialAuthentication = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px", backgroundColor: "#742A59" }}
          className="w-50"
        ></div>
        <p className="mt-2 px-2 fw-bold" style={{ color: "#742A59" }}>
          OR
        </p>
        <div
          style={{ height: "1px", backgroundColor: "#742A59" }}
          className="w-50"
        ></div>
      </div>
      <button className="btn border ">
        Continue With <FcGoogle className="fs-5 mx-2" />
      </button>
      <button className="btn border mx-2">
        Continue With
        <FaFacebookSquare className="fs-5 mx-2" style={{ color: "#1877F2" }} />
      </button>
    </>
  );
};

export default SocialAuthentication;
