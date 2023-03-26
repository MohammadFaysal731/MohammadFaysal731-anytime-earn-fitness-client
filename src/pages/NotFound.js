import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const NotFound = () => {
  useTitle("404 Page Not Found");
  return (
    <>
      <div className="card w-100 h-100 ">
        <div className="card-body text-center">
          <h1 className="card-title ">
            Oops! <span style={{ color: "#742A59" }}> 4</span>0
            <span style={{ color: "#742A59" }}>4 </span>
          </h1>
          <h1 className="text-uppercase">
            Page <span style={{ color: "#742A59" }}>not</span> found
          </h1>
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <span style={{ color: "#742A59" }} className="fs-5">
                Back To >
              </span>
              <Link to="/">
                <button
                  className="btn btn-link text-decoration-none fs-5"
                  style={{ color: "#742A59" }}
                >
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
