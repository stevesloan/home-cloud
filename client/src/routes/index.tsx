import React from 'react'
import { Route, Switch } from 'react-router';
import PrivateRoute from './PrivateRoute';
import Home from '../components/Home'
import Hello from '../components/Hello'
import Surveillance from '../components/Surveillance'
import Login from '../components/Authentication/Login'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'
import Container from 'react-bootstrap/Container';

const routes = (
  <div>
    <NavBar />
    <Container className="mt-4">
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/hello" component={Hello} />
        <PrivateRoute path="/surveillance" component={Surveillance} />
        <Route path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </div>
)

export default routes