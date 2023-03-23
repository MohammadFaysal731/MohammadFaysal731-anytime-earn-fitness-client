import React, { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
  const emailRef =useRef('');

  const passwordRef =useRef('');

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
  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password =passwordRef.current.value;
      signInWithEmailAndPassword(email, password);
  };
// forget password 
  const handleForgetPassword =async ()=>{
    const email = emailRef.current.value;
    if(email){
     await sendPasswordResetEmail(email);
     toast.success('email was please check your mail')
    }
    else{
      toast.error(`please enter email`)
    }
    console.log(email);
  }
  return (
    <>
      <div className="row m-3 ">
        <div className="col-12 col-md-6 mt-3 border rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2 style={{ color: "#742A59" }}>Sing In</h2>
            <div className="row">
              {/* Email Address */}
              <div class="mb-3 col-12">
                <label for="email" class="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  ref={emailRef}
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
                  ref={passwordRef}
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>

              {errorElement}
            </div>
            <button
              type="submit"
              className="m-3 btn text-white"
              style={{ backgroundColor: "#742A59" }}
            >
              Sing In
            </button>
          </form>
          <div className=" d-flex justify-content-end">
            <button
              onClick={handleForgetPassword}
              className="btn btn-link text-decoration-none text-danger fw-bold"
            >
              Forget Password ?
            </button>
          </div>
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
