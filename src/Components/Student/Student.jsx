import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { students } from "../Data/Data";
import Header from "../Header/Header";

function Student({ studentName, grade, subjects }) {
  return (
    <Card className="mb-3 d-flex flex-column">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{studentName}</Card.Title>
        <Card.Text>Grade: {grade}</Card.Text>
        <Card.Text>
          Subjects:
          <ul>
            {subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default function StudentInfo() {
  return (
    <div>
      <Header />
      <Container className="mt-4">
        <Row>
          {students.map((student, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex align-items-stretch"
            >
              <Student
                studentName={student.studentName}
                grade={student.grade}
                subjects={student.subjects}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
