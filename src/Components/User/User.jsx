import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { users } from "../Data/Data";
import Header from "../Header/Header";

function User({ name, age, location, gender, position, salary }) {
  return (
    <Card className="mb-3">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Text>Age: {age}</Card.Text>
        <Card.Text>Location: {location}</Card.Text>
        <Card.Text>Gender: {gender}</Card.Text>
        <Card.Text>Position: {position}</Card.Text>
        <Card.Text>Salary: {salary}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default function UserInfo() {
  return (
    <div>
      <Header />
      <Container className="mt-4">
        <Row>
          {users.map((user, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex">
              <User
                name={user.name}
                age={user.age}
                location={user.location}
                gender={user.gender}
                position={user.position}
                salary={user.salary}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
