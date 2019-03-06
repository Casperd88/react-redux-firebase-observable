import { User } from '../user/types'
import { Action, PayloadAction } from '../types'

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

export type AuthenticateAction = PayloadAction<typeof AUTHENTICATE, Credentials>
export type AuthenticateSuccessAction = PayloadAction<typeof AUTHENTICATE_SUCCESS, User>
export type AuthenticateFailedAction = Action<typeof AUTHENTICATE_FAILED>
export type AuthenticateLogoutAction = Action<typeof AUTHENTICATE_LOGOUT>
export type AuthenticateLogoutSuccessAction = Action<typeof AUTHENTICATE_LOGOUT_SUCCESS>
export type AuthenticateLogoutFailedAction = Action<typeof AUTHENTICATE_LOGOUT_FAILED>

export type AuthActionType =
  AuthenticateAction |
  AuthenticateSuccessAction |
  AuthenticateFailedAction |
  AuthenticateLogoutAction |
  AuthenticateLogoutSuccessAction |
  AuthenticateLogoutFailedAction
