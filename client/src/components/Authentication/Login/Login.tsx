import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login as loginRequest } from "./data";
import { login as loginAction } from "./action";

interface Props {
  LoginAction: typeof loginAction;
}

class Login extends React.Component<Props> {

  handleLogin = () => {
    const { LoginAction } = this.props;
    LoginAction('test', 'test');
  }

  render() {
    return (
      <div>
        <label htmlFor="name">Name</label>
        <input name="name"></input>
        <br />
        <label htmlFor="password">Password</label>
        <input name="password" type="password"></input>
        <br />
        <button onClick={this.handleLogin}>Submit</button>>
      </div>
    )
  }
}

export default connect(
  null, (dispatch) => ({
    LoginAction: bindActionCreators(loginAction, dispatch),
  })
)(Login);