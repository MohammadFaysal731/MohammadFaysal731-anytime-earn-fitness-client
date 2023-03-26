
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import Me from "../assets/images/others/contact.jpg";
import useTitle from "../hooks/useTitle";

const Contact = () => {
  useTitle("Contact")
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cvnifo3",
        "template_oy86bs8",
        form.current,
        "pB-OjZw0SnNtzlaKV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
     e.target.reset(); 
  };
  return (
    <div style={{ background: "#742A59" }} className="border p-5">
      <div className="container">
        <h2 className="text-center text-white mb-5 mt-0">
          We are here for help you! To Shape Your Body.
        </h2>
        <div className="row g-3">
          <div className="col-12 col-md-6 text-white">
            <Form
              ref={form}
              onSubmit={sendEmail}
              className="mb-3 p-3 rounded-3 h-100 w-100"
              style={{ border: "2px solid white" }}
            >
              <h5 className="">Leave Us Your Info</h5>
              {/* full name  */}
              <Form.Group className="mb-3">
                <Form.Label className="">Full Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" name="name" />
              </Form.Group>
              {/* email address */}
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email"
                />
              </Form.Group>
              {/* comment */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Comment"
                  rows={3}
                  name="message"
                />
              </Form.Group>
              <button
                className="btn"
                type="submit"
                style={{ background: "#9F2FF0", color: "white" }}
              >
                Submit
              </button>
            </Form>
          </div>
          <div className="col-12 col-md-6">
            <img src={Me} alt="" className="img-fluid h-100 rounded-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
