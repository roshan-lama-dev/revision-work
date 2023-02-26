import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="info" expand="md">
      <Container>
        <Link to="/" className="nav-link">
          Admin CMS
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              <i class="fa-solid fa-arrow-right-to-bracket"></i> Login
            </Link>
            <Link to="/register" className="nav-link">
              <i class="fa-regular fa-registered"></i>
              Register
            </Link>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/" className="nav-link">
              <i class="fa-solid fa-right-from-bracket"></i>
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
