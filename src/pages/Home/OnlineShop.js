import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import Product1 from "../../assets/images/online-shop/electric-Treadmill-DK-12ADP2.JPG";
import Product2 from "../../assets/images/online-shop/foot-Pedal-Rubber-Leg-Pull-Exerciser.JPG";
import Product3 from "../../assets/images/online-shop/hand-Grip-Ninja.JPG";
import Product4 from "../../assets/images/online-shop/uk-gym-dumbbells'-10-kg-loc.JPG";
import Product5 from "../../assets/images/online-shop/yoga-fitness-ball-ninja.JPG";
import Product6 from "../../assets/images/online-shop/yoga-mat-6mm.JPG";
const OnlineShop = () => {
  const onlineShopData = [
    {
      _id: 0,
      name: "Electric Treadmill Dk",
      price:41062,
      image: Product1,
      itemCode: "95",
      brand: "Faysal Express LTD",
      weight: "47kg",
      color: "Mixed",
    },
    {
      _id: 1,
      name: "Foot Pedal Rubber",
      price:517,
      image: Product2,
      itemCode: "96",
      brand: "Faysal Express LTD",
      color: "blue",
    },
    {
      _id: 2,
      name: "Hand Grip",
      price:293,
      image: Product3,
      itemCode: "97",
      brand: "Faysal Express LTD",
      color: "Mixed",
    },
    {
      _id: 3,
      name: "Uk Gym Dumbbells",
      price:2542,
      image: Product4,
      itemCode: "98",
      brand: "Faysal Express LTD",
      weight: "10kg",
      color: "black",
    },
    {
      _id: 4,
      name: "Yoga Fitness Ball",
      price:1080,
      image: Product5,
      itemCode: "99",
      brand: "Faysal Express LTD",
      color: "blue and red",
    },
    {
      _id: 5,
      name: "Yoga Mat 6mm",
      price:739,
      image: Product6,
      itemCode: "100",
      brand: "Faysal Express LTD",
      measurement: " (173cm x 61cm)",
      color: "purple",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h2 style={{ color: "#742A59" }} className="text-uppercase">
            Shop Online
          </h2>
          <h3 style={{ color: "#9F2FF0" }}>Our Online Shop</h3>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4 mb-5">
          {onlineShopData?.map(
            (
              {
                name,
                image,
                price,
                itemCode,
                brand,
                measurement,
                color,
                weight,
              },
              index
            ) => (
              <Col key={index}>
                <Card className="w-100 h-100">
                  <Card.Img variant="top" src={image} className="img-fluid" />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <div>
                      <h5>$ {price} /-</h5>
                      <h5>Description:</h5>
                      <div>
                        <p>
                          Item Code:
                          <span className="fw-bold">{itemCode}</span>
                        </p>
                        <p>
                          Brand Name:
                          <span className="fw-bold"> {brand}</span>
                        </p>
                        <p>
                          Measurement:
                          <span className="fw-bold">{measurement}</span>
                        </p>
                        <p>
                          Color:<span className="fw-bold">{color}</span>
                        </p>
                        {weight ? (
                          <p>
                            <span className="fw-bold">Weight: {weight}</span>
                          </p>
                        ) : (
                          ""
                        )}
                        <Card.Text style={{ color: "orange" }}>
                          <BsStarFill className="mx-1" />
                          <BsStarFill className="mx-1" />
                          <BsStarFill className="mx-1" />
                          <BsStarFill className="mx-1" />
                          <BsStarHalf className="mx-1" />
                        </Card.Text>
                        {/* <button
                          className="text-uppercase btn text-white"
                          style={{ background: "#742A59" }}
                        >
                          Add To Cart
                        </button> */}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )
          )}
          <Link to="/shop">
            <button
              className="btn btn-link text-decoration-none"
              style={{ color: "#742A59" }}
            >
              Go to shop
            </button>
          </Link>
        </Row>
      </div>
    </>
  );
};

export default OnlineShop;
