import {
  AuthState,
  AuthActionType,
  AUTHENTICATE,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILED,
  AUTHENTICATE_LOGOUT_SUCCESS
} from './types'

const defaultState: AuthState = {
  isAuthenticated: false,
  isAuthenticating: false
}

export function authReducer(
  state: AuthState = defaultState,
  action: AuthActionType
): AuthState {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        isAuthenticated: false,
        isAuthenticating: true
      }
    case AUTHENTICATE_SUCCESS:
      return {
        isAuthenticated: true,
        isAuthenticating: false,
        user: action.payload
      }
    case AUTHENTICATE_FAILED:
    case AUTHENTICATE_LOGOUT_SUCCESS:
      return {
        isAuthenticated: false,
        isAuthenticating: false
      }
    default:
      return state
  }
}
