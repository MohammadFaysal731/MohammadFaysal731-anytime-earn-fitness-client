import React, { useState } from "react";
import SingUpImages from "../assets/images/others/sing-up.png";
const SingUp = () => {
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const emailAddress = e.target.emailAddress.value;
    const phoneNumber = e.target.phoneNumber.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const fromData ={
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      password,
      confirmPassword,

    }
    console.log(fromData);
  };
  return (
    <>
      <div className="row m-2">
        <div className="col-12 col-md-6 mt-3 border rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2 style={{ color: "#742A59" }}>Sing Up</h2>
            <div className="row">
              {/* First Name  */}
              <div class="mb-3 col-6">
                <label for="firstName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  class="form-control"
                  id="first-name"
                  placeholder="First Name"
                />
                <div id="first-name" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              {/* Last Name  */}
              <div class="mb-3 col-6">
                <label for="lastName" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  class="form-control"
                  id="last-name"
                  placeholder="Last Name"
                />
                <div id="last-name" class="form-text">
                  We'll never share your email with anyone else.
                </div>
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
                />
                <div id="email-address" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              {/* Phone Number   */}
              <div class="mb-3 col-6">
                <label for="phoneNumber" class="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phoneNumber"
                  class="form-control"
                  id="phone-number"
                  placeholder="Phone Number"
                />
                <div id="phone-number" class="form-text">
                  We'll never share your email with anyone else.
                </div>
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
                />
                <div id="password" class="form-text">
                  We'll never share your email with anyone else.
                </div>
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
                />
                <div id="confirmPassword" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
            </div>
            {/* Check  */}
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="check"
              />
              <label class="form-check-label" for="exampleCheck1">
                Agree to terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="m-3 btn text-white"
              style={{ backgroundColor: "#742A59" }}
            >
              Sing Up
            </button>
          </form>
        </div>
        <div className="col-12 col-md-6 mt-3">
          <img
            className="img-fluid w-100 h-100 rounded-3 "
            src={SingUpImages}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SingUp;
