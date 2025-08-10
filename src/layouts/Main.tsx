import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBarra";
import { Container } from "react-bootstrap";

export default function Main() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
