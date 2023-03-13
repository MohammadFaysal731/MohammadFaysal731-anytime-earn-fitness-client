import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { footerData } from "./footerData";

const Footer = () => {
  return (
    <>
      <footer
        className="p-5 "
        style={{ background: "#742A59", color: "white" }}
      >
        <Row xs={1} md={2} lg={4} className="g-4">
          {footerData?.map((links, index) => (
            <Col key={index}>
              <Card.Body className="me-5">
                <Card.Title className="mb-0">{links.title}</Card.Title>
                {links.subLinks?.map((link) => (
                  <div>
                    <span>{link.name}</span>
                    <span>
                      {link.day}&nbsp;{link.time}
                    </span>
                    <span>
                      {link.locationIcon}&nbsp;{link.locationIconText}
                    </span>
                    <span>
                      {link.phoneIcon}&nbsp;{link.phoneIconText}
                    </span>
                    <span>
                      {link.emailIcon}&nbsp;{link.emailIconText}
                    </span>
                    <span>
                      <span>{link.icon1}</span>
                      <span className="mx-2">{link.icon2}</span>
                      <span>{link.icon3}</span>
                    </span>
                  </div>
                ))}
              </Card.Body>
            </Col>
          ))}
        </Row>
      </footer>
    </>
  );
};

export default Footer;
