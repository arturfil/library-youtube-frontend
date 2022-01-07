import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isAuthenticated, logOut } from "../services/authService";
import "./NavBar.css";

const NavBar = () => {
  const user = isAuthenticated();
  console.log("HERE",user.role === 'ADMIN');

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            { user.role === "ADMIN" && (
              <Link to="/addBook">Add Book</Link>
            )}
          </Nav>
          <Nav>
            {user ? (
              <>
                <h4 style={{color: 'white', marginRight: 10}}>
                  {user.name}
                </h4 >
                <Button onClick={logOut} className="btn btn-outline-dark">
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link style={{ marginRight: "10px" }} to="/register">
                  Sign Up
                </Link>
                <Link to="login">Log In</Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
