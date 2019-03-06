import {
  SnackbarState,
  SnackbarActionType,
  SNACKBAR_ADD,
  SNACKBAR_REMOVE
} from './types'

const defaultState: SnackbarState = []

export function snackbarReducer(
  state: SnackbarState = defaultState,
  action: SnackbarActionType
): SnackbarState {
  switch (action.type) {
    case SNACKBAR_ADD:
      return [...state, action.payload]
    case SNACKBAR_REMOVE:
      return state.filter(snackbar => snackbar !== action.payload)
    default:
      return state
  }
}
