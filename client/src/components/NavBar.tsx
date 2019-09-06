import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { application } from '../config';
import { Link } from 'react-router-dom'

const NavBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand><Link to="/">{application.name}</Link></Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link to="/"><Link to="/">Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/hello" eventKey="link-1"><Link to="/hello">Hello</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/surveillance" eventKey="link-1"><Link to="/surveillance">Surveillance</Link></Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  </Navbar>
)

export default NavBar
