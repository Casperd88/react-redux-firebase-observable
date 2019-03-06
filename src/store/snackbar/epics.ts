import { Epic, ofType } from 'redux-observable'
import { map, delay } from 'rxjs/operators'
import { snackbarRemove } from './actions'
import { SNACKBAR_ADD } from './types'

export const snackbarEpic: Epic = action$ => {
  return action$.pipe(
    ofType(SNACKBAR_ADD),
    delay(3000),
    map((action) => snackbarRemove(action.payload))
  )
}
