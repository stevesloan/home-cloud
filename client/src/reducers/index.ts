import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'
import loginReducer from './auth'
import accessToken from '../store/session/reducers'

const rootReducer = (history: History) => combineReducers({
  accessToken: accessToken,
  auth: loginReducer,
  router: connectRouter(history)
})

export interface State {
  accessToken: {}
  auth: {}
  router: RouterState
}

export default rootReducer