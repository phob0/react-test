import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
  <Navbar expand="lg" className="bg-body-secondary">
  <Container>
    <Navbar.Brand href="/">Carti Online</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link>
          <NavLink to="/" className="link" activeClassName="active" exact>
            Lista Carti
          </NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/adauga" className="link" activeClassName="active">
            Adauga Carte
          </NavLink>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
  </Navbar>
  );
};

export default Header;