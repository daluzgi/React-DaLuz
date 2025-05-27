import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home">Da Luz Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#nuevos">Nuevos</Nav.Link>
            <Nav.Link href="#ofertas">Ofertas</Nav.Link>
            <Nav.Link href="#masvendidos">Man vendidos</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Categorias</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Favoritos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Mis compras
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
