import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { MdSportsGymnastics } from "react-icons/md";
import { Link } from "react-router-dom";
const Header = () => {
  
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
              {/* institution start */}
              <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/trainers">
                  Trainers
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/testimonials">
                  Testimonials
                </NavDropdown.Item>
              </NavDropdown>
              {/* institution end */}
              <NavDropdown title="Schedule" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/routines">
                  Routines
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/schedule-by-day">
                  Schedule By Day
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/schedule-by-classes">
                  Schedule By Classes
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/shop">
                Shope
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              {/* online-course start */}
              <Nav.Link as={Link} to="/online-course">
                Online Course
              </Nav.Link>
              {/* online-course end */}
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/sing-up">
                Sing Up
                <AiOutlineUserAdd />
              </Nav.Link>
              <Nav.Link as={Link} to="/sign-in">
                Sign in
                <BiLogIn />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
