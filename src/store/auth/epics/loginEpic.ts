import firebase from 'firebase/app'
import 'firebase/auth'

import { Epic } from 'redux-observable'
import { mergeMap, catchError, filter } from 'rxjs/operators'
import { of, from } from 'rxjs'

import {
  login,
  loginSuccess,
  loginFailure
} from '../actions'

import { addSnackbar } from '../../snackbar/actions'
import { SnackbarType } from '../../snackbar/types'
import { isActionOf } from 'typesafe-actions'

const loginEpic: Epic = action$ => {
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

export default loginEpic
