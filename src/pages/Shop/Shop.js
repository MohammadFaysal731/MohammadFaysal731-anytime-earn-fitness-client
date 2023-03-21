import { } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card, Col, Form, InputGroup, ListGroup, Pagination, Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
const Shop = () => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    fetch("shopData.json")
      .then((res) => res.json())
      .then((result) => setShopData(result));
  }, []);
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="container">
      <h2 className="text-center m-3">Welcome to Our Online Shope</h2>
      <Row xs={1} md={2}>
        {/* first columns start */}
        {/* products start*/}
        <Col>
          <Form.Select aria-label="Default select example" className="mb-3">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Row xs={1} md={2} className="g-3">
            {shopData?.map(
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
                  <Card>
                    <Card.Img
                      variant="top"
                      src={image}
                      className="img-fluid"
                      style={{ height: "200px" }}
                    />
                    <Card.Body>
                      <Card.Title className="">{name}</Card.Title>
                      <div>
                        <h5>$ {price} /-</h5>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            )}
            <div className="mx-auto">
              
              <Pagination>previous {items} next</Pagination>
            </div>
          </Row>
        </Col>
        {/* products end*/}
        {/* first columns end */}
        {/* second columns start */}
        <Col>
          <Row xs={1} className="g-4 p-3">
            {/* products search  */}
            <Card>
              <Card.Body>
                <Card.Title>Product Search</Card.Title>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text
                    as={"button"}
                    id="basic-addon2 "
                    className="btn btn-primary"
                  >
                    <AiOutlineSearch />
                  </InputGroup.Text>
                </InputGroup>
              </Card.Body>
            </Card>
            {/* products categories  */}
            <Card>
              <Card.Body>
                <Card.Title>Product Categories</Card.Title>
                <ListGroup>
                  <ListGroup.Item>Name (length)</ListGroup.Item>
                  <ListGroup.Item>Name (length)</ListGroup.Item>
                  <ListGroup.Item>Name (length)</ListGroup.Item>
                  <ListGroup.Item>Name (length)</ListGroup.Item>
                  <ListGroup.Item>Name (length)</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            {/* products */}
            <Card>
              <Card.Body>
                <Card.Title>Products</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <p>name and rating</p>
                  <h2>image</h2>
                </div>
              </Card.Body>
            </Card>
            {/* filter by price */}
            <Card>
              <Card.Body>
                <Card.Title>Filter By Price</Card.Title>
                <Form.Label>Range</Form.Label>
                <Form.Range />
                <button className="btn btn-primary">Filter</button>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        {/* second columns end */}
      </Row>
    </div>
  );
};

export default Shop;
