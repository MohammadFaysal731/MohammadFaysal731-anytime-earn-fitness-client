import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";
import { trainerData } from "./TrainersData";

const Trainers = () => {
  useTitle("Trainers")
  return (
    <>
      <div className="container p-3">
        <div className="text-center">
          <h3 style={{ color: "#742A59" }} className="text-uppercase">
            Trainers
          </h3>
          <h2 style={{ color: "#9F2FF0" }}>Team of Expert Coaches</h2>
          <h4 style={{ color: "#742A59" }}>
            We Are Always Provide Best Fitness Service For You
          </h4>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {trainerData?.map(
            (
              { name, image, description, facebook, twitter, linkedin },
              index
            ) => (
              <Col key={index}>
                <Card>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title style={{ color: "#742A59" }}>{name}</Card.Title>
                    <div className="d-flex justify-content-between ">
                      <h5 style={{ color: "#9F2FF0" }}>{description}</h5>
                      <span className="text-decoration-none text-nowrap">
                        <a
                          className="me-2"
                          href="https://www.facebook.com"
                          target="_blank "
                          style={{ color: "#1877F2" }}
                        >
                          {facebook}
                        </a>
                        <a
                          className="me-2"
                          href="https://twitter.com/"
                          target="_blank "
                          style={{ color: "#1C96E8" }}
                        >
                          {twitter}
                        </a>
                        <a
                          className="me-2"
                          href="https://www.linkedin.com/"
                          target="_blank "
                          style={{ color: "#0966C2" }}
                        >
                          {linkedin}
                        </a>
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )
          )}
        </Row>
      </div>
    </>
  );
};

export default Trainers;
