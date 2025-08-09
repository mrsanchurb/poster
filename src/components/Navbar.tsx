import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav>
      <Nav.Link as={Link} to="/">
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="user">
        User
      </Nav.Link>
      <Nav.Link as={Link} to="post">
        Post
      </Nav.Link>
      <Nav.Link as={Link} to="nuevo">
        Nuevo
      </Nav.Link>
    </Nav>
  );
}
