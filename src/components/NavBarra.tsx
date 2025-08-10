import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBarra() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          My Posters
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"post"}>
              Post
            </Nav.Link>
            <Nav.Link as={Link} to={"user"}>
              User
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
