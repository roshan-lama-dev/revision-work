import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { getUserObj } from "../helpers/UserfromSession";
// import NavDropdown from "react-bootstrap/NavDropdown";

export const Headers = () => {
  const userObj = getUserObj();

  const handleLogOut = () => {
    sessionStorage.removeItem("user");
  };
  return (
    <Navbar className="textwhite" bg="warning" text="light" expand="md">
      <Container>
        <Navbar.Brand href="#home">Library Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {userObj?._id ? (
              <>
                <Link className="nav-link" to="/books">
                  Dashboard
                </Link>{" "}
                <Link onClick={handleLogOut} className="nav-link" to="/">
                  Logout
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link className="nav-link" to="/">
                  Login
                </Link>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
