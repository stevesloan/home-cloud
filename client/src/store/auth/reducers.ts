
import { Action, SUCCESS, REQUEST } from './actions'
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
      const tokenData: { user: string } = jwt_decode(action.accessToken);
      return {
        ...state,
        accessToken: action.accessToken,
        isFetching: false,
        username: tokenData.user,
      }
    case REQUEST:
      return { ...state, isFetching: action.isFetching }
    default:
      return { ...state }
  }
}

export default accessToken;
