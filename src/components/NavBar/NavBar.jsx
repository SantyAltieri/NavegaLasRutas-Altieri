import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import {getProductsByCategory} from '../../../asyncMock';

function NavScrollExample() {
  return (
    <Navbar fixed="top" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Tienda de articulos</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Todos los Generos</Nav.Link>
            <NavDropdown title="Discos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/category/jazz">
                Jazz
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/country">
                Country
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/rock">
                Rock
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/fusion">
                Fusion
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Carrito
            </Nav.Link>
            <CartWidget size={3200}/>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar en la pagina"
              className="me-2"
              aria-label="Busqueda"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;