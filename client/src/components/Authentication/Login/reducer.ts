import { Action } from 'redux';
import { LOGIN_SUCCESS } from './action';

const INITIAL_STATE = {
  count: 0,
};

export default function loginReducer(state = INITIAL_STATE, action = { type: '' }) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { token: action.data };
  }
}
