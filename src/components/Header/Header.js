import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { BiLogIn } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { MdSportsGymnastics } from "react-icons/md";
import { Link } from "react-router-dom";
import User from "../../assets/images/others/user.jpg";
import auth from "../../firebase.inti";
const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  console.log(user);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="xl"
        style={{ background: "#742A59" }}
        variant="dark"
        className="fs-5 p-3 user-select-none"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fs-4">
            <span>
              <CgGym className="fs-1" />
            </span>
            Anytime Earn Fitness
            <span>
              <MdSportsGymnastics className="fs-1" />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/trainers">
                Trainers
              </Nav.Link>
              <Nav.Link as={Link} to="/shop">
                Shope
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              {/* online-course end */}
            </Nav>
            <Nav>
              {user ? (
                <>
                  <div className="d-flex justify-content-center align-items-center">
                    <div>
                      {user.photoURL ? (
                        <img
                          style={{ width: "35px" }}
                          className="rounded-circle "
                          src={user?.photoURL}
                          alt=""
                        />
                      ) : (
                        <div className="">
                          <img
                            style={{ width: "35px" }}
                            className="rounded-circle "
                            src={User}
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                    <div className="text-white m-1 ">{user?.displayName}</div>
                    <div className="">
                      <button
                        className="btn btn-link text-decoration-none fs-5 text-white"
                        onClick={() => signOut()}
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/sign-in">
                    Sign in
                    <BiLogIn />
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
