import React, {  } from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router'
import { AccessToken } from '../store/auth/reducers'
import { State as RootState } from '../store'
import accessToken from '../store/auth/reducers';
import { State } from '../store/auth/index';

interface StateProps {
  auth: AccessToken
}

interface ComponentProps {
  component: any
  auth: AccessToken
  path: string
  rest?: any
}

// const routes = (props: StateProps) => {
const PrivateRoute = ({ auth, path, component: Component, ...rest }: ComponentProps) => {
  return (
    <Route
      {...rest}
      
      render={(props) =>
        auth.accessToken ? (
          <Component  />
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
}



const mapStateToProps = (state: RootState): StateProps => {
  return {
    auth: state.auth
  }
}


export default connect(
  mapStateToProps
)(PrivateRoute);