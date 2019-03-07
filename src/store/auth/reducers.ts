import { getType, ActionType } from 'typesafe-actions'
import { AuthState } from './types'
import * as AuthActions from './actions'

const defaultState: AuthState = {
  isAuthenticated: false,
  isAuthenticating: false
}

export function authReducer(
  state: AuthState = defaultState,
  action: ActionType<typeof AuthActions>
): AuthState {
  switch (action.type) {
    case getType(AuthActions.login):
      return {
        isAuthenticated: false,
        isAuthenticating: true
      }
    case getType(AuthActions.loginSuccess):
      return {
        isAuthenticated: true,
        isAuthenticating: false,
        user: action.payload
      }
    case getType(AuthActions.loginFailure):
    case getType(AuthActions.logoutSuccess):
      return {
        isAuthenticated: false,
        isAuthenticating: false
      }
    default:
      return state
  }
}
