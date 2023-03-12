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
        expand="lg"
        style={{ background: "#742A59" }}
        variant="dark"
        className="fs-5 p-3"
      >
        <Container>
          <Navbar.Brand as={Link} to="#home" className="fs-4">
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
              {/* home start */}
              <NavDropdown title="Home" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Fitness</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Online Course
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Sports Nutrition Shop
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Parallax Showcase
                </NavDropdown.Item>
              </NavDropdown>
              {/* home end */}
              {/* shope */}
              <NavDropdown title="Shope" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Product List
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Cart</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Wishlist</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Shop Detail
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Checkout</NavDropdown.Item>
              </NavDropdown>
              {/* shop end */}
              {/* page start */}
              <NavDropdown title="Pages" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.3">Trainers</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Testimonials
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Pricing Page
                </NavDropdown.Item>
              </NavDropdown>
              {/* page end */}
              <NavDropdown title="Schedule" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Schedule By Day
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Schedule By Classes
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Trainers</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#deets">About</Nav.Link>
              <Nav.Link href="#deets">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                Sing Up
                <AiOutlineUserAdd />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
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
