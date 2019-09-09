import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { fetchData } from '../../utils';

// Action Definition
export interface SetAction {
  type: 'SET'
  accessToken: string
}

export interface SetFetcing {
  type: 'SET_FETCHING'
  isFetching: boolean
}

// Union Action Types
export type Action = SetAction | SetFetcing

// Action Creators
export const set = (accessToken: string): SetAction => {
  return { type: 'SET', accessToken }
}

export const isFetching = (isFetching: boolean): SetFetcing => {
  return { type: 'SET_FETCHING', isFetching }
}

export const login = (username: string, password: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  // Invoke API
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      dispatch(isFetching(true))
      console.log('Login in progress')
      fetchData('POST', '/auth/login', { "username_or_email": username, "password": password })
        .then(result => {
          dispatch(set(result.data.token))
          console.log('done')
        })
        .catch(error => {});
      // setTimeout(() => {
      //   dispatch(set('this_is_access_token'))
      //   setTimeout(() => {
      //     dispatch(isFetching(false))
      //     console.log('Login done')
      //     resolve()
      //   }, 1000)
      // }, 3000)
      //   return fetchData('POST', '/auth/login', { "username_or_email": username, "password": password })
      // .then(data => data)
      // .catch(error => error);
    })
  }
}