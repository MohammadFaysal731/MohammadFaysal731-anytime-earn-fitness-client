import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import useTitle from "../../hooks/useTitle";
import Pagination from "./Pagination";

const Shop = () => {
  useTitle("Shop")
  const [shopData, setShopData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);

  useEffect(() => {
    fetch("shopData.json")
      .then((res) => res.json())
      .then((result) =>setShopData(result))
  }, []);

  // get current page
  const lastIndexOfProduct = currentPage * productsPerPage;
  const firstIndexOfProduct = lastIndexOfProduct - productsPerPage;
  const currentProduct = shopData.slice(
    firstIndexOfProduct,
    lastIndexOfProduct
  );
  
  return (
    <div className="container">
      <h2 className="text-center m-3">Welcome to Our Online Shope</h2>
      <Row xs={1} md={1}>
        {/* first columns start */}
        <Col>
          <Row xs={1} md={2} className="g-3">
            {currentProduct?.map(
              (
                {
                  name,
                  price,
                  image,
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
                    <Card.Img
                      variant="top"
                      src={image}
                      className="img-fluid "
                    />
                    <Card.Body >
                      <Card.Title className="">{name}</Card.Title>
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
            <div className="">
              <Pagination
                totalProducts={shopData.length}
                productsPerPage={productsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </Row>
        </Col>
        {/* first columns end */}
      </Row>
    </div>
  );
};

export default Shop;
