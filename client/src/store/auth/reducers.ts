
import { Action, SUCCESS, REQUEST, FAILURE } from './actions'
import jwt_decode from 'jwt-decode';

export interface AccessToken {
  isFetching: boolean
  accessToken?: string | null
  username: string | null
}

const InnitialState: AccessToken = { isFetching: false, accessToken: null, username: null }

const accessToken = (state: AccessToken = InnitialState, action: Action): AccessToken => {
  switch (action.type) {
    case SUCCESS:
      const tokenData: { user: string } = jwt_decode(<string>action.accessToken);
      return {
        ...state,
        accessToken: action.accessToken,
        isFetching: false,
        username: tokenData.user,
      }
    case REQUEST:
      return { ...state, isFetching: action.isFetching }
    case FAILURE:
      return { ...state, isFetching: false }
    default:
      return { ...state }
  }
}

export default accessToken;
