import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { application } from '../config';

const NavBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">{application.name}</Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/hello" eventKey="link-1">Hello</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/surveillance" eventKey="link-1">Surveillance</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  </Navbar>
)

export default NavBar
