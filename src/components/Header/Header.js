import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { BiLogIn } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { MdSportsGymnastics } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import User from "../../assets/images/others/user.jpg";
import auth from "../../firebase.inti";
const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

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
            Earn Fitness
            <span>
              <MdSportsGymnastics className="fs-1" />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                as={NavLink}
                to="/services"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "orange" : "white",
                  };
                }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/trainers"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "orange" : "white",
                  };
                }}
              >
                Trainers
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/shop"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "orange" : "white",
                  };
                }}
              >
                Shope
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about-me"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "orange" : "white",
                  };
                }}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/blog"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "orange" : "white",
                  };
                }}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "orange" : "white",
                  };
                }}
              >
                Contact
              </Nav.Link>
            </Nav>
            {/* add to card */}
            {/* <div class="dropdown">
              <div
                className="text-white position-relative dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <AiOutlineShoppingCart />
                <span className="position-absolute top-0 start-100 translate-middle">
                  <small>0</small>
                </span>
              </div>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="# ">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="# ">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="# ">
                    Something else here
                  </a>
                </li>
              </ul>
            </div> */}

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
                  <Nav.Link
                    as={NavLink}
                    to="/sign-in"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "orange" : "white",
                      };
                    }}
                  >
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
