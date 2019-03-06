import {
  AuthenticateAction,
  AuthenticateSuccessAction,
  AuthenticateFailedAction,
  AuthenticateLogoutAction,
  AuthenticateLogoutSuccessAction,
  AuthenticateLogoutFailedAction,
  Credentials,
  AUTHENTICATE,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILED,
  AUTHENTICATE_LOGOUT,
  AUTHENTICATE_LOGOUT_SUCCESS,
  AUTHENTICATE_LOGOUT_FAILED
} from './types'

import { User } from '../user/types'

export function authenticate(credentials: Credentials): AuthenticateAction {
  return {
    type: AUTHENTICATE,
    payload: credentials
  }
}

export function authenticateSuccess(user: User): AuthenticateSuccessAction {
  return {
    type: AUTHENTICATE_SUCCESS,
    payload: user
  }
}

export function authenticateFailed(): AuthenticateFailedAction {
  return {
    type: AUTHENTICATE_FAILED
  }
}

export function authenticateLogout(): AuthenticateLogoutAction {
  return {
    type: AUTHENTICATE_LOGOUT
  }
}

export function authenticateLogoutSuccess(): AuthenticateLogoutSuccessAction {
  return {
    type: AUTHENTICATE_LOGOUT_SUCCESS
  }
}

export function authenticateLogoutFailed(): AuthenticateLogoutFailedAction {
  return {
    type: AUTHENTICATE_LOGOUT_FAILED
  }
}
