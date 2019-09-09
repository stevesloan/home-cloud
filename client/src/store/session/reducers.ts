import { combineReducers } from 'redux'
import { Action } from './actions'

// States' definition
export interface AccessToken {
  isFetching: boolean
  accessToken?: string
}

export interface State {
  accessToken: AccessToken
}

const accessToken = (state: AccessToken = { isFetching: false }, action: Action): AccessToken => {
  switch (action.type) {
    case 'SET':
      console.log('test steve')
      return { ...state, accessToken: action.accessToken }
    case 'SET_FETCHING':
      return { ...state, isFetching: action.isFetching }
    default:
      return { ...state }
  }
}

export default combineReducers<State>({
  accessToken
})
