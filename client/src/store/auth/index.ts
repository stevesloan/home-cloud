
import { combineReducers } from 'redux'
import accessToken from './reducers'
import { AccessToken } from './reducers'

export interface State {
  accessToken: AccessToken
}

export default combineReducers<State>({
  accessToken
})
