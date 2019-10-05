import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchData } from '../../utils';


export const SUCCESS = "auth/success";
export const FAILURE = "auth/failure";
export const REQUEST = "auth/request";

// Action Definition
export interface ProcessResult {
  type: typeof SUCCESS | typeof FAILURE,
  accessToken?: string,
}

export interface SetFetching {
  type: typeof REQUEST,
  isFetching: boolean,
}

// Union Action Types
export type Action = ProcessResult | SetFetching

// Action Creators
export const processResult = (accessToken: string): ProcessResult => {
  return (accessToken) ? { type: SUCCESS, accessToken } : { type: FAILURE };
}

export const isFetching = (isFetching: boolean): SetFetching => {
  return { type: REQUEST, isFetching }
}

export const login = (username: string, password: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      dispatch(isFetching(true))
      fetchData('POST', '/auth/login', { "username_or_email": username, "password": password })
        .then(result => {
          dispatch(processResult(result.data.token))
        })
        .catch(error => { console.error(error) });
    })
  }
}