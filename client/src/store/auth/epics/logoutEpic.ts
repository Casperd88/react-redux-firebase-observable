import firebase from "firebase/app";
import "firebase/auth";
import { Epic } from "redux-observable";
import {
  catchError,
  mapTo,
  mergeMap,
  filter,
  throttleTime
} from "rxjs/operators";
import { of, from } from "rxjs";
import { logout } from "../actions";
import { isActionOf } from "typesafe-actions";

const logoutEpic: Epic = action$ => {
  return action$.pipe(
    filter(isActionOf(logout.request)),
    throttleTime(3000),
    mergeMap(() =>
      from(firebase.auth().signOut()).pipe(
        mapTo(logout.success()),
        catchError(error => of(logout.failure(error)))
      )
    )
  );
};

export default logoutEpic;
