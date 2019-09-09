import { Action } from "redux";

import { LOGIN_SUCCESS } from '../components/Authentication/Login/action';

interface Auth {
  accessToken: string;
  type: string;
}

// export interface AccessToken {
//   isFetching: boolean
//   accessToken?: string
// }

const INITIAL_STATE = {
  accessToken: '',

};

const loginReducer = (state = INITIAL_STATE, action: Auth) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, accessToken: action.accessToken };
    default:
      return state;
  }
}

export default loginReducer;