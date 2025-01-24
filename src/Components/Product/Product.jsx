import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";

function Product({ productName, productID, price, inStock }) {
  return (
    <Card className="mb-3">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{productName}</Card.Title>
        <Card.Text>Product ID: {productID}</Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
        <Card.Text>{inStock ? "In Stock" : "Out of Stock"}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
