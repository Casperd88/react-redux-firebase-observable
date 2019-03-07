import firebase from 'firebase/app'
import 'firebase/auth'
import { Epic } from 'redux-observable'
import { mergeMap, catchError, filter } from 'rxjs/operators'
import { of, from } from 'rxjs'
import { logout, logoutSuccess, logoutFailure} from '../actions'
import { addSnackbar } from '../../snackbar/actions'
import { SnackbarType } from '../../snackbar/types'
import { isActionOf } from 'typesafe-actions'

const logoutEpic: Epic = action$ => {
  return action$.pipe(
    filter(isActionOf(logout)),
    mergeMap(
      () => from(firebase.auth().signOut())
        .pipe(
          mergeMap(() => of(logoutSuccess())),
          catchError(error => of(
            logoutFailure(),
            addSnackbar({message: error.message, type: SnackbarType.Error})
          ))
        )
    )
  )
}

export default logoutEpic
