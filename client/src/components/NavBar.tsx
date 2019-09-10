import React from 'react'
import { Nav, Navbar, Container, NavItem } from 'react-bootstrap';
import { application } from '../config';
import { LinkContainer } from 'react-router-bootstrap';
import './NavBar.scss'

const NavBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand><LinkContainer to="/"><NavItem>{application.name}</NavItem></LinkContainer></Navbar.Brand>
      <Nav>
        <LinkContainer to="/">
          <NavItem>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/hello">
          <NavItem>Hello</NavItem>
        </LinkContainer>
        <LinkContainer to="/surveillance">
          <NavItem>Surveillance</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem>Login</NavItem>
        </LinkContainer>
        {/* <Nav.Item>
          <Nav.Link to="/"><Link to="/">Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/hello" eventKey="link-1"><Link to="/hello">Hello</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/surveillance" eventKey="link-1"><Link to="/surveillance">Surveillance</Link></Nav.Link>
        </Nav.Item> */}
      </Nav>
    </Container>
  </Navbar>
)

export default NavBar
