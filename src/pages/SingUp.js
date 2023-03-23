
import React, { useEffect } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SingUpImages from "../assets/images/others/sing-up.png";
import Loading from "../components/Loading";
import SocialAuthentication from "../components/SocialAuthentication/SocialAuthentication";
import auth from "../firebase.inti";
const SingUp = () => {
  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
    const navigate =useNavigate();
   
    let errorElement;
   
   
    useEffect(() => {
      if (emailUser) {
        navigate("/checkout");
      }
    }, [emailUser, navigate,]);
    
   if (emailLoading || updating) {
     return <Loading />;
   }
   if (emailError || updatingError) {
     errorElement = (
       <p>
         <small className="text-danger">
           {emailError.message || updatingError.message}
         </small>
       </p>
     );
   }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target.fullName.value;
    const emailAddress = e.target.emailAddress.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
  if(password.length ===confirmPassword.length){
   await createUserWithEmailAndPassword(emailAddress, password);
   toast(`success fully create this user ${emailAddress}.thank you`);
   const success = await updateProfile({ displayName });
   if(success){
   toast.success(`${displayName} profile is update`);
   }
  }
  else{
    toast.error(`sorry, password not match to confirmPassword. please check`)
  }

  };
  
  return (
    <>
      <div className="row m-3">
        <div className="col-12 col-md-6 mt-3 border rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2 style={{ color: "#742A59" }}>Sing Up</h2>
            <div className="row">
              {/*  Name  */}
              <div class="mb-3 col-6">
                <label for="full-name" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  class="form-control"
                  id="full-name"
                  placeholder="Full Name"
                  required
                />
              </div>
              {/* Email Address */}
              <div class="mb-3 col-6">
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
              <div class="mb-3 col-6">
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
              {/* Confirm Password   */}
              <div class="mb-3 col-6">
                <label for="confirmPassword" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  class="form-control"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>
            {errorElement}
            <button
              type="submit"
              className="m-3 btn text-white"
              style={{ backgroundColor: "#742A59" }}
            >
              Sing Up
            </button>
          </form>
          {/* toggle to sing-in */}
            <p className="text-nowrap fw-bold">
              Do yor have account ?
              <Link
                to="/sign-in"
                className="text-decoration-none "
                style={{ color: "#742A59" }}
              >
                &nbsp; Please sign in
              </Link>
            </p>
          {/* socialAuthentication */}
          <SocialAuthentication />
        </div>
        <div className="col-12 col-md-6 mt-3">
          <img
            className="img-fluid w-100 h-100 border rounded-3 "
            src={SingUpImages}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SingUp;
