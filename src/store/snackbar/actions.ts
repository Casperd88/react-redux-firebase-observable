import {
  Snackbar,
  SnackbarAddAction,
  SnackbarRemoveAction,
  SNACKBAR_ADD,
  SNACKBAR_REMOVE
} from './types'

export function snackbarAdd(snackbar: Snackbar): SnackbarAddAction {
  return {
    type: SNACKBAR_ADD,
    payload: snackbar
  }
}

export function snackbarRemove(snackbar: Snackbar): SnackbarRemoveAction {
  return {
    type: SNACKBAR_REMOVE,
    payload: snackbar
  }
}
