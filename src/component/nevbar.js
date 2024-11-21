import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from 'react-bootstrap/Dropdown';
import { NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function Nevbar() {
  const navbarStyle = {
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Adds shadow for a modern look
    padding: "10px 20px",
  };

  const brandStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#ffffff", // White color for the brand text
  };

  return (
    <div>
      <Navbar expand="lg" style={navbarStyle} className="bg-primary">
        <Container>
         
          <Navbar.Brand href="#home" style={brandStyle}>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.0xibiUa6XaBGdZJag9AGtwHaHa&pid=Api&P=0&h=180" // Replace with your logo URL
              alt="Logo"
              style={{ marginRight: "10px", borderRadius: "50%" }}
            />
            MovieFlexxx
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Navigation Links */}
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#services" className="text-white">
                Services
              </Nav.Link>
              {/* Dropdown Menu */}
              <NavDropdown
                title="More"
                id="basic-nav-dropdown"
                className="text-white"
              >
                <NavDropdown.Item href="#action/1">new movie</NavDropdown.Item>
                <NavDropdown.Item href="#action/2">
                  movie type
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </div>
  );
}

export default Nevbar;
