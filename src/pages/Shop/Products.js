import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pagination from './Pagination';

const Products = ({
  shopData,
  productsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  console.log(shopData.length);
  return (
    <Row xs={1} md={2} className="g-3">
      {shopData?.map(
        (
          { name, price, image, itemCode, brand, measurement, color, weight },
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
      <div className="">
        <Pagination
          totalProducts={shopData.length}
          productsPerPage={productsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </Row>
  );
};

export default Products;