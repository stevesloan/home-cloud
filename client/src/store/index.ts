import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'
import auth from './session/reducers'

const rootReducer = (history: History) => combineReducers({
  auth,
  router: connectRouter(history)
})

export interface State {
  auth: {}
  router: RouterState
}

export default rootReducer