import { Epic, ofType } from 'redux-observable'
import { mergeMap, catchError, take } from 'rxjs/operators'
import { of, from } from 'rxjs'
import { AUTHENTICATE, AUTHENTICATE_LOGOUT } from './types'
import { authenticateSuccess, authenticateFailed, authenticateLogoutSuccess, authenticateLogoutFailed } from './actions'
import { snackbarAdd } from '../snackbar/actions'
import { SnackbarType } from '../snackbar/types'
import firebase from 'firebase'

export const authLogoutEpic: Epic = action$ => {
  return action$.pipe(
    ofType(AUTHENTICATE_LOGOUT),
    mergeMap(
      () => from(firebase.auth().signOut())
        .pipe(
          take(1),
          mergeMap(() => of(authenticateLogoutSuccess())),
          catchError(error => of(
            authenticateLogoutFailed(),
            snackbarAdd({message: error.message, type: SnackbarType.Error})
          ))
        )
    )
  )
}

export const authEpic: Epic = action$ => {
  return action$.pipe(
    ofType(AUTHENTICATE),
    mergeMap(({payload: {email, password}}) => {
      return from(firebase.auth().signInWithEmailAndPassword(
        email,
        password
      )).pipe(
        mergeMap(response => {
          return response.user
            ? of(
              authenticateSuccess({email: String(response.user.email)}),
              snackbarAdd({message: 'Login Success!', type: SnackbarType.Success})
            )
            : of(
              authenticateFailed()
            )
        }),
        catchError((error) => of(
          authenticateFailed(),
          snackbarAdd({message: error.message, type: SnackbarType.Error})
        ))
      )
    })
  )
}
