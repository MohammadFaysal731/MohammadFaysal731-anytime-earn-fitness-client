import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import { servicesData } from "./ServicesData";
const Services = () => {
  useTitle("Services")
  const navigate=useNavigate();
  const handelNavigate = name =>{
    navigate(`/services/${name}`);
  }
  return (
    <div className="container p-3 my-5 ">
      <div className="text-center mb-4">
        <h3 style={{ color: "#742A59" }} className="text-uppercase">
          Services Chart
        </h3>
        <h2 style={{ color: "#9F2FF0" }}>Choose A Service By Package</h2>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {servicesData?.map(
          ({  title, name, image, price, descriptions }, index) => (
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
                    style={{ color: "#742A59" }}
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
                    <h4 style={{ color: "#9F2FF0" }}>$ {price}</h4>
                  </div>
                  <button
                    onClick={() => handelNavigate(name)}
                    className="w-100 mt-2 btn text-white"
                    style={{ background: "#742A59" }}
                  >
                    Book Now
                  </button>
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
