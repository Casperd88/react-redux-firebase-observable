import { Snackbar } from './types'
import * as SnackbarActions from './actions'
import { getType, ActionType } from 'typesafe-actions'

const defaultState: Snackbar[] = []

export function snackbarReducer(
  state: Snackbar[] = defaultState,
  action: ActionType<typeof SnackbarActions>
) {
  switch (action.type) {
    case getType(SnackbarActions.addSnackbar):
      return [...state, action.payload]
    case getType(SnackbarActions.removeSnackbar):
      return state.filter(snackbar => snackbar !== action.payload)
    default:
      return state
  }
}
