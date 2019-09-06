import { fetchData } from '../../../utils';
import React from "react";
import { Provider } from 'react-redux'
import { Dispatch } from 'redux';
import { get } from 'lodash/fp'

export const LOGIN_REQUEST = 'authentication/login_request';
export const LOGIN_SUCCESS = 'authentication/login_success';
export const LOGIN_ERROR = 'authentication/login_error';

export function login(username: string, password: string) {
  
  return async (dispatch:Dispatch) => {
    dispatch(request());
    fetchData('POST', '/auth/login', { "username_or_email": username, "password": password })
      .then(data => dispatch(success(data)))
      .catch(error => dispatch(err(error)));
  }

  function request() { return { type: LOGIN_REQUEST, payload: true } }
  function success(data:Object) { return { type: LOGIN_SUCCESS, records: { } } }
  function err(error:Object) { return { type: LOGIN_ERROR, payload: get(['response', 'data', 'errors'], error) } }
}
