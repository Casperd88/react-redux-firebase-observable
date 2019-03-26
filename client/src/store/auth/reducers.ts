import { getType, ActionType } from "typesafe-actions";
import { AuthState } from "./types";
import * as AuthActions from "./actions";

const defaultState: AuthState = {
  initialized: false,
  token: null,
  loading: false
};

export function authReducer(
  state: AuthState = defaultState,
  action: ActionType<typeof AuthActions>
): AuthState {
  switch (action.type) {
    case getType(AuthActions.login.request):
    case getType(AuthActions.logout.request):
      return {
        ...state,
        loading: true
      };
    case getType(AuthActions.login.success):
      return {
        ...state,
        initialized: true,
        loading: false,
        token: action.payload
      };
    case getType(AuthActions.logout.success):
    case getType(AuthActions.logout.failure):
    case getType(AuthActions.login.failure):
      return {
        ...state,
        initialized: true,
        loading: false,
        token: null
      };
    default:
      return state;
  }
}
