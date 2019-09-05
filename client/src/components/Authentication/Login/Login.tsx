import React from 'react'
import { login as loginRequest } from "./data";
import { login as loginAction } from "./action";

const Login = () => {
  const handleLogin = () => {
    loginAction('test', 'test');
  }
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input name="name"></input>
      <br />
      <label htmlFor="password">Password</label>
      <input name="password" type="password"></input>
    </div>
  )
}

export default Login;