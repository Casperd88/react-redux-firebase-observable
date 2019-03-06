export enum SnackbarType {
  Success = 'success',
  Warning = 'warning',
  Error = 'error'
}

export interface Snackbar {
  message: string
  type: SnackbarType
}

export type SnackbarState = Snackbar[]

export const SNACKBAR_ADD = '@snackbar/ADD'
export const SNACKBAR_REMOVE = '@snackbar/REMOVE'

export interface SnackbarAddAction {
  type: typeof SNACKBAR_ADD,
  payload: Snackbar
}

export interface SnackbarRemoveAction {
  type: typeof SNACKBAR_REMOVE,
  payload: Snackbar
}

export type SnackbarActionType =
  SnackbarAddAction |
  SnackbarRemoveAction
