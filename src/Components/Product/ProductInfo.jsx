import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import { products } from "../Data/Data";
import Header from "../Header/Header";

export default function ProductInfo() {
  return (
    <div>
      <Header />
      <Container className="mt-4">
        <Row>
          {products.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex ">
              <Product
                productName={product.productName}
                productID={product.productID}
                price={product.price}
                inStock={product.inStock}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
