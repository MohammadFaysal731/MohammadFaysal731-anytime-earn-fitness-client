import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../firebase.inti";
import useTitle from "../hooks/useTitle";

const Checkout = () => {
  useTitle("Checkout")
  const { name } = useParams();
  const [user] = useAuthState(auth);
  const [massage,setMassage]=useState('');
  
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setMassage(data);
    reset();
    
  };
  return (
    <>
      <h4 className="text-center p-2">
        Welcome To <span style={{ color: "#742A59" }}>Checkout</span>
      </h4>

      <div className="container mx-auto m-3">
        <div className=" mt-3 border rounded p-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h6 style={{ color: "#742A59" }}>
              Please checkout for you :-{" "}
              <span className="text-uppercase">{name}</span>
            </h6>
            <div className="row">
              {/* Full Name  */}
              <div class="mb-3">
                <label for="full-name" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  class="form-control"
                  id="full-name"
                  value={user?.displayName}
                  placeholder="Full Name"
                  readOnly
                />
              </div>
              {/* Email Address */}
              <div class="mb-3">
                <label for="emailAddress" class="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  class="form-control"
                  id="email-address"
                  value={user?.email}
                  placeholder="Email Address"
                  readOnly
                />
              </div>
              {/* Phone Number   */}
              <div class="mb-3 ">
                <label for="phone Number" class="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  {...register("phoneNumber", { required: true })}
                  id="phone Number"
                  placeholder="Phone Number"
                  required
                />
              </div>
              {/* Address   */}
              <div class="">
                <label for="floatingTextarea2">Address</label>
                <textarea
                  class="form-control"
                  {...register("address", { required: true })}
                  placeholder="Address"
                  id="floatingTextarea2"
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="m-3 btn text-white"
              style={{ backgroundColor: "#742A59" }}
            >
              Submit
            </button>
          </form>
          <div className="">
           {massage &&<span className="text-success fw-bold">Thank you {massage.fullName} for checkout  {name} we will contact you.</span>} 
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
