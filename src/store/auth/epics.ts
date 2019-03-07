import { Epic } from 'redux-observable'
import { mergeMap, catchError, take, filter } from 'rxjs/operators'
import { of, from } from 'rxjs'

import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  logoutSuccess,
  logoutFailure
} from './actions'

import { addSnackbar } from '../snackbar/actions'
import { SnackbarType } from '../snackbar/types'
import firebase from 'firebase'
import { isActionOf } from 'typesafe-actions'

export const authLogoutEpic: Epic = action$ => {
  return action$.pipe(
    filter(isActionOf(logout)),
    mergeMap(
      () => from(firebase.auth().signOut())
        .pipe(
          take(1),
          mergeMap(() => of(logoutSuccess())),
          catchError(error => of(
            logoutFailure(),
            addSnackbar({message: error.message, type: SnackbarType.Error})
          ))
        )
    )
  )
}

export const authEpic: Epic = action$ => {
  return action$.pipe(
    filter(isActionOf(login)),
    mergeMap(({payload: {email, password}}) => {
      return from(firebase.auth().signInWithEmailAndPassword(
        email,
        password
      )).pipe(
        mergeMap(response => {
          return response.user
            ? of(
              loginSuccess({email: String(response.user.email)}),
              addSnackbar({message: 'Login Success!', type: SnackbarType.Success})
            )
            : of(
              loginFailure()
            )
        }),
        catchError((error) => of(
          loginFailure(),
          addSnackbar({message: error.message, type: SnackbarType.Error})
        ))
      )
    })
  )
}
