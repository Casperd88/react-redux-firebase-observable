import { User } from '../user/types'

export const AUTHENTICATE = '@auth/AUTHENTICATE'
export const AUTHENTICATE_SUCCESS = '@auth/AUTHENTICATE_SUCCESS'
export const AUTHENTICATE_FAILED = '@auth/AUTHENTICATE_FAILED'
export const AUTHENTICATE_LOGOUT = '@auth/LOGOUT'
export const AUTHENTICATE_LOGOUT_SUCCESS = '@auth/LOGOUT_SUCCESS'
export const AUTHENTICATE_LOGOUT_FAILED = '@auth/LOGOUT_FAILED'

export interface AuthState {
  isAuthenticating: boolean
  isAuthenticated: boolean
  user?: User
}

export interface Credentials {
  email: string
  password: string
}

export interface AuthenticateAction {
  type: typeof AUTHENTICATE,
  payload: Credentials
}

export interface AuthenticateSuccessAction {
  type: typeof AUTHENTICATE_SUCCESS,
  payload: User
}

export interface AuthenticateFailedAction {
  type: typeof AUTHENTICATE_FAILED
}

export interface AuthenticateLogoutAction {
  type: typeof AUTHENTICATE_LOGOUT
}

export interface AuthenticateLogoutSuccessAction {
  type: typeof AUTHENTICATE_LOGOUT_SUCCESS
}

export interface AuthenticateLogoutFailedAction {
  type: typeof AUTHENTICATE_LOGOUT_FAILED
}

export type AuthActionType =
  AuthenticateAction |
  AuthenticateSuccessAction |
  AuthenticateFailedAction |
  AuthenticateLogoutAction |
  AuthenticateLogoutSuccessAction |
  AuthenticateLogoutFailedAction
