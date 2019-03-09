import { getType, ActionType } from 'typesafe-actions'
import { AuthState } from './types'
import * as AuthActions from './actions'

const defaultState: AuthState = {
  user: null,
  isInitialized: false,
  isAuthenticated: false,
  isAuthenticating: false
}

export function authReducer(
  state: AuthState = defaultState,
  action: ActionType<typeof AuthActions>
): AuthState {
  switch (action.type) {
    case getType(AuthActions.requestLogin):
    case getType(AuthActions.requestLogout):
      return {
        ...state,
        isAuthenticating: true
      }
    case getType(AuthActions.login):
      return {
        ...state,
        isInitialized: true,
        isAuthenticated: true,
        isAuthenticating: false,
        user: action.payload
      }
    case getType(AuthActions.logout):
    case getType(AuthActions.loginFailure):
      return {
        ...state,
        isInitialized: true,
        isAuthenticated: false,
        isAuthenticating: false

      }
    default:
      return state
  }
}
