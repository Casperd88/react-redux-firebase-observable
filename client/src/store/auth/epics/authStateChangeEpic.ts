import { Epic } from "redux-observable";
import {
  filter,
  catchError,
  mergeMap,
  concat,
  take,
  skip
} from "rxjs/operators";
import { Observable, Observer, of } from "rxjs";
import { isActionOf } from "typesafe-actions";
import firebase from "firebase/app";
import "firebase/auth";
import { login, logout } from "../actions";
import { initSystem } from "../../system/actions";

type ActionType =
  | ReturnType<typeof login.success>
  | ReturnType<typeof logout.success>;

const authChange$ = Observable.create((observer: Observer<ActionType>) => {
  firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      const token = await user.getIdToken();
      observer.next(login.success(token));
    } else {
      observer.next(logout.success());
    }
  });
});

const authChangeEpic: Epic = action$ => {
  return action$.pipe(
    filter(isActionOf(initSystem.request)),
    mergeMap(() => {
      return authChange$.pipe(
        take(1),
        concat(of(initSystem.success()), authChange$.pipe(skip(1)))
      );
    }),
    catchError(error => of(initSystem.failure(error)))
  );
};

export default authChangeEpic;
