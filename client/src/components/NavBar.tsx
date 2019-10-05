import React from 'react'
import { Nav, Navbar, Container, NavItem } from 'react-bootstrap';
import { application } from '../config';
import { LinkContainer } from 'react-router-bootstrap';
import './NavBar.scss'
import { connect } from 'react-redux';
import { AccessToken } from '../store/auth/reducers'
import { State as RootState } from '../store'

const NavBar = (props: StateProps) => {
  console.log('navProps', props)
  return (<Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand><LinkContainer to="/"><NavItem>{application.name}</NavItem></LinkContainer></Navbar.Brand>

      {props.auth.accessToken ? (
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
          <LinkContainer to="/profile">
            <NavItem>{props.auth.username}</NavItem>
          </LinkContainer>
        </Nav>
      ) : (
          <Nav>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
          </Nav>
        )
      }

    </Container>
  </Navbar>);
}



interface StateProps {
  auth: AccessToken
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    auth: state.auth
  }
}

export default connect(
  mapStateToProps
)(NavBar);
