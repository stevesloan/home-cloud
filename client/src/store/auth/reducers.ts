
import { Action } from './actions'

export interface AccessToken {
  isFetching: boolean
  accessToken?: string | null
}

const InnitialState:AccessToken = { isFetching: false, accessToken: null }

const accessToken = (state: AccessToken = InnitialState, action: Action): AccessToken => {
  switch (action.type) {
    case 'SET':
      return { ...state, accessToken: action.accessToken, isFetching: false }
    case 'SET_FETCHING':
      return { ...state, isFetching: action.isFetching }
    default:
      return { ...state }
  }
}

export default accessToken;
