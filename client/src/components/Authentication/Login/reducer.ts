import { LOGIN_SUCCESS } from './action';

interface Auth {
  token: string;
}

const INITIAL_STATE:Auth = {
  token: '',

};

export default function loginReducer(state = INITIAL_STATE, action = { type: '', payload: {} }) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { token: action.payload };
  }
}
