import { combineReducers } from 'redux'
import { Action } from './actions'

export interface AccessToken {
  isFetching: boolean
  value?: string
}

export interface State {
  accessToken: AccessToken
}

const accessToken = (state: AccessToken = { isFetching: false }, action: Action): AccessToken => {
  switch (action.type) {
    case 'SET':
      return { ...state, value: action.accessToken, isFetching: false }
    case 'SET_FETCHING':
      return { ...state, isFetching: action.isFetching }
    default:
      return { ...state }
  }
}

export default combineReducers<State>({
  accessToken
})
