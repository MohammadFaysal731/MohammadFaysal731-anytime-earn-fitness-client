import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import Me from "../assets/images/others/contact.jpg";
const Contact = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const classRef = useRef('');
  const commentRef = useRef('');

  const handelSubmit = (e) =>{
    e.preventDefault();
    const fullName = nameRef.current.value;
    const email = emailRef.current.value;
    const youClass = classRef.current.value;
    const comment =commentRef.current.value;
    const data={
      fullName,
      email,
      youClass,
      comment
      
    }
    e.target.reset();
     console.log(data);
     
  }
  return (
    <div style={{ background: "#742A59" }} className="border p-5">
      <div className="container">
        <h2 className="text-center text-white mb-5 mt-0">
          We are here for help you! To Shape Your Body.
        </h2>
        <div className="row g-3">
          <div className="col-12 col-md-6 text-white">
            <Form
              onSubmit={handelSubmit}
              className="mb-3 p-3 rounded-3 h-100 w-100"
              style={{ border: "2px solid white" }}
            >
              <h5 className="">Leave Us Your Info</h5>
              {/* full name  */}
              <Form.Group className="mb-3">
                <Form.Label className="">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  ref={nameRef}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              {/* email address */}
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  ref={emailRef}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              {/* select class */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Select Class</Form.Label>
                <Form.Select size="md" ref={classRef}>
                  <option>Select Class</option>
                  <option>am Class</option>
                  <option>tumi Class</option>
                </Form.Select>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              {/* comment */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" placeholder="Comment" rows={3} ref={commentRef}/>
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
