import { PayloadAction } from '../types'

export const SNACKBAR_ADD = '@snackbar/ADD'
export const SNACKBAR_REMOVE = '@snackbar/REMOVE'

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

export type SnackbarAddAction = PayloadAction<typeof SNACKBAR_ADD, Snackbar>
export type SnackbarRemoveAction = PayloadAction<typeof SNACKBAR_REMOVE, Snackbar>

export type SnackbarActionType =
  SnackbarAddAction |
  SnackbarRemoveAction
