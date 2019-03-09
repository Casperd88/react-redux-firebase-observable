import { Epic } from 'redux-observable'
import { mergeMap, filter, mapTo, catchError } from 'rxjs/operators'
import { of, from } from 'rxjs'
import { isActionOf } from 'typesafe-actions'
import firebase from 'firebase/app'
import 'firebase/auth'
import { requestLogin, loginRequested, loginFailure} from '../actions'

const signIn = (email: string, password: string) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

const loginEpic: Epic = (action$) => {
  return action$.pipe(
    filter(isActionOf(requestLogin)),
    mergeMap(
      ({payload: {email, password}}) => from(signIn(email, password)
    ).pipe(
      mapTo(loginRequested()),
      catchError(() => of(loginFailure()))
    ))
  )
}

export default loginEpic
