import React from 'react';
import { Card, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { AiOutlineSearch } from "react-icons/ai";
const ProductsSearchFunctionality = () => {
  return (
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
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>Name </span>
              <span>(length)</span>
            </ListGroup.Item>
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
            <div className="d-flex flex-column">
              <span>name</span>
              <span>rating</span>
            </div>
            <span>image</span>
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
  );
};

export default ProductsSearchFunctionality;