import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Props
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "bold",
                      color: "#00ffcc",
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              User
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/product"
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "bold",
                      color: "#00ffcc",
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              Product
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/student"
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "bold",
                      color: "#00ffcc",
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              Student
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
