import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router'
import { AccessToken } from '../store/auth/reducers'
import { State as RootState } from '../store'

interface StateProps {
  auth: AccessToken
}

interface ComponentProps {
  component: Function
  auth: AccessToken
  path: string
  exact?: boolean
}

const PrivateRoute = ({ auth, path, component: Component, exact = false }: ComponentProps) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
      auth.accessToken ? (
        <Component />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);


const mapStateToProps = (state: RootState): StateProps => {
  return {
    auth: state.auth
  }
}


export default connect(
  mapStateToProps
)(PrivateRoute);