import { createStandardAction } from 'typesafe-actions'
import { Snackbar } from './types'

export const addSnackbar = createStandardAction('@snackbad/ADD')<Snackbar>()
export const removeSnackbar = createStandardAction('@snackbad/REMOVE')<Snackbar>()
