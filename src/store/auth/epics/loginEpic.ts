import { Epic, StateObservable } from 'redux-observable'
import { mergeMap, catchError, concat, filter } from 'rxjs/operators'
import { of, from } from 'rxjs'
import firebase from 'firebase/app'
import 'firebase/auth'

import {
  loginRequest,
  loginAuthenticating,
  loginAuthenticationFailure,
  loginAuthenticationSuccess
} from '../actions'

import { isActionOf } from 'typesafe-actions'
import { RootState } from '../../types'

const loginEpic: Epic = (action$, state$: StateObservable<RootState>) => {
  return action$.pipe(
    filter(isActionOf(loginRequest)),
    filter(() => !state$.value.auth.isAuthenticating),
    mergeMap(
      action => {
        return of(loginAuthenticating()).pipe(
          concat(from(firebase.auth().signInWithEmailAndPassword(
            action.payload.email,
            action.payload.password
          )).pipe(
            mergeMap(response => {
              if (response.user) {
                return of(
                  loginAuthenticationSuccess({
                    email: String(response.user.email)
                  })
                )
              } else {
                return of(loginAuthenticationFailure())
              }
            }),
            catchError(() => of(loginAuthenticationFailure()))
          ))
        )
      }
    )
  )
}

export default loginEpic
