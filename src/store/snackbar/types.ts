export enum SnackbarType {
  Success = 'success',
  Warning = 'warning',
  Error = 'error'
}

export interface Snackbar {
  message: string
  type: SnackbarType
}
