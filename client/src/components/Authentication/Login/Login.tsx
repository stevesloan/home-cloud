import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login as loginRequest } from "./data";
import { login as loginAction } from "../../../store/session/actions";
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk'

interface DispatchProps {
  handleLogin: (username: string, password: string) => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    handleLogin: async (username: string, password: string) => {
      await dispatch(loginAction('test', 'test'))
      console.log('done')
    }
  }
};

type Props = DispatchProps

const Login = (prop:Props) => {
  const test = async () => {
    await prop.handleLogin('test', 'test');
  }
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input name="name"></input>
      <br />
      <label htmlFor="password">Password</label>
      <input name="password" type="password"></input>
      <br />
      <button onClick={test}>Submit</button>>
      </div>
  )
}

export default connect<DispatchProps>(
  null, mapDispatchToProps

  // (dispatch) => ({
  //   LoginAction: bindActionCreators(loginAction, dispatch),
  // })
)(Login);