import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setShow } from "../../system/systemSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Navbar bg="info" expand="md">
      <Container>
        <Button variant="primary" onClick={() => dispatch(setShow(true))}>
          Launch
        </Button>
        <Link to="/" className="nav-link">
          Admin CMS
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
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
