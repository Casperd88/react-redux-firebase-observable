import { Epic } from 'redux-observable'
import { filter, mergeMap } from 'rxjs/operators'
import { Observable, Observer } from 'rxjs'
import { isActionOf } from 'typesafe-actions'
import firebase from 'firebase/app'
import 'firebase/auth'
import { login, logout } from '../actions'
import { initSystem } from '../../system/actions'

type ActionType =
  ReturnType<typeof login> |
  ReturnType<typeof logout>

const authChange$ = Observable.create((observer: Observer<ActionType>) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      observer.next(login({email: String(user.email)}))
    } else {
      observer.next(logout())
    }
  })
})

const authChangeEpic: Epic = (action$) => {
  return action$.pipe(
    filter(isActionOf(initSystem)),
    mergeMap(() => authChange$)
  )
}

export default authChangeEpic
