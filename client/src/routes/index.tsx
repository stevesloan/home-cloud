import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import Hello from '../components/Hello'
import Surveillance from '../components/Hello'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'
import Container from 'react-bootstrap/Container';

const routes = (
  <div>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hello" component={Hello} />
        <Route path="/surveillance" component={Surveillance} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </div>
)

export default routes