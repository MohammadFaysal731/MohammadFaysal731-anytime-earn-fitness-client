import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { servicesData } from "./ServicesData";
import {TiTickOutline}from "react-icons/ti"
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div className="container p-3 my-5">
      <div className="text-center mb-5 text-uppercase">
        <h1 style={{ color: "#742A79" }}>Service Chart</h1>
        <h4 style={{ color: "#9F2FF0" }}>Choose Service Package</h4>
        <h5 style={{ color: "#742A79" }}>Monthly Yearly</h5>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {servicesData?.map(
          ({ title, name, image, price, descriptions }, index) => (
            <Col key={index}>
              <Card>
                <Card.Img
                  variant="top"
                  src={image}
                  className="img-fluid"
                  style={{ height: "280px" }}
                />
                <Card.Body>
                  <Card.Title
                    className="text-uppercase"
                    style={{ color: "#742A79" }}
                  >
                    {name}
                  </Card.Title>
                  <div>
                    {descriptions?.map(
                      ({ items1, items2, items3, items4, items5, items6 }) => (
                        <Card.Text>
                          <TiTickOutline />
                          {items1}
                          {items2}
                          {items3}
                          {items4}
                          {items5}
                          {items6}
                        </Card.Text>
                      )
                    )}
                  </div>
                  <Link to="/about">
                  <Button
                    className="w-100 mt-2"
                    style={{ background: "#742A59" }}
                  >
                    Book Now
                  </Button>  
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default Services;
