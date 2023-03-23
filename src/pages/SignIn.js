import React from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import SingInImages from "../assets/images/others/sign-in.png";
import Loading from "../components/Loading";
import SocialAuthentication from "../components/SocialAuthentication/SocialAuthentication";
import auth from "../firebase.inti";
const SignIn = () => {
const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
  useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const navigate =useNavigate();
  let errorElement;
  if (emailLoading || sending) {
    return <Loading />;
  }
  if (emailError || error) {
    errorElement = (
      <p>
        <small className="text-danger">
          {emailError?.message || sending?.message}
        </small>
      </p>
    );
  }
  if(emailUser){
    navigate("/shop")
  }
  const handleSubmit = (e) => {
    const emailAddress = e.target.emailAddress.value;
    const password = e.target.password.value;
   

    const signData = {
      emailAddress,
      password,
    
    };
    
     signInWithEmailAndPassword(emailAddress,password) 
    
    
    console.log(signData);
  };
  return (
    <>
      <div className="row m-3 ">
        <div className="col-12 col-md-6 mt-3 border rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2 style={{ color: "#742A59" }}>Sing In</h2>
            <div className="row">
              {/* Email Address */}
              <div class="mb-3 col-12">
                <label for="emailAddress" class="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  class="form-control"
                  id="email-address"
                  placeholder="Email Address"
                  required
                />
              </div>
              {/* Password   */}
              <div class="mb-3 col-12">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>

              {errorElement}
              <div
                onClick={()=>sendPasswordResetEmail()}
                className="text-danger fw-bold d-flex justify-content-end"
              >
                Forgot Password ?
              </div>
            </div>
            <button
              type="submit"
              className="m-3 btn text-white"
              style={{ backgroundColor: "#742A59" }}
            >
              Sing In
            </button>
          </form>

          {/* socialAuthentication */}
          <SocialAuthentication />
        </div>
        <div className="col-12 col-md-6 mt-3">
          <img
            className="img-fluid w-100 h-100 border rounded-3 "
            src={SingInImages}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SignIn;
