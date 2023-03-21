import { } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Products from "./Products";
import ProductsSearchFunctionality from "./ProductsSearchFunctionality";
const Shop = () => {
  const [shopData, setShopData] = useState([]);
  const [currentPage, setCurrentPage]=useState(1);
  const [productsPerPage]=useState(4);

  useEffect(() => {
    fetch("shopData.json")
      .then((res) => res.json())
      .then((result) => setShopData(result));
  }, []);
 
  // get current page
  const lastIndexOfProduct = currentPage * productsPerPage;
  const firstIndexOfProduct = lastIndexOfProduct - productsPerPage;
  const currentProduct= shopData.slice(firstIndexOfProduct, lastIndexOfProduct);
  return (
    <div className="container">
      <h2 className="text-center m-3">Welcome to Our Online Shope</h2>
      <Row xs={1} md={2}>
        {/* first columns start */}
        <Col>
          <Form.Select aria-label="Default select example" className="mb-3">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Products
            shopData={currentProduct}
            shopData1={shopData}
            productsPerPage={productsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </Col>
        {/* first columns end */}
        {/* second columns start */}
        <Col>
          <ProductsSearchFunctionality />
        </Col>
        {/* second columns end */}
      </Row>
    </div>
  );
};

export default Shop;
