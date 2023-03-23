import React, { useEffect } from "react";
import {
  useSignInWithFacebook, useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.inti";
import Loading from "../Loading";
const SocialAuthentication = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    let errorElement;
    useEffect(() => {
      if (googleUser || facebookUser) {
        navigate(from ,{replace:true});
      }
    }, [googleUser, facebookUser, navigate,from]);

  if (googleLoading || facebookLoading) {
    return <Loading />;
  }
  if (googleError || facebookError) {
    errorElement = (
      <p className="text-danger">
        <small>{googleError?.message || facebookError?.message}</small>
      </p>
    );
  }

  return (
    <div>
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
      {errorElement}
      <div className="">
        <button className="btn border " onClick={() => signInWithGoogle()}>
          Continue With <FcGoogle className="fs-5 mx-2" />
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className="btn border mx-2"
        >
          Continue With
          <FaFacebookSquare
            className="fs-5 mx-2"
            style={{ color: "#1877F2" }}
          />
        </button>
      </div>
    </div>
  );
};

export default SocialAuthentication;
