import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbare() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Navbar.Brand href="#">User Profile</Navbar.Brand>
          <Navbar.Brand href="#">About</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navbare;
