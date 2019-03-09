import { getType, ActionType } from 'typesafe-actions'
import { AuthState } from './types'
import * as AuthActions from './actions'

const defaultState: AuthState = {
  isInitialized: false,
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
        ...state,
        isInitialized: true,
        isAuthenticated: true,
        isAuthenticating: false,
        user: action.payload
      }
    case getType(AuthActions.loginFailure):
    case getType(AuthActions.logout):
      return {
        ...state,
        isInitialized: true,
        isAuthenticated: false,
        isAuthenticating: false,

      }
    default:
      return state
  }
}
