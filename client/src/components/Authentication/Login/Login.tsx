import React from 'react'
import { connect } from 'react-redux';
import { login as loginAction } from "../../../store/auth/actions";
import { ThunkDispatch } from 'redux-thunk'
import { AccessToken } from '../../../store/auth/reducers'
import { State as RootState } from '../../../store'

const Login = (props: Props) => {
  return (
    <div>{(props.auth.isFetching) ? (<div>Loading</div>) : null}
      <label htmlFor="name">Name</label>
      <input name="name"></input>
      <br />
      <label htmlFor="password">Password</label>
      <input name="password" type="password"></input>
      <br />
      <button onClick={async () => { await props.handleLogin('test', 'test') }}>Submit</button> >
      </div >
  )
}

interface DispatchProps {
  handleLogin: (username: string, password: string) => void
}

interface StateProps {
  auth: AccessToken
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    handleLogin: async (username: string, password: string) => {
      await dispatch(loginAction('test', 'test'))
      console.log('done')
    }
  }
};

type Props = StateProps & DispatchProps

export default connect(
  mapStateToProps, mapDispatchToProps
)(Login);
