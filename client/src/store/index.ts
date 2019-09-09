import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'
import auth from './auth/reducers'
import { AccessToken } from './auth/reducers'

const rootReducer = (history: History) => combineReducers({
  auth,
  router: connectRouter(history)
})

export interface State {
  auth: AccessToken
  router: RouterState
}

export default rootReducer