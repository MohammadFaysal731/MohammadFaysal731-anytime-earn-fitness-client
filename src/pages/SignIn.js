import React from "react";
import SingInImages from "../assets/images/others/sign-in.png";
import SocialAuthentication from "../components/SocialAuthentication/SocialAuthentication";
const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailAddress = e.target.emailAddress.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const fromData = {
      emailAddress,
      password,
      confirmPassword,
    };
    console.log(fromData);
  };
  return (
    <>
      <div className="row m-2">
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
                />
                <div id="email-address" class="form-text">
                  We'll never share your email with anyone else.
                </div>
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
                />
                <div id="password" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              {/* Confirm Password   */}
              <div class="mb-3 col-12">
                <label for="confirmPassword" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  class="form-control"
                  id="confirm-password"
                  placeholder="Confirm Password"
                />
                <div id="confirmPassword" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
                 <label className="text-danger fw-bold">Forgot Password ? </label>
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
            className="img-fluid w-100 h-100 rounded-3 "
            src={SingInImages}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SignIn;
