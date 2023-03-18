import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import Product1 from "../../../assets/images/online-shop/electric-Treadmill-DK-12ADP2.JPG";
import Product2 from "../../../assets/images/online-shop/foot-Pedal-Rubber-Leg-Pull-Exerciser.JPG";
import Product3 from "../../../assets/images/online-shop/hand-Grip-Ninja.JPG";
import Product4 from "../../../assets/images/online-shop/uk-gym-dumbbells'-10-kg-loc.JPG";
import Product5 from "../../../assets/images/online-shop/yoga-fitness-ball-ninja.JPG";
import Product6 from "../../../assets/images/online-shop/yoga-mat-6mm.JPG";
const OnlineShop = () => {
  const onlineShopData = [
    { _id: 0, name: "Electric Treadmill Dk", image: Product1 },
    { _id: 1, name: "Foot Pedal Rubber", image: Product2 },
    { _id: 2, name: "Hand Grip", image: Product3 },
    { _id: 3, name: "Uk Gym Dumbbells", image: Product4 },
    { _id: 4, name: "Yoga Fitness Ball", image: Product5 },
    { _id: 5, name: "Yoga Mat 6mm", image: Product6 },
  ];
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h4 style={{ color: "#742A59" }} className="text-uppercase">
            Shop Online
          </h4>
          <h3 style={{ color: "#9F2FF0" }}>Our Online Shop</h3>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4 mb-5">
          {onlineShopData?.map(({ name, image }, index) => (
            <Col key={index}>
              <Card>
                <Card.Img
                  variant="top"
                  src={image}
                  style={{ height: "350px" }}
                />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text style={{ color: "orange" }}>
                    <BsStarFill className="mx-1" />
                    <BsStarFill className="mx-1" />
                    <BsStarFill className="mx-1" />
                    <BsStarFill className="mx-1" />
                    <BsStarHalf className="mx-1" />
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className="text-uppercase btn text-white"
                      style={{ background: "#742A59" }}
                    >
                      Add To Cart
                    </button>
                    <HiOutlineDotsCircleHorizontal
                      className="fs-3"
                      style={{ color: "#742A59" }}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default OnlineShop;
