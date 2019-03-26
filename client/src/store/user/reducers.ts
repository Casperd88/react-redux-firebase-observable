import { UserState } from "./types";
import * as UserActions from "./actions";
import * as AuthActions from "../auth/actions";
import { getType, ActionType } from "typesafe-actions";

const defaultState: UserState = {
  currentUser: null
};

export function snackbarReducer(
  state = defaultState,
  action: ActionType<typeof UserActions & typeof AuthActions>
) {
  switch (action.type) {
    case getType(UserActions.getCurrentUser.success):
      return { ...state, currentUser: action.payload };
    case getType(AuthActions.logout.success):
      return { ...state, currentUser: null };
    default:
      return state;
  }
}
