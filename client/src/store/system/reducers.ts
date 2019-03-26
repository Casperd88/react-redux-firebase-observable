import { getType, ActionType } from "typesafe-actions";
import { SystemState } from "./types";
import * as SystemActions from "./actions";

const { initSystem } = SystemActions;

const defaultState = {
  initialized: false
};

export const systemReducer = (
  state: SystemState = defaultState,
  action: ActionType<typeof SystemActions>
) => {
  switch (action.type) {
    case getType(initSystem.success):
      return { initialized: true };
    default:
      return state;
  }
};
