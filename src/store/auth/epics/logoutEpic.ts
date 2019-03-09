import firebase from 'firebase/app'
import 'firebase/auth'
import { Epic } from 'redux-observable'
import { mapTo, mergeMap, filter, throttleTime } from 'rxjs/operators'
import { from } from 'rxjs'
import { requestLogout, logoutRequested } from '../actions'
import { isActionOf } from 'typesafe-actions'

const signOut = () => firebase.auth().signOut()

const logoutEpic: Epic = action$ => {
  return action$.pipe(
    filter(isActionOf(requestLogout)),
    throttleTime(3000),
    mergeMap(
      () => from(signOut()).pipe(mapTo(logoutRequested()))
    )
  )
}

export default logoutEpic
